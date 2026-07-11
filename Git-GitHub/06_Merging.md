Merging Branches:-
    When you finish working on a feature branch, you bring those changes back into the main branch. This is called merging. Git has four types of merges — each works differently depending on the situation.

1. Fast Forward Merge:-
    This is the simplest merge. It happens when the main branch has no new commits since you created the feature branch. Git simply moves the main pointer forward — no extra merge commit is created.
    When does it happen?
    Gian creates a feature branch, adds a file, and commits. Meanwhile, nobody touches main. When Gian merges back, Git just slides main forward.

    Practical Steps:-
# Step 1: Create and switch to feature branch
  git switch -c feature

# Step 2: Create a new file and commit
  echo "Feature Code" > feature.txt
  git add .
  git commit -m "added feature file"

# Step 3: Switch back to main
  git switch main

# Step 4: Merge
  git merge feature

# Check the graph
  git log --oneline --graph --all



2. Three-Way Merge
    This happens when both the main branch and the feature branch have new commits after the branch was created. Git cannot simply slide the pointer forward — it has to create a new merge commit that combines both histories.
    When does it happen?
    Nobita creates a login-feature branch and adds login.txt. Meanwhile, Gian also adds main.txt on main. Now both branches have diverged. Git needs a merge commit to join them.

    Practical Steps:-
# Step 1: Create login-feature branch
  git switch -c login-feature

# Step 2: Add a file on the feature branch
  echo "Login Feature" > login.txt
  git add .
  git commit -m "added login"

# Step 3: Switch back to main and add a different file
  git switch main
  echo "Main Update" > main.txt
  git add .
  git commit -m "main updated"

# Step 4: Merge with -m to avoid Vim editor
  git merge login-feature -m "three way merge completed"


3. Squash Merge:-
    Squash merge takes all the commits from a feature branch and squashes them into one single commit on main. The individual commits from the feature branch are not preserved — only the final result is added as one clean commit.
    When to use it?
    Suneo worked on the UI and made 3 small commits — navbar, footer, sidebar. Instead of cluttering main's history with 3 commits, Gian squashes them into one clean commit called "UI Feature Complete".

    Practical Steps:-
# Step 1: Create ui-feature branch
  git switch -c ui-feature

# Step 2: Make multiple commits
  echo "Navbar" > navbar.txt
  git add .
  git commit -m "navbar added"

  echo "Footer" > footer.txt
  git add .
  git commit -m "footer added"

  echo "Sidebar" > sidebar.txt
  git add .
  git commit -m "sidebar added"

# Step 3: Switch to main
  git switch main

# Step 4: Squash merge (stages all changes but does NOT commit yet)
  git merge --squash ui-feature

# Step 5: Commit manually with one clean message
  git commit -m "UI Feature Complete"

Key Point:-
--squash stages all the changes but does NOT create a commit automatically. You must run git commit yourself with a clean message. The 3 individual commits from ui-feature will not appear in main's history.



4. Octopus Merge:-
    Octopus merge lets you merge more than two branches at the same time in a single command. Git creates one merge commit that has multiple parents — one for each branch merged.
    When to use it?
    Gian, Nobita, and Suneo each worked on separate independent features — feature-a, feature-b, feature-c. None of them conflict with each other. Gian merges all three into main in one go.

    Practical Steps:-
# Branch 1: feature-a
  git switch -c feature-a
  echo "A Feature" > a.txt
  git add .
  git commit -m "feature a"

# Branch 2: feature-b
  git switch main
  git switch -c feature-b
  echo "B Feature" > b.txt
  git add .
  git commit -m "feature b"

# Branch 3: feature-c
  git switch main
  git switch -c feature-c
  echo "C Feature" > c.txt
  git add .
  git commit -m "feature c"

# Switch to main and merge all three at once
  git switch main
  git merge feature-a feature-b feature-c -m "octopus merge all features"

Key Point:-
The output says Merge made by the 'octopus' strategy. One merge commit was created with three parents. This only works when there are no conflicts between the branches.

