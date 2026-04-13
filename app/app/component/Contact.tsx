import {
  Button,
  Card,
  Center,
  Field,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { RiMailLine } from "react-icons/ri";

const Contact = () => {
  return (
    <Center
      id="section4"
      style={{ height: "100vh" }}
      flexDirection={"column"}
      gap={"10"}
    >
      <Heading size="4xl">Get In Touch</Heading>
      <Heading size="2xl">
        Have a project in mind or want to collaborate? Feel free to reach out!
      </Heading>
      <Center backgroundColor={"pink"} width={"50rem"}>
        <Card.Root
          style={{ padding: "2rem" }}
          variant={"elevated"}
          width={"100%"}
        >
          <Stack gap="8">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input placeholder="John Doe" />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input placeholder="me@example.com" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea placeholder="Tell me about your project..." />
            </Field.Root>
            <Button colorPalette="teal" variant="solid" size={"lg"}>
              <RiMailLine /> Send me a message
            </Button>
          </Stack>
        </Card.Root>
      </Center>
    </Center>
  );
};

export default Contact;
