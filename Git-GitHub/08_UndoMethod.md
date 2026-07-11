Undoing Changes :-
Everyone makes mistakes. Git provides several ways to undo changes depending on where the changes are (Working Directory, Staging Area, or Repository).


==> Unstaging Files
    You staged a file by mistake and want to unstage it (move it back to Working Directory).

# Nobita accidentally staged wrong file
~ git add wrong-file.txt

# Unstage it
~ git restore --staged wrong-file.txt

# Or unstage ALL files
~ git restore --staged .


==> Discarding Changes in Working Directory 
    I made changes to a file but want to throw them away and go back to the last committed version.
    Like we commit and then do some work but before add this new work we don't want anymore and want to remove this and move to previous commit.
# Discard changes in one file
~ git restore filename.txt

# Discard ALL changes
~ git restore .

******* Warning ********
git restore permanently deletes your uncommitted changes. They cannot be recovered! Use this command carefully.



==> Undoing the Last Commit
    You made a commit but realized it was too early or had a mistake.

Option 1: Keep Changes (Soft Reset)
# Undo last commit, keep changes in staging area
~ git reset --soft HEAD~1

Option 2: Unstage Changes (Mixed Reset)
# Undo last commit, keep changes but unstage them
git reset HEAD~1

******** Danger **********
git reset --hard permanently deletes your changes. Only use this if you are absolutely sure!




==> Going Back to a Specific Commit
# View commit history
git log --oneline
a1b2c3d Latest commit
9e8f7g6 Previous commit
5h4i3j2 Old commit
1k2l3m4 Very old commit

# Go back to specific commit
git reset 5h4i3j2


==> Reverting a Commit (Safe Way)
Instead of deleting history, create a NEW commit that undoes a previous commit. This is safer for code already pushed to GitHub.

# Safely undo a specific commit
git revert 9e8f7g6

# Git opens editor for commit message
# Save and close - a new "revert" commit is created



Best Practice
Use git revert for commits already pushed to GitHub
Use git reset only for local commits not yet pushed
Never use --hard unless you are absolutely sure