# 📄 Professional Portfolio

## 🚀 Getting Started

To run this project locally, follow these steps:

### Install Dependencies

Install the required dependencies using npm:

```sh
$ npm install
```

### Run in Development Mode

Run node-sass in watch mode for hot reloading:

```sh
$ npm run dev
```

### Open in Browser

Start the local development server:

```sh
$ npm start
```

Then, open your browser and go to:

```sh
http://localhost:3000
```

### Build for Production

Before deploying to production, compile assets:

```sh
$ npm run build
```

## 🛠️ Enhancements & Updates

### 1. Refactoring

- Created a `public` folder and moved static files:
  - **Folders**: `css`, `favicon_io`, `img`, `js`, `projects`
  - **Files**: `favicon.ico`, `index.html`, `robots.txt`, `site.webmanifest`, `sitemap.xml`, `text.md`
- Refactored `index.html` and `style.css`:
  - Removed unnecessary comments
  - Eliminated redundant styles
  - Organized CSS property order
  - Removed duplicate meta tags
- Improved project pages (YelpCamp/Portfolio):
  - Updated tech stack
  - Removed redundant content

### 2. Express.js Integration

- Created `server.js` to:
  - Serve static files (only from `public` folder)
  - Redirect HTTP → HTTPS
  - Redirect domain (`javierju.com → www.javierju.com`)
  - Serve `index.html` on all routes (SPA support)
  - Run a local test server

### 3. AWS S3 & CloudFront Deployment

- Created an S3 bucket for hosting
- Integrated with CloudFront for CDN delivery

### 4. Domain & HTTPS Setup

- Purchased domain via Route 53
- Configured ACM for SSL/TLS certificates
- Connected CloudFront to `www.javierju.com`
- Enabled HTTPS

### 5. Google Services Integration

- Registered with Google Analytics
- Submitted to Google Search Console & uploaded sitemap

### 6. Code Quality Improvements

- Added ESLint & Prettier
- Configured GitHub Actions for:
  - `npm run lint`
  - `npm run lint:fix`
  - `npm run format`

### 7. CI/CD Pipeline

- Implemented GitHub Actions for:
  - Auto-deployment to S3 on `main` push
  - CloudFront cache invalidation

### 8. Cross-Browser & Device Testing

- Verified using Chrome DevTools

### 9. CI/CD Automation Enhancements

- Automated Sass compilation (`npm run build`) before commit & push

### 10. `package.json` Optimization

- Removed unused npm dependencies

### 11. CloudFront Caching Optimization

- **GitHub Actions**: Added `Cache-Control` headers
- **Cache Invalidations**: Automated via GitHub Actions

### 12. Lighthouse Performance Optimization

- **Performance**: 75
- **Accessibility**: 98
- **Best Practices**: 96
- **SEO**: 92

## 🔒 License

Currently [**not** offering any license](https://choosealicense.com/no-permission/). Permission is granted for viewing only.

## 📌 Acknowledgments

This project was initially inspired by [JacobGrisham/Professional-Portfolio](https://github.com/JacobGrisham/Professional-Portfolio). Significant modifications and enhancements have been made to optimize performance, structure, and deployment.
