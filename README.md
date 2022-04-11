# GraphQL first tutorial

This is my first attempt at using GraphQL (technically my second, I started with this back-end project <a href="https://youtu.be/ZQL7tL2S0oQ">here</a> and then wanted to see how it works with the front-end)

Thanks to Youtuber Web Dev Simplied for the easy to follow instructions: https://youtu.be/0ZJI4cBS4JM

The endpoint is https://countries.trevorblades.com/. I used the fetch method and a query, first to get a dropdown list of continents. There's a change event listener on the dropdown list, so once the user selects a continent, a function runs with another query that populates all of the countries and their capitals for that particular continent.

I didn't use a framework. This is built with vanilla JavaScript, HTML, DOM manipulation, and a small amount of CSS.

Visit the Live Site: https://mwhite-graphql-countries-caps.herokuapp.com/

# How to deploy to Heroku

By default, you can't deploy a vanilla JavaScript site to Heroku, because Heroku doesn't recognize it. Heroku does recognize Node.JS and Express. 

- First, you'll need to have Node and Git installed on your computer, and you'll need a free Heroku account. 
- You'll also need to go ahead and create your Javascript project with HTML and CSS in your favorite IDE. I'm using IntelliJ. And go ahead and create your github repo for it.
- Log in to Heroku and create a new app. The page that pops up will give you some code to use. In your IntelliJ terminal, type heroku login
- Then you need to add the heroku remote, in the IntelliJ terminal, type heroku git:remote -a name-of-your-app (You’ll see this command on heroku after you create the app)
- In your intellIJ terminal, you can type git remote -v to see which remotes you’re connected to
- In your intellIJ terminal, type npm init
- This will walk you through creating a package.json file. You can just press enter to use the default values or if you’d like you can enter values for description, keywords and author.
- Now, you need to install express. In your intellIJ terminal, type npm install express and press enter. This will install the correct packages
- Create a file called server.js, you can do this using touch in your terminal: In your intellIJ terminal, type touch server.js
- Put this code in your server.js file:

<code>

  const express = require('express');

  const app = express();

  const path = require('path');

  app.use(express.static(path.join(__dirname)));

  app.get('/', function (req, res) {
  
  res.sendFile(path.join(__dirname, 'index.html'));
  
  });

  app.listen(process.env.PORT || 3000);
  
</code>

- Open your package.json and under scripts add “start”: node server.js

<code>

  "scripts": {
  
  "start": "node server.js",
  
</code>
  
  - In your gitignore, add node_modules/ to your gitignore file, you don’t need to push those to the repo.
  - Do a git status, git add -A, git commit -m “your commit here”, and git push origin main to make sure everything is up-to-date.
  - Then you can git push heroku main.
  - It will take a few minutes to run, the url to your heroku page will pop up in the IntelliJ terminal.
  - see these sites for more help, https://www.freecodecamp.org/news/how-to-deploy-your-site-using-express-and-heroku/, or https://javascript.plainenglish.io/how-to-deploy-your-javascript-application-e907251c6af1


  


