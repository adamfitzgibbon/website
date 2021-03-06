import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { NavUser } from "./NavUser";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Flex bg="tan" p={4}>
      <Box>
        <Heading size="md">Adam's Website</Heading>
      </Box>
      <Spacer />
      <NavUser />
    </Flex>
  );
};
