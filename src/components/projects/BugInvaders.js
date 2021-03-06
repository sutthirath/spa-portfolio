import React from "react";

import buginvaders1 from "../../images/buginvaders1.png";

function BugInvaders({ mobile }) {
  let styles = desktopStyles;
  if (mobile) {
    styles = mobileStyles;
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bug Invaders</h1>
      <div style={styles.images}>
        <img src={buginvaders1} style={styles.image} alt="buginvaders logo" />
        <img
          src={buginvaders1}
          style={{ ...styles.image, ...styles.gif }}
          alt="buginvaders logo"
        />
        <img src={buginvaders1} style={styles.image} alt="buginvaders logo" />
      </div>
      <div style={styles.detail}>
        <p style={styles.text}>
          Lightweight web browser game that is built with intuitive javascript.
          No extra libraries or frameworks involved. Delivering a simple but
          enjoyable experience.
        </p>
      </div>
      <div style={styles.tech}>
        <p>Technologies</p>
        <div style={styles.listContainer}>
          <ul style={{ ...styles.list, ...styles.listOne }}>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• GitHub Pages</li>
          </ul>
        </div>
      </div>
      <div style={styles.links}>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://github.com/sutthirath/BugInvaders")}
        >
          Source Code
        </button>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://sutthirath.github.io/BugInvaders/")}
        >
          View App
        </button>
      </div>
    </div>
  );
}

function link(url) {
  return window.open(url);
}

const desktopStyles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateAreas: `
    "title title"
    "images detail"
    "images tech"
    "images links"
    `,
    textAlign: "center"
  },
  title: {
    gridArea: "title"
  },
  images: {
    gridArea: "images",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  detail: {
    gridArea: "detail",
    textAlign: "left",
    maxWidth: "80%"
  },
  tech: {
    gridArea: "tech",
    textAlign: "left"
  },
  links: {
    gridArea: "links",
    textAlign: "left"
  },
  image: {
    maxHeight: "8em",
    borderRadius: "10px",
    margin: "0 1px"
  },
  gif: {
    border: "1px solid rgba(255,255,255,.9)",
    borderLeft: "3px solid rgba(255,255,255,.9)",
    borderRight: "3px solid rgba(255,255,255,.9)"
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start"
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    margin: "0"
  },
  listOne: {
    paddingLeft: "0"
  },
  button: {
    fontFamily: "Damion",
    fontSize: "16px",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "5px",
    margin: "20px 10px 5em 0"
  }
};

const mobileStyles = {
  container: {
    margin: "0",
    padding: "0",
    paddingTop: "2em",
    width: "100%",
    display: "grid",
    gridTemplateRows: "auto",
    gridTemplateColumns: "auto",
    gridTemplateAreas: `
    "title"
    "images"
    "detail"
    "tech"
    "links"
    `,
    textAlign: "center"
  },
  title: {
    gridArea: "title"
  },
  images: {
    gridArea: "images",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  detail: {
    gridArea: "detail",
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  text: {
    maxWidth: "90%",
    textAlign: "left"
  },
  tech: {
    gridArea: "tech",
    textAlign: "center"
  },
  links: {
    gridArea: "links",
    textAlign: "center"
  },
  image: {
    maxWidth: "6em",
    borderRadius: "10px",
    margin: "0 1px"
  },
  gif: {
    border: "1px solid rgba(255,255,255,.9)",
    borderLeft: "3px solid rgba(255,255,255,.9)",
    borderRight: "3px solid rgba(255,255,255,.9)"
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  list: {
    listStyleType: "none",
    textAlign: "left",
    margin: "0",
    padding: "0"
  },
  button: {
    fontFamily: "Damion",
    fontSize: "16px",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "5px",
    margin: "20px 10px 5em 0"
  }
};

export default BugInvaders;
