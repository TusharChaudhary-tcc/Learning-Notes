Git = local
GitHub = remote directory 

After installing 

Configuring Git on a Terminal - 
codes: 
1. git config --global user.name "Git_accnt_username" :- connects to the username in GitHub
2. git config --global user.email "Git_accnt_mail" :- To verify both username and email combo
3. git config list - List the details of the configuration of the linked account


The Three Stages of Git:-
  1. Working Directory  →  2. Staging Area  →  3. Repository
     (where you edit)      (files ready to save)  (permanently saved)


Types of files in git 
1. untracked - never committed before and hence git doesn't have idea about the content of the file.
2. modified - committed earlier
3. staged - ready to be committed
4. unmodified - no changes observed


*Some Keywords:-
   pwd -  Present Working Directory

   cd "Folder_name"   -  Change Directory
   # Navigate to your project folder

   ls -> list
   # It shows all the files and folders in your current directory (folder).

   ls -a 
   # Show hidden files

   ls -l
   # Show detailed information

   ls -la
   # Combine both

   Windows Command Prompt (cmd), the equivalent command is:
   dir

   mkdir folder_name
   # It is a command used to create a new folder (directory).


   To print the data of a file 
   # we use "cat fileName"      e.g.- cat Learning/Notes.txt
