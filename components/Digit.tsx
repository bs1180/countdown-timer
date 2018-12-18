import { Flex, Heading, Text } from "@rebass/emotion";

const Digit = ({ value, label }) => (
  <Flex
    bg="white"
    p={4}
    m={2}
    width={128}
    css={{ border: "1px solid grey", borderRadius: "3px" }}
    alignItems="center"
    justifyContent="around"
    flexDirection="column"
  >
    <Heading>{value}</Heading>
    <Text fontSize={2}>{label}</Text>
  </Flex>
);

export default Digit;
