import React from "react";
import Box from "./Box";
import Button from "./Button";
import Reveal from "./Reveal";

const Typography = (props) => {
  return (
    <Box as={props.as || "p"} {...props}>
      {props.children}
    </Box>
  );
};

const Image = (props) => {
  return (
    <Box as="img" {...props}>
      {props.children}
    </Box>
  );
};

const Flex = (props) => {
  return (
    <Box display="flex" {...props}>
      {props.children}
    </Box>
  );
};

const Container = (props) => {
  return (
    <Box maxWidth="1440px" m="0 auto" {...props}>
      {props.children}
    </Box>
  );
};

export { Box, Typography, Button, Flex, Container, Image, Reveal };
