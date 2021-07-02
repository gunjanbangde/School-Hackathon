import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Flex, Img, Box, Text } from "@chakra-ui/react";

type Props = {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const ThemeCarousel: React.FC<Props> = ({ setIndex, index }) => {
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
    <Box mt="2rem" height="80%" width="100%">
      <Carousel
        className="carousel-wrapper"
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        onChange={(props) => setIndex(props)}
        selectedItem={index}
        showArrows={true}
      >
        {carouselData.map((item) => (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            pb="2rem"
            width="100%"
            height="100%"
          >
            <Img height="200px" src={`/assets/${item.icon}.svg`} />
            <Text fontSize="2xl" textAlign="center" mt="2rem" color="white">
              {item.text}
            </Text>
          </Flex>
        ))}
      </Carousel>
    </Box>
  );
};

export default ThemeCarousel;
