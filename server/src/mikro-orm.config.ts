import { Test, User } from "./entities";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  entities: [Test, User],
  dbName: "test",
  type: "mongo",
  debug: !__prod__,
  clientUrl: "mongodb://mongo:27017",
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
