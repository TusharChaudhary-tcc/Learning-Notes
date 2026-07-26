Commands:-
    git init
    → Initialize a Git repository

    git status
    → Check repository status

    git add .
    → Stage all files

    git commit -m "message"
    → Create a commit and Save a snapshot

    git log
    → Show commit history

    git log --oneline
    → Show commit history in one line

    git diff
    → See line-by-line changes
      It compares:-
        Your working directory (current files)
        With the staging area (what you've added using git add)
 

    rm -rf *
    Delete everything in the current folder and all its subfolders without asking for confirmation.

    rm -rf .git
    This removes Git tracking but leaves files like index.html, style.css, etc., untouched.


--------------------------------------------------------------------------

## How to know which folder actually contains .git

- Run this command:

```bash
git rev-parse --show-toplevel
```

- Example output
C:\Users\Tushar\Documents\Learning Notes

- This tells you:
The Git repository root is Learning Notes.

--------------------------------------------------------------------------

## How to see which GitHub repository it is connected to

- Run:

```bash
git remote -v
```
Example:
origin  git@github.com:TusharChaudhary-tcc/Learning-Notes.git (fetch)
origin  git@github.com:TusharChaudhary-tcc/Learning-Notes.git (push)


---
These answer two different questions:

`git rev-parse --show-toplevel` → Which folder is the repository root?
`git remote -v` → Which GitHub repository is this connected to?