import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Button,
  SimpleGrid,
  Img,
} from "@chakra-ui/react";
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
      p={{ xs: "80px 0 60px", sm: "180px 0 130px" }}
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          flexDirection={{ xs: "column-reverse", lg: "row" }}
        >
          <Box width={{ lg: "41%" }}>
            <Reveal left>
              <SimpleGrid
                mt="1rem"
                mb="2rem"
                width={{ xs: "90%", md: "70%", lg: "100%" }}
                columns={{ xs: 2, sm: 4 }}
                spacing={{ xs: 10, lg: 5 }}
              >
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/NBA.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/25.png" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/nirf.jpg" />
                </Reveal>
                <Reveal>
                  <Img my="auto" width="100%" src="/assets/IIC.png" />
                </Reveal>
              </SimpleGrid>
              <Text
                as="h1"
                mb={{ xs: "1rem", lg: "3rem" }}
                fontSize={{ xs: "4xl", lg: "5xl" }}
                fontWeight="700"
                textAlign={{ xs: "center", lg: "left" }}
                color="primary"
                lineHeight="1.1"
              >
                LNCT Group of Colleges present, National Level Virtual Hackathon
              </Text>
              <Text
                textAlign={{ xs: "center", lg: "left" }}
                color="#14213d"
                mb="1rem"
              >
                Hackathon Club is going to start a new initiative to provide
                student’s platform to solve some of the pressing problem
                statements related to real life under an event “National Level
                Hackathon – 2021 Version 1.0”
              </Text>
            </Reveal>
            <Reveal
              d="flex"
              justifyContent={{ xs: "center", lg: "flex-start" }}
              delay={0.4}
              mt="3rem"
            >
              <a href="https://bit.ly/LNCT-Hackathon" target="_blank">
                <Button
                  borderRadius="3px"
                  bg="primary"
                  color="white"
                  p="0 35px"
                  height="54px"
                  _hover={{
                    bg: "linkedin.300",
                  }}
                >
                  Register Now
                </Button>
              </a>
            </Reveal>
          </Box>
          <Reveal
            right
            delay={0.4}
            height={{ xs: "40%", sm: "auto" }}
            width={{ lg: "58%" }}
          >
            <Lottie options={lottieOptions} height="100%" width="100%" />
          </Reveal>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HeroSection;
