import { Flex, Grid, Img, Text } from "@chakra-ui/react";
import Heading from "./Heading";

export default function TechStack() {
  return (
    <Grid
      id="Skills"
      w={{ sm: "90%", base: "80%", md: "90%", lg: "100%" }}
      margin="auto"
    >
      <Heading title="SKILLS" />
      <Grid
        id="skills"
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="10px"
        textAlign="left"
      >
        <Grid gap={10}>
          <Text className="subHead">Frontend Development</Text>
          <Flex>
            <Img src={require("../images/icons/Tech/html.png")} alt="" />
            <Text>HTML</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/css.png")} alt="" />
            <Text>CSS3</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/js.png")} alt="" />
            <Text>JavaScript</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/reactpng.png")} alt="" />
            <Text>React</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/reactRedux.png")} alt="" />
            <Text>Redux</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/chakra.png")} alt="" />
            <Text>Chakra UI</Text>
          </Flex>
        </Grid>
        <Grid gap={10}>
          <Text className="subHead">Backend Development</Text>
          <Flex>
            <Img src={require("../images/icons/Tech/expressjs.png")} alt="" />
            <Text>Express</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/mongo.png")} alt="" />
            <Text>Mongo DB</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/git.png")} alt="" />
            <Text>GitHub</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/Tech/postman.png")} alt="" />
            <Text>POSTMAN</Text>
          </Flex>
        </Grid>
        <Grid gap={10}>
          <Text className="subHead">Data Structures & Algorithm</Text>
          <Flex>
            <Img src={require("../images/icons/csbte/problem.png")} alt="" />
            <Text>Problem Solving</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/csbte/dataorg.png")} alt="" />
            <Text>Data Organized</Text>
          </Flex>
        </Grid>
        <Grid gap={10}>
          <Text className="subHead">Communication Skills</Text>
          <Flex>
            <Img src={require("../images/icons/csbte/collab.png")} alt="" />
            <Text>Collaboration</Text>
          </Flex>
          <Flex>
            <Img src={require("../images/icons/csbte/active.png")} alt="" />
            <Text>Active Listening</Text>
          </Flex>
        </Grid>
      </Grid>
    </Grid>
  );
}
