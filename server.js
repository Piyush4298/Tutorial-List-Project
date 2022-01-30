const express = require('express');
const cors = require('cors');

const app = express();

const db = require('./app/models');
db.sequelize.sync();

var corsOption = {
    origin: "http://localhost:4201"
};

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res)=>{
    res.json({message: "Welcome to tutorial list application."});
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT||8080;
app.listen(PORT, ()=>{
    console.log(`Server running and listening to port ${PORT}`);
});