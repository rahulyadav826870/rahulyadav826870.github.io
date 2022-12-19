import { Grid } from "@chakra-ui/react";
import Heading from "./Heading";

import Stats from "./Stats";

export default function Statistics() {
  return (
    <Grid
      p="10px"
      w={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
      margin="auto"
    >
      <Heading title="Statistics" />
      <Stats />
    </Grid>
  );
}
