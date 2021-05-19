import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @PrimaryKey()
  _id!: ObjectId;

  @Field()
  @SerializedPrimaryKey()
  id!: string;

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  @Property({ type: "text" })
  password!: string;

  @Field(() => String)
  @Property({ type: "date" })
  createdOn = new Date();
}