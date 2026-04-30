---
layout: /src/layouts/ProjectLayout.astro
title: "Forum"
pubDate: 2024-01-01
description: "Forum is a Go-based community discussion platform built with a **standard library** first approach, where users can create posts, comment, react, and interact through a modern, secure web experience."
languages: ["go", "sqlite", "html", "css", "javascript", "docker"]
image:
  url: "/images/projects/forum-1.jpg"
  alt: "Forum home page with categories and recent discussions."
---

## Forum

Forum is a simple Go-based forum application with server-rendered HTML, SQLite storage, and role-based moderation features.

This project is intentionally built with the Go **standard library** first. Only three external libraries are used for specific tasks:

- `github.com/mattn/go-sqlite3` for SQLite driver support
- `golang.org/x/crypto` for password hashing (`bcrypt`)
- `github.com/google/uuid` for UUID generation

Everything else (HTTP server, routing, templates, cookies/sessions, middleware-style flow, TLS wiring, and application structure) is implemented with the **standard library**.

## Features

- User signup, login, and logout
- Forum post create, edit, and delete
- Comments and likes/dislikes for posts and comments
- Category and tag filtering
- Role-based moderation flows
- Google and GitHub OAuth login paths

## Technologies Used

- Go (**standard library** first)
- SQLite
- HTML templates, CSS, and JavaScript
- Docker and Docker Compose

## Demo

👉 [View live demo](http://aspandyar.me/forum/)

## Screenshots

![Forum main screen](/images/projects/forum-1.jpg)
![Forum post/details screen](/images/projects/forum-2.jpg)

Forum repo:

- [github](https://github.com/aspandyar/forum)
