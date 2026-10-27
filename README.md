# Thoithoiba & Kunjarani – Wedding Invitation

Static site (HTML + CSS + JS, no build step).

```
wedding-invite/
├── index.html
├── css/style.css      ← colours & flower size (--fs) at the top
├── js/main.js         ← countdown
├── assets/img/        ← photos, QR codes, flowers
└── .nojekyll
```

## Run locally (VS Code)
Open the folder in VS Code → install the **Live Server** extension → right-click `index.html` → *Open with Live Server*.

## Host on GitHub Pages
1. Create a new repository on GitHub (e.g. `wedding-invite`).
2. In the VS Code terminal inside this folder:
   ```
   git init
   git add .
   git commit -m "Wedding invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/wedding-invite.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main / (root) → Save**.
4. After a minute the site is live at `https://<your-username>.github.io/wedding-invite/`.
