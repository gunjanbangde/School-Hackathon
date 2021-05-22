import { Flex, Reveal, Typography } from "components/library";
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
        <Typography as="h1" fontWeight="400" fontSize="5rem">
          Happy Coding!
        </Typography>
        <Reveal left offset="2000" height="5rem" width="5rem" bg="#fff" />
      </Flex>
    </Layout>
  );
}
