import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";

const main = async () => {
  const orm = await MikroORM.init({
    entities: ["test"],
    dbName: 'test',
    type: 'mongo',
    debug: !__prod__
    // user credentials?
  });
}

main(); 

console.log("Hello World!");