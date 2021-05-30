import React from "react";

import Layout from "components/Layout";
import HeroSection from "@/components/Home/HeroSection";
// import OurOffering from "@/components/Home/OurOffering";
import WhyJoin from "@/components/Home/WhyJoin";
// import TalkToUs from "@/components/Home/TalkToUs";

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      {/* <OurOffering /> */}
      <WhyJoin />
      {/* <TalkToUs /> */}
    </Layout>
  );
};

export default Home;
