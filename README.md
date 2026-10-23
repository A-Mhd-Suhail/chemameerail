# ChemAmeerali

Chemistry classes website for Dr. Ameer Ali (Classes 1-8, 9-12, NEET / JEE). Plain HTML, CSS and JavaScript, with no build step.

## Structure
```
index.html
css/style.css
js/config.js   <- WhatsApp number
js/main.js
favicon.svg  robots.txt  sitemap.xml  vercel.json
```

## Before deploying
1. Set your number in `js/config.js`.
2. Update the phone, email and location in the Contact section of `index.html`.
3. After you know your final domain, replace `https://chemameerali.vercel.app/` in `index.html`, `robots.txt` and `sitemap.xml`.

## Deploy
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/chemameerali.git
git push -u origin main
```
Then on vercel.com choose **Add New > Project**, import the repo, keep Framework Preset as **Other**, leave build and output settings empty, and click **Deploy**. Every push to `main` redeploys automatically.
