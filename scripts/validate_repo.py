from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = ROOT / "data" / "notebooks.json"
README_PATH = ROOT / "README.md"
INDEX_PATH = ROOT / "index.html"
WORKFLOW_PATH = ROOT / ".github" / "workflows" / "python-ci.yml"
REQUIRED_FILES = [
    ROOT / "index.html",
    ROOT / "styles.css",
    ROOT / "script.js",
    ROOT / "404.html",
    ROOT / "site.webmanifest",
    ROOT / ".nojekyll",
    ROOT / "assets" / "favicon.svg",
    CATALOG_PATH,
    README_PATH,
    WORKFLOW_PATH,
]


def require(condition: bool, message: str) -> None:
    if not condition:
        raise SystemExit(message)


for file_path in REQUIRED_FILES:
    require(file_path.exists(), f"Missing required file: {file_path.relative_to(ROOT)}")

catalog = json.loads(CATALOG_PATH.read_text(encoding="utf-8"))
readme = README_PATH.read_text(encoding="utf-8")
index_html = INDEX_PATH.read_text(encoding="utf-8")
workflow = WORKFLOW_PATH.read_text(encoding="utf-8")

notebooks = catalog.get("notebooks", [])
require(len(notebooks) >= 6, "Catalog must contain at least 6 notebooks.")
require(catalog.get("stats", {}).get("notebooks") == len(notebooks), "Notebook count stat is incorrect.")
require(catalog.get("stats", {}).get("pages") == sum(item["pages"] for item in notebooks), "Page count stat is incorrect.")

all_sections = sum(len(item.get("sections", [])) for item in notebooks)
require(catalog.get("stats", {}).get("sections") == all_sections, "Section count stat is incorrect.")

for notebook in notebooks:
    file_name = notebook["file"]
    pdf_path = ROOT / file_name
    require(pdf_path.exists(), f"Referenced PDF is missing: {file_name}")
    encoded_file_name = file_name.replace(" ", "%20")
    has_title = notebook["title"] in readme
    has_file_reference = file_name in readme or encoded_file_name in readme
    require(has_title or has_file_reference, f"README is missing notebook reference: {notebook['title']}")
    require(notebook["title"] in index_html or notebook["summary"] in index_html or "notebooks.json" in index_html, "Site must expose catalog content.")

for required_phrase in [
    "GitHub Pages",
    "Curriculum overview",
    "Notebook library",
    "Learning Path",
]:
    require(required_phrase in readme or required_phrase in index_html, f"Missing expected content phrase: {required_phrase}")

require("python scripts/validate_repo.py" in workflow, "Workflow must run repository validation.")
require("python -m unittest discover -s tests -v" in workflow, "Workflow must run tests.")
require(bool(re.search(r"<meta\s+name=\"description\"", index_html)), "Homepage needs a meta description.")
require("application/ld+json" in index_html, "Homepage needs structured data.")
require("filter-button" in (ROOT / "styles.css").read_text(encoding="utf-8"), "Styles must include filter button UI.")

print("Repository validation passed.")
