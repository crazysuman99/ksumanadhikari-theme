# Ksumanaadhikari Blogger Theme

A clean, responsive Blogger theme for [ksumanadhikari.com.np](https://www.ksumanadhikari.com.np).

The project is built around a simple principle: **content first, unnecessary decoration last.**

## Design principles

- Readable typography and clear content hierarchy.
- Responsive layouts for desktop, tablet, and mobile.
- Simple navigation and useful Blogger widgets.
- Modular CSS and JavaScript.
- Maintainable code with assets hosted from this repository through jsDelivr.

## Technology

- Blogger XML
- HTML5
- CSS3
- JavaScript
- jQuery
- jsDelivr CDN

## Repository structure

```text
ksumanadhikari-theme/
├── theme.xml
├── README.md
├── css/
│   ├── skin-base.css
│   ├── overall.css
│   ├── post-cards.css
│   └── error-page.css
└── js/
    └── theme.js
```

## How assets are loaded

The Blogger template is maintained in `theme.xml`. Stylesheets and the main JavaScript file are loaded from this repository:

- `css/skin-base.css`
- `css/overall.css`
- `css/post-cards.css`
- `js/theme.js`

The CDN URLs currently use the `main` branch. For production stability, pin these URLs to a commit SHA after a release is tested.

## Installation

1. Back up the current theme in Blogger.
2. Open **Blogger Dashboard → Theme → Edit HTML**.
3. Replace the template with the contents of `theme.xml`.
4. Save and check the homepage, post pages, static pages, navigation, and mobile layout.

## Development notes

- Keep CSS and JavaScript in their respective folders.
- Update CDN paths in `theme.xml` whenever an asset is renamed or moved.
- Test changes on a backup/test blog before applying them to the live site.
- Do not commit private credentials, API keys, or account tokens.

## Project status

**Active development.** The repository contains the Blogger template and its currently referenced theme assets. Features and compatibility should be tested on Blogger before production use.

## Website

[ksumanadhikari.com.np](https://www.ksumanadhikari.com.np)

## Maintainer

[Ksumanaadhikari](https://github.com/crazysuman99)
