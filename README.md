----------github branches creation----------
- 1- git checkout main 
- 2- git pull origin main
- 3- git checkout -b <branchname>
- 4- make changes in your code
- 5- git add .
- 6- git commit -m "commit"
- 7- git push origin <branchname>

- -----------git cherry-pick--------------
- 1- git log --oneline
- 2- copy hash code
- 3- git checkout <branchname>
- 4- git cherry-pick <paste hash code here>
- 5- continue code and follow above 

-------------TS Setup-----
- 1- npm install -g typescript
- 2- tsc --init
- 3- set tsconfig.json file, set 'rootDir' 'outDir'
- 4- tsc -watch


-------------if TS execution error-----
- open 'Powershell' and 'run as administrator'
- then run the following command:
- Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
