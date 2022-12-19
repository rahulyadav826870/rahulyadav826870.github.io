import { Grid } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import GitCalendar from "./components/GithubCalender";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills.jsx";
import Statistics from "./components/Statistics";
import TechStack from "./components/TechStack";

function App() {
  return (
    <Grid
      bg={"#D0D9E1"}
      className="App"
      alignItems="center"
      justifyContent={"center"}
      gap={{ base: "20px", sm: "20px", md: "60px", lg: "100px" }}
      px={{ base: 0, sm: 0, md: "100px", lg: "50px" }}
    >
      <Navbar />
      <About />
      <TechStack />
      <Skills />
      <Projects />
      <Statistics />
      <GitCalendar />
      <Contact />
    </Grid>
  );
}

export default App;
