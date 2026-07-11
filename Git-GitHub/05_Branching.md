//Understanding Branches:-
    Branches are one of Git's most powerful features. They let you work on new features without breaking the main code.

//Why Use Branches?
Imagine this scenario:
    Gian's main code is working perfectly
    Nobita wants to add a new login feature
    While Nobita is working, the login feature is half-done and broken
    If Nobita works directly on the main code, he will break it for everyone
    Solution: Nobita creates a separate branch to work on the login feature. The main code stays working while he experiments.


=>Creating a Branch :-
# Create a new branch
    ~ git branch feature-login(this is branch name)

# Switch to that branch
    ~ git Switch feature-login           
          or
    ~ git checkout feature-login

# Or do both in one command
    ~ git checkout -b feature-login
          or
    ~ git switch -c feature-login

    Switched to a new branch 'feature-login'


# Listing Branches:-
    ~ git branch

          main
        * feature-login
     The * shows which branch you are currently on

# Switch to main branch
    ~ git checkout main

# Switch to feature branch
    ~ git checkout feature-login

# Delete a branch (after merging)
    ~ git branch -d feature-login

# Force delete (even if not merged)
    ~ git branch -D feature-login


//Some important command used in branch repeatedely
Note:- We can check git branch only after commit

# To create and switch to new branch
    ~ git switch -c feature

# Check the graph
    ~ git log --oneline --graph --all