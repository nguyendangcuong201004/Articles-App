import express, { Express, Request, Response } from "express"
import env from "dotenv";
env.config();

import { connect } from "./config/database"
connect()
import Article from "./models/articles.model"

const app: Express = express();
const port: number = 3000;


app.get("/articles", async (req: Request, res: Response) => {
    const articles = await Article.find({
        deleted: false,
    })
    res.json({
        articles: articles,
    })
})

app.listen(port, () => {
    console.log(`Chạy trên cổng ${port}`);
})