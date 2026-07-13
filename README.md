# Hello_Dev0ps — Site vitrine

Site vitrine one-page de **Anthony Exartier** (*Hello_Dev0ps*), développeur full-stack augmenté par l'IA.

Interface cyberpunk / HUD, légère et sans backend pour l'instant.

## Aperçu

- **Accueil** — présentation et assistant d'intro
- **À propos** — parcours et approche
- **Expertises** — grille « Mon Arsenal » (cartes holographiques avec descriptions au survol)
- **Projets** — carousel de réalisations
- **Contact** — email, téléphone, LinkedIn, GitHub

## Stack

| Couche | Technologies |
|--------|--------------|
| Front | React 19, Vite 7, JavaScript |
| UI | CSS custom, [react-icons](https://react-icons.github.io/react-icons/) |
| Tooling | ESLint, pnpm |

## Prérequis

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

## Installation

```bash
git clone https://github.com/hellOdevOps-bit/site-vitrine-dev.git
cd site-vitrine-dev
pnpm install
```

## Scripts

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Serveur de développement (Vite) |
| `pnpm build` | Build de production dans `dist/` |
| `pnpm preview` | Prévisualisation du build |
| `pnpm lint` | Vérification ESLint |

## Structure du projet

```
src/
├── components/     # UI réutilisable (Navbar, Arsenal, Carousel…)
├── data/           # Données statiques (arsenal technique)
├── pages/          # OnePage — toutes les sections
├── assets/         # Images et logos
├── App.jsx
├── main.jsx
└── index.css       # Styles globaux et thème cyberpunk
```

## Personnalisation

- **Technologies & descriptions** → `src/data/arsenal.js`
- **Projets** → constante `PROJECTS` dans `src/pages/OnePage.jsx`
- **Couleurs & thème** → variables CSS dans `src/index.css` (`--accent-cyan`, `--bg-main`…)

## Déploiement

Build statique compatible avec tout hébergeur de fichiers statiques (Vercel, Netlify, GitHub Pages…).

```bash
pnpm build
```

Le dossier `dist/` contient le site prêt à déployer.

## Auteur

**Anthony Exartier** — Hello_Dev0ps

- [LinkedIn](https://linkedin.com/in/hellodev0ps)
- [GitHub](https://github.com/hellOdevOps-bit)
- [hello.dev0ps81@gmail.com](mailto:hello.dev0ps81@gmail.com)

## Licence

Voir le fichier [LICENSE](LICENSE).
