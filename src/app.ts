import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import categoriesRouter from './routers/categoriesRouter';
import providersRouter from './routers/providersRouter';
import usersRouter from './routers/usersRouter';
import cors from 'cors';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/categories', categoriesRouter);
app.use('/providers', providersRouter);
app.use('/users', usersRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server is listening on port " + port);
});