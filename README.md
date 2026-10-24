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

L’export statique est généré dans `out/`. Pour publier sur GitHub Pages, publiez le contenu de ce dossier à la racine de la source Pages du dépôt `mon-portfolio-divin`.

## Pages

- `/` — portfolio complet
- `/about/` — présentation
- `/projects/` — projets
- `/contact/` — contact
- `/carte-de-visite/` — profil et carte numérique
- `/carte-de-visite-divin-ntwali/` — personnalisation et impression
- `/scan-qr/` — transition après lecture du QR code

Les anciens fichiers HTML sont conservés pendant la validation de leurs routes de remplacement. Des pages de redirection dans `public/` maintiennent également les anciennes URL de carte et de scan QR.
