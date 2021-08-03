import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";

import Reveal from "../components/library/Reveal";

const Results = () => {
  return (
    <Layout>
      <Reveal minHeight="90vh" p="180px 0 130px">
        <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
          <Box
            mb="1rem"
            textAlign="center"
            fontSize="5xl"
            color="primary"
            flex="1"
          >
            Results
          </Box>
          <Text fontSize="2xl">
            We are happy to announce that your innovation idea has been selected
            for Idea Presentation round (Second) in National Innovative STEM
            Model Competition – 2021 Version 1.0. The presentation will be held
            category wise on 5, 6 & 7 August 2021 through Zoom Meeting. The time
            schedule & date will be informed you by WhatsApp group.
          </Text>
          <UnorderedList maxW="500px" mt="2rem" fontSize="2xl">
            <ListItem>
              <Flex
                mb="1rem"
                alignItems="center"
                justifyContent="space-between"
              >
                Category 1{" "}
                <a target="_blank" href="/assets/Result for Category 1.pdf">
                  {" "}
                  <Button bg="primary" color="white">
                    View
                  </Button>
                </a>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex
                mb="1rem"
                alignItems="center"
                justifyContent="space-between"
              >
                Category 2{" "}
                <a target="_blank" href="/assets/Result for Category 2.pdf">
                  {" "}
                  <Button bg="primary" color="white">
                    View
                  </Button>
                </a>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex
                mb="1rem"
                alignItems="center"
                justifyContent="space-between"
              >
                Category 3{" "}
                <a target="_blank" href="/assets/Result for Category 3.pdf">
                  {" "}
                  <Button bg="primary" color="white">
                    View
                  </Button>
                </a>
              </Flex>
            </ListItem>
          </UnorderedList>
        </Container>
      </Reveal>
    </Layout>
  );
};

export default Results;
