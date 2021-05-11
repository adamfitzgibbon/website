import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Test } from "../entities/Entity";
import { MyContext } from "../types";

@Resolver()
export class TestResolver {
  @Query(() => [Test])
  posts(
    @Ctx() { em }: MyContext
  ): Promise<Test[]> {
    return em.find(Test, {});
  }

  @Query(() => Test, { nullable: true })
  post(
    @Arg('name', () => String) name: string,
    @Ctx() { em }: MyContext
  ): Promise<Test | null> {
    return em.findOne(Test, { name: name });
  }

  @Mutation(() => Test)
  async createPost(
    @Arg('name') name: string,
    @Ctx() { em }: MyContext
  ): Promise<Test | null> {
    const post = em.create(Test, { name });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Test)
  async updatePost(
    @Arg('name') name: string,
    @Arg('age') age: number,
    @Ctx() { em }: MyContext
  ): Promise<Test | null> {
    const post = await em.findOne(Test, { name });
    if (!post) {
      return null;
    }
    post.age = age;
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg('name') name: string,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    await em.nativeDelete(Test, { name });
    return true;
  }
}