require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "early",
    database: "db_cars",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  test: {
    username: "postgres",
    password: "early",
    database: "db_cars",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5432,
  },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialect: "postgres",
    port: process.env.PGPORT,
  },
};
