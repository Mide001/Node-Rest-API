const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next ) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            message: err.message,
        },
    });
});

mongoose.connect(process.env.DATABASE).then((res) => {
    console.log("Database connected");
}).catch((err) => {
    console.log(err);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})