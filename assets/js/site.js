/* Personal-site configuration: replace the placeholders below with your own IDs and URLs. */
(function () {
  'use strict';
  var config = {
    youtubeVideoId: 'YOUR_YOUTUBE_VIDEO_ID',
    youtubeChannelUrl: 'https://www.youtube.com/',
    podcastEmbedUrl: '',
    profileImageUrl: ''
  };

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var frame = document.getElementById('youtube-frame');
  if (frame && config.youtubeVideoId && config.youtubeVideoId !== 'YOUR_YOUTUBE_VIDEO_ID') {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(config.youtubeVideoId);
    iframe.title = 'YouTube video player';
    iframe.loading = 'lazy';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.style.cssText = 'width:100%;height:100%;border:0;position:absolute;inset:0';
    frame.style.position = 'relative';
    frame.replaceChildren(iframe);
  }

  var channel = document.getElementById('youtube-channel-link');
  if (channel && config.youtubeChannelUrl) channel.href = config.youtubeChannelUrl;

  var podcast = document.getElementById('podcast-embed');
  if (podcast && config.podcastEmbedUrl) {
    var podcastFrame = document.createElement('iframe');
    podcastFrame.src = config.podcastEmbedUrl;
    podcastFrame.title = 'Podcast player';
    podcastFrame.loading = 'lazy';
    podcastFrame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    podcast.replaceChildren(podcastFrame);
  }

  if (config.profileImageUrl) {
    var portrait = document.querySelector('.portrait-placeholder');
    if (portrait) {
      portrait.style.backgroundImage = 'url("' + config.profileImageUrl.replace(/"/g, '') + '")';
      portrait.style.backgroundSize = 'cover';
      portrait.style.backgroundPosition = 'center';
      portrait.innerHTML = '';
    }
  }
})();