# HW14-Tech-Blog 

[Tech Blog Webpage Deployed Site](https://radiant-basin-40892.herokuapp.com/)

![gitHubLicense](https://img.shields.io/badge/License-MIT-green.svg)

![](public/assets/images/home.png)
## Description
This application is a CMS-style blog site where developers can publish their blog posts and comment on other developersâ€™ posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.<br>

- Link to deployed application: [Tech Blog Webpage](https://justanothertxteditor.herokuapp.com/)
- Link to GitHub Repository: [Repository Webpage](https://github.com/Taylor25et/HW14-Tech-Blog)
![](public/assets/images/posts.png)
### User Story
```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
![](public/assets/images/login.png)

After cloning the repo you will run the following command in your terminal.
Dependencies Installation Command:
```md
npm install express-handlebars mysql2 sequelize dotenv bcrypt express-session connect-session-sequelize express
```
After that is complete you will run:
```md
npm run seeds
```
Followed by
```md
npm run start
```
then you will paste the following link into your web browser: https://localhost:3003

## Usage
![](public/assets/images/posts.png)

This application's folder structure follows the Model-View-Controller paradigm. The express-handlebars package was used to implement Handlebars.js for my Views folder. The MySQL2 and Sequelize packages were used to connect to a MySQL database for my Models. I created an Express.js API for my Controllers. The dotenv package was to used to handle environment variables and the bcrypt package to hash passwords. The express-session and connect-session-sequelize packages were implimented for authentication.

#### Dependencies
- [MySQL2](https://www.npmjs.com/package/mysql2) 
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Express](https://www.npmjs.com/package/express)
- [dotenv package](https://www.npmjs.com/package/dotenv)
- [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
- [bcrypt package](https://www.npmjs.com/package/bcrypt) 
- [express-handlebars](https://www.npmjs.com/package/express-handlebars)
- [express-session](https://www.npmjs.com/package/express-session)

## License
This project is covered under the MIT license. 
![gitHubLicense](https://img.shields.io/badge/License-MIT-green.svg)

## Contributing
This project would not have been possible without the contributions credited in the links below.

Bootstrap Form Control: https://getbootstrap.com/docs/5.1/forms/form-control/
Bootstrap CSS Template: https://startbootstrap.com/template/full-width-pics
Template for Post Format: https://www.bootdey.com/snippets/view/bs4-forum#html

## Tests
For testing opportunities please clone the repo and make adjustments to your code when needed.

## Questions
Please feel free to contact me with any questions or suggestions either on my GitHub account or via email.
* GitHub: https://github.com/taylor25et
* E-Mail: taylor25et@gmail.com


