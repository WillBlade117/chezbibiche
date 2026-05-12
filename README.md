# Base de travail - Sites Vitrines (Astro + Tailwind v4)

Ce template contient la structure de base, les composants génériques (Header, Footer), les pages légales pré-remplies, ainsi que les configurations optimisées (robots.txt, .htaccess pour o2switch).

## Démarrer un nouveau projet

Pour créer un nouveau projet à partir de ce template, ouvrez votre terminal et lancez la commande suivante :

```bash
# 1. On clone ton template dans le dossier du nouveau client (ex: projet-client)
git clone https://github.com/WillBlade117/ma-base-astro.git projet-client

# 2. On rentre dans le dossier
cd projet-client

# 3. On supprime l'historique Git du template pour repartir à zéro
rm -rf .git

# 4. On initialise un nouveau Git propre pour ce client
git init

# 5. On installe les dépendances
npm install