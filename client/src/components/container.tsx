import { Box } from "@chakra-ui/layout";
import React from "react";

interface ContainerProps {
  variant?: "small" | "regular";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  );
};
