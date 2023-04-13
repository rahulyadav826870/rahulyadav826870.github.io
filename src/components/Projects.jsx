import { Grid,Text } from "@chakra-ui/react";
import Heading from "./Heading";
import ProjectCard from "./ProjectCard";

const ProjectDetails = [
 
  {
    title: "NDTV.com",
    src: "../images/Projects/ndtv.png",
    desc: "New Delhi Television Ltd is an Indian news media company focusing on broadcast and digital news publication.",
    tech: ["HTML", "css", "JavaScript"],
    features: ["Authentication, Sorting & Filtering functionalities"],
  },
  {
    title: "Dot&Key.com",
    src: "../images/Projects/dotkey.png",
    desc: "Designed to treat the skin of spots and blemishes, these are skin's best friends. The Dot and Key hyaluronic acid serum replenish and lock the skin's moisture.",
    tech: ["HTML", "css", "JavaScript", "Jquery", "Node JS"],
    features: [
      "Checkout",
      "Sorting & Filtering",
      "Payment",
      "Login/Signup for users",
    ],
  },
  {
    title: "Travel Website.com",
    src: "../images/Projects/travelwebsite.png",
    desc: "In this website find World Travel Guide, Tour Packages, Hotels Directory, Online details of Travel Agents and Tour Operators, Complete Tour and Travel .",
    tech: [
      "HTML",
      "css",
      "JavaScript",
      "React",
      "React Router",
      "Chakra UI",
      "Firebase",
      "Postman",
    ],
    features: [
      "Authentication Through Firebase",
      "Admin Page",
      "Delete & Update",
    ],
  },
  {
    title: "NDTV.com",
    src: "../images/Projects/ndtv2.png",
    desc: "Clone project of one of the biggest news channel in India which provide a new from all over the world in various categories like sports, politics, media, etc. Collabrative project",
    tech: ["HTML", "css", "JavaScript", "API", "Git"],
    features: [
      "Live tv section",
      "search particular category, Sorting & Filtering functionalities",
      "Login &Signup for users",
    ],
  },
   {
    title: "MovieMatrix.com",
    src: "../images/Projects/MovieMatrix.png",
    desc: "MovieMatrix is one stop solution for any information regarding movies, web series, tv-shows, you can find trailers, details add reviews or make a watchlist. We provide smart content search & recommendations.",
    tech: ["HTML", "css", "JavaScript","React", "Express","Mongodb","Node-js", "React-Redux", "React-Router","Chakra-UI"],
    features: ["Authentication, Sorting & Filtering functionalities"],
  },
  {
    title: "MarketLink.com",
    src: "../images/Projects/marketLink.png",
    desc: "Online Shopping & Reselling site in India - Buy & Sell best quality Fashion, Electronics, Home & Kitchen products at lowest prices.",
    tech: ["HTML", "css", "JavaScript","React", "React-Router","ChakraUI","Redux", "React-Redux", "Redux-Thunk","Tailwind"],
    features: ["Authentication, DAYNAMIC PRODUCT,ADD TO CART","FILTERING","PAYMENT"],
  },
];

export default function Projects() {
  return (
    <Grid
      id="Projects"
      w={{ sm: "80%", base: "80%", md: "90%", lg: "100%" }}
      margin="auto"
    >
      <Heading title="PROJECTS" />

      <Grid
        id="projects"
        templateColumns={{
          base: "1fr",
          sm: "1fr",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="50px"
        pos="relative"
      >

<Grid pos={"relative"}>
        <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >01</Text>
          <img
            src={require("../images/Projects/MovieMatrix.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={2} details={ProjectDetails[4]} />
          <Grid
            templateColumns="1fr 1fr"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/hr927/MovieMatrix-Zee5_Clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://moviematrix.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

        <Grid pos={"relative"}>
        <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >02</Text>
          <img
            src={require("../images/Projects/marketLink.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={2} details={ProjectDetails[5]} />
          <Grid
            templateColumns="1fr 1fr"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/santoshy1101/questionable-milk-2896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://poetic-cobbler-9476b0.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

        <Grid pos={"relative"}>
        <Text  _hover={{color:"black"}} pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >03</Text>
          <img
            src={require("../images/Projects/ndtv.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={0} details={ProjectDetails[0]} />
          <Grid
            templateColumns="repeat(2,1fr)"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/lokesh-dc/Ndtv-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://loquacious-paletas-d45019.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

        <Grid pos={"relative"}>
        <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >04</Text>
          <img
            src={require("../images/Projects/dotkey.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={0} details={ProjectDetails[1]} />
          <Grid
            templateColumns="repeat(2,1fr)"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/rahulyadav826870/roasted-brake-1134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://magnificent-sherbet-ca5637.netlify.app/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

        <Grid pos={"relative"}>
        <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >05</Text>
          <img
            src={require("../images/Projects/travelworld.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={1} details={ProjectDetails[2]} />
          <Grid
            templateColumns="1fr 1fr"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/rahulyadav826870/zippy-dime-1055"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://trawel-world.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

        <Grid pos={"relative"}>
        <Text pos={"absolute"} fontSize="3rem" top={"-10"} left={{base:"0",lg:"0"}} >06</Text>
          <img
            src={require("../images/Projects/ndtv2.png")}
            style={{ borderRadius: "10px" }}
            alt=""
          />
          <ProjectCard key={2} details={ProjectDetails[3]} />
          <Grid
            templateColumns="1fr 1fr"
            m="10px"
            gap="10px"
            className="projectbuttons"
          >
            <a
              href="https://github.com/kieransahoo/NDTV-Clone-Project-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button variant="outline" className="gitCode">
                CODE
              </button>
            </a>
            <a
              href="https://ndtv-hot-wood-7345.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="live">LIVE</button>
            </a>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}
