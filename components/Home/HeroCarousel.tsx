import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Flex, Img, Box, Text } from "@chakra-ui/react";

type Props = {
  // setIndex: React.Dispatch<React.SetStateAction<number>>;
  // index: number;
};

const ThemeCarousel: React.FC<Props> = () => {
  const carouselData = [
    {
      text: "Agricultural",
      icon: "agriculture",
    },
    {
      text: "Public Transportation OR Public Safety",
      icon: "transportation",
    },
    {
      text: "Home Automation & Application",
      icon: "smart_system",
    },
    {
      text: "Renewable Energy",
      icon: "renewable",
    },
    {
      text: "Waste Management",
      icon: "waste",
    },
    {
      text: "Open Innovation",
      icon: "open",
    },
  ];

  return (
    <Box mt="6rem" height="70%" width="100%">
      <Carousel
        className="carousel-wrapper"
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={true}
      >
        {[...Array(10)].map((item, i) => (
          <Flex px="1rem" height="100%" alignItems="center">
            <Img
              maxHeight="500px"
              maxWidth="100%"
              src={`/assets/gallery/${i + 1}.jpg`}
            />
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default ThemeCarousel;
