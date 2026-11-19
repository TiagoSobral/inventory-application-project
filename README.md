# Flower Inventory

A full-stack inventory management app built with Node.js, Express, and PostgreSQL. It lets you create, view, edit, and delete [items] and organize them into [categories]. Built as part of [The Odin Project](https://www.theodinproject.com/) Node.js course.

**Live demo:** [https://inventory-application-project-zwbv.onrender.com]

> Hosted on Render's free tier, so the first load after a period of inactivity may take 30-60 seconds while the server wakes up.

## Features

- Full CRUD for items and categories
- Items grouped by category, with a category overview page
- Server-rendered views with EJS
- PostgreSQL database accessed through `node-postgres` (`pg`) with parameterized queries
- Form validation and sanitization on the server
- [Single-page-style navigation: actions update the page without a full reload]

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Views:** EJS
- **Database:** PostgreSQL, hosted on [Neon](https://neon.tech/) (`pg`)
- **Validation:** express-validator
- **Hosting:** [Render](https://render.com/)

## What I Learned

- Designing a relational schema and writing SQL queries with `node-postgres`
- Structuring an Express app with the MVC pattern (routes, controllers, queries)
- Validating and sanitizing user input to prevent bad data and SQL injection
- Rendering dynamic views with EJS and reusing partials
- Deploying a full-stack app: managed Postgres on Neon, hosting on Render, and configuring environment variables for production


