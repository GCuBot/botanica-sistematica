from pathlib import Path
import argparse

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
MANUALS = {
    "first": {
        "pdf": ROOT / "public" / "pdfcoffee.com_manual-de-la-flora-de-los-alrededores-de-buenos-aires-9-pdf-free.pdf",
        "output": ROOT / "manual-text" / "first-edition",
        "layout": "single",
    },
    "second": {
        "pdf": ROOT / "source-pdfs" / "cabrera-1978-segunda-edicion.pdf",
        "output": ROOT / "manual-text" / "second-edition",
        "layout": "spread",
    },
}

# In this scan, printed manual page 1 starts on PDF page 8.
PRINTED_PAGE_OFFSET = 7


def printed_page(pdf_page: int) -> int | None:
    page = pdf_page - PRINTED_PAGE_OFFSET
    return page if page >= 1 else None


def page_header(pdf_page: int) -> str:
    manual_page = printed_page(pdf_page)
    if manual_page is None:
        return f"PDF_PAGE={pdf_page} MANUAL_PAGE=front-matter"
    return f"PDF_PAGE={pdf_page} MANUAL_PAGE={manual_page}"


def extract_single_pages(
    pdf: pdfplumber.PDF,
    first_page: int,
    last_page: int,
    output_dir: Path,
) -> list[str]:
    chunks: list[str] = []
    for pdf_page in range(first_page, last_page + 1):
        page = pdf.pages[pdf_page - 1]
        text = page.extract_text() or ""
        header = page_header(pdf_page)
        content = f"{header}\n\n{text.strip()}\n"
        page_path = output_dir / f"pdf-{pdf_page:03d}_manual-{printed_page(pdf_page) or 'front'}.txt"
        page_path.write_text(content, encoding="utf-8")
        chunks.append(content)
    return chunks


def extract_spreads(
    pdf: pdfplumber.PDF,
    first_page: int,
    last_page: int,
    output_dir: Path,
) -> list[str]:
    chunks: list[str] = []
    for pdf_page in range(first_page, last_page + 1):
        page = pdf.pages[pdf_page - 1]
        midpoint = page.width / 2
        sides = (
            ("left", page.crop((0, 0, midpoint, page.height))),
            ("right", page.crop((midpoint, 0, page.width, page.height))),
        )

        for side, half_page in sides:
            text = half_page.extract_text() or ""
            header = f"PDF_PAGE={pdf_page} SIDE={side}"
            content = f"{header}\n\n{text.strip()}\n"
            page_path = output_dir / f"spread-{pdf_page:03d}-{side}.txt"
            page_path.write_text(content, encoding="utf-8")
            chunks.append(content)
    return chunks


def extract_pages(
    edition: str,
    start: int | None,
    end: int | None,
    write_combined: bool,
) -> None:
    config = MANUALS[edition]
    pdf_path = config["pdf"]
    output_dir = config["output"] / "pages"
    combined_path = config["output"] / "manual-completo.txt"

    if not pdf_path.exists():
        raise FileNotFoundError(f"No se encontro el PDF: {pdf_path}")

    output_dir.mkdir(parents=True, exist_ok=True)

    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)
        first_page = start or 1
        last_page = end or total_pages

        if first_page < 1 or last_page > total_pages or first_page > last_page:
            raise ValueError(f"Rango invalido: {first_page}-{last_page}. El PDF tiene {total_pages} paginas.")

        if config["layout"] == "spread":
            combined_chunks = extract_spreads(pdf, first_page, last_page, output_dir)
        else:
            combined_chunks = extract_single_pages(pdf, first_page, last_page, output_dir)

    if write_combined:
        combined_path.parent.mkdir(parents=True, exist_ok=True)
        combined_path.write_text("\n\n".join(combined_chunks), encoding="utf-8")

    print(f"Extraida edicion {edition}, paginas PDF {first_page}-{last_page}, en {output_dir}")
    if write_combined:
        print(f"Archivo combinado: {combined_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extrae el manual PDF a texto por pagina.")
    parser.add_argument(
        "--edition",
        choices=MANUALS.keys(),
        default="first",
        help="Edicion del manual a extraer.",
    )
    parser.add_argument("--start", type=int, help="Primera pagina PDF a extraer.")
    parser.add_argument("--end", type=int, help="Ultima pagina PDF a extraer.")
    parser.add_argument(
        "--combined",
        action="store_true",
        help="Tambien genera manual-text/manual-completo.txt con el rango extraido.",
    )
    args = parser.parse_args()

    extract_pages(args.edition, args.start, args.end, args.combined)


if __name__ == "__main__":
    main()
