# Anubhav Tripathi. Portfolio

A cinematic, scroll-driven portfolio for a Senior AI/ML Engineer at UltraSafe AI.

The site is a single static page. The hero is a pre-rendered, deterministic three.js film scrubbed by scroll, and every section below it is a pinned scroll set piece: a time-true career timeline, a four-card project deck, a stack assembly, and achievement numerals. Titles blur in line by line and content rises into place as you reach it.

## Running locally

Any static file server works:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/.

## Structure

- `index.html`: the whole site, styles and scripts inlined
- `assets/hero-scrub-2.mp4`: the scroll-scrubbed hero film
- `assets/hero-poster.jpg`, `assets/hero-ending.jpg`: first and last frames, shown before the film streams in
- `assets/fonts/`: Clash Display, General Sans, JetBrains Mono, self-hosted
- `robots.txt`, `sitemap.xml`, `llms.txt`: crawl and answer-engine files. The domain in these is a placeholder until the site has its final home.

The page is complete without JavaScript and without the video: crawlers and reader modes get the full text, and reduced-motion visitors get every section in its settled state.
