Merge Conflicts:-
A merge conflict happens when two people edit the SAME lines in the SAME file. Git does not know which version to keep, so it asks you to decide.

What a Conflict Looks Like
Git modifies the conflicted file to show both versions:

<<<<<<< HEAD
Total Score: 100
=======
Total Score: 200
>>>>>>> feature-scoring


Resolving the Conflict :-

Step 1: Open the File
Open score.txt in your text editor. You will see the conflict markers.

Step 2: Decide What to Keep
You have three options:

Keep your version (100)
Keep their version (200)
Keep both or write something new
Important: Remove ALL conflict markers (<<<<<<<, =======, >>>>>>>)

Step 3: Stage the Resolved File
git add score.txt

Step 4: Complete the Merge
git commit -m "Resolve merge conflict - use score 200"


Checking for Conflicts:-
# See which files have conflicts
git status

Unmerged paths:-
  both modified:   score.txt

Aborting a Merge:-
If you want to cancel the merge and start over:
git merge --abort



Conflict Resolution Steps Summary:-
1. Run git status to see conflicted files
2. Open each file and look for <<<<<<< markers
3. Decide which code to keep
4. Remove all conflict markers
5. Save the file
6. git add filename
7. git commit





# Fork - It is a practice of copying a repo - it completely copies the code and settings of a repo
"It is a rough copy of a repo"

Steps to do so:
1. go to a repo
2. click fork on the repo
3. Use a desired name and click create fork.