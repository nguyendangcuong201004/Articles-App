import express, { Express, Request, Response } from "express"
import env from "dotenv";
env.config();

import { connect } from "./config/database"
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs";
import resolver from "./resolver";



const startServer = async () => {
    connect()

    const app: Express = express();
    const port: number = 3000;

    // GraphQL

    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolver
    })

    await apolloServer.start()

    apolloServer.applyMiddleware({
        app: app,
        path: "/graphql"
    })

    app.listen(port, () => {
        console.log(`Chạy trên cổng ${port}`);
    })
}

startServer()