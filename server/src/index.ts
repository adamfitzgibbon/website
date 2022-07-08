import "reflect-metadata";
import "dotenv-safe/config";
import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { COOKIE_NAME, __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver, TestResolver, UserResolver } from "./resolvers";
import redis from "redis";
import session from "express-session";
import connectRedis from "connect-redis";
import { MyContext } from "./types/mikro-orm";
import cors from "cors";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const app = express();
  const RedisStore = connectRedis(session);
  const redisClient = redis.createClient({
    url: "redis://redis:6379",
  });

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        sameSite: "lax", // csrf
        httpOnly: true,
        secure: __prod__, // cookie only works in https
        // find proper domain// domain: __prod__ ? ".codeponder.com" : undefined
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET, // TODO: make this secret
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, TestResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ em: orm.em, req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () => {
    console.log("server starting on localhost:4000");
  });
};

main().catch((err) => console.error(err));
