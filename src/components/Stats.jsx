import { Flex, Grid } from "@chakra-ui/react";

export default function Stats() {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={10}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
        }}
        className="stats-grid"
        gap={5}
        justifyContent="center"
      >
        <a
          href="https://github.com/rahulyadav826870"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=rahulyadav826870&theme=light&hide_border=false&include_all_commits=false&count_private=false"
            alt="GitHub stats"
          />
        </a>
        <a
          href="https://github.com/rahulyadav826870"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=rahulyadav826870&theme=light&hide_border=false"
            alt="streak"
          />
        </a>
        <a
          href="https://github.com/rahulyadav826870"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahulyadav826870&theme=light&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
            alt="languages"
          />
        </a>
      </Grid>
    </Flex>
  );
}
