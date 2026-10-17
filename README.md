# Pawlos Yohannes Portfolio

This is my personal portfolio website built with React and Vite. It showcases my background, skills, projects, education, and contact information.

## About this project

This portfolio is designed to help me:
- present my work to employers and collaborators
- share my software engineering interests
- highlight my projects and technical skills
- make it easy for people to contact me

## Run locally

1. Open the project folder in your terminal.
2. Install dependencies:
   npm install
3. Start the website:
   npm run dev
4. Open the local URL shown in the terminal, usually:
   http://localhost:5173/

## Build for production

Run:

npm run build

The production files will be created in the `dist` folder.

## GitHub Pages deployment

If you want to publish this site on GitHub Pages:

1. Push the project to a GitHub repository.
2. Make sure the repository name matches the value in `vite.config.js`.
3. Run:
   npm run deploy
4. Open your GitHub repository.
5. Go to Settings > Pages.
6. Publish the site from the `gh-pages` branch.

## Important note

If your GitHub repo is not named `port`, update this in `vite.config.js`:

base: '/port/'

Replace `port` with your actual repository name.

## CV file

My CV is already included in the project here:

`public/Pawlos-Yohannes-CV.pdf`

The download button is enabled and linked to this file.

## Contact and profile details

You can update my profile information in:

`src/data/profile.js`

This includes:
- email
- phone
- GitHub link
- LinkedIn link
- CV status

## Notes

- The contact form opens the visitor's default email app using `mailto:`.
- The site saves the selected theme in the browser.
- The navigation works on desktop and mobile.
- The site is built for a clean, professional personal portfolio presentation.
