import { withUrqlClient } from "next-urql";
import React from "react";
import { Nav } from "../components/nav/Nav";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <>
      <Nav />
      <div>Hello World?</div>
      {!data ? null : data.posts.map((p) => <div key={p.id}>{p.name}</div>)}
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
