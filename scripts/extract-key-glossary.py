from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DEFAULT_TRANSCRIPT = Path.home() / "Downloads" / "Manual_Flora_Buenos_Aires_Transcrito.md"
REVIEW_PATH = ROOT / "src" / "data" / "keyGlossary.review.json"
OUTPUT_PATH = ROOT / "src" / "data" / "keyGlossary.ts"
SOURCE = "Manual de la flora de los alrededores de Buenos Aires, 2.ª ed., glosario"


# The transcript skips two columns after Cima. This block comes from spread 377
# of the same second-edition PDF and was checked against the page image.
SUPPLEMENT = """
Cimoso: concerniente a la cima.
Cincinio: cima escorpioide con las flores dispuestas sobre dos planos de simetría que se cortan en un ángulo de 90°.
Cipsela: fruto semejante a un aquenio del que difiere por provenir de un ovario ínfero, como en las Compuestas.
Circinado: hoja que en la prefoliación está arrollada desde el ápice a la base como la cola del escorpión, como se ve en los helechos.
Cistolito: concreción de carbonato de calcio que se forma en el interior de ciertas células, principalmente epidérmicas.
Citrino: amarillo limón.
Cladodio: rama comprimida, de color verde, que realiza fotosíntesis, generalmente acompañada por hojas rudimentarias.
Claviforme: en forma de maza o clava.
Cleistógama: flores de ciertas plantas que no llegan a abrirse, realizándose la autofecundación en su interior.
Clinandrio: cavidad en el ginostemio de las Orquídeas en la cual se aloja la antera.
Clusa: fruto indehiscente originado por la división longitudinal de un ovario gamocarpelar en dos o más partes.
Coleóptilo: vaina cerrada del embrión de las Gramíneas y otras monocotiledóneas que representa la primera hoja de la plántula.
Comprimido: aplastado lateralmente.
Conceptáculo: cavidad en la cual se desarrollan órganos de reproducción.
Concrescente: que crecen adheridos.
Conduplicado: hoja que en la prefoliación está plegada a lo largo de su nervio medio.
Conectivo: tejido que une las dos tecas de la antera.
Connato: se dice de los órganos que se desarrollan soldados entre sí.
Contorto: dispuesto en espiral. Se dice de las flores que en la prefloración tienen los pétalos dispuestos de tal manera que cada uno cubre con su borde al de un lado y es cubierto por el del otro lado.
Contraído: estrechado bruscamente.
Convoluto: arrollado longitudinalmente. Se aplica en la prefoliación.
Cordado, cordiforme: en forma de corazón, es decir, ovado, con el ápice muy agudo y una escotadura en la base.
Coriáceo: de la consistencia del cuero.
Corimbo: inflorescencia racimosa, centrípeta, con flores largamente pediceladas, todas las cuales llegan aproximadamente al mismo nivel.
Córneo: de consistencia dura como de cuerno.
Corolino: perteneciente a la corola o bien con aspecto de corola.
Corona: ciclo de piezas florales situado entre la corola y el androceo que, frecuentemente, simula ser una corola. También, parte apical del antecio fructífero de ciertas Gramíneas.
Costado, costato: recorrido por costillas sobresalientes.
Craso: grueso, jugoso y carnoso.
Crateriforme: en forma de vaso cónico.
Crenado: con margen festoneado de incisiones obtusas y poco profundas.
Crenulado: como crenado, pero con festones más pequeños.
Crustáceo: de textura dura y rugosa.
Cuculado: en forma de capuchón.
Cuneado, cuneiforme: en forma de cuña.
Cupuliforme, cupulimorfo: en forma de copita.
Cuspidado: acabado en punta o cúspide.
Deca-: prefijo que indica el número 10.
Declinado: curvado hacia la base o hacia afuera.
Decumbente: se dice de los tallos tendidos, pero con el ápice erguido.
Decurrente: se dice de las hojas o brácteas cuya base se prolonga hacia abajo a lo largo de los tallos.
Decusado: se aplica a los órganos opuestos, dispuestos en cruz con respecto al par anterior.
Definido: se dice del androceo con menos de 11 estambres.
Dehiscente: se aplica a las anteras, frutos, etc., que se abren espontáneamente para dejar salir su contenido.
Deltoide: triangular.
Dentado: provisto de dientes en el margen.
Denticulado: provisto de dientes pequeños en el margen.
Desnudo: órgano que carece de piezas de protección, como las flores que carecen de perianto.
Diadelfo: se dice de los estambres cuando están reunidos en dos grupos.
Diafragma: tabique divisorio de un espacio hueco.
Dialicarpelar: gineceo con carpelos separados y no reunidos en un solo ovario.
Dialipétala: corola cuyos pétalos son libres entre sí.
Dicasio: inflorescencia cimosa en la cual, por debajo del eje principal que termina en flor, se desarrollan dos ramificaciones que a su vez pueden dividirse en dos y así sucesivamente.
Diclamídeo: se dice de la flor que posee cáliz y corola.
Diclino: planta con flores unisexuales. Flores unisexuales.
Dicotómico: órgano que se divide o bifurca en dos; sus bifurcaciones nuevamente se dividen en dos y así sucesivamente.
Dídimo: formado por dos piezas iguales.
Didínamo: se aplica al androceo formado por dos estambres cortos y dos más largos.
Digitado: se aplica a las hojas que presentan sus lóbulos como los dedos de una mano abierta.
Dímero: verticilo formado por dos piezas.
Dimorfo: se dice de órganos que presentan dos formas diferentes dentro del mismo individuo o de la misma especie, como las hojas de ciertas plantas, las flores, etc.
Dioico: se dice de las plantas que tienen flores masculinas en algunos individuos y flores femeninas en otros.
Diplostémono: flor con estambres en número doble al de los pétalos.
Disco: centro o base circular de un órgano que soporta órganos anexos. Se denomina disco, en las Compuestas, al conjunto de flores centrales.
Discoide: se aplica, entre otros, a los capítulos de Compuestas sin flores marginales o bien con flores marginales no liguladas.
Discolor: se dice de las hojas que presentan color diferente en sus dos caras.
Disecto: cortado o dividido en segmentos estrechos.
Diseminación: dispersión de las semillas.
Dístico: se dice de las flores, de las hojas, etc., cuando están dispuestas en dos hileras, a uno y otro lado del tallo o del raquis de la inflorescencia y sobre un mismo plano.
Diteca: antera formada por dos tecas.
Divaricado: dícese de las ramas muy abiertas.
Dorsal: que nace o se inserta en el dorso.
Dorsifija: antera cuyo filamento se inserta sobre el medio de la cara dorsal.
Dorsiventral: se dice de un órgano que presenta una cara dorsal y una cara ventral, como los protalos de las Pteridófitas, el talo de Lemna, etc.
Drepanio: inflorescencia cimosa con ejes secundarios solitarios debajo de cada eje central, dirigidos hacia un mismo lado.
Drupa: fruto uniseminado indehiscente, con endocarpo leñoso (carozo) y mesocarpo carnoso.
Drupáceo: con aspecto de drupa.
Ebracteado: desprovisto de brácteas.
Elaterio: banda o apéndice en forma de cinta de los esporos del género Equisetum que sirven para la diseminación de los mismos al expandirse con la humedad del aire.
Elipsoide: cuerpo cuyo corte longitudinal es una elipse.
Elíptico: en forma de elipse.
Emarginado: presentando una escotadura poco profunda.
Endocarpo: parte interna de la pared del fruto.
Endosperma: tejido nutritivo de la semilla.
Endosporado: con esporos formados dentro de la célula madre.
Ensiforme: en forma de sable o espada.
Entero: se dice del borde íntegro, sin dientes ni lóbulos.
"""


