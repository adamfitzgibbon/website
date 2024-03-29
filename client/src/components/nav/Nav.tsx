import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Image } from "../shared";
import { NavUser } from "./NavUser";

interface NavProps {}

export const Nav: React.FC<NavProps> = ({}) => {
  return (
    <Box bg="tan" p="0 4px" h={400} w="100%" pos="sticky" top={-346}>
      <Flex alignItems="center" h={50} pos="sticky" top={0}>
        <Box>
          <Heading size="md">Adam's Website</Heading>
        </Box>
        <Spacer />
        <NavUser />
      </Flex>
      <Image
        height={100}
        width={100}
        borderRadius="full"
        src="/adam_mug.jpg"
        alt="Adam Fitzgibbon"
      />
    </Box>
  );
};
