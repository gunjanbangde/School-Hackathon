import React from "react";
import { Box, Flex, Text, Container, SimpleGrid, Img } from "@chakra-ui/react";

import Reveal from "../library/Reveal";

const OurPartners: React.FC = () => {
  return (
    <Box
      width="100%"
      py={{ xs: "60px", lg: "120px" }}
      bg="linear-gradient(180deg,#261063 0%,#9B437BFA 100%)"
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal>
            <Text
              color="white"
              fontWeight="700"
              fontSize="5xl"
              lineHeight="48px"
              mb="3rem"
            >
              Partners
            </Text>
          </Reveal>
          <SimpleGrid
            width={{ xs: "90%", md: "70%", lg: "100%" }}
            columns={{ xs: 2, sm: 4 }}
            spacing={{ xs: 10, lg: 40 }}
          >
            <Img my="auto" width="100%" src="/assets/NBA.png" />
            <Img my="auto" width="100%" src="/assets/25.png" />
            <Img my="auto" width="100%" src="/assets/nirf.jpg" />
            <Img my="auto" width="100%" src="/assets/logo.png" />
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPartners;
