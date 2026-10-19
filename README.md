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

This project is published at:

https://mar1mina.github.io/My_Portfolio/

The GitHub Actions workflow builds the Vite site and publishes the `dist` folder whenever changes are pushed to `main`.

To enable publishing in the repository, open Settings > Pages and select **GitHub Actions** as the build and deployment source. After pushing changes, check the Actions tab and wait for the Pages deployment workflow to finish.

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
