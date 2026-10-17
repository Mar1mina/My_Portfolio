# Pawlos Yohannes Portfolio

This project is a personal portfolio website for Pawlos Yohannes, built with React + Vite and designed to be deployed to GitHub Pages.

## Project overview

The site presents:
- a hero section and introduction
- skills and technology categories
- portfolio project cards
- education information
- contact details with a mailto-based form
- a theme toggle and responsive navigation

## Local development

1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Open the local site in a browser. Vite usually uses the URL shown in the terminal, commonly http://localhost:5173.

## Production build

Run:

npm run build

The generated static files are placed in the `dist` folder.

## GitHub Pages deployment

1. Create a GitHub repository for the project and push the files to GitHub.
2. In `vite.config.js`, make sure the `repoName` matches your GitHub repository name.
3. If your repository is named `portfolio`, update the config to:
   `base: '/portfolio/'`
4. Deploy the build with:
   npm run deploy
5. In the GitHub repository, open Settings > Pages and select the `gh-pages` branch as the publishing source if needed.
6. Save and wait for the site to publish.

## Important configuration note

The portfolio is designed to work under a GitHub repository subpath. If your GitHub repository is not named `port`, edit `vite.config.js` and replace `port` with your actual repository name.

## Adding the CV PDF

A real CV PDF should be placed here before enabling the download button:

`public/Pawlos-Yohannes-CV.pdf`

When the file is present, set `cvAvailable` to `true` in `src/data/profile.js`.

## Updating contact links

Edit `src/data/profile.js` to change:
- email
- phone
- GitHub URL
- LinkedIn URL
- CV settings

## Notes

- The contact form opens the visitor's default email client using a `mailto:` link and explains that the email must be sent from that application.
- The theme setting is saved locally in the browser.
- The navigation menu closes on section selection and works responsively.
