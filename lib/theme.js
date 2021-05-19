/* eslint-disable import/prefer-default-export */
const breakpoints = ["0", "600px", "1024px", "1280px", "1440px"];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const theme = {
  breakpoints,
  //   fonts: {
  //     body: "Public Sans",
  //     heading: "Poppins",
  //   },
  colors: {
    primary: "#109093",
  },
};
