module.exports = {
  "development": {
    "username": 271323,
    "password": "udesamovies",
    "database": "deployprog2_moviesdb", //Tiene que ser el nombre de la base de datos en tu motor de base de datos. Lo estas viendo en Workbench.
    "host": "mysql-deployprog2.alwaysdata.net",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
