---
layout:  /src/layouts/ProjectLayout.astro
title: 'TextOps'
pubDate: 2026-04-29
description: 'TextOps is a full-stack text operations dashboard for processing text files with Word Count, Remove Duplicates, Clean Trash, and Sort Numbers—with real-time job status and result summaries.'
languages: ["react", "node", "express", "vite", "postgres"]
image:
  url: "/images/projects/textops.png"
  alt: "TextOps Dashboard with job statistics and create job form."
--- 

## TextOps

TextOps is a full-stack text operations dashboard that lets you process text files through a clean web UI. Create jobs, upload files, and get real-time status and result summaries—all in one place.

The app supports **Word Count**, **Remove Duplicates**, **Clean Trash** (empty lines and trim whitespace), and **Sort Numbers**. The dashboard shows total jobs, active and completed counts, and a list of jobs with status (e.g. COMPLETED), file name, size, and creation time. Opening a job shows a **Job Details** modal with progress (e.g. 100%), result summary (Words, Lines, Characters, Characters without spaces), and optional metrics.

## 🧩 Features

- **Dashboard** – Connected status, global stats (Total Jobs, Running, Completed), and user info (email, ADMIN badge, Log out)
- **Job statistics** – Total Jobs, Active Jobs, Completed (with success rate), Failed
- **Create New Job** – Choose job type (Word Count, Remove Duplicates, Clean Trash, Sort Numbers), upload file (e.g. big.txt), change or remove file
- **Jobs list** – Each job shows type, status (COMPLETED), file name, size, created time, success message, and result summary (Words, Lines, Characters, Characters no spaces)
- **Job Details modal** – File name & size, Job type, Created time, Progress (100%), Result summary (Words, Lines, Characters, Characters no spaces)
- **Real-time updates** – Job progress and status via WebSockets (Socket.io)
- **Auth** – JWT-based login; first user becomes admin; admins see all jobs

## 💡 Technologies Used

### Frontend
- **React 19** – UI
- **Vite** – Build and dev server
- **Redux Toolkit** – State (jobs, metrics)
- **React Hook Form** – Forms
- **Recharts** – Charts (e.g. system metrics)
- **Socket.io client** – Real-time job updates
- **Axios** – API calls
- **React Router** – Routing

### Backend
- **Node.js** – Runtime
- **Express** – API and static/file handling
- **PostgreSQL** – Users and jobs (via `pg`)
- **JWT** – Auth (jsonwebtoken)
- **Socket.io** – Real-time events
- **Multer** – File uploads
- **Pino** – Logging
- **Docker Compose** – PostgreSQL

## 🌐 Demo

👉 [View live demo](http://aspandyar.me/TextOps/)

## 🎯 Objective

TextOps provides a single dashboard to run common text operations on uploaded files, track job progress in real time, and view clear result summaries (word count, line count, character counts). It combines a simple UI with a reliable backend and real-time feedback for a smooth text-processing workflow.

## 🚀 Architecture

- **Frontend**: React SPA with Redux, Vite, and Socket.io for live updates
- **Backend**: REST API (Express) plus Socket.io; auth via JWT; jobs and users in PostgreSQL; uploads on disk
- **Real-time**: Socket.io for job progress and status so the dashboard stays in sync

---

**Built for fast, visible text file processing.**

TextOps repos:
- [frontend](https://github.com/aspandyar/TextOps)
- [backend](https://github.com/aspandyar/TextOps-backend)
