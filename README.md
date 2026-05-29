# Luxora

Simple static shopping website project.

How to view locally

- Open `index.html` in your browser (double-click or use a local server).

How to upload to GitHub

Run these commands inside the project root (`d:\internship`):

```bash
# initialize repository (if not already a git repo)
git init

# add files and commit
git add .
git commit -m "Initial commit: Luxora website"

# set main branch
git branch -M main

# add the remote (HTTPS)
git remote add origin https://github.com/Shanzay336/Luxora.git

# push to GitHub
git push -u origin main
```

If you prefer SSH, use:

```bash
git remote add origin git@github.com:Shanzay336/Luxora.git
git push -u origin main
```

Notes:
- Make sure the GitHub repo `Shanzay336/Luxora` exists and you have permission to push.
- If prompted for credentials on HTTPS, use your GitHub username and a personal access token (PAT) instead of a password.
- If the remote already has commits, run `git pull --rebase origin main` first or resolve merge conflicts as needed.