TERM_FIXES = {
    "Acana'ado": "Acanalado", "Amplexicaw'e": "Amplexicaule", "Apice": "Ápice",
    "Aptero": "Áptero", "Bifido": "Bífido", "Espinyuloso": "Espinuloso",
    "Estipite": "Estípite", "Estipula": "Estípula", "Gamofilo": "Gamófilo",
    "Ginopódio": "Ginopodio", "Hispidulo": "Hispídulo", "Infero": "Ínfero",
    "Inf.exo": "Inflexo", "Oseo": "Óseo", "Pinná": "Pinna",
    "Pinnatifido": "Pinnatífido", "Pinnulas": "Pínnulas",
    "Obacoronado": "Obacorazonado",
    "Polifoliculo": "Polifolículo", "Paraclinervado": "Paralelinervado",
    "Radicula": "Radícula", "Scudo-": "Seudo-",
    "Subacaulé": "Subacaule", "Sumiinfero": "Semiínfero", "Tetradas": "Tétradas",
    "Umbelas": "Umbela", "Utriculo": "Utrículo",
}

TEXT_FIXES = {
    "estan do": "estando",
    "2carpelar": "2-carpelar",
    "cactu y la raquilla": "cactus y la raquilla", "hojas v que lleva": "hojas y que lleva",
    "flor v ejes laterales": "flor y ejes laterales", "lemma v la pálea": "lemma y la pálea",
    "estilo v estigma": "estilo y estigma", "espariguilla": "espiguilla",
    "fololos": "folíolos", "Gramí neas": "Gramíneas",
    "papilionoidese": "papilionoideas", "po'en": "polen",
    "unseminado": "uniseminado", "vieazas florales": "piezas florales",
}


