# A. Kanimoli – Portfolio Website

A static portfolio built with **HTML5, CSS3 and vanilla JavaScript**. No backend, no build step, no frameworks.
Open `index.html` in a browser, or deploy it with GitHub Pages.

## Folder structure

```
Kanimoli-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    ├── kanimoli_resume.pdf
    └── certificates/
        ├── *.pdf / *.jpg          (certificate files)
        └── previews/*.jpg         (card thumbnails)
```

## Run locally (VS Code)

1. Open the `Kanimoli-Portfolio` folder in VS Code.
2. Double-click `index.html`, or use the **Live Server** extension → *Open with Live Server*.

## Deploy with GitHub Pages

1. Create a new GitHub repository (for example `Kanimoli-Portfolio`).
2. Upload or push all files so that `index.html` is in the **root** of the repo:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Kanimoli-Portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. After a minute your site is live at `https://<your-username>.github.io/Kanimoli-Portfolio/`.

All paths are relative, so the site works the same locally and on GitHub Pages.
File names on GitHub Pages are **case-sensitive**: keep names in `script.js` exactly the same as the files.

## Add or change certificates

Open `script.js`. The list `CERTIFICATES` at the top controls every certificate card.

1. Copy your file into `assets/certificates/`.
2. Add or edit one entry:

```js
{ title: "Certificate name", org: "Organisation", category: "Courses", type: "pdf",
  file: "assets/certificates/your-file.pdf",
  preview: "assets/certificates/previews/your-file.jpg", meta: "" },
```

| Field | Meaning |
|-------|---------|
| `category` | `"Courses"`, `"Internships"` or `"Events"` (used by the filter buttons) |
| `type` | `"image"` opens in a pop-up viewer, `"pdf"` opens in a new tab |
| `preview` | Thumbnail on the card. For images you can reuse the image itself. For PDFs add a small `.jpg` screenshot. If empty or missing, a placeholder icon is shown |
| `meta` | Short extra line, or `""` if unknown |

## Add real project links

In `index.html`, find the project cards. Buttons that say **"coming soon"** have `href="#"`, the class `is-placeholder` and a `data-placeholder` attribute.
To activate one, replace `href="#"` with your real URL, add `target="_blank" rel="noopener noreferrer"`, and delete `is-placeholder` and `data-placeholder="..."`.

## Replace the profile photo or resume

- Photo: replace `assets/profile.jpg` (square, about 400×400 px or larger). If it is missing, a clean "AK" placeholder is shown.
- Resume: replace `assets/kanimoli_resume.pdf` and keep the same file name.

## Notes

- Icons are inline SVG, so no icon library is needed. Google Fonts (Manrope, Sora) are optional; the site falls back to system fonts if they cannot load.
- Skill percentages are in `index.html` (`--level:80%` and the number beside it). Edit them to match your real comfort level.
