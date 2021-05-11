import { Entity, PrimaryKey, Property, SerializedPrimaryKey } from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Test {
  @PrimaryKey()
  _id!: ObjectId;

  @Field()
  @SerializedPrimaryKey()
  id!: string;

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property()
  age?: number;

  @Field(() => [String])
  @Property()
  favoriteThings?: Array<string>;

  @Field(() => [Vehicle])
  @Property()
  vehicles?: Array<{ name: string, color: string, wheels: number; }>;
}

@ObjectType()
class Vehicle {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  wheels?: number;
}