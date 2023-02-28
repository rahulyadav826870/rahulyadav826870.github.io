import { Box, Button, Text } from "@chakra-ui/react";

export default function Introduction() {
  return (
    <Box bg={"#D0D9E1"} p={{ sm: 0, md: 0, lg: "10px" }}>
      <Text
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "4xl" }}
        color="grey"
        letterSpacing="10px"
      >
        HELLO
      </Text>
      <Text
        id="name"
        fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: "5xl" }}
      >
        {" "}
        I'm <span color="#6499e0">Rahul Yadav</span>{" "}
      </Text>
      <Text
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "3xl" }}
        color="black"
      >
        Full Stack Web Developer
      </Text>
      <Text
        fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "2xl" }}
        color="gray"
      >
        I have made vearious projects using React JS and Node JS individual and
        collaborative projects using tech stack during my Masai journey full
        time with hundreds of hours of coding and problem solving. I also did my
        B.E. in Mechanical Engineering from Mumbai University. My interests are
        coding, reading about planets, browsing, exploring new areas.
        <br /> Scroll down to know me
      </Text>

      <a
        href={require("../images/Rahul_ Yadav_Resume.pdf")}
        download="Rahul-Yadav-Resume"
        onClick={()=>window.open("https://drive.google.com/file/d/1RwICxH9fGoSBR_vLw8U_ngROQ8WDDV5U/view?usp=sharing","_blank" ) } 
      >
        <Button
          variant="outline"
          id="resume"
          _hover={{ bg: "#2b6cb0", color: "white" }}
          letterSpacing={2}
        >
          RESUME
        </Button>
      </a>
    </Box>
  );
}
