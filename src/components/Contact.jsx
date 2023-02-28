import { Flex, Grid, Text } from "@chakra-ui/react";
import Heading from "./Heading";
import MediaIcons from "./MediaIcons";

export default function Contact() {
  return (
    <Grid
      pos="relative"
      id="Contact"
      m="100px auto"
      w={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
    >
      <Heading title={"CONTACT ME"} textAlign="center" />
      <Grid>
        <Text>Get in Touch</Text>
        <Text fontSize="2rem">JUST SAY HELLO!</Text>
        <Text
          letterSpacing="80px"
          pos="absolute"
          top={20}
          left={{ md: "20%", lg: "15%" }}
          id="background-text"
          zIndex={-1}
          fontSize={{ base: "0rem", sm: "0rem", md: "6rem", lg: "12rem" }}
        >
          {" "}
          Hello{" "}
        </Text>
        <Grid
          w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}
          m={{
            base: "20px auto",
            sm: "50px auto",
            md: "75px auto",
            lg: "100px auto",
          }}
        >
          <MediaIcons
            marginLeft={{ lg: "0px" }}
            border={{ lg: "1px solid #9ba2a8" }}
            padding={{ lg: "10px 32px" }}
            borderRadius={{ lg: "5px" }}
          />
        </Grid>

        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
          gap="10px"
          id="contact-list"
        >
          <a
            href="mailto:rahulyadav826870@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require("../images/contact/mail.png")} alt="mail-me" />
            <Text>rahulyadav826870@gmail.com</Text>
          </a>
          <a href="tel:7977350248">
            <img src={require("../images/contact/call.png")} alt="call-me" />
            <Text>7977350248</Text>
          </a>
          <Flex>
            <img src={require("../images/contact/pin.png")} alt="Hometown" />
            <Text>Bhayandar, Mumbai</Text>
          </Flex>
        </Grid>
      </Grid>
    </Grid>
  );
}