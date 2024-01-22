import {
  Card,
  CardBody,
  CardHeader,
  Image,
  SimpleGrid,
  Link,
  Heading,
  Progress,
  HStack,
  Container,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useTitle } from "../Hooks/useTitle";
import {Link as RouterLink} from 'react-router-dom'

// const URL = "https://api.escuelajs.co/api/v1/categories";
// -------question why not play------
const URL=import.meta.env.VITE_API_URL

const Categories = () => {
  useTitle("Categories");
  const {
    data: categories,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => axios.get(URL),
  });

  if (isError) {
    return <Heading>{error.message}</Heading>;
  }

  return (
    <>
      <Container maxW="6xl">
        <SimpleGrid columns={4} spacing={5} padding="20px">
          {isLoading && <Progress mb="50px" size="xs" isIndeterminate />}
          {categories?.data.map((item) => {
            return (
              <Card key={item.id} shadow="lg">
                <CardHeader>
                  {/* -------question router Dom  */}
                  <Link as={RouterLink} to={`/product/${item.id}`}>
                    <Image src={item.image} borderRadius="10px" />
                  </Link>
                  {/* <Link href={`/product/${item.id}`}>
                    <Image src={item.image} borderRadius="10px" />
                  </Link> */}
                </CardHeader>
                <CardBody>
                  <HStack spacing="5">
                    <MdOutlineProductionQuantityLimits color="#bf6664" />
                    <Heading as="h4" size="md">
                      {item.name}
                    </Heading>
                  </HStack>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Categories;
