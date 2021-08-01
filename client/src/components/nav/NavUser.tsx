import React from "react";
import { useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import { LoginLinks } from "./LoginLinks";
import { UserLinks } from "./UserLinks";

interface NavUserProps {}

export const NavUser: React.FC<NavUserProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const user = fetching ? null : data?.me;

  return user ? <UserLinks user={user} /> : <LoginLinks />;
};
