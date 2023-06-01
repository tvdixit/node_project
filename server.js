const express = require("express");
const dbconnect = require('./db.js')
dbconnect();

const app = express();
app.use(express.json());

const { UserAccount, ChildrenData } = require("./routes/index.js")

app.use("/user", UserAccount, ChildrenData);

//_________________________________________
app.listen(5000, () => {
    console.log(`Server started at ${5000}`)
});