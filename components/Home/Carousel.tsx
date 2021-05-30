import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Flex, Img, Box, Text } from "@chakra-ui/react";

const ThemeCarousel: React.FC = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0,
    },
  };

  const carouselData = [
    {
      text: "Agricultural and Rural Development",
      icon: "agriculture",
    },
    {
      text: "Healthcare and Bio-Medical Devices",
      icon: "healthcare",
    },
    {
      text: "Smart Systems",
      icon: "smart_system",
    },
    {
      text: "Renewable Energy Sources for Rural Development",
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
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        customDot={<CustomDot />}
        ssr={true}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
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

const CustomDot = (props: { [x: string]: any }) => {
  if (props.active) {
    return (
      <Box
        width="10px"
        mr="1rem"
        height="10px"
        bg="white"
        borderRadius="50%"
        border="solid 1px #fff"
      />
    );
  } else {
    return (
      <Box
        width="10px"
        mr="1rem"
        height="10px"
        borderRadius="50%"
        border="solid 1px #fff"
      />
    );
  }
};

export default ThemeCarousel;
