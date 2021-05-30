import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Reveal from "../library/Reveal";

const ProcessFlow: React.FC = () => {
  return (
    <Box width="100%" py="120px">
      <Container maxWidth="1440px" px={{ xs: "20px", lg: "80px" }}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Reveal>
            <Text
              color="primary"
              fontWeight="700"
              fontSize="5xl"
              lineHeight="48px"
              mb="3rem"
            >
              Process Flow
            </Text>
          </Reveal>
          <Accordion defaultIndex={[0]} width="100%">
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Round 1
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <UnorderedList fontSize="2xl">
                        <ListItem>Team Registration</ListItem>
                        <ListItem>Choose a problem Statement</ListItem>
                        <ListItem>
                          Create a presentation that explains your idea in and
                          out, thoroughly
                        </ListItem>
                        <ListItem>
                          Submit your presentation along with other details, on
                          the given link
                        </ListItem>
                        <ListItem>Present your PPT</ListItem>
                        <ListItem>
                          Selection on the basis of the Idea and Presentation
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Round 2
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <UnorderedList fontSize="2xl">
                        <ListItem>
                          Selected teams Register for Round 2 and Start making
                          Prototype
                        </ListItem>
                        <ListItem>Prototype Presentation</ListItem>
                        <ListItem>Further Team Selection</ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
            <Reveal>
              <AccordionItem border="none" outline="none" width="100%">
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      border="solid 1px"
                      borderColor="gray.100"
                      borderRadius="4px"
                      bg="primary"
                      _hover={{ bg: "primary" }}
                    >
                      <Box
                        fontSize="3xl"
                        color="white"
                        flex="1"
                        textAlign="left"
                      >
                        Round 3
                      </Box>
                      <Text fontSize="2xl" color="white">
                        {isExpanded ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </Text>
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <UnorderedList fontSize="2xl">
                        <ListItem>
                          Selected teams Register for Final Round
                        </ListItem>
                        <ListItem>
                          Showcase your innovation and its implementation in the
                          final round
                        </ListItem>
                        <ListItem>Grand Finale, we get the Winner</ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
          </Accordion>
          <Reveal
            d="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            delay={0.4}
            mt="3rem"
          >
            <a href="https://forms.gle/ajG1vV8acTq1gnDX6" target="_blank">
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
        </Flex>
      </Container>
    </Box>
  );
};

export default ProcessFlow;
