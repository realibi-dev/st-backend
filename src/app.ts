import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import categoriesRouter from './routers/categoriesRouter';

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/categories', categoriesRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is listening on port " + port);
});