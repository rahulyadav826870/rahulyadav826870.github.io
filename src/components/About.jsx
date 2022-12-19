import { Button, Grid, Img } from "@chakra-ui/react";
import { Link } from "react-scroll";
import Introduction from "./Introduction";
import Profile from "./Profile";
import MediaIcons from "./MediaIcons";
export default function About() {
  return (
    <Grid id="About">
      <Grid
        templateColumns={{ base: "1fr", sm: "1fr", md: "1fr", lg: "2fr 1fr" }}
        p={{ base: "10px", sm: "10px", md: 5, lg: 10 }}
        gap={{ base: "10px", sm: "20px" }}
        pt={{ base: "10px", sm: "10px", md: 2, lg: 3 }}
        textAlign="left"
        justifyContent="center"
        alignItems="center"
        w={{ sm: "90%", base: "80%", md: "90%", lg: "100%" }}
        margin="auto"
      >
        <Introduction />
        <Profile />
      </Grid>
      <Grid
        justifyContent="space-evenly"
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "1fr",
          lg: "1fr 1fr 1fr",
        }}
        gap={5}
        px={40}
        my={{ base: 0, sm: 10, md: 10, lg: 10 }}
      >
        <MediaIcons marginLeft={{ lg: "-150px" }} />
        <Grid justifyContent="center" cursor="pointer">
          <Button
            _hover={{
              background: "#2b6cb0",
              color: "white",
            }}
            background="#d0d9e1"
          >
            <Link
              to="tech-section"
              spy={true}
              smooth={true}
              offset={-90}
              duration={750}
              fontSize="15px"
              letterSpacing="2px"
              _hover={{
                background: "#2b6cb0",
                color: "teal.500",
              }}
            >
              SCROLL
            </Link>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/2413/2413298.png"
              id="arrow"
              alt="slide-down"
              width="20px"
              _hover={{
                background: "#2b6cb0",
                color: "teal.500",
              }}
              ml="10px"
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
