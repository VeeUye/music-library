# Music Library 🎹

A simple music library API that performs CRUD operations on a SQL database.

The project is part of the [Manchester Codes](https://manchestercodes.com) Fast Track Software Engineering Bootcamp.

## Technologies & Tools

- JavaScript
- MySQL
- Express.js
- Node.js
- Postman
- Swagger
- Docker
- Chai, Mocha, SuperTest

## Using the Database

### Heroku

This app is hosted at [vees-music-library.herokuapp.com](https://vees-music-library.herokuapp.com/). In order to interact with the database, use [Postman](https://www.postman.com/) to make HTTP requests.

For a complete description of the available HTTP methods for this app, please visit [vees-music-library.herokuapp.com/api-docs](https://vees-music-library.herokuapp.com/api-docs/#/).

### Running locally

You can also run Music Library locally. This guide assumes you have [Docker](https://www.docker.com/) installed.

> #### 1. Clone this repo
>
> [Clone Music Library](https://github.com/VeeUye/music-library). For more information, visit [cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
>
> #### 2. Install Node Packages
>
> Use the terminal command `npm install` in the root of your local Music Library repo.
>
> #### 3. Pull a MySQL Docker container
>
> Run this command in the terminal to install a MySQL docker image:
> `docker pull mysql/mysql-server:latest`
>
> #### 4. Run the container
>
> Run this command in the terminal:  
> `docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql`
> Replace `password` with a password of your choosing.
>
> #### 5. Set up your environment variables
>
> Create two files at the root level of the Music Library directory. Name these `.env` and `.env.test`.  
> These file names are already included in the projects `.gitignore` file.
> In `.env`, add the following:

    DB_PASSWORD=your_password
    DB_NAME=music_library_dev
    DB_USER=root
    DB_HOST=localhost
    DB_PORT=3307
    PORT=3000

> `your_password` should be the password you selected in step 4.
> In `.env.test`, copy and paste in the code from `.env` with this alteration: `DB_NAME=music_library_test`
>
> #### 6. Run the Music Library
>
> Run the app using `npm run start:dev`. You can then use [Postman](https://www.postman.com/) to interact with the database.
>
> #### 7. Test the Music Library
>
> Run the test suite with `npm test`.

## Roadmap

- [ ] Rewrite album creation functionality to require artistId in reqest parameters
- [ ] Edit update album endpoint description to emphasise partial update of album object
- [ ] Add Songs table and associated functionality
- [ ] Create GUI

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Acknowledgements

[Manchester Codes](https://www.manchestercodes.com/) for including this project on their Bootcamp learning track.

[Dev Arrowsmith](https://github.com/DevArrowsmith/music-library) for README installation guide inspiration.

## Project Status

Active!
