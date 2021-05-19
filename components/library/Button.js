import React from "react";
import Box from "./Box";

const Button = ({ children, ...props }) => {
  return (
    <Box
      as="button"
      border="none"
      outline="none"
      bg="primary"
      color="white"
      p="1rem 1.5rem"
      borderRadius="10px"
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Button;
