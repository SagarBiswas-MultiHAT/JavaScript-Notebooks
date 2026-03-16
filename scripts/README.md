# Scripts

Automation helpers for the `JavaScript-Notebooks` GitHub Pages repository.

## Files

- `seo_lint.sh`: validates `robots.txt`, `sitemap.xml`, `feed.xml`, canonical URLs, HTML metadata, and Markdown front matter for the published notebook site.
- `validate_repo.py`: checks repository structure, catalog data, README coverage, and CI expectations used by the validation workflow.

## Usage

```bash
bash ./scripts/seo_lint.sh
SEO_LINT_CHECK_HTTP=1 bash ./scripts/seo_lint.sh
python ./scripts/validate_repo.py
```

## Notes

- Running `seo_lint.sh` without an argument auto-detects the repo root from the script location.
- Default local mode skips live HTTP requests and validates local files only.
- Set `SEO_LINT_CHECK_HTTP=1` when you want live GitHub Pages checks for robots, sitemap, and feed URLs.
- Temporary editor scratch files, if present in this folder, are not part of the supported workflow.
