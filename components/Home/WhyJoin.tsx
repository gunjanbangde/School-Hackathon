import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { IoEarthSharp } from "react-icons/io5";
import Lottie from "react-lottie";

import Reveal, { MotionBox } from "../library/Reveal";
import animationData from "@/public/assets/why_lottie.json";
import ThemeCarousel from "./Carousel";

const WhyJoin: React.FC = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [index, setIndex] = useState(0);
  const [themeData, setThemeData] = useState([""]);

  useEffect(() => {
    setThemeData(data[index]);
  }, [index]);

  const data = [
    [
      "Irrigation",
      "Water conservation",
      "IOT applications in agriculture and rural development",
      "Water purifiers for purifying the flowing water in the lakes",
      "Low cost equipment to use in agricultural applications",
    ],
    [
      "Virtual Assistant for Medical Device",
      "Primary health care in remote areas using Cloud medicine and Diagnostic Services",
      "Early prediction of lifestyle diseases",
      "Fabrication of mask with low cost materials",
    ],
    [
      "Food processing",
      "Security & surveillance",
      "Drone for spraying fertilizers",
      "Smart communication devices to use in rural areas",
      "Smart Vehicle",
    ],
    ["Solar energy", "Wind energy", "Biomass energy"],
    ["Waste collection", "Waste transportation", "Waste disposal"],
    ["Open"],
  ];

  return (
    <Box
      width="100%"
      py={{ xs: "60px", sm: "120px" }}
      bg="linear-gradient(180deg,#261063 0%,#9B437BFA 100%)"
    >
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex alignItems="center" flexDirection={{ xs: "column", lg: "row" }}>
          <Box width={{ xs: "90%", md: "60%", lg: "41%" }}>
            <Reveal left>
              <Text
                color="white"
                fontWeight="700"
                fontSize="5xl"
                textAlign="center"
                lineHeight="48px"
                mb={{ xs: "3rem", md: "0", lg: "0" }}
              >
                Why Join Hackathon?
              </Text>
              <Lottie options={lottieOptions} height="100%" width="auto" />
            </Reveal>
          </Box>
          <Box ml={{ lg: "8.3%" }} width={{ lg: "50%" }}>
            <Flex flexWrap="wrap" width="100%">
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text color="white" fontSize="6xl">
                  <HiOutlineLightBulb />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovative Solutions
                </Text>
                <Text color="gray.400" mb="1rem">
                  Build innovative solutions for problems. Be a part of Nation
                  Building Opportunity.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <IoEarthSharp />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Innovation Movement
                </Text>
                <Text color="gray.400" mb="1rem">
                  Be part of World’s biggest Open Innovation Movement
                  Opportunity to work with some of the best talents.
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <GiGears />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Out-Of-The-Box Solutions
                </Text>
                <Text color="gray.400" mb="1rem">
                  Talented youngsters from all over the country offer
                  out-of-the-box solutions to your problems
                </Text>
              </Reveal>
              <Reveal mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Text pb="0.5rem" color="white" fontSize="5xl">
                  <FaMedal />
                </Text>
                <Text
                  mt="1rem"
                  mb="0.5rem"
                  color="white"
                  fontSize="1.5rem"
                  fontWeight="700"
                >
                  Recognition And Visibility
                </Text>
                <Text color="gray.400" mb="1rem">
                  Nationally Recognition and visibility for your company across
                  all premier institutions in India
                </Text>
              </Reveal>
            </Flex>
          </Box>
        </Flex>
        <Reveal>
          <Text
            textAlign="center"
            fontSize="5xl"
            fontWeight="700"
            mt="2rem"
            mb={{ xs: "0", md: "2rem" }}
            color="white"
          >
            Themes
          </Text>
        </Reveal>
        <Flex
          flexDirection={{ xs: "column-reverse", md: "row" }}
          pl={{ md: "2rem" }}
        >
          <Reveal>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={index}
              width={{ xs: "100%", md: "45%" }}
              minHeight="200px"
            >
              <UnorderedList color="white" fontSize="2xl">
                {themeData.map((data, i) => (
                  <ListItem key={i}>{data}</ListItem>
                ))}
              </UnorderedList>
            </MotionBox>
          </Reveal>
          <Reveal
            right
            mb={{ xs: "2rem", md: "0" }}
            width={{ xs: "100%", md: "55%" }}
          >
            <ThemeCarousel index={index} setIndex={setIndex} />
          </Reveal>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhyJoin;
