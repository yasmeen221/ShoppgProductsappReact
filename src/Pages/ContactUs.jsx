import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useTitle } from "./../Hooks/useTitle";

//------------------------------ Handel Validation------------------------------
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Subject is Short")
    .max(50, "Max is 50 Char"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message is Short")
    .max(100, "Max is 100 Char"),
});

const ContactUs = () => {
  useTitle("ContactUs");
  //------------------------------ Handel Some Functions------------------------------
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = (values) => {
    console.log(values);
    setSuccessMessage("Your values has been sent Successfully");
  };

  //------------------------------ Body of Component------------------------------
  return (
    <>
      <Box className="contact">
        <Container mt="40px" mb="100px">
          <Heading as="h4" size="md">
            ContactUs
          </Heading>
          <VStack
            border="2px solid #bf6664 "
            borderRadius="20px"
            mt="10px"
            as="form"
            shadow="xl"
            spacing="30"
            padding="40px"
            filter="auto"
            onSubmit={handleSubmit(formSubmit)}
          >
            <FormControl isInvalid={errors.name ? true : false}>
              <Input
                type="text"
                placeholder="Enter Your Name"
                {...register("name")}
              />
              {errors.name ? (
                <FormErrorMessage>{errors.name.message}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={errors.email ? true : false}>
              <Input
                type="email"
                placeholder="Enter Your Email"
                {...register("email")}
              />
              {errors.email ? (
                <FormErrorMessage>{errors.email.message}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={errors.subject ? true : false}>
              <Input
                type="text"
                placeholder="Enter Your Subject"
                {...register("subject")}
              />
              {errors.subject ? (
                <FormErrorMessage>{errors.subject.message}</FormErrorMessage>
              ) : null}
            </FormControl>
            <FormControl isInvalid={errors.message ? true : false}>
              <Textarea
                placeholder="Enter Your Message"
                {...register("message")}
              />
              {errors.message ? (
                <FormErrorMessage>{errors.message.message}</FormErrorMessage>
              ) : null}
            </FormControl>
            <Button w="full" bgColor="#bf6664" color="white" type="submit">
              Submit
            </Button>
          </VStack>
          {setSuccessMessage && (
            <Center mt="30px" color="blue">
              {successMessage}
            </Center>
          )}
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
