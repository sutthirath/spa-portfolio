import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
import Resume_Icon from "../images/resume_icon.svg";
import Resume from "../images/resume.pdf";

function Links() {
  return (
    <Nav style={styles.nav}>
      <NavItem style={styles.item}>
        <NavLink href="seanvilaysane@gmail.com" style={styles.link}>
          <img src={Email_Icon} style={styles.image} alt="email_icon" />
          <p style={styles.text}>Email</p>
        </NavLink>
      </NavItem>
      <NavItem style={styles.item}>
        <NavLink
          href="https://www.linkedin.com/in/seanvilaysane/"
          style={styles.link}
        >
          <img src={LinkedIn_Icon} style={styles.image} alt="linkedin_icon" />
          <p style={styles.text}>LinkedIn</p>
        </NavLink>
      </NavItem>
      <NavItem style={styles.item}>
        <NavLink href="https://github.com/sutthirath" style={styles.link}>
          <img src={Github_Icon} style={styles.image} alt="github_icon" />
          <p style={styles.text}>Github</p>
        </NavLink>
      </NavItem>
      <NavItem style={styles.item}>
        <NavLink
          href={Resume}
          download="SutthirathSeanVilaysane"
          style={styles.link}
        >
          <img src={Resume_Icon} style={styles.image} alt="resume_icon" />
          <p style={styles.text}>Resume</p>
        </NavLink>
      </NavItem>
    </Nav>
  );
}

const styles = {
  nav: {
    width: "20em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    listStyleType: "none"
  },
  item: {
    margin: "0",
    padding: "0"
  },
  link: {
    textDecoration: "none",
    textAlign: "center"
  },
  image: {
    margin: "0",
    padding: "0",
    filter: "invert(1)",
    width: "4em"
  },
  text: {
    margin: "0",
    padding: "0",
    color: "white",
    fontSize: "1em",
    fontFamily: "Nunito Sans, sans-serif"
  }
};

export default Links;
