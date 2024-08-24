import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(8080, () => {
    console.log("server is listening");
});