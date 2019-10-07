import React from "react";

import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
import Resume_Icon from "../images/resume_icon.svg";
import Resume from "../images/resume.pdf";

function MobileLinks(props) {
  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        <button
          onClick={() => props.scrollToBottom()}
          style={{ ...styles.link, ...styles.button }}
        >
          <img src={Email_Icon} style={styles.image} alt="email_icon" />
          <p>Email</p>
        </button>
        <a
          href="https://www.linkedin.com/in/seanvilaysane/"
          style={styles.link}
        >
          <img src={LinkedIn_Icon} style={styles.image} alt="linkedin_icon" />
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/sutthirath" style={styles.link}>
          <img src={Github_Icon} style={styles.image} alt="github_icon" />
          <p>Github</p>
        </a>
        <a href={Resume} download="SutthirathSeanVilaysane" style={styles.link}>
          <img src={Resume_Icon} style={styles.image} alt="resume_icon" />
          <p>Resume</p>
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    zIndex: "10",
    width: "100%",
    backgroundColor: "rgba(255,255,255,.7)"
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit"
  },
  link: {
    display: "block",
    textDecoration: "none"
  },
  image: {
    width: "2em"
  }
};

export default MobileLinks;
