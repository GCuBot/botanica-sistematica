from pathlib import Path
import argparse
import shutil
import subprocess
import tempfile

import pdfplumber
from PIL import ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "source-pdfs" / "cabrera-1978-segunda-edicion.pdf"
TESSDATA_PATH = ROOT / ".local-tools" / "tessdata"
OUTPUT_DIR = ROOT / "manual-text" / "second-edition" / "ocr-pages"


def find_tesseract() -> Path:
    command = shutil.which("tesseract")
    candidates = [
        Path(command) if command else None,
        Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe"),
    ]
    for candidate in candidates:
        if candidate and candidate.exists():
            return candidate
    raise FileNotFoundError("No se encontro Tesseract OCR.")


def run_ocr(
    first_page: int | None,
    last_page: int | None,
    resolution: int,
    page_segmentation_mode: int,
) -> None:
    if not PDF_PATH.exists():
        raise FileNotFoundError(f"No se encontro el PDF: {PDF_PATH}")
    if not (TESSDATA_PATH / "spa.traineddata").exists():
        raise FileNotFoundError("Falta el modelo de idioma spa.traineddata.")

    tesseract = find_tesseract()
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with pdfplumber.open(PDF_PATH) as pdf:
        start = first_page or 1
        end = last_page or len(pdf.pages)
        if start < 1 or end > len(pdf.pages) or start > end:
            raise ValueError(f"Rango invalido: {start}-{end}. El PDF tiene {len(pdf.pages)} paginas.")

        with tempfile.TemporaryDirectory(prefix="botanica-ocr-") as temp_dir:
            temporary_path = Path(temp_dir)
            for pdf_page in range(start, end + 1):
                page = pdf.pages[pdf_page - 1]
                midpoint = page.width / 2
                sides = (
                    ("left", page.crop((0, 0, midpoint, page.height))),
                    ("right", page.crop((midpoint, 0, page.width, page.height))),
                )

                for side, half_page in sides:
                    image = half_page.to_image(
                        resolution=resolution,
                        antialias=True,
                    ).original.convert("L")
                    image = ImageOps.autocontrast(image, cutoff=1).filter(ImageFilter.SHARPEN)
                    image_path = temporary_path / f"spread-{pdf_page:03d}-{side}.png"
                    image.save(image_path, optimize=True)

                    result = subprocess.run(
                        [
                            str(tesseract),
                            str(image_path),
                            "stdout",
                            "-l",
                            "spa",
                            "--tessdata-dir",
                            str(TESSDATA_PATH),
                            "--psm",
                            str(page_segmentation_mode),
                        ],
                        check=True,
                        capture_output=True,
                        text=True,
                        encoding="utf-8",
                    )
                    header = f"PDF_PAGE={pdf_page} SIDE={side} OCR=tesseract-spa\n\n"
                    output_path = OUTPUT_DIR / f"spread-{pdf_page:03d}-{side}.txt"
                    output_path.write_text(header + result.stdout.strip() + "\n", encoding="utf-8")
                print(f"OCR pagina PDF {pdf_page}/{end}")

    print(f"OCR guardado en {OUTPUT_DIR}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Rehace el OCR de la segunda edicion por media pagina.")
    parser.add_argument("--start", type=int, help="Primera pagina digital del PDF.")
    parser.add_argument("--end", type=int, help="Ultima pagina digital del PDF.")
    parser.add_argument("--resolution", type=int, default=300, help="Resolucion temporal para OCR.")
    parser.add_argument("--psm", type=int, default=3, help="Modo de segmentacion de Tesseract.")
    args = parser.parse_args()
    run_ocr(args.start, args.end, args.resolution, args.psm)


if __name__ == "__main__":
    main()
