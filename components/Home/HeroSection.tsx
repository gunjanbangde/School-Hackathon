import React from "react";
import { Box, Flex, Text, Container, Button } from "@chakra-ui/react";
import Lottie from "react-lottie";

import animationData from "@/public/assets/hero_lottie.json";
import Reveal from "../library/Reveal";

const HeroSection: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Flex
      alignItems="center"
      height={{ lg: "100vh" }}
      width="100%"
      p="180px 0 130px"
      bg={{ md: "url(/images/clipart/4.png) no-repeat right bottom/60.5%" }}
    >
      <Container maxWidth="1440px" px="80px">
        <Flex flexDirection={{ xs: "column-reverse", lg: "row" }}>
          <Box width={{ sm: "41%" }}>
            <Reveal left>
              <Text
                as="h1"
                mb="3rem"
                fontSize="5xl"
                fontWeight="700"
                color="#22223b"
              >
                Some Hackathon
              </Text>
              <Text color="#14213d" mb="1rem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Magna fermentum iaculis eu non diam phasellus.
              </Text>
            </Reveal>
            <Reveal d="flex" delay={0.4} mt="3rem">
              <Button
                borderRadius="3px"
                bg="linkedin.500"
                color="white"
                p="0 35px"
                height="54px"
                _hover={{
                  bg: "linkedin.300",
                }}
              >
                Register Now
              </Button>
            </Reveal>
          </Box>
          <Box height={{ xs: "40%", sm: "auto" }} width="58%">
            <Lottie options={lottieOptions} height="100%" width="100%" />
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeroSection;
