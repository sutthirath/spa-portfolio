import React from "react";

// import Email_Icon from "../images/email_icon.svg";
import LinkedIn_Icon from "../images/linkedin_icon.svg";
import Github_Icon from "../images/github_icon.svg";
// import Resume_Icon from "../images/resume_icon.svg";
// import Resume from "../images/resume.pdf";

function Links(props) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.item}>
        {/* <li onClick={() => props.scrollToBottom()} style={styles.link}>
          <img src={Email_Icon} style={styles.image} alt="email_icon" />
          <p style={styles.text}>Email</p>
        </li> */}
        <li>
          <a
            href="https://www.linkedin.com/in/seanvilaysane/"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn_Icon} style={styles.image} alt="linkedin_icon" />
            <p style={styles.text}>LinkedIn</p>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sutthirath"
            style={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github_Icon} style={styles.image} alt="github_icon" />
            <p style={styles.text}>Github</p>
          </a>
        </li>
        {/* <li
          href={Resume}
          download="SutthirathSeanVilaysane"
          style={styles.link}
        >
          <img src={Resume_Icon} style={styles.image} alt="resume_icon" />
          <p style={styles.text}>Resume</p>
        </li> */}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: "20em",
    margin: "0",
    padding: "0",
  },
  item: {
    width: "100%",
    margin: "10px 0",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    listStyleType: "none",
  },
  link: {
    textDecoration: "none",
    textAlign: "center",
    marginLeft: "10px",
  },
  image: {
    margin: "0",
    padding: "0",
    filter: "invert(1)",
    width: "4em",
  },
  text: {
    margin: "0",
    padding: "0 0 0 12px",
    color: "white",
    fontSize: "1em",
    fontFamily: "Nunito Sans, sans-serif",
  },
};

export default Links;
