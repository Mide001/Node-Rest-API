const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const logger = require("morgan");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT;
const blogRouter = require("./routes/BlogRoutes");
const users = require("./routes/users");

app.set("secretKey", "blogAUTH");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const validateUser = (req, res, next) => {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    (err, decoded) => {
      if (err) {
        res.json({ status: "error", message: err.message, date: null });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    }
  );
};

app.use("/users", users);
app.use("/api/blogs/", validateUser, blogRouter);

app.get("/", (req, res) => {
    res.json({ message: "Build REST API with node.js"})
})

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
});

mongoose
  .connect(process.env.DATABASE)
  .then((res) => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
