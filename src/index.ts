import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { __prod__ } from "./constants";
import mikroConfig from "./mikro-orm.config";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver, TestResolver } from './resolvers';

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, TestResolver],
      validate: false
    }),
    context: () => ({ em: orm.em })
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('server starting on localhost:4000');
  });
};

main().catch(err => console.error(err));
