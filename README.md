### TUUXSTART-JOO v1.2.0 ###

Starter template for "localhost" development of Joomla/SASS theme with Gulp as task runner

#### REQUIREMENTS ####

1. [Node.js](https://nodejs.org/en/download/)
2. Basic knowledge about [Gulp](http://gulpjs.com/)
2. Basic knowledge about Joomla [theme development](https://docs.joomla.org/Creating_a_basic_Joomla!_template)

#### INSTALL ####

First, download the master zip from GitHub or clone the repository, then go to Extension Manager in your Joomla admin panel and install the zip like any other Joomla theme.

Open your command line tool on "tuuxstart-joo" theme folder, by default `../templates/tuuxtar-joo`

Install dependencies
````
$ npm install
````
And run Gulp
````
$ gulp
````

#### TEMPLATE WORKFLOW ####

`./sass/*` files compiles in `./css/style.css`

#### TEMPLATE ENVIRONMENT: ####

1. [Gulp](http://gulpjs.com/)
2. [gulp-sass](https://www.npmjs.com/package/gulp-sass)
3. [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
4. [gulp-concat](https://www.npmjs.com/package/gulp-concat)
5. [gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano)
6. [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
7. [Normalize.css](https://necolas.github.io/normalize.css/Normalize.css)
8. [Bootstrap grid](http://getbootstrap.com/css/#grid)
9. [Fontawesome](http://fontawesome.io/)
10. Some helper SASS classes
