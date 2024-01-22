import {
  Avatar,
  Box,
  Container,
  HStack,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


//------------------------------ Body of Component------------------------------
const Header = () => {
  return (
    <>
      <Box
        as="header"
        bgColor="#e0a3aa"
        color="white"
        shadow="xl"
        display="flex"
        h="60px"
        alignItems="center"
      >
        <Container maxW="6xl">
          <HStack justifyContent="space-between">
            <Box as="nav">
              <List display="flex" gap="20">
                <ListItem>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    to="/"
                  >
                    <Heading as="h5" size="sm">
                      Home
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    to="/categories"
                  >
                    <Heading as="h5" size="sm">
                      Categories
                    </Heading>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    _hover={{ textDecoration: "none" }}
                    as={RouterLink}
                    to="/contactus"
                  >
                    <Heading as="h5" size="sm">
                      ContactUs
                    </Heading>
                  </Link>
                </ListItem>
              </List>
            </Box>

            <Avatar
              size="md"
              name="Yasmeen Mostafa"
              bgColor="#bf6664"
              color="white"
            />
          </HStack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
