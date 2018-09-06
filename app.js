const express = require("express");
const bodyParser = require("body-parser");
const helloWorld = require("./controllers/helloWorld");
const createShoppingList = require("./controllers/createShoppingList");
const updateShoppingList = require("./controllers/updateShoppingList");
const getShoppingList = require("./controllers/getShoppingList");

const app = express();
app.use(bodyParser.json());

app.get("/", helloWorld);

app.get("/shopping-lists/:filename", getShoppingList);

app.post("/shopping-lists", createShoppingList);

app.put("/shopping-lists/:filename", updateShoppingList);

app.listen(3000, () => console.log("example app listening on port 3000"));
