import { Box, Text, Img } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Box id="profile" pos="relative">
      <Img
        src={require("../images/profile.jpg")}
        alt="Rahul-Profile.jpg"
        w="75%"
        m="auto"
      />

      <Text fontSize="xl" color="#d6d6d6" pos="absolute" top="0" left="0">
        {" "}
      </Text>
      <Text
        fontSize="xl"
        color="#d6d6d6"
        pos="absolute"
        bottom="0"
        right="0"
      ></Text>
    </Box>
  );
}
