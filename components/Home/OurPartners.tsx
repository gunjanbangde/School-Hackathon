import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  SimpleGrid,
  Img,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

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
            <Text color="white" fontWeight="700" fontSize="5xl" mb="1rem">
              ABOUT LNCT GROUP
            </Text>
            <Text fontSize="2xl" color="white" mb="3rem">
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
          <SimpleGrid
            width={{ xs: "90%", md: "70%", lg: "100%" }}
            columns={{ xs: 2, sm: 4 }}
            spacing={{ xs: 10, lg: 40 }}
          >
            <Reveal>
              <Img my="auto" width="100%" src="/assets/NBA.png" />
            </Reveal>
            <Reveal>
              <Img my="auto" width="100%" src="/assets/25.png" />
            </Reveal>
            <Reveal>
              <Img my="auto" width="100%" src="/assets/nirf.jpg" />
            </Reveal>
            <Reveal>
              <Img my="auto" width="100%" src="/assets/logo.png" />
            </Reveal>
          </SimpleGrid>
          <Table
            mt="2rem"
            color="white"
            border="solid 1px #fff"
            borderRadius="4px"
            variant="simple"
          >
            <Tbody>
              <Tr>
                <Td borderTopLeftRadius="4px" border="solid 1px white">
                  Chief Patron
                </Td>
                <Td border="solid 1px white">
                  Shri J.N. Chouksey ,Chairman, LNCT Group
                </Td>
              </Tr>
              <Tr>
                <Td border="solid 1px white">Patron(s)</Td>
                <Td border="solid 1px white">
                  Dr. Anupam Chouksey, Secretary, LNCT Group
                </Td>
              </Tr>
              <Tr>
                <Td border="solid 1px white">Convener</Td>
                <Td border="solid 1px white">
                  Dr. Ashok Kumar Rai, Director Administration
                </Td>
              </Tr>
              <Tr>
                <Td border="solid 1px white">SPOC</Td>
                <Td border="solid 1px white">Dr. Vivek Richhariya</Td>
              </Tr>
              <Tr>
                <Td border="solid 1px white">Organizing Member</Td>
                <Td border="solid 1px white">
                  <Text>Dr. Vineet Richhariya</Text>
                  <br />
                  <Text>Dr. Bhupesh Gour</Text>
                  <br /> Dr. Anoop Chaturvedi
                </Td>
              </Tr>
              <Tr>
                <Td border="solid 1px white">Technical Committee</Td>
                <Td border="solid 1px white">
                  <Text>Prof Alka Gulati</Text>
                  <br />
                  <Text>Dr. Aparna Gupta</Text>
                  <br />
                  <Text>Prof Naveen Asathi</Text>
                  <br />
                  <Text>Prof Bhawna Pillai</Text>
                  <br />
                  <Text>Dr. Tripti Saxena</Text>
                  <br />
                  <Text>Prof Megha Jain</Text>
                  <br />
                  <Text>Prof Harendra Singh</Text>
                  <br />
                  <Text>Prof. Shraddha Shrivastava</Text>
                  <br />
                  <Text>Prof Prakhar </Text>
                  <br />
                  <Text>Prof Sachin Nikkam</Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPartners;
