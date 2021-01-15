import React from "react";

// import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
// import Resume_Icon from "../images/resume_icon.svg";
// import Resume from "../images/resume.pdf";

function MobileLinks(props) {
  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        {/* <button
          onClick={() => props.scrollToBottom()}
          style={{ ...styles.link, ...styles.button }}
        >
          <img src={Email_Icon} style={styles.image} alt="email_icon" />
          <p style={styles.label}>Email</p>
        </button> */}
        <a
          href="https://www.linkedin.com/in/seanvilaysane/"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn_Icon} style={styles.image} alt="linkedin_icon" />
          <p style={styles.label}>LinkedIn</p>
        </a>
        <a
          href="https://github.com/sutthirath"
          style={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github_Icon} style={styles.image} alt="github_icon" />
          <p style={styles.label}>Github</p>
        </a>
        {/* <a href="#" download="SutthirathSeanVilaysane" style={styles.link}>
          <img src={Resume_Icon} style={styles.image} alt="resume_icon" />
          <p style={styles.label}>Resume</p>
        </a> */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "sticky",
    zIndex: "10",
    width: "100%",
    height: "auto",
    backgroundColor: "rgba(255,255,255,.7)",
    bottom: "0vh",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  button: {
    background: "none",
    color: "inherit",
    border: "none",
    padding: "0",
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
  image: {
    width: "2em",
  },
  label: {
    margin: "0",
    padding: "0",
    color: "black",
  },
};

export default MobileLinks;
