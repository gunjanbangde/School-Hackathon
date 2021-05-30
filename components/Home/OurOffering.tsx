import React from "react";
import {
  Box,
  Flex,
  Text,
  Img,
  Container,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Reveal from "../library/Reveal";

const OurOffering: React.FC = () => {
  return (
    <Box width="100%" p="120px 0" bg="#ebf4ff">
      <Container maxWidth="1200px">
        <Flex flexDirection={{ xs: "column", lg: "row" }}>
          <Box width="50%"></Box>
          <Box ml={{ lg: "8.3%" }} width={{ sm: "50%" }}>
            <Reveal right>
              <Text color="#444" fontWeight="500" mb="1rem">
                OUR OFFERINGS
              </Text>
              <Text
                as="h1"
                mb="2rem"
                fontSize="5xl"
                fontWeight="700"
                color="textBlack"
                lineHeight="61px"
              >
                Build your dream project faster
              </Text>
              <Text mb="1rem" color="textGray">
                5+ years of executing the following on various tech stack:
              </Text>
            </Reveal>
            <Reveal delay={0.4} right mt="3rem">
              <List>
                <ListItem mb="20px" color="textBlack">
                  <ListIcon
                    as={Img}
                    width="25px"
                    height="25px"
                    src="/images/icon/1.png"
                  />
                  Design to Frontend Development
                </ListItem>
                <ListItem mb="20px" color="textBlack">
                  <ListIcon
                    as={Img}
                    width="25px"
                    height="25px"
                    src="/images/icon/1.png"
                  />
                  E-commerce Development
                </ListItem>
                <ListItem mb="20px" color="textBlack">
                  <ListIcon
                    as={Img}
                    width="25px"
                    height="25px"
                    src="/images/icon/1.png"
                  />
                  Microservices Development
                </ListItem>
                <ListItem mb="20px" color="textBlack">
                  <ListIcon
                    as={Img}
                    width="25px"
                    height="25px"
                    src="/images/icon/1.png"
                  />
                  Web SDK Development
                </ListItem>
              </List>
              <Reveal delay={0.5} bottom>
                <Button
                  borderRadius="3px"
                  bg="textBlack"
                  color="white"
                  p="0 35px"
                  mt="3rem"
                  height="54px"
                  fontWeight="500"
                  _hover={{
                    bg: "teal.300",
                  }}
                >
                  Schedule a Call
                </Button>
              </Reveal>
            </Reveal>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurOffering;
