# Salas-Millán Portfolio Website

Static website ready for GitHub and Cloudflare Pages.

## Files

- `index.html` — main page
- `style.css` — design and responsive layout
- `script.js` — mobile menu and scroll animations
- `assets/images/` — optimized WebP images

## Deploy with Cloudflare Pages

1. Create a GitHub repository, for example `salasmillan-website`.
2. Upload all files from this folder to the repository root.
3. In Cloudflare, go to **Workers & Pages** → **Create application** → **Pages**.
4. Connect your GitHub repository.
5. Use these settings:
   - Framework preset: **None**
   - Build command: leave empty
   - Build output directory: `/`
6. Deploy.

## Custom domain

After deployment, add your domain in Cloudflare Pages:

`Custom domains` → `Set up a custom domain` → `salasmillan.com`

Cloudflare will configure the required DNS records if the domain is managed in Cloudflare.

## Editing content

Edit `index.html` to change text, publications, links or sections.
Replace optimized images in `assets/images/` if needed.
