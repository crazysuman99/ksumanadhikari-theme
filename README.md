# Ksumana Adhikari — Executive Personal Brand Blogger Theme

A responsive, content-first Blogger theme architecture for the main personal website.

## Design direction

Executive Personal Brand: authority, credibility, clarity and restrained visual polish. The visual system uses navy blue as the foundation, with green and purple accents. The layout is mobile-first and avoids decorative clutter.

## Theme components

1. Landing page — editable hero gadget on the homepage
2. Navigation — Blogger LinkList plus BlogSearch
3. Sidebar — independently styled Blogger gadgets
4. Welcome message — profile image and introduction gadget
5. Subsidiary sites — editable network links
6. Post labels/categories — Blogger Label gadget
7. Inside-post gadgets — optional post-level gadget zone
8. Blog posts — Blogger Blog widget with responsive cards and hover treatment
9. Footer/credit — editable footer gadgets and copyright line

## Repository structure

- `theme/blogger-theme.xml` — Blogger XML template and gadget regions
- `assets/css/` — design tokens, base, layout, components, blog, gadgets and responsive styles
- `assets/js/core/` — shared JavaScript helpers
- `assets/js/modules/` — navigation, search, post cards, sidebar and post enhancements
- `assets/js/app.js` — module initialization

## External assets

CSS and JavaScript are loaded from jsDelivr using the repository's `main` branch. jQuery 3.7.1 is loaded from jsDelivr npm.

## Installation

1. Download or copy `theme/blogger-theme.xml`.
2. In Blogger, first back up the current theme from **Theme → Restore → Download**.
3. Open **Theme → Edit HTML**, replace the template with the new XML, and save.
4. Open **Layout** and configure the LinkList, BlogSearch, Hero, Welcome Message, Sidebar, Subsidiary, Labels, Inside Post and Footer gadgets.
5. Test the homepage, archive, search, static page and individual post views at desktop, tablet and mobile widths.

## Important

The repository source has been committed, but a successful GitHub commit does not mean Blogger has accepted or rendered the theme. Install it on a test blog or after backing up the live theme, then verify Blogger's XML parser, gadget layout and real post markup. Do not assume every gadget is populated automatically.
