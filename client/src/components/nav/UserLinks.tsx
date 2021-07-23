import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { User } from "../../generated/graphql";

interface UserLinksProps {
  user: Pick<User, "id" | "username">;
}

export const UserLinks: React.FC<UserLinksProps> = ({ user }) => {
  return (
    <HStack spacing={2}>
      <Text>{user?.username}</Text>
      <Link as={NextLink} href="/logout">
        Logout
      </Link>
    </HStack>
  );
};
