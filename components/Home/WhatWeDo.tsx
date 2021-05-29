import React from "react";
import { Box, Flex, Text, Img, Container } from "@chakra-ui/react";
import Reveal from "../library/Reveal";

const WhatWeDo: React.FC = () => {
  return (
    <Box pt="120px">
      <Container maxWidth="1200px">
        <Flex flexDirection={{ xs: "column", lg: "row" }}>
          <Reveal left width={{ xs: "90%", sm: "66%", lg: "41%" }}>
            <Text color="#444" fontWeight="500" mb="1rem">
              WHAT WE DO
            </Text>
            <Text
              color="textBlack"
              fontWeight="700"
              fontSize="5xl"
              lineHeight="48px"
              mb={{ xs: "3rem", lg: "0" }}
              width={{ lg: "360px" }}
            >
              Your team's extended arm to accomplish more in less time
            </Text>
          </Reveal>
          <Box pb="120px" ml={{ lg: "8.3%" }} width={{ lg: "50%" }}>
            <Reveal right>
              <Text px={{ sm: "1rem" }} color="textGray">
                Our clients are SaaS teams, Web Design Agencies and Individuals
                who have researched their project and usually have
                well-documented requirements.
              </Text>
            </Reveal>
            <Reveal delay={0.5} d="flex" flexWrap="wrap" width="100%">
              <Box mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Img src="/images/icon/2.png" />
                <Text py="1.5rem" fontSize="1.5rem" fontWeight="700">
                  Collaboration
                </Text>
                <Text color="textGray" mb="1rem">
                  We collaborate with Design teams to execute their prototypes
                  into modern web experience
                </Text>
              </Box>
              <Box mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Img src="/images/icon/3.png" />
                <Text py="1.5rem" fontSize="1.5rem" fontWeight="700">
                  Technology Research
                </Text>
                <Text color="textGray" mb="1rem">
                  Save time of your team and delegate your tech research work to
                  us
                </Text>
              </Box>
              <Box mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Img src="/images/icon/4.png" />
                <Text py="1.5rem" fontSize="1.5rem" fontWeight="700">
                  Modern Tools
                </Text>
                <Text color="textGray" mb="1rem">
                  We are powered by modern workflows and easily integrate our
                  delivery updates with your systems.
                </Text>
              </Box>
              <Box mt="1.4rem" px={{ sm: "1rem" }} width={{ sm: "50%" }}>
                <Img src="/images/icon/5.png" />
                <Text py="1.5rem" fontSize="1.5rem" fontWeight="700">
                  Customer Success
                </Text>
                <Text color="textGray" mb="1rem">
                  We are happy when your clients are happy. We go-to that extra
                  mile required to delight your customers
                </Text>
              </Box>
            </Reveal>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
