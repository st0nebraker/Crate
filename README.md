![Crate](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/hero-with-link.png)

# Crate 👕👖📦
## Contributors
- Becca Steinbrecher (GitHub: [b-stein](https://github.com/b-stein))
- Joe Haefling (GitHub: [Josephhaefling](https://github.com/Josephhaefling))
- Kyle Iverson (GitHub: [kiverso](https://github.com/kiverso))
- Melanie Tran (GitHub: [melatran](https://github.com/melatran))
- Mariana Cid (GitHub: [Mariana-21](https://github.com/Mariana-21))

## Learning Goals
- Learn and apply strategies for understanding how to analyze a larger, existing code base
- Apply strategies for reading and evaluating documentation
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
    - GraphQL && Redux
- Practice an advanced, professional git workflow: rebase

## Overview
A fullstack group [project](https://mod4.turing.io/projects/crate/crate.html) at Turing School of Software and Design. This project builds on top of a pre-existing larger codebase. This team was tasked with adding a feature to give a user the ability to fill out a survey to analyze their personal style. The team learned GraphQL and Redux in the process of implementing code to a production level codebase. They additionally added in testing coverage and fixed two existing bugs.

Previous, base features of this application include...

#### Get monthly subscription of trendy clothes and accessories.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack
- Designed using Adobe Experience Design. Preview it [here](https://xd.adobe.com/view/a662a49f-57e7-4ffd-91bd-080b150b0317/).

#### Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering
- Multi-package setup and dev scripts for an automated dev experiance

## In Action
### Desktop
![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)
### Style Survey feature
![Taking Survey](https://media.giphy.com/media/j1nqNafHNXnr5gwjiW/giphy.gif)
![Survey Results](https://media.giphy.com/media/Pj6w0pEgOXYDKYAbN4/giphy.gif)
### Bugs fixed
<img width="354" alt="Screen Shot 2020-08-30 at 1 21 38 PM" src="https://user-images.githubusercontent.com/59381432/91667716-d9b10200-eac3-11ea-867c-2864ef9258a6.png">
<img width="412" alt="Screen Shot 2020-08-30 at 1 21 45 PM" src="https://user-images.githubusercontent.com/59381432/91667720-dae22f00-eac3-11ea-8c35-e6dd535865da.png">

## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:atulmy/crate.git crate`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: 
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npx react-native run-ios` for iOS and `npx react-native run-android` for Android
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

### Multi-package automation
- New developers are advised to run through the above 'setup and running' process before reading further.
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/

## Technologies Used
- FE
    - React
    - Redux
    - Jest
    - React Testing Library
    - HTML/SCSS
- BE
    - GraphQL
    - Express
    - Node
    - Jest/SuperTest

## Systems/Practices
- git/Version Control, rebase
- Dataflow & wireframes (view [here](https://miro.com/app/board/o9J_kmjfN90=/))
- Project board (GH [projects](https://github.com/kiverso/Crate/projects/1))

## Wins
- Successfully finishing feature track and an extension
- Fixing previous bugs in the application
- Gaining a greater understanding of GraphQL and Redux with little to no formal instruction

## Future Iterations...
- Make front end testing more robust
- Deploy on Heroku & setup CI with Travis CI

## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
