import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
import Resume_Icon from "../images/resume_icon.svg";
import Resume from "../images/resume.pdf";

function Links() {
  return (
    <div style={styles.container}>
      <Nav style={styles.nav} horizontal>
        <NavItem style={styles.item}>
          <NavLink href="" style={styles.link}>
            <img src={Email_Icon} alt="email_icon" />
            Email
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink
            href="https://www.linkedin.com/in/seanvilaysane/"
            style={styles.link}
          >
            <img src={LinkedIn_Icon} alt="linkedin_icon" />
            LinkedIn
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink href="https://github.com/sutthirath" style={styles.link}>
            <img src={Github_Icon} alt="github_icon" />
            Github
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink
            href={Resume}
            download="SutthirathSeanVilaysane"
            style={styles.link}
          >
            <img src={Resume_Icon} alt="resume_icon" />
            Resume
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

const styles = {
  container: {},
  nav: {
    display: "flex",
    listStyleType: "none"
  },
  item: {
    padding: "30px"
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none"
  }
};

export default Links;
