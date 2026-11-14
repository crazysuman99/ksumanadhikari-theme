# Installation and editing guide

## Install the Blogger theme

1. Open Blogger → **Theme**.
2. Download/back up the current theme.
3. Choose **Edit HTML**.
4. Replace the theme XML with `theme/blogger-theme.xml`.
5. Save, then check the site on desktop and mobile.

The theme's design stays in the external CSS file. Normal content editing happens in Blogger, not in the XML or JavaScript.

## Edit the homepage without coding

Open Blogger → **Layout**. The homepage is divided into clearly named gadget areas:

| Layout area | What you edit |
|---|---|
| 01 · Hero introduction | Main headline, tagline, intro and hero links |
| 02 · Profile photo | Add/edit the Image gadget; upload or choose your photo |
| 03 · Welcome message | Intro strip text |
| 04 · About me | Biography and about text |
| 05 · My interests | Technology, education, business and law cards |
| 06 · Learning and courses | Classes, notes, course links |
| 07 · Services and work | Freelancing, mentoring and collaboration details |
| 08 · YouTube and podcast embeds | Add an HTML/JavaScript gadget with the official embed code from your media provider |
| 09 · Contact message | Contact headline and message |
| 10 · Social links | Edit social URLs and labels |

For text areas, click the pencil/edit icon on the relevant **Text gadget** in Layout. Use its rich-text editor to change wording and links. You do not need to open Edit HTML for routine text updates.

For your photo, click **Add a Gadget** in the **Profile photo** area and choose **Image**, or edit the existing Image gadget. Upload/select the photo and save.

## Publish and manage blog posts

- Open Blogger → **Posts** → **New Post** to publish.
- Published posts from this same Blogger blog appear automatically in the homepage's **Latest articles** area.
- Edit or delete posts from the same Posts dashboard.
- Use **Pages** to create static pages such as About, Contact, Portfolio, or Services.

**Important:** Blogger's native Blog widget only displays posts belonging to the Blogger blog connected to this domain. Posts published on a separate blog such as `operator.ksumanadhikari.com.np` will not automatically appear in this blog's feed. To show those too, add a Feed gadget in Layout using that blog's public RSS feed, or we can add a combined feed section.

## YouTube and podcast

In Layout → **08 · YouTube and podcast embeds**, add an HTML/JavaScript gadget and paste the official embed code provided by YouTube or your podcast host. This is a one-time gadget setup; later you can replace the URL/embed in the gadget editor without changing the theme XML.

## Technical customization

- `assets/css/site.css`: visual design and responsive layout.
- `assets/js/site.js`: mobile navigation only.
- `theme/blogger-theme.xml`: theme structure and Blogger gadget zones.

Keep exactly one `b:skin` block. Back up the theme before replacing it. Check the Blogger preview and actual published site after installation. This theme has not yet been runtime-tested inside your Blogger account.

Ad placement and AdSense approval are separate from the theme and are not guaranteed.
