import { Flex, Image, Reveal, Typography } from "components/library";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Flex
        as="section"
        bg="primary"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
      >
        <Reveal mr="1rem" bg="white" left offset="2000">
          <Image height="100px" width="100px" src="/svg/only_logo.svg" />
        </Reveal>
        <Typography as="h1" fontWeight="400" fontSize="5rem">
          The Internet Folks
        </Typography>
      </Flex>
    </Layout>
  );
}
