import React from "react";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { IoEarthSharp } from "react-icons/io5";
import Lottie from "react-lottie";

import Reveal from "../library/Reveal";
import animationData from "@/public/assets/why_lottie.json";

const WhyJoin: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box width="100%" pt="120px" bg="linkedin.100">
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex flexDirection={{ xs: "column", lg: "row" }}>
          <Box width={{ xs: "90%", sm: "66%", lg: "41%" }}>
            <Reveal left>
              <Text
                color="facebook.900"
                fontWeight="700"
                fontSize="5xl"
                lineHeight="48px"
                mb={{ xs: "3rem", lg: "0" }}
                width={{ lg: "360px" }}
              >
                Why Join Hackathon?
              </Text>
              <Lottie options={lottieOptions} height="100%" width="100%" />
            </Reveal>
          </Box>
          <Box pb="120px" ml={{ lg: "8.3%" }} width={{ lg: "50%" }}>
            <Flex flexWrap="wrap" width="100%">
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text color="linkedin.700" fontSize="6xl">
                  <HiOutlineLightBulb />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="facebook.900"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovative Solutions
                </Text>
                <Text color="gray.600" mb="1rem">
                  Build innovative solutions for problems. Be a part of Nation
                  Building Opportunity.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="linkedin.700" fontSize="5xl">
                  <IoEarthSharp />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="facebook.900"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovation Movement
                </Text>
                <Text color="gray.600" mb="1rem">
                  Be part of World’s biggest Open Innovation Movement
                  Opportunity to work with some of the best talents.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="linkedin.700" fontSize="5xl">
                  <GiGears />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="facebook.900"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Out-Of-The-Box Solutions
                </Text>
                <Text color="gray.600" mb="1rem">
                  Talented youngsters from all over the country offer
                  out-of-the-box solutions to your problems
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="linkedin.700" fontSize="5xl">
                  <FaMedal />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="facebook.900"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Recognition And Visibility
                </Text>
                <Text color="gray.600" mb="1rem">
                  Nationally Recognition and visibility for your company across
                  all premier institutions in India
                </Text>
              </Reveal>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyJoin;
