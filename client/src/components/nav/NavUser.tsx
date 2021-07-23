import React from "react";
import { Text } from "@chakra-ui/react";
import { useMeQuery } from "../../generated/graphql";
import { LoginLinks } from "./LoginLinks";

interface NavUserProps {}

export const NavUser: React.FC<NavUserProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  const user = fetching ? null : data?.me?.username;

  return user ? <Text>{user}</Text> : <LoginLinks />;
};
