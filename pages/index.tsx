import React from "react";
import Reveal from "components/library/Reveal";
import { Box, Text, Image } from "@chakra-ui/react";

import Layout from "components/Layout";
import HeroSection from "@/components/Home/HeroSection";
import OurOffering from "@/components/Home/OurOffering";
import WhatWeDo from "@/components/Home/WhatWeDo";
import TalkToUs from "@/components/Home/TalkToUs";

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <OurOffering />
      <WhatWeDo />
      <TalkToUs />
    </Layout>
  );
};

export default Home;
