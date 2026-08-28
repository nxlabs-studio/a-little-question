# A Little Question — V2

A polished, deeply personalized date-invitation for WenWen. It begins sweetly, turns into Baby's unnecessarily sophisticated Lady Boss approval system, and ends somewhere quieter.

V2 adds a paced relationship-story sequence, animated pleading/side-eye/wink illustrations, proposal records, private Easter eggs, a calmer sincere ending, and a subtle replay control while preserving the original viewport-safe No-button mechanics.

## Customize it

Open `app.js` and edit the clearly marked `CONFIG` object at the top. It contains the recipient and sender, opening and success copy, milestone story stages, chaos level, sound setting, celebration intensity, and the complete theme.

The signature color is exposed as:

```js
theme: {
  signature: "#F9DBDB"
}
```

## Run locally

The project has no dependencies. You can open `index.html` directly, or serve the folder with any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Leave the framework preset as **Other** and deploy. No build command or environment variables are needed.

Vercel will serve `index.html` at the public project URL and redeploy future commits automatically.

## Project files

- `index.html` — semantic page structure
- `styles.css` — responsive presentation and animation
- `app.js` — configuration, interactions, audio, and celebration

Sound is off by default and uses the browser's built-in Web Audio API, so there are no external audio assets or licenses to manage.

