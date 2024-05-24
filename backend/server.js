const express = require(`express`)

const mongoDB = require(`./db`)

const app = express();
const Port = 4000;

mongoDB();

app.listen(Port, () => {
    console.log(`I'm listening on ${Port}`)
})