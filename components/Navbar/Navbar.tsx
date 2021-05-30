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
      boxShadow="0px 1px 20px 0px rgba(0,0,0,0.1)"
    >
      <Container maxWidth="none" height="100%" width="100%">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent={{ xs: "center", sm: "space-between" }}
        >
          <Img src="/assets/logo.png" height={{ sm: "48px" }} />
          <Button
            display={{ xs: "none", sm: "block" }}
            borderRadius="3px"
            height="44px"
            p="0 25px"
            color="white"
            bg="primary"
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
