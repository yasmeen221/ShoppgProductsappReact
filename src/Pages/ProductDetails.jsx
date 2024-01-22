import {
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Image,
  Progress,
  SimpleGrid,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ImPriceTag } from "react-icons/im";
import { SlBasketLoaded } from "react-icons/sl";
import { useTitle } from "./../Hooks/useTitle";

const ProductDetails = () => {
  useTitle("ProductDetails");
  //------------------------------ Handel Fetch Data------------------------------
  const { id } = useParams();
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`),
  });
  if (isError) {
    return <Heading>{error.message}</Heading>;
  }

  //------------------------------ Body of Component------------------------------
  return (
    <>
      <Container maxW="6xl">
        <SimpleGrid columns={4} spacing={5} padding="20px">
          {isLoading && <Progress mb="50px" size="xs" isIndeterminate />}
          {products?.data.map((item) => {
            return (
              <Card key={item.id} shadow="lg">
                <CardHeader>
                  <Image src={item.images} borderRadius="10px" />
                </CardHeader>
                <CardBody>
                  <Heading as="h5" size="sm" mb="15px">
                    {item.title}
                  </Heading>
                  <HStack spacing="8rem">
                    <HStack>
                      <ImPriceTag color="#bf6664" />
                      <Heading as="h6" size="xs">{`${item.price}$`}</Heading>
                    </HStack>
                    <SlBasketLoaded color="#bf6664" />
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

export default ProductDetails;
