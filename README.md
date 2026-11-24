# Portfolio Divin Ntwali — version HTML/CSS/JavaScript

Cette version peut être publiée comme un site statique : elle ne nécessite ni Next.js,
ni React, ni Node.js sur le serveur d'hébergement.

## Fichiers
- `index.html` : portfolio principal (sections et navigation par ancres).
- `script.js` : interactions vanilla JavaScript déjà présentes dans la version HTML fournie.
- `images/` : images et ressources.
- `carte-de-visite.html` : carte numérique.
- `carte-de-visite-imprimable.html` : carte personnalisable / imprimable.
- `scan-qr.html` : écran de confirmation du scan QR.
- `about/`, `projects/`, `contact/` : raccourcis vers les sections correspondantes.
- `carte-de-visite/` et `carte-de-visite-divin-ntwali/` : raccourcis vers les cartes.

## Utilisation locale
Ouvrir `index.html` dans un navigateur. Pour tester les routes et éviter les restrictions
`file://` de certains navigateurs, lancer un petit serveur local depuis ce dossier :

```bash
python3 -m http.server 8000
```

Puis visiter `http://localhost:8000`.

## Important — périmètre de cette conversion
L'archive fournie contenait déjà un ancien portfolio statique complet (`index.html` + `script.js`)
et les pages HTML autonomes des cartes. La conversion livrée réutilise cette base statique
existante et ajoute des raccourcis de routes. Elle ne constitue pas une traduction JSX ligne
par ligne de la version Next.js récente : les pages `/about`, `/projects` et `/contact`
pointent vers les sections du portfolio principal. Les métadonnées du domaine principal
ont été harmonisées sur `https://divinntwali.uk`.