def normalized(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def clean(value: str) -> str:
    value = value.replace("$\\infty$", "∞")
    value = re.sub(r"\s+", " ", value).strip()
    for old, new in TEXT_FIXES.items():
        value = value.replace(old, new)
    return value


def source_page(term: str) -> int:
    thresholds = [
        ("antesis", 712), ("bacciforme", 713), ("cimoso", 714), ("deltoide", 715),
        ("entomofilo", 716), ("estriado", 717), ("glaberrimo", 718),
        ("induplicado", 719), ("macollo", 720), ("opuesto", 721),
        ("perisporio", 722), ("quilla", 723), ("setula", 724), ("unisexual", 725),
    ]
    key, page = normalized(term), 711
    for boundary, next_page in thresholds:
        if key >= boundary:
            page = next_page
    return page


def parse_entries(text: str) -> list[dict[str, object]]:
    entries: list[dict[str, object]] = []
    current: dict[str, object] | None = None
    pending = ""
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line or line.startswith("<!--") or "FLORA DE BUENOS AIRES" in line or re.fullmatch(r"GLOSARIO(?: \d+)?", line):
            continue
        if pending:
            line, pending = pending + line, ""
        if line.endswith("-"):
            pending = line[:-1]
            continue
        match = re.match(r"^([^:]{1,64}):\s*(.*)$", line)
        if match:
            if current:
                current["definition"] = clean(str(current["definition"]))
                entries.append(current)
            raw_term, definition = match.groups()
            term = TERM_FIXES.get(raw_term.strip(), raw_term.strip())
            current = {"term": term, "definition": definition, "source": SOURCE, "sourcePage": source_page(term)}
        elif current:
            current["definition"] = f"{current['definition']} {line}"
    if current:
        current["definition"] = clean(str(current["definition"]))
        entries.append(current)
    return entries


def extract_entries(transcript: Path) -> list[dict[str, object]]:
    text = transcript.read_text(encoding="utf-8")
    start = text.index("\nGLOSARIO\n") + len("\nGLOSARIO\n")
    end = re.search(r"\nÍNDICE DE LOS NOMBRES CIENT[IÍ]FICOS", text[start:])
    if not end:
        raise ValueError("No se encontró el final del glosario.")
    glossary = text[start : start + end.start()]
    glossary = re.sub(
        r"Cima:.*?(?=Entomófilo:)",
        "Cima: inflorescencia centrífuga en la cual el eje principal termina en una flor, dando ejes secundarios que también terminan en una flor y a su vez dan ejes terciarios, etc.\n" + SUPPLEMENT.strip() + "\n",
        glossary,
        flags=re.DOTALL,
    )
    entries = parse_entries(glossary)
    for entry in entries:
        if entry["term"] == "Esporofito" and str(entry["definition"]).startswith("hoja muy modificada"):
            entry["term"] = "Esporofilo"
        if entry["term"] in {"Ascendente", "Bipinnado"} and str(entry["definition"])[-1] != ".":
            entry["definition"] = f"{entry['definition']}."
    deduped = {normalized(str(entry["term"])): entry for entry in entries if entry["definition"]}
    return sorted(deduped.values(), key=lambda entry: normalized(str(entry["term"])))


def flags(entry: dict[str, object]) -> list[str]:
    value = f"{entry['term']} {entry['definition']}"
    result = []
    if len(str(entry["definition"])) < 5:
        result.append("short_definition")
    if re.search(r"[�Â]|\w\.\w", value):
        result.append("ocr_artifact")
    if str(entry["definition"])[-1] not in ".!?":
        result.append("missing_final_punctuation")
    return result


def write_outputs(entries: list[dict[str, object]]) -> None:
    review = [{**entry, "flags": flags(entry)} for entry in entries]
    REVIEW_PATH.write_text(json.dumps(review, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    lines = [
        "export type KeyGlossaryEntry = {", "  term: string;", "  definition: string;",
        "  source: string;", "  sourcePage?: number;", "};", "",
        "export const keyGlossary: KeyGlossaryEntry[] = [",
    ]
    lines.extend(f"  {json.dumps(entry, ensure_ascii=False)}," for entry in entries)
    lines.extend(["];", ""])
    OUTPUT_PATH.write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract the second-edition glossary transcript.")
    parser.add_argument("--transcript", type=Path, default=DEFAULT_TRANSCRIPT)
    args = parser.parse_args()
    if not args.transcript.exists():
        raise FileNotFoundError(f"Transcript not found: {args.transcript}")
    entries = extract_entries(args.transcript)
    write_outputs(entries)
    print(f"Extracted {len(entries)} entries; {sum(bool(flags(entry)) for entry in entries)} need review.")


if __name__ == "__main__":
    main()
