### This is a beginners React app for developing an Ecommerce site

Check out this video, if you want to code along: https://www.youtube.com/watch?v=wPQ1-33teR4
(6 hours, 18 min)

### Start app

1. Install VS Code
2. Open terminal
3. Run `git clone git@github.com:gastonem/artisan-knives-ecommerce.git artisan-knives`
4. Run `npm start`
5. In browser navigate to localhost:3000

### To deploy

1. Push repo to your github account
2. Set homepage in package.json to your GithubPages url 
`"homepage": "https://{yourgithubaccount}.github.io/{artisanknivesrepositoryurl}/"`
3. Run `npm run build`
4. Run `npm install -g serve`
5. Run `serve -s build`

### To contribute to this repo

1. Create a branch with `git branch feature/fix-image-bug` then `git checkout feature/fix-image-bug`
then `git push origin git@github.com:gastonem/artisan-knives-ecommerce.git`
2. Create pull request through github clicking 'Pull Request' tab, then 'New Pull Request', then setting develop as the base branch and your branch as the 'compare' branch.
3. Select me to review it.
