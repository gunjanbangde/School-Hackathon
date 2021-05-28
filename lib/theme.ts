import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "0",
  sm: "600px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
});

const colors = {
  primary: "#2EC5B6",
  background: "#F7F6FB",
  borderGray: "#CFCFCF",
  primeYellow: "#FFDA57",
  iconGray: "#B0B0B0",
  textGray: "#666666",
  textBlack: "#171614",
};

export const theme = extendTheme({
  colors,
  breakpoints,
});

export default theme;
