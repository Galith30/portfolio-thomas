# BeThom – Site vitrine de Thomas, graphiste freelance

Intégration HTML/CSS responsive d'une maquette Figma (versions ordinateur et mobile, adaptation tablette libre), réalisée dans le cadre d'un challenge d'agence web.

**Site en ligne :** _à compléter avec l'URL publique_

## Aperçu des fonctionnalités

- Menu fixe au défilement, avec ancres vers les sections (`#accueil`, `#blog`, `#projets`, `#contact`)
- Menu hamburger accessible sur mobile (JavaScript natif, attributs `aria-expanded` / `aria-label`)
- Bouton de téléchargement du CV (PDF)
- Mise en page responsive en Flexbox, trois affichages :
  - ordinateur (plus de 1024px)
  - tablette (de 701px à 1024px)
  - mobile (700px et moins)
- HTML et CSS validés par le W3C
- Accessibilité de base : `lang="fr"`, textes alternatifs, labels de formulaire, landmarks (`header`, `nav`, `main`, `footer`), hiérarchie de titres (un seul `h1`, puis `h2`, `h3`)

## Police utilisée

**Heebo**, chargée depuis [Google Fonts](https://fonts.google.com/specimen/Heebo) (graisses 100 à 900).

## Technologies

- HTML5
- CSS3 (Flexbox, media queries)
- JavaScript (sans framework)

## Structure du projet

```
├── index.html      Page unique du site
├── style.css       Styles (ordinateur, tablette, mobile)
├── script.js       Menu hamburger mobile
├── Portfolio.pdf   CV téléchargeable
└── images/         Logo, photo, projets, icônes, favicon
```

## Installation et lancement en local

1. Cloner le dépôt :
   ```
   git clone https://github.com/VOTRE-PSEUDO/portfolio-thomas.git
   ```
2. Ouvrir le dossier dans VS Code.
3. Ouvrir `index.html` dans un navigateur, ou utiliser l'extension **Live Server** (clic droit sur `index.html` → *Open with Live Server*).

Aucune installation de dépendance n'est nécessaire.

## Mise en ligne

Le site est statique : il suffit d'envoyer tous les fichiers (en conservant le dossier `images/`) dans le dossier public du serveur mutualisé (souvent `www/` ou `public_html/`) par FTP (FileZilla) ou via le gestionnaire de fichiers de l'hébergeur.
