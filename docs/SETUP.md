# Installation and customization

## 1. Install the Blogger XML

1. Open Blogger → Theme.
2. Back up/download your current theme first.
3. Choose **Edit HTML**.
4. Replace the existing theme XML with `theme/blogger-theme.xml`.
5. Save and preview on desktop and mobile.

The theme uses Blogger's native Blog widget for article pages and the lower homepage journal feed. It uses one standard `b:skin` block; the visual system lives in the external CSS file.

## 2. Configure your profile and media

Open `assets/js/site.js` and edit the `config` values:

- `youtubeVideoId`: the ID from your YouTube video URL (the part after `v=`).
- `youtubeChannelUrl`: your actual channel URL.
- `podcastEmbedUrl`: the official embeddable player URL supplied by your podcast host.
- `profileImageUrl`: a direct HTTPS image URL for your profile photo.

Commit the changes to `main`. jsDelivr serves the files from this repository. CDN updates may take a short time to propagate.

## 3. Update links and copy in the XML

Search the XML for the sample social URLs, email address, service descriptions, and specialist-site links. Replace each placeholder with your real destination. Do not publish a placeholder email address as a contact route.

## 4. Blogger layout

The homepage hero and personal-brand sections are part of the XML. The latest articles section is intentionally lower on the homepage. Blogger's Blog widget controls post content, pagination, labels, and individual post pages.

## 5. Important notes

- This is a Blogger XML theme, not a standalone static website.
- Keep exactly one `b:skin` block.
- XML attribute values must escape ampersands as `&amp;`.
- Back up the existing Blogger theme before installing.
- Check AdSense placement and policy compliance in Blogger/AdSense separately; the theme does not guarantee monetization approval.
- The Law section is an educational-interest area; it does not advertise legal representation.
