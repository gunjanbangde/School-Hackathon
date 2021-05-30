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
                          Each team would comprise a maximum of{" "}
                          <strong>four students</strong>.
                        </ListItem>
                        <ListItem>
                          One of the students from each team should act as a
                          <strong>Team Leader</strong>.
                        </ListItem>
                        <ListItem>
                          <strong>Inter-disciplinary </strong>representation in
                          the team is permitted. All team members should be from
                          the same college;
                          <strong> no inter-college teams </strong>are allowed.
                          However, members from different branches of the same
                          college/ institute can form a team.
                        </ListItem>
                        <ListItem>
                          College photo ID is mandatory for participating in the
                          finale.
                        </ListItem>
                        <ListItem>
                          One team can submit <strong>only one</strong> idea.
                        </ListItem>
                        <ListItem>
                          Team members <strong>cannot</strong> be associated
                          with multiple teams in parallel
                        </ListItem>
                        <ListItem>
                          Team Name should be unique and not contain the name of
                          their institute in any form.
                        </ListItem>
                        <ListItem>
                          Intellectual property (IP) of the idea would belong to
                          the college/institute and the team members jointly.
                          However, team members will make their product
                          available for free while they are working.
                        </ListItem>
                        <ListItem>
                          Evaluation criteria will include novelty of the idea,
                          complexity, clarity and details in the idea document,
                          feasibility, practicability, sustainability, scale of
                          impact, user experience and potential for future work
                          progression.
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
                        <ListItem>Second Prize : Rs 10,000/-</ListItem>
                        <ListItem>Third Prize : Rs 5000/-</ListItem>
                        <ListItem>Five Consolation Prize : 2000/-</ListItem>
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
          <Reveal mt="2rem" width="100%">
            <Text
              fontWeight="700"
              color="primary"
              textAlign="left"
              fontSize="3xl"
            >
              Important Dates
            </Text>
            <UnorderedList fontSize="2xl">
              <ListItem>Idea Submission Deadline: June 15, 2021</ListItem>
              <ListItem>Shortlist for Idea Submission: June 20, 2021</ListItem>
              <ListItem>Final Round demonstration: June 28 & 29, 2021</ListItem>
              <ListItem>Declaration of Result: June 30, 2021</ListItem>
            </UnorderedList>
          </Reveal>
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
