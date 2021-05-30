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
  primary: "#2B1264",
  primaryLight: "#6835DA",
  borderGray: "#CFCFCF",
  primeYellow: "#FFDA57",
  iconGray: "#B0B0B0",
  textGray: "#666666",
  textBlack: "#000000FF",
};

export const theme = extendTheme({
  colors,
  breakpoints,
});

export default theme;
