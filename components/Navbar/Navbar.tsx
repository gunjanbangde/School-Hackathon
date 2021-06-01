import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Container,
  Button,
  Img,
  Text,
  Drawer,
  DrawerBody,
  IconButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [page, setPage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    setPage(router.pathname);
  }, [router.pathname]);

  return (
    <Box
      position="fixed"
      bg="white"
      top="0"
      left="0"
      zIndex="sticky"
      width="100vw"
      height="74px"
      px={{ md: "100px" }}
      boxShadow="0px 1px 20px 0px rgba(0,0,0,0.1)"
    >
      <Container maxWidth="none" height="100%" width="100%">
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Img src="/assets/logo.png" height={{ sm: "48px" }} />
          <Flex display={{ xs: "none", sm: "flex" }} align="center">
            <Link href="/">
              <a>
                <Text
                  borderRadius="3px"
                  mt="0.5rem"
                  sx={{
                    textDecoration: page.includes("contributors")
                      ? "none"
                      : "underline",
                  }}
                  height="44px"
                  fontSize="2xl"
                  color="primary"
                >
                  Home
                </Text>
              </a>
            </Link>
            <Link href="/contributors">
              <a>
                <Text
                  mx="1rem"
                  borderRadius="3px"
                  mt="0.5rem"
                  sx={{
                    textDecoration: page.includes("contributors")
                      ? "underline"
                      : "none",
                  }}
                  height="44px"
                  fontSize="2xl"
                  p="0 25px"
                  color="primary"
                >
                  Contributors
                </Text>
              </a>
            </Link>
            <a href="https://bit.ly/LNCT-Hackathon" target="_blank">
              <Button
                borderRadius="3px"
                height="44px"
                p="0 25px"
                color="white"
                bg="primary"
                _hover={{
                  bg: "linkedin.300",
                }}
              >
                Register Now
              </Button>
            </a>
          </Flex>
          <IconButton
            display={{ xs: "block", sm: "none" }}
            aria-label="Open Navbar"
            onClick={onOpen}
            icon={<GiHamburgerMenu />}
            bg="primary"
            color="white"
          />
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                display="flex"
                justifyContent="flex-end"
                borderBottomWidth="1px"
              >
                <IconButton
                  aria-label="Close Navbar"
                  onClick={onClose}
                  icon={<IoCloseSharp />}
                  bg="primary"
                  color="white"
                />
              </DrawerHeader>
              <DrawerBody>
                <Link href="/">
                  <a>
                    <Text
                      borderRadius="3px"
                      sx={{
                        textDecoration: page.includes("contributors")
                          ? "none"
                          : "underline",
                      }}
                      mt="0.5rem"
                      height="44px"
                      fontSize="2xl"
                      color="primary"
                    >
                      Home
                    </Text>
                  </a>
                </Link>
                <Link href="/contributors">
                  <a>
                    <Text
                      borderRadius="3px"
                      sx={{
                        textDecoration: page.includes("contributors")
                          ? "underline"
                          : "none",
                      }}
                      mt="0.5rem"
                      height="44px"
                      fontSize="2xl"
                      color="primary"
                    >
                      Contributors
                    </Text>
                  </a>
                </Link>
                <a href="https://bit.ly/LNCT-Hackathon" target="_blank">
                  <Button
                    borderRadius="3px"
                    height="44px"
                    p="0 25px"
                    color="white"
                    bg="primary"
                    _hover={{
                      bg: "linkedin.300",
                    }}
                  >
                    Register Now
                  </Button>
                </a>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
