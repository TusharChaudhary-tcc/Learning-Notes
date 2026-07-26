A common workflow is:

Create Project
      ↓
git init
      ↓
git add .
      ↓
git commit
      ↓
Create GitHub Repository
      ↓
git remote add origin <repository-url>
      ↓
git push -u origin main

---

# Local Repository vs Remote Repository

## Local Repository

- Stored on your computer.
- Contains the `.git` folder.
- Used to write code and create commits.

---

## Remote Repository

- Stored on GitHub.
- Used for backup and collaboration.
- Receives changes using `git push`.

---

# GitHub Connection

Connect local repository to GitHub.

```bash
git remote add origin <repository-url>
```

Meaning:

- `git` → Use Git
- `remote` → Manage remote repositories
- `add` → Add a new remote
- `origin` → Default remote name
- `<repository-url>` → GitHub repository URL

---

# git push -u origin main

Uploads the local branch to GitHub.

```bash
git push -u origin main
```

Meaning:

- `git` → Use Git
- `push` → Upload commits
- `-u` → Set upstream (remember remote branch)
- `origin` → Remote repository
- `main` → Branch name

After first push:

```bash
git push
```

is enough.

---

# git pull

Downloads the latest changes from GitHub.

```bash
git pull
```

Meaning:

- Downloads new commits.
- Merges them into the local repository.

Direction:

```
GitHub
   │
   ▼
Computer
```

Internally:

```
git pull
   │
   ├── git fetch
   └── git merge
```

---

# git push

Uploads local commits to GitHub.

Direction:

```
Computer
   │
   ▼
GitHub
```

---

# git clone

Copies an existing GitHub repository to your computer.

```bash
git clone <repository-url>
```

Creates:

- Project folder
- `.git` folder
- Complete commit history
- Remote connection

No need to run:

```bash
git init
```

after cloning.

---

# git init vs git clone

## git init

Use when creating a new project.

```bash
git init
```

Creates:

```
.git
```

inside the current folder.

---

## git clone

Use when the project already exists on GitHub.

```bash
git clone <repository-url>
```

Downloads everything.

---

# git branch -M main

Renames the current branch to `main`.

```bash
git branch -M main
```

Meaning:

- `branch` → Manage branches
- `-M` → Force rename
- `main` → New branch name

Not required if Git already creates `main`.

---

# Create New Repository vs Push Existing Repository

## Create New Repository

Use when Git is **not initialized**.

Need:

```bash
git init
git add .
git commit
git remote add origin
git push
```

---

## Push Existing Repository

Use when Git is already initialized.

Need:

```bash
git remote add origin
git push -u origin main
```

---

# Removing GitHub Connection

Disconnect the local repository from GitHub.

```bash
git remote remove origin
```

Effects:
- Local repository remains.
- Commits remain.
- GitHub connection is removed.

Reconnect later:

```bash
git remote add origin <repository-url>
```

---

# Multiple Remote Repositories

One local repository can connect to multiple GitHub repositories.

Example:

```
Local Repository
      │
      ├── origin
      │
      └── backup
```

Push:

```bash
git push origin main
```

or

```bash
git push backup main
```

---


# Typical Daily Workflow

```bash
git pull
git add .
git commit -m "Your commit message"
git push
```

---

# Important Points

- Git is local.
- GitHub is remote.
- `push` uploads code.
- `pull` downloads code.
- `clone` copies a repository.
- `fork` creates your own GitHub copy.
- `origin` is the default remote name.
- `main` is the default branch.
- `-u` sets the upstream branch.
- `README.md` explains the project.
- `.gitignore` prevents unnecessary files (e.g., `.exe`) from being tracked.

---

# Summary

| Command | Purpose |
|---------|---------|
| `git init` | Initialize a Git repository |
| `git clone` | Copy a repository from GitHub |
| `git remote add origin` | Connect local repository to GitHub |
| `git push` | Upload commits |
| `git pull` | Download latest changes |
| `git branch -M main` | Rename current branch to `main` |
| `git remote remove origin` | Disconnect GitHub repository |
| `git fork` | Create your own copy of another user's repository (GitHub feature) |