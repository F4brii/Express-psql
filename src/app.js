const express = require("express");
const db = require('./database/database');
const routerPerson = require('./routers/person.router');

// sync database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

const app = express();
// parse requests of content-type - application/json
app.use(express.json());

app.use('/', routerPerson);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

module.exports = app;