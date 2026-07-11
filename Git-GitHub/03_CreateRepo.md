All steps to create a new repository and connect to local repo

Note:- Create an empty GitHub repository (no README) → connect → push.

1: Create repository on GitHub
    Leave unchecked:
    ☐ Add a README file
    ☐ Add .gitignore
    ☐ Choose a license
     Create repository.

2: In your local project folder
    Run:

    git init
    git add .
    git commit -m " "

3: Connect GitHub repository
    Using SSH or https:
    git remote add origin git@github.com:TusharChaudhary-tcc/calculator-app.git

4: Push
    -> To rename branches :-
        ~ git branch -M main

    git push -u origin main

Done ✅




//Some Commands to connect local(origin) repo to remote(cloud) repo

# Add GitHub as remote (replace with your URL)
git remote add origin https://github.com/gian-doraemon/school-project.git

# Verify the connection
git remote -v

# To remove the origin
git remote remove origin



Note :-------
For future projects, I have two options:

Option 1 (recommended when you already have code locally):
    Create empty GitHub repo:
    ❌No Add README
    ❌No  Add .gitignore
    Then:-
~ git remote add origin <repo-url>
~ git push -u origin main

Option 2: Create README on GitHub
Then always do:
~ git pull origin main --rebase

before the first push.





## Common Issue: Push Rejected on New Repository

If a new GitHub repository is created with a README.md file, it creates an initial commit on the remote repository. When pushing local commits for the first time, Git may reject the push because both local and remote repositories have different histories.

Solution:
- Pull the remote changes first:
  git pull origin main --rebase

- Then push your commits:
  git push origin main