import { HStack, Button, Text } from "@chakra-ui/react";
import React from "react";
import { BaseUserFragment, useLogoutMutation } from "../../generated/graphql";

interface UserLinksProps {
  user: BaseUserFragment;
}

export const UserLinks: React.FC<UserLinksProps> = ({ user }) => {
  const [{ fetching }, logout] = useLogoutMutation();

  return (
    <HStack spacing={2}>
      <Text>{user?.username}</Text>
      <Button onClick={() => logout()} isLoading={fetching} variant="link">
        Logout
      </Button>
    </HStack>
  );
};
