import React from "react";

import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
import Resume_Icon from "../images/resume_icon.svg";
import Resume from "../images/resume.pdf";

function SideBar() {
  return (
    <div style={styles.container}>
      <a href="seanvilaysane@gmail.com" style={styles.link}>
        <img src={Email_Icon} style={styles.image} alt="email_icon" />
      </a>
      <a href="https://www.linkedin.com/in/seanvilaysane/" style={styles.link}>
        <img src={LinkedIn_Icon} style={styles.image} alt="linkedin_icon" />
      </a>
      <a href="https://github.com/sutthirath" style={styles.link}>
        <img src={Github_Icon} style={styles.image} alt="github_icon" />
      </a>
      <a href={Resume} download="SutthirathSeanVilaysane" style={styles.link}>
        <img src={Resume_Icon} style={styles.image} alt="resume_icon" />
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    height: "400px",
    width: "100px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px",
    position: "fixed",
    zIndex: "1"
  },
  link: {
    display: "block",
    textDecoration: "none"
  },
  image: {
    width: "4em"
  }
};

export default SideBar;
