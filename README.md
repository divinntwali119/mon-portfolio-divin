# Portfolio de Divin Ntwali

Portfolio personnel migré vers **Next.js App Router**, avec export statique pour GitHub Pages.

## Prérequis

- Node.js 20.9 ou plus récent
- npm

## Développement

```bash
npm install
npm run dev
```

Ouvrez <http://localhost:3000>. Le préfixe GitHub Pages est activé uniquement pendant le build de production.

## Vérifications et export

```bash
npm run lint
npm run build
```

L’export statique Next.js est généré dans `out/` et publié automatiquement sur GitHub Pages par le workflow `.github/workflows/deploy.yml` à chaque push sur `main`.

Dans les paramètres du dépôt GitHub, ouvrez **Settings → Pages** et choisissez **GitHub Actions** comme source de publication. Le site en ligne est alors servi depuis l’export Next.js; les anciens fichiers HTML restent conservés dans le dépôt comme sources historiques, mais l’accueil publié provient de `out/index.html`.

## Pages

- `/` — portfolio complet
- `/about/` — présentation
- `/projects/` — projets
- `/contact/` — contact
- `/carte-de-visite/` — profil et carte numérique
- `/carte-de-visite-divin-ntwali/` — personnalisation et impression
- `/scan-qr/` — transition après lecture du QR code

Les anciens fichiers HTML sont conservés pendant la validation de leurs routes de remplacement. Des pages de redirection dans `public/` maintiennent également les anciennes URL de carte et de scan QR.

## Référencement (SEO)

- Chaque page publique possède un titre, une description, une URL canonique, des métadonnées Open Graph et une carte X/Twitter.
- Le sitemap est généré à `/mon-portfolio-divin/sitemap.xml` et les consignes robots à `/mon-portfolio-divin/robots.txt`.
- Le portfolio, la page « À propos », les projets, le contact et la carte numérique sont référencés. La transition QR et l’éditeur de carte imprimable ne sont pas indexés.
- Les données structurées Schema.org décrivent le site, le profil professionnel et les services à Kinshasa.
- Après publication, ajoutez l’URL GitHub Pages dans Google Search Console et soumettez le sitemap. Le fichier de validation Google est conservé dans `public/`.
