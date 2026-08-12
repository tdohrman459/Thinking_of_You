# Thinking of You — Deluxe Edition 🌌

A free animated one-page website built with plain HTML, CSS, and JavaScript.

## What is included

- Full-screen opening animation
- Glowing moon and button
- Starfield background
- Heart transition when the page opens
- Animated typing message
- Glassmorphism message card
- Floating stars/hearts/petals
- Constellation heart drawn with SVG
- Small interactive question
- Sparkle burst effects
- Animated final section
- Replay button
- Responsive phone layout
- No frameworks, paid libraries, or subscriptions

## Edit your message

Open `script.js`.

At the top is a `CONFIG` object:

```js
const CONFIG = {
  messageHeading: "...",
  messageOne: "...",
  messageTwo: "...",
  messageThree: "...",
  finalMessage: "...",
  correctAnswer: "more"
};
```

Change the text inside the quotes.

`correctAnswer` can be `a little`, `a lot`, or `more`.

## Run it in VS Code

### Easiest method

Install the free **Live Server** extension in VS Code.

Then:

1. Open this folder in VS Code.
2. Right-click `index.html`.
3. Choose **Open with Live Server**.
4. Your browser will open the site.
5. Resize the browser or use your phone later to check the mobile version.

You can also simply double-click `index.html` to preview it. Live Server is better for development.

## Put it online for free

The easiest free option is GitHub Pages.

1. Create/sign into GitHub.
2. Create a new public repository.
3. Upload these three files:
   - `index.html`
   - `style.css`
   - `script.js`
4. Open the repository's **Settings**.
5. Find **Pages**.
6. Set the deployment source to your main branch and the root folder.
7. GitHub will provide a public URL.

GitHub's menus can change, but the project itself does not require paid hosting.

## Optional later upgrades

The code is intentionally made so we can add things later, such as:

- Your own photos
- A timeline of memories
- A custom constellation
- More sections
- A music player using music you have permission to use
- A password/secret opening screen
- A changing message each time it opens
- A date/time display
- A custom ending
