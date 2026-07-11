What is .gitignore?
  Sometimes we have files we do NOT want Git to track. For example:
  Password files
  Temporary files
  Large data files
  Files that can be regenerated
 The .gitignore file tells Git which files to ignore.

Create a file named .gitignore in your project root folder (note the dot at the beginning).

Inside this file, list the files and folders you want Git to ignore:


What is .gitkeep?
  Git does not track empty folders. But sometimes you need to keep an empty folder in your repository.

  Problem: Suneo creates an uploads folder where users will upload files later. The folder is empty now, but he wants it in the repository.

  Solution: Create an empty file called .gitkeep inside the folder.


