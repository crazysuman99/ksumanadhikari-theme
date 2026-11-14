# Ksumanaadhikari Personal Brand Theme

A responsive Blogger theme for [ksumanadhikari.com.np](https://www.ksumanadhikari.com.np).

The website is designed as a **personal brand, learning media, and digital business hub** — not just a conventional blog.

## Design direction

- Executive personal-brand identity with a clean, content-first layout.
- Blue, green, and purple accents with a deep navy foundation.
- Readable typography, consistent spacing, and responsive components.
- Photo-and-introduction hero, knowledge pillars, learning/services, YouTube and podcast, specialist learning websites, latest articles, and contact links.
- Blogger LinkList navigation and native Blogger BlogSearch widget.
- Styled article cards, sidebar gadgets, and multi-column footer.

## Repository structure

```text
ksumanadhikari-theme/
├── README.md
├── theme.xml
├── css/
│   ├── skin-base.css
│   ├── overall.css
│   ├── post-cards.css
│   ├── brand-system.css
│   └── error-page.css
└── js/
    └── theme.js
```

## Installation

1. Back up the current Blogger theme.
2. Open **Blogger Dashboard → Theme → Edit HTML**.
3. Replace the template with the contents of `theme.xml`.
4. In Blogger Layout, edit the homepage HTML gadgets to update the hero, learning areas, services, media, platforms, and contact details.
5. Test desktop, mobile, homepage, search, label, static-page, and post-page layouts.

## Editing navigation

The main navigation is managed through the **Main Navigation** Blogger LinkList gadget. Use underscore prefixes for dropdown levels, for example:

- `Learning`
- `_Programming`
- `__C Programming`

The search field uses Blogger's native **BlogSearch** gadget.

## Asset delivery

CSS and JavaScript are served from this repository through jsDelivr. Theme asset URLs are pinned to tested commit SHAs so a future asset change can be deliberately versioned by updating its CDN reference in `theme.xml`.

## Project status

Active development. Test all changes on a Blogger test blog before applying them to the live website.

## Website

[ksumanadhikari.com.np](https://www.ksumanadhikari.com.np)

## Maintainer

[Ksumanaadhikari](https://github.com/crazysuman99)
