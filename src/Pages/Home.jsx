import { Box, Button, Divider, Heading, Text, VStack } from "@chakra-ui/react";
import image from "../assets/bgg.jpg";
import { useTitle } from "../Hooks/useTitle";

//------------------------------ Body of Component------------------------------
const Home = () => {
  useTitle("Home");
  return (
    <>
      <Box
        bgImage={image}
        w="100%"
        h="800px"
        color="white"
        bgRepeat="no-repeat"
        bgSize="cover"
        display="flex"
        bgPosition="center"
      >
        <Box mt="170px" ml="80px" color="#bf6664">
          <VStack>
            <Text>
              <Text>
                <Heading as="h2" size="2xl">
                  Online
                </Heading>
                <Heading as="h2" size="3xl">
                  Shopping
                </Heading>
              </Text>
              <Divider bgColor="#bf6664" height="3px" marginY={5} />
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br />
                Voluptatum, expedita?
              </Text>
            </Text>
          </VStack>
          <Button
            mt="8"
            borderColor="#bf6664"
            color="#bf6664"
            variant="outline"
          >
            Show More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
