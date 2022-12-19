import { Grid } from "@chakra-ui/react";
import React from "react";
import GithubCalender from "react-github-calendar";
import Heading from "./Heading";
import ReactTooltip from "react-tooltip";

export default function GitCalendar() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
  };
  return (
    <Grid
      w={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
      margin="auto"
      gap="30"
    >
      <Heading title="Coding Stats" />
      <GithubCalender
        username="rahulyadav826870"
        blockSize={25}
        blockMargin={6}
        theme={colourTheme}
        fontSize={10}
      >
        <ReactTooltip delayShow={10} html />
      </GithubCalender>
    </Grid>
  );
}
