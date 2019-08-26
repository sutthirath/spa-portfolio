import React from "react";

function Links() {
  return (
    <div style={styles.container}>
      <a href="" style={styles.link}>
        Email
      </a>
      <a href="https://www.linkedin.com/in/seanvilaysane/" style={styles.link}>
        LinkedIn
      </a>
      <a href="https://github.com/sutthirath" style={styles.link}>
        Github
      </a>
      <a href="" style={styles.link}>
        Resume
      </a>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    height: "400px",
    width: "150px",
    borderTopRightRadius: "30px",
    borderBottomRightRadius: "30px"
  },
  link: {
    display: "block",
    padding: "20px"
  }
};

export default Links;
