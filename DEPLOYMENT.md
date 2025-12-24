# GitHub Pages Deployment Guide

This guide will help you deploy your Astro site to GitHub Pages.

## 📋 Prerequisites

- A GitHub account
- Git installed on your machine
- Your project pushed to a GitHub repository

## 🚀 Deployment Steps

### Step 1: Install Dependencies

First, install the new adapter dependency:

```bash
npm install
```

### Step 2: Update Site URL (if needed)

The `astro.config.mjs` is currently configured for:
- **User/Organization page**: `https://aspandyar.github.io` (if your repo is named `aspandyar.github.io`)
- **Project page**: Update the `site` URL to `https://aspandyar.github.io/your-repo-name` if deploying from a different repository

To update for a project page:
1. Open `astro.config.mjs`
2. Change the `site` URL to match your repository name:
   ```javascript
   site: "https://aspandyar.github.io/your-repo-name",
   ```

### Step 3: Push to GitHub

If you haven't already, initialize git and push to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Configure GitHub Pages deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/aspandyar/YOUR-REPO-NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (in the repository navigation bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Source**: `GitHub Actions` (not "Deploy from a branch")
5. The workflow will automatically deploy when you push to `main`

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once it's done, you'll see a green checkmark

### Step 6: Access Your Site

Your site will be available at:
- **User/Organization page**: `https://aspandyar.github.io`
- **Project page**: `https://aspandyar.github.io/YOUR-REPO-NAME`

## 🔄 Automatic Deployment

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your Astro site
2. Deploy it to GitHub Pages
3. Update your live site

## 🛠️ Troubleshooting

### Build fails in GitHub Actions

- Check the Actions tab for error messages
- Make sure all dependencies are in `package.json`
- Verify your `astro.config.mjs` is correct

### Site shows 404

- Wait a few minutes after deployment (DNS propagation)
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the `site` URL in `astro.config.mjs` matches your repository structure

### Assets not loading

- Check that your `base` path in `astro.config.mjs` matches your deployment path
- For project pages, ensure `base` is set to `/your-repo-name/`

## 📝 Notes

- The first deployment might take 5-10 minutes
- Subsequent deployments are usually faster (2-3 minutes)
- Your site will be available via HTTPS automatically
- GitHub Pages is free for public repositories

## 🎉 You're Done!

Once deployed, your site will be live on the internet and accessible to everyone!

