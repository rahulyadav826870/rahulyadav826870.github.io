import { Box, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";
export default function Skills() {
  return (
    <Grid
      id="Technologies"
      w={{ sm: "90%", base: "80%", md: "90%", lg: "100%" }}
      margin="auto"
    >
      <Heading borderBottom="0px" title="TECHNICAL SKILLS" />
      <Grid>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(5,1fr)",
          }}
          justifyContent="space-around"
          id="techStack"
        >
          <Box>
            <Img src={require("../images/icons/Tech/html.png")} alt="" />
            <Text>HTML5</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/css.png")} alt="" />
            <Text>CSS3</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/js.png")} alt="" />
            <Text>JavaScript</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/reactpng.png")} alt="" />
            <Text>React</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/reactRedux.png")} alt="" />
            <Text>React Redux</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/chakra.png")} alt="" />
            <Text>Chakra UI</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/mongo.png")} alt="" />
            <Text>Mongo DB</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/nodejs.png")} alt="" />
            <Text>Node JS</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/expressjs.png")} alt="" />
            <Text>Express JS</Text>
          </Box>
          <Box>
            <Img src={require("../images/icons/Tech/git.png")} alt="" />
            <Text>GitHub</Text>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
