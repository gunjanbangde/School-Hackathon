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
  Img,
  SimpleGrid,
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
                        Who Can Participate
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
                      <Text fontSize="2xl">
                        School students can participate under two category:
                      </Text>
                      <UnorderedList fontSize="2xl">
                        <ListItem>Category I: Class 9 & Class 10</ListItem>
                        <ListItem>Category II: Class 11 & Class 12</ListItem>
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
                        General Guidelines for Participation
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
                          Each team would comprise 2 - 4 students.
                        </ListItem>
                        <ListItem>
                          One of the students from each team should act as a
                          Team Leader.
                        </ListItem>
                        <ListItem>
                          School photo ID is mandatory for participating in the
                          finale.
                        </ListItem>
                        <ListItem>One team can submit ONLY one idea.</ListItem>
                        <ListItem>
                          Team members CANNOT be associated with multiple teams
                          in parallel.
                        </ListItem>
                        <ListItem>
                          Team Name should be unique and not contain the name of
                          their school in any form.
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
                        Grand Finale Prizes
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
                        <ListItem>First Prize : Rs 20,000/-</ListItem>
                        <ListItem>Second Prize : Rs 15,000/-</ListItem>
                        <ListItem>Third Prize : Rs 10,000/-</ListItem>
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
                        Important Dates
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
                          Idea Submission Deadline: July 17, 2021
                        </ListItem>
                        <ListItem>
                          Shortlist for Idea Submission: July 20, 2021
                        </ListItem>
                        <ListItem>
                          Second Round Idea Presentation: July 22 &23, 2021
                        </ListItem>
                        <ListItem>
                          Shortlist for Prototype Demonstration: July 25, 2021
                        </ListItem>
                        <ListItem>
                          Final Round Prototype Demonstration: August 7, 2021
                        </ListItem>
                      </UnorderedList>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Reveal>
          </Accordion>
          <Reveal mt="2rem" width="100%">
            <Text
              fontWeight="700"
              color="primary"
              textAlign="left"
              fontSize="3xl"
            >
              Venue
            </Text>
            <Text fontSize="2xl">
              Lakshmi Narain College of Technology, Bhopal Kalchuri Nagar,
              Raisen Road, Bhopal 462 021, (MP)
              <br /> Mobile Number: 9826856015, 7354549227 <br />
              Phone Number: +91-755-6185300
            </Text>
          </Reveal>
          <Reveal>
            <SimpleGrid
              mt="2rem"
              width="100%"
              columns={{ xs: 1, lg: 2 }}
              spacing={{ xs: "1rem", lg: "14rem" }}
            >
              <Img maxH="100%" src="/assets/poster1.jpeg" />
              <Img maxH="100%" src="/assets/poster2.jpeg" />
            </SimpleGrid>
          </Reveal>
          <Reveal
            d="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
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
        </Flex>
      </Container>
    </Box>
  );
};

export default ProcessFlow;
