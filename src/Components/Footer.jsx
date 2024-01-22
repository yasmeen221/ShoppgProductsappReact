import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiShoppingBag } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

//------------------------------ Body of Component------------------------------
const Footer = () => {
  return (
    <>
      <Box as="footer" shadow="xl" backgroundColor="#9d8386">
        <HStack justifyContent="space-around" padding="30px">
          <VStack>
            <Heading mb="20px" color="white" as="h4" size="md">
              Contact Us
            </Heading>
            <Text>+20-655533399883</Text>
            <Text>onlineshopping@yahoo.com</Text>
            <Text>New Cairo Al Rehab City</Text>
          </VStack>
          <VStack>
            <Heading mb="20px" color="white" as="h4" size="md">
              Our Service
            </Heading>
            <Text>Home</Text>
            <Text>Categories</Text>
            <Text>Products</Text>
          </VStack>

          <VStack>
            <Heading mb="20px" color="white" as="h4" size="md">
              Quick Links
            </Heading>
            <Text>Any Questions</Text>
            <Text>Feedback</Text>
            <Text>Other services</Text>
          </VStack>
          <VStack>
            <HStack mb="20px" color="#a44543">
              <HiShoppingBag size="50px" />
              <Heading as="h5" size="sm">
                Shopping
              </Heading>
            </HStack>
            <HStack gap="19px">
              <FaFacebook color="#0866ff" />
              <FaInstagram
                style={{
                  background:
                    "linear-gradient(45deg, #833ab4, #fd1d1d, #f77737, #fec133)",
                }}
              />
              <FaTwitter color="#207fbd" />
              <FaLinkedin color="#0869a9" />
            </HStack>
          </VStack>
        </HStack>
        <Center>
          <Divider bgColor="#bf6664" width="800px" height="3px" marginY={4} />
        </Center>
        <Center pb="15px">
          &copy;Yasmeen 2024 by instructor Eng Hossam Okasha
        </Center>
      </Box>
    </>
  );
};

export default Footer;
