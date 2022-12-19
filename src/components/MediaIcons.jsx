import { Grid } from "@chakra-ui/react";
import "../App.css";
export default function MediaIcons({
  marginLeft,
  padding,
  borderRadius,
  border,
}) {
  return (
    <Grid
      templateColumns={{
        base: "repeat(4,1fr)",
        sm: "repeat(4,1fr)",
        md: "repeat(4,1fr)",
        lg: "repeat(4,1fr)",
      }}
      gap="10px"
      justifyContent="space-evenly"
      px={10}
      id="contact-icons"
      marginLeft={marginLeft}
    >
      <a
        className="linkSocal"
        style={{
          padding: { padding },
          borderRadius: { borderRadius },
          border: { border },
        }}
        href="https://github.com/rahulyadav826870"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../images/icons/connect/github.png")}
          alt="gitHub"
          className="icons"
        />
      </a>
      <a
        className="linkSocal"
        style={{
          padding: { padding },
          borderRadius: { borderRadius },
          border: { border },
        }}
        href="https://www.linkedin.com/in/rahul-yadav-200a7b176/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={require("../images/icons/connect/linked.png")}
          className="icons"
          alt="Linked-in"
        />
      </a>
      <a
        style={{
          padding: { padding },
          borderRadius: { borderRadius },
          border: { border },
        }}
        className="linkSocal"
        href="mailto:rahulyadav826870@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("../images/icons/connect/email.png")} alt="mail-me" />
      </a>
      <a
        style={{
          padding: { padding },
          borderRadius: { borderRadius },
          border: { border },
        }}
        href="tel:7977350248"
        className="linkSocal"
      >
        <img
          src={require("../images/icons/connect/phone.png")}
          alt="call-me"
          className="icons"
        />
      </a>
    </Grid>
  );
}
