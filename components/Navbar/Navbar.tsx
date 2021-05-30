import React from "react";
import { Box, Flex, Container, Button, Img } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <Box
      position="fixed"
      bg="white"
      top="0"
      left="0"
      zIndex="sticky"
      width="100vw"
      height="74px"
      px={{ md: "100px" }}
    >
      <Container maxWidth="none" height="100%" width="100%">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Img
            src="https://via.placeholder.com/200x48.png?text=LOGO+HERE"
            height={{ sm: "48px" }}
          />
          <Button
            display={{ xs: "none", sm: "block" }}
            borderRadius="3px"
            height="44px"
            p="0 25px"
            color="white"
            bg="linkedin.500"
            _hover={{
              bg: "linkedin.300",
            }}
          >
            Register Now
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
