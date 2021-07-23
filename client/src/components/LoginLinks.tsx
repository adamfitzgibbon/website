import { HStack, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

interface LoginLinksProps {}

export const LoginLinks: React.FC<LoginLinksProps> = ({}) => {
  return (
    <HStack spacing={2}>
      <Link as={NextLink} href="/login">
        Login
      </Link>
      <Link as={NextLink} href="/register">
        Register
      </Link>
    </HStack>
  );
};
