import React from "react";
import { Box, Text, Container, Button } from "@chakra-ui/react";
import Reveal from "../library/Reveal";

const TalkToUs: React.FC = () => {
  return (
    <>
      <Box bg="textBlack" p="120px 0">
        <Container maxWidth="1200px">
          <Box textAlign="center" width="100%">
            <Reveal>
              <Text fontSize="5xl" fontWeight="700" mb="2rem" color="white">
                Talk to us
              </Text>
              <Text color="white" mb="3rem">
                Want to know more about our processes or past work?
                <br />
                Or considering to give us a trial?
                <br />
                Let's talk
              </Text>
            </Reveal>
            <Reveal delay={0.45}>
              <a href="https://bit.ly/tif-abhishek" target="_blank">
                <Button
                  borderRadius="3px"
                  height="44px"
                  p="0 25px"
                  color="white"
                  bg="primary"
                  _hover={{
                    bg: "teal.200",
                  }}
                >
                  Schedule a Call
                </Button>
              </a>
            </Reveal>
          </Box>
        </Container>
      </Box>
      <Box py="1rem">
        <Container>
          <Text color="textGray" textAlign="center">
            © 2020 The Internet Folks. All rights reserved.
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default TalkToUs;
