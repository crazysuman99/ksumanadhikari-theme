# Installation and editing guide

## Install the Blogger theme

1. Open Blogger → **Theme**.
2. Download/back up the current theme.
3. Choose **Edit HTML**.
4. Replace the theme XML with `theme/blogger-theme.xml`.
5. Save, then check the site on desktop and mobile.

The domain's supplied DNS export already shows the root domain A records pointing to Google's Blogger IPs and `www` CNAME pointing to `ghs.google.com`. This theme update does not require DNS changes. Do not replace nameservers or delete verification records for this theme installation.

## Edit the homepage without coding

Open Blogger → **Layout**. The homepage is divided into named gadget areas:

| Layout area | What you edit |
|---|---|
| 01 · Hero introduction | Main headline, tagline, intro and hero links |
| 02 · Profile photo | Edit the Image gadget; upload/select your own photo |
| 03 · Welcome message | Intro strip text |
| 04 · About me | Biography and about text |
| 05 · My interests | Technology, education, business and law cards |
| 06 · Learning and courses | Classes, notes, course links |
| 07 · Services and work | Freelancing, mentoring and collaboration details |
| 08 · YouTube and podcast embeds | Add or replace HTML/JavaScript gadgets for embeds |
| 09 · Contact message | Contact headline and message |
| 10 · Social links | Edit social URLs and labels |

For text areas, click the pencil/edit icon on the relevant **Text gadget** in Layout. For your photo, edit the **Your profile photo** Image gadget in the Profile photo area and upload/select your image. You do not need to open Edit HTML for these routine changes.

## Blog posts and pages

- Blogger → **Posts** → **New Post** → Publish.
- Posts from this same Blogger blog appear automatically in the homepage's Latest articles area.
- Edit or delete posts from the Posts dashboard.
- Use **Pages** for static pages such as Portfolio, About, Contact, or Services.

The native Blog widget only shows posts belonging to this Blogger blog. Posts published on the separate `operator.ksumanadhikari.com.np` blog do not automatically appear in this feed. They can be brought in through a separate RSS/Feed gadget or a custom combined feed.

## Your connected profiles and podcast

The theme has been prefilled with the supplied public profile links:
- Email: `ksumanadhikari@gmail.com`
- Facebook: `https://www.facebook.com/profile.php?id=61595246783060`
- TikTok: `https://www.tiktok.com/@ksumanadhikari`
- YouTube: `https://www.youtube.com/@ksumanadhikari`
- X: `https://x.com/ksumanadhikari`
- Instagram: `https://www.instagram.com/ksumanadhikari/`
- LinkedIn: `https://www.linkedin.com/in/ksumanadhikari/`
- Spotify: `https://open.spotify.com/show/4OTRpgtT1WYDDjlDZXJXdF`

The Spotify show player is embedded in the podcast card. X, Instagram and LinkedIn profile URLs were formed from the handles you supplied; verify those profiles resolve to your accounts before publishing.

The YouTube channel link is connected. To feature a particular video, add an HTML/JavaScript gadget in Layout → **08 · YouTube and podcast embeds** and paste its official embed code. You can change the embed later in the gadget editor.

## Technical customization

- `assets/css/site.css`: visual design and responsive layout.
- `assets/js/site.js`: mobile navigation only.
- `theme/blogger-theme.xml`: theme structure and Blogger gadget zones.

Keep exactly one `b:skin` block. Back up the theme before replacing it. The XML has been structurally checked, but it has not yet been runtime-tested inside your Blogger account. Check Blogger Preview and the published site after installation.

Ad placement and AdSense approval are separate from the theme and are not guaranteed.
