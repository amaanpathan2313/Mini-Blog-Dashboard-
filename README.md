
# Mini Blog Dashboard

> A small, responsive blog dashboard built with React and Vite designed for creating, viewing and managing blog posts. 

Deployed demo: [https://miniblogapp01.netlify.app/](https://miniblogapp01.netlify.app/)

---

## About

Mini Blog Dashboard is a single-page React application scaffolded with Vite. The UI is focused on blog management workflows — listing posts, viewing post details, and (commonly) creating posts from a dashboard-style interface. This repository contains the front-end source, a `public/` folder and Vite configuration for local development and deployment.

## Demo

A live demo is available (Netlify): `https://miniblogapp01.netlify.app/` — check the deployed site to validate UI and behavior.

## Features

* Post listing and detailed view.
* Responsive layout suitable for desktop and tablet.
* Vite-powered development server for fast HMR.
* Simple deployment configuration for Netlify (netlify.toml included).


## Tech stack

* **Framework:** React (Vite template)
* **Build tool:** Vite
* **Languages:** JavaScript, HTML, CSS
* **Deployment:** Netlify (site referenced in repo)



## **🚀 Screenshots **

* Dashboard
![dashboard_page](/public/dashboard.png)

* Post_detail
![post_detail](/public/post_details.png)

* Add_post
![add_post](/public/add_posts.png)

## Repository structure

```
Mini-Blog-Dashboard/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx
│   │   │   ├── Layout.css
│   │   │
│   │   ├── PostCard/
│   │   │   ├── PostCard.jsx
│   │   │   ├── PostCard.css
│   │   │
│   │   ├── PostList/
│   │   │   ├── PostList.jsx
│   │   │   ├── PostList.css
│   │   │
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.css
│   │   │
│   │   │
│   │   ├── ThemeToggle/
│   │       ├── ThemeToggle.jsx
│   │       ├── ThemeToggle.css
│   │
│   ├── pages/
│   │   ├── PostsList.jsx
│   │   ├── PostDetail.js
│   │   └── CreatePost.jsx
│   │
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── useTheme.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```


## Getting started (local)

1. Clone the repository and change into the project folder:

```bash
# clone your repo (if not already cloned)
git clone https://github.com/amaanpathan2313/Mini-Blog-Dashboard-.git
cd Mini-Blog-Dashboard-
```

2. Install dependencies:

```bash
npm install

```

3. Start development server:

```bash
npm run dev
# open http://localhost:5173 (or the URL printed by Vite)
```

## Available scripts

These are the typical Vite scripts — confirm in `package.json` and update if different:

* `npm run dev` — start dev server with HMR
* `npm run build` — build production bundle
* `npm run preview` — locally preview the production build

## Build & deploy

To create a production build locally:

```bash
npm run build
```

## Future improvements 

* Add TypeScript to improve type safety.
* Add authentication and protected routes.
* Add persistent backend (Node/Express + MongoDB or Firebase) for real data storage.

---

Project Develop by Amaan Pathan.

---