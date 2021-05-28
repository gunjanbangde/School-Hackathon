import React from "react";
import { Box, Flex, Container, Button, Img } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Box height="74px" px="100px">
      <Container height="100%" maxWidth="1200px">
        <Flex height="100%" alignItems="center" justifyContent="space-between">
          <Img src="/images/logo.svg" height="48px" />
          <Button
            borderRadius="3px"
            height="44px"
            p="0 25px"
            color="white"
            bg="primary"
          >
            Schedule a Call
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
