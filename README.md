# [Barrel Frontend](https://barrel.tools/)

This is the front-end repo for Exodia that allows users be part of the future of Greece.

**_ Note We're currently in the process of switching to TypeScript. Please read this guide on how to use TypeScript for this repository. https://github.com/OlympusDAO/olympus-frontend/wiki/TypeScript-Refactor-General-Guidelines _**

## 🔧 Setting up Local Development

Required:

- [Node v14](https://nodejs.org/download/release/latest-v14.x/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

```bash
$ git clone --recurse-submodules https://github.com/SupaToxin/barrel_webapp.git
$ cd barrel_webapp
# set up your environment variables
# read the comments in the .env files for what is required/optional
$ cp .env.example .env
# fill in your own values in .env, then =>
$ npm install
$ npm start
```

The site is now running at `http://localhost:3000/react/demo`!
Open the source code and start editing!

**Faucets**
TODO

## Architecture/Layout

The app is written in [React](https://reactjs.org/) using [Redux](https://redux.js.org/) as the state container.

The files/folder structure are a **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./src/
├── App.js              // Main app application
├── App.test.js         // Test app page
├── index.js            // Main app View
├── reportWebVitals.js  // Report Web vitals to server
├── setupTest.js        // Test the project
├── context/            // Contract ABIs from etherscan.io
├── css/                // CSS Styles
├── icons/              // Reusable Icons
├── images/             // Reusable Images
├── jsx/                // Reusable components, pages and layouts
├── scss/               // Reusable individual scss
├── services/           // Auth, Axios and Post Services
├── store/              // React Redux Store
└── vendor/             // Bootstrap resources
```

## 🗣 Community

- [Join our Discord](https://discord.gg/barrel) and ask how you can get involved with the DAO!
