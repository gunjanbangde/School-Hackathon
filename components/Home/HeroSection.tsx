import React from "react";
import { Box, Flex, Text, Container, Button } from "@chakra-ui/react";
import Reveal from "../library/Reveal";

const HeroSection: React.FC = () => {
  //   const lottieOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  return (
    <Box
      height={{ lg: "100vh" }}
      p="180px 0 130px"
      bg={{ md: "url(/images/clipart/4.png) no-repeat right bottom/60.5%" }}
    >
      <Container maxWidth="1200px">
        <Flex flexDirection={{ xs: "column-reverse", lg: "row" }}>
          <Box width={{ sm: "41%" }}>
            <Reveal left>
              <Text
                as="h1"
                mb="3rem"
                fontSize="5xl"
                fontWeight="700"
                color="textBlack"
                lineHeight="61px"
              >
                Dedicated team to build your SaaS project <em>faster</em>
              </Text>
              <Text mb="1rem" color="textGray">
                A team of experienced folks who understand the nuances of
                building modern internet products
              </Text>
            </Reveal>
            <Reveal d="flex" delay={0.4} mt="3rem">
              <a href="https://bit.ly/tif-abhishek" target="_blank">
                <Button
                  borderRadius="3px"
                  bg="textBlack"
                  color="white"
                  p="0 35px"
                  height="54px"
                  fontWeight="500"
                  _hover={{
                    bg: "teal.300",
                  }}
                >
                  Schedule a Call
                </Button>
              </a>
            </Reveal>
          </Box>
          <Box height={{ xs: "40%", sm: "auto" }} width="58%">
            {/* <Lottie options={lottieOptions} height="100%" width="100%" /> */}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
