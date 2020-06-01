# Caravan

Let's get there together!

Caravan is a “turn-by-turn”, web-based navigation experience for groups traveling together.

- It provides a smooth collaboration between travelers to a destination.
- It keeps track of everyone’s location and distance from the group throughout the trip.
- It is useful for businesses, families, and friends.

## Getting Started

1. Clone the repo
2. Run `yarn install` to install dependencies
3. Create a relational database with a host and username. This is where the data for the app will be stored.
4. With the database, host, and username created in the previous step run the sql file. We use Postgres' [psql](https://www.postgresql.org/docs/):\
   `psql -h host -U username -d myDataBase -a -f database.sql`
5. Using the host, database, user, and password created in step 3, create `DB_HOST`, `DB_NAME`, `DB_USER`, and `DB_PASSWORD` environment variables, respectively in a `secrets.js` file.
6. Obtain an API Key from Google Maps and add it as the `REACT_APP_API_KEY` environment variable.
7. Start the application by running `node server.js` to run the server and `yarn start` to start the React Application.

## Built With

Caravan used React and Redux as the front-end frameworks, as well as utilizing the Google Maps API. For our backend solution, we used PostgreSQL, Node.js, and Express.

<img src="src/assets/ArchitectureSeniorDesign (1).png" width="600px;"/>

## Authors

| [<img src="https://avatars2.githubusercontent.com/u/25853876?s=460&v=4" width="100px;"/><br /><sub><b>Julia Helena Aguiar</b></sub>](https://github.com/jhrbva)<br /> | [<img src="https://avatars1.githubusercontent.com/u/7966507?s=460&v=4" width="100px;"/><br /><sub><b>Khristian Brooks</b></sub>](https://github.com/kcode20)<br /> | [<img src="https://avatars1.githubusercontent.com/u/9854881?s=460&v=4" width="100px;"/><br /><sub><b>Quetourah Dalencourt</b></sub>](https://github.com/Quetourah)<br /> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<img src="https://avatars0.githubusercontent.com/u/12536700?s=460&v=4" width="100px;"/><br /><sub><b>Chantelle Levy</b></sub>](https://github.com/chanie01234)<br /> |  [<img src="https://avatars2.githubusercontent.com/u/38799293?s=460&v=4" width="100px;"/><br /><sub><b>Connie Wu</b></sub>](https://github.com/connie-code)<br />  |
