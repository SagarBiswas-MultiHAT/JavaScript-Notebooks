# JavaScript Notebooks

<div align="right">

[![CI](https://github.com/SagarBiswas-MultiHAT/JavaScript-Notebooks/actions/workflows/python-ci.yml/badge.svg)](https://github.com/SagarBiswas-MultiHAT/JavaScript-Notebooks/actions) 
&nbsp;
[![Pages](https://img.shields.io/github/deployments/SagarBiswas-MultiHAT/JavaScript-Notebooks/github-pages?label=pages&logo=github)](https://SagarBiswas-MultiHAT.github.io/JavaScript-Notebooks/) 
&nbsp;
[![Release](https://img.shields.io/github/v/release/SagarBiswas-MultiHAT/JavaScript-Notebooks)](https://github.com/SagarBiswas-MultiHAT/JavaScript-Notebooks/releases) 
&nbsp;
[![License](https://img.shields.io/github/license/SagarBiswas-MultiHAT/JavaScript-Notebooks)](https://github.com/SagarBiswas-MultiHAT/JavaScript-Notebooks/blob/main/LICENSE) 
&nbsp;
[![Notebooks](https://img.shields.io/badge/notebooks-6-brightgreen)](data/notebooks.json)

</div>

This repository is a structured JavaScript learning library by Sagar Biswas. It started as a collection of PDF notebooks, and it now includes a professional GitHub Pages-ready website, a searchable catalog, and an automated quality gate.

If someone opens this repository for the first time, the goal is simple: they should immediately understand what is here, what each notebook teaches, where to start, and how to move through the material without guessing.

## What this repository contains

- 6 JavaScript notebook PDFs
- 128 total pages of study material
- 101 mapped sections across fundamentals, browser APIs, and modern ES6+
- A polished static website for GitHub Pages
- A GitHub Actions workflow that validates the repository and runs tests

## Quick navigation

- Website landing page: [index.html](index.html)
- GitHub Actions workflow: [.github/workflows/python-ci.yml](.github/workflows/python-ci.yml)
- Structured notebook catalog: [data/notebooks.json](data/notebooks.json)
- Repository validation script: [scripts/validate_repo.py](scripts/validate_repo.py)
- Repository tests: [tests/test_repository.py](tests/test_repository.py)

## Who this repository is for

This collection is especially useful for:

- complete beginners who want a guided JavaScript path
- students preparing for practical web development work
- self-learners who prefer note-driven study with examples
- early-intermediate learners who want a stronger grip on DOM, BOM, browser storage, and ES6+

## Curriculum overview

The notebooks follow a natural progression. You begin with the language itself, move into browser-side APIs, and then level up with maintainability practices and modern JavaScript features.

| Part | Notebook | Pages | Main focus | File |
| --- | --- | ---: | --- | --- |
| 1 | JavaScript Basics | 29 | Core language foundations, syntax, variables, functions, operators, arrays, objects | [JS_Part-1_Basics.pdf](<JS_Part-1_Basics.pdf>) |
| 2 | Web Storage API | 6 | localStorage, sessionStorage, cookies, browser persistence | [JS_Part-2_ JavaScript Web Storage API.pdf](<JS_Part-2_ JavaScript Web Storage API.pdf>) |
| 3 | Document Object Model (DOM) | 33 | Selecting elements, events, traversal, form handling, media, keyboard and mouse events | [JS_Part-3_Document Object Model (DOM).pdf](<JS_Part-3_Document Object Model (DOM).pdf>) |
| 4 | Browser Object Model (BOM) | 8 | location object, popup boxes, timers, digital clock | [JS_Part-4_Browser Object Model (BOM).pdf](<JS_Part-4_Browser Object Model (BOM).pdf>) |
| 5 | Best Practices, Error Handling, and Canvas | 9 | cleaner code, defensive syntax, error handling, canvas basics | [JS_Part-5_Best Practices, Error_Handling_and_Canvas Mastery.pdf](<JS_Part-5_Best Practices, Error_Handling_and_Canvas Mastery.pdf>) |
| 6 | Modern ES6+ Essentials and Deep Dive | 43 | let/const, strict mode, rest/spread, modules, classes, async concepts, exercises | [JS_Part-6_Modern ES6+ Essentials & Deep Dive.pdf](<JS_Part-6_Modern ES6+ Essentials & Deep Dive.pdf>) |

## Detailed notebook breakdown

### Part 1 — JavaScript Basics

File: [JS_Part-1_Basics.pdf](<JS_Part-1_Basics.pdf>)

This notebook lays the foundation. It does more than define JavaScript; it shows how to run it, how to connect it to HTML, and how to think with it.

Topics covered:

- What JavaScript is
- Features of JavaScript
- Using the browser as an IDE
- Node.js installation
- Showing output in JavaScript
- Adding JavaScript to an HTML file
- Keywords, data types, and comments
- Variable declarations and naming rules
- Variable practice challenge
- Number methods
- String manipulation
- Functions
- Arithmetic and assignment operators
- Calculator task
- Area calculation task
- Temperature conversion task
- Relational and logical operators
- Control statements
- Loop control statements
- Odd and even counting task
- Ternary operator
- Arrays
- Objects
- Constructors
- Math object
- Date object

What a reader gets from it:

- a reliable beginner foundation
- enough syntax confidence to write small programs
- a practical introduction to problem-solving with JavaScript

### Part 2 — Web Storage API

File: [JS_Part-2_ JavaScript Web Storage API.pdf](<JS_Part-2_ JavaScript Web Storage API.pdf>)

This notebook is short, but it is very useful. It explains how browser storage works and helps the reader understand when to choose localStorage, sessionStorage, or cookies.

Topics covered:

- Web Storage API overview
- localStorage persistence, storage limits, and use cases
- sessionStorage persistence, storage limits, and use cases
- Cookies, their limits, and where they fit
- Storage methods such as setItem, getItem, removeItem, and clear
- JSON.stringify and JSON.parse for arrays and objects
- practical real-world usage patterns
- comparison of storage options and security considerations

What a reader gets from it:

- a clear mental model of client-side persistence
- better judgment about what should and should not be stored in the browser
- practical knowledge for forms, preferences, temporary state, and session data

### Part 3 — Document Object Model (DOM)

File: [JS_Part-3_Document Object Model (DOM).pdf](<JS_Part-3_Document Object Model (DOM).pdf>)

This is one of the most hands-on notebooks in the collection. It focuses on how JavaScript actually changes what the user sees and does in the browser.

Topics covered:

- selecting HTML elements
- getElementById, getElementsByTagName, and getElementsByClassName
- querySelector and querySelectorAll
- onclick event handlers
- finding, creating, adding, and removing elements
- DOM methods and properties
- DOM traversal
- image slider implementation
- changing CSS styles dynamically
- event listeners
- event listeners with multiple elements
- playing audio with event listeners
- adding and removing animations
- keypress listener
- change event and event object
- submit event and form handling
- media events
- scroll, resize, and toggle events
- mouse events
- keyboard events
- focus events
- clipboard events
- drag events

What a reader gets from it:

- the ability to build interactive UI behavior without a framework
- a broad event-handling toolkit
- a practical bridge between HTML, CSS, and JavaScript

### Part 4 — Browser Object Model (BOM)

File: [JS_Part-4_Browser Object Model (BOM).pdf](<JS_Part-4_Browser Object Model (BOM).pdf>)

This notebook explains how JavaScript works with the browser environment itself, not just the document.

Topics covered:

- location object
- location properties
- assign, reload, and replace
- popup boxes
- alert, confirm, and prompt
- timing events
- setTimeout and clearTimeout
- setInterval and clearInterval
- digital clock implementation

What a reader gets from it:

- a stronger understanding of navigation, timing, and browser-level interaction
- clear examples of APIs that appear in many everyday front-end tasks

### Part 5 — Best Practices, Error Handling, and Canvas

File: [JS_Part-5_Best Practices, Error_Handling_and_Canvas Mastery.pdf](<JS_Part-5_Best Practices, Error_Handling_and_Canvas Mastery.pdf>)

This notebook is where the collection becomes more professional. It is not just about making code work; it is about making code cleaner, safer, and easier to maintain.

Topics covered:

- naming conventions
- variable declaration guidance
- object and array practices
- strict equality
- switch statement defaults
- DOM manipulation tips
- function guidance
- code organization
- performance tips
- optional chaining
- nullish coalescing
- try, catch, finally, and throw
- custom error handling
- canvas drawing basics
- practical pro tips

What a reader gets from it:

- better code habits
- fewer avoidable runtime mistakes
- an introduction to graphics work in the browser

### Part 6 — Modern ES6+ Essentials and Deep Dive

File: [JS_Part-6_Modern ES6+ Essentials & Deep Dive.pdf](<JS_Part-6_Modern ES6+ Essentials & Deep Dive.pdf>)

This is the most advanced notebook in the repository. It covers the modern JavaScript features that readers will see in real applications and modern codebases.

Topics covered:

- ES6 variables, loops, and functions
- let, const, and var comparison
- arrow functions
- template literals
- enhanced object literals
- hoisting
- strict mode
- default parameters
- rest parameters
- spread operator
- for...of, for...in, and forEach
- map, filter, and reduce
- destructuring arrays and objects
- find and findIndex
- startsWith, endsWith, and includes
- ES6 modules export and import
- ES6 classes
- synchronous vs asynchronous programming
- beginner-friendly exercises

What a reader gets from it:

- a modern JavaScript mindset
- better readiness for framework-based work
- the tools needed to write cleaner, shorter, more expressive code

## Best order to study the notebooks

If you want the smoothest path, use this sequence:

1. Start with Part 1 to build the language foundation.
2. Move to Part 3 to understand how JavaScript manipulates web pages.
3. Read Part 4 to understand browser-level APIs.
4. Read Part 2 so browser storage concepts land in context.
5. Study Part 5 to improve coding habits and error handling.
6. Finish with Part 6 for modern ES6+ fluency.

If you already know the basics, Part 3 and Part 6 are the strongest places to jump in.

## GitHub Pages website

The repository now includes a professional static website so the notebooks can be presented as a proper portfolio instead of a plain file list.

Main website files:

- [index.html](index.html)
- [styles.css](styles.css)
- [script.js](script.js)
- [404.html](404.html)
- [assets/favicon.svg](assets/favicon.svg)
- [site.webmanifest](site.webmanifest)

What the website adds:

- a clean landing page
- a curriculum overview
- a searchable notebook library
- category filters
- direct PDF open and download actions
- a suggested learning path
- FAQ content for new visitors

### How to publish with GitHub Pages

The repository is prepared for branch-based GitHub Pages hosting.

1. Push the repository to GitHub.
2. Open repository settings.
3. Go to **Pages**.
4. Set the source to **Deploy from a branch**.
5. Choose the **main** branch and the **root** folder.
6. Save the settings.

After that, GitHub Pages will serve the website from the repository root.

## Automation and quality checks

To help the next commit get a green tick in **Get started with GitHub Actions**, the repository now includes a workflow that validates the structure and runs automated tests.

Workflow file:

- [.github/workflows/python-ci.yml](.github/workflows/python-ci.yml)

What it does:

- checks that the key website files exist
- verifies that the notebook catalog matches the PDF files
- confirms the README includes the notebook references
- runs automated tests with Python's built-in unittest module

## Companion projects

Beyond this notebook collection, the same author maintains security-focused utilities and labs that complement the learning path:

| Project | Focus | Link |
| --- | --- | --- |
| WiFi QR Generator | Generates guest WiFi QR codes so you can share network access without revealing passwords. | [GitHub](https://github.com/SagarBiswas-MultiHAT/WiFi-QR-Generator) |
| BruteforceLab1 | A safe play sandbox for experimenting with brute-force techniques and observing defensive throttling. | [GitHub](https://github.com/SagarBiswas-MultiHAT/BruteforceLab1) |
| Multi-FA-Auth | Multi-factor authentication flows covering passwordless prompts, TOTP, and email fallbacks. | [GitHub](https://github.com/SagarBiswas-MultiHAT/Multi-FA-Auth/) |
| Password Strength Checker | A live password scoring utility that reinforces the best practices covered in the notebooks. | [GitHub](https://github.com/SagarBiswas-MultiHAT/Password-Strength-Checker) |
| XSS WebGuard | A defensive experiment detecting and neutralizing reflected XSS payloads in forms. | [GitHub](https://github.com/SagarBiswas-MultiHAT/XSS-WebGuard) |

## Repository structure

```text
.
├── .github/workflows/python-ci.yml
├── assets/
│   └── favicon.svg
├── data/
│   └── notebooks.json
├── scripts/
│   └── validate_repo.py
├── tests/
│   └── test_repository.py
├── 404.html
├── index.html
├── script.js
├── site.webmanifest
├── styles.css
├── JS_Part-1_Basics.pdf
├── JS_Part-2_ JavaScript Web Storage API.pdf
├── JS_Part-3_Document Object Model (DOM).pdf
├── JS_Part-4_Browser Object Model (BOM).pdf
├── JS_Part-5_Best Practices, Error_Handling_and_Canvas Mastery.pdf
├── JS_Part-6_Modern ES6+ Essentials & Deep Dive.pdf
└── README.md
```

## How to preview locally

Because the site loads structured data from [data/notebooks.json](data/notebooks.json), it is best previewed through a small local web server rather than by opening the HTML file directly.

Any static server will work. Python's built-in HTTP server is a simple option.

## Why this repository is now easier to understand

Before these improvements, a visitor mainly saw a list of PDFs. Now the repository tells a complete story:

- what the collection is
- how the notebooks are organized
- what topics each notebook covers
- which notebook to read first
- how to browse everything through GitHub Pages
- how quality is checked automatically

That makes the project far more useful for learners, reviewers, and recruiters alike.

## Final note

This repository is now set up to present the notebook collection professionally while still keeping the original study material front and center. The PDFs remain the heart of the project, and everything else in the repo now helps readers discover, understand, and trust them faster.