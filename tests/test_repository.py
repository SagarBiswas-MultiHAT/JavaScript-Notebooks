from __future__ import annotations

import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


class RepositoryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.catalog = json.loads((ROOT / "data" / "notebooks.json").read_text(encoding="utf-8"))
        cls.index_html = (ROOT / "index.html").read_text(encoding="utf-8")
        cls.readme = (ROOT / "README.md").read_text(encoding="utf-8")
        cls.workflow = (ROOT / ".github" / "workflows" / "python-ci.yml").read_text(encoding="utf-8")

    def test_catalog_has_expected_parts(self) -> None:
        parts = [notebook["part"] for notebook in self.catalog["notebooks"]]
        self.assertEqual(parts, [1, 2, 3, 4, 5, 6])

    def test_catalog_pdf_targets_exist(self) -> None:
        for notebook in self.catalog["notebooks"]:
            self.assertTrue((ROOT / notebook["file"]).exists(), notebook["file"])

    def test_homepage_has_key_sections(self) -> None:
        for section_id in ["curriculum", "library", "learning-path", "faq"]:
            self.assertIn(f'id="{section_id}"', self.index_html)

    def test_readme_links_every_pdf(self) -> None:
        for notebook in self.catalog["notebooks"]:
            self.assertIn(notebook["file"], self.readme)

    def test_workflow_covers_validation_and_tests(self) -> None:
        self.assertIn("scripts/validate_repo.py", self.workflow)
        self.assertIn("unittest discover", self.workflow)


if __name__ == "__main__":
    unittest.main()
