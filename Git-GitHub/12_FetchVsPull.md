git fetch vs git pull

# git fetch:-
- Downloads latest GitHub updates and branch information.
- Does not change our project files.
- Safe for checking updates first.

# git pull:-
- Downloads updates and integrates them into your current branch.
- Can change your project files.
- Use when you're ready to bring updates into your branch.



*`When to use them`*

1. git fetch origin
- Use when we want to check for updates or test a friend's PR before merging it.
- cmds:-
git fetch origin
git branch -r


2. git pull origin main
- Use when a PR has been merged into GitHub's main and we want those changes in our local main.
- cmds:-
git switch main
git pull origin main



## Easy trick to remember: ##
- fetch = Get updates, don't integrate them.
- pull = Get updates and integrate them into your current branch.




## Steps to check friend's changes before merging friend's PR ( Git Fetch Steps ):-
1. Fetch the latest branches
git fetch origin

2. Find your friend's branch name
git branch -r

3. Switch to your friend's PR branch
git switch -c font_scroll --track origin/font_scroll

4. Verify the branch:
git status

5. Run the UI
cd frontend
npm install
npm run dev

6. If everything is fine then accept PR and then do this 
git switch main
git pull origin main



## Assume this case like I don't like the changes made by friend's and i also don't want to merge the PR do these steps:-
1. git switch main
2. git branch -d font_scroll
          OR
    If Git refuses because the branch isn't merged, and you're certain you don't need any commits on that local branch, you can use:    git branch -D font_scroll

3. To remove the branch information fetched from GitHub