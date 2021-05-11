import { EntityManager } from "@mikro-orm/core";
import { Connection, IDatabaseDriver } from "@mikro-orm/core";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
};