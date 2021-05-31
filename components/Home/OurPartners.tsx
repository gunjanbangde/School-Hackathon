import React from "react";
import { Box, Flex, Text, Container, Button } from "@chakra-ui/react";

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
              fontSize={{ xs: "4xl", md: "5xl" }}
              mb="1rem"
            >
              ABOUT LNCT GROUP
            </Text>
            <Text fontSize={{ xs: "1xl", md: "2xl" }} color="white" mb="3rem">
              LNCT Group of Colleges is ones of the oldest and largest education
              groups in central India. Founded in 1994 Lakshmi Narain College of
              Technology, Bhopal has the privilege of being the First Private
              (self-financed) institute of M.P. LNCT Group offers program from
              Diploma, Bachelor, Master's and Doctorate level programs with
              campuses in five locations in Madhya Pradesh & Chhattisgarh
              including the cities of Bhopal, Indore, Gwalior, Jabalpur and
              Bilaspur. LNCT Group of College to meet the ever increasing
              demands for higher education in India. LNCT Group is one of the
              Group institutes of its size in the India to offer program in 5
              varied field study: Engineering, Management, Pharmacy, Medical,
              Homeopathy, Dental and recurring and professional studies.
              Education is not the only area we work in. We also so take
              responsibility for the improvement of community around us. This
              instills in the students a feeling of responsibility and concern
              and makes them comprehend the world a bit better. Each one is
              better endowed to face the world and the satisfaction of having
              fulfilled their social responsibility is an added bonus. LNCT
              Bhopal campus is the historic campus in Bhopal, which dates from
              1994.
            </Text>
          </Reveal>
          <Reveal width="100%">
            <a href="https://lnct.ac.in/" target="_blank">
              <Button variant="outline" color="white" p="1.5rem 2rem">
                Know More
              </Button>
            </a>
          </Reveal>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPartners;
