import React from "react";

import yocal1 from "../../images/yocal1.png";

function Yocal({ mobile }) {
  let styles = desktopStyles;
  if (mobile) {
    styles = mobileStyles;
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Yocal</h1>
      <div style={styles.images}>
        <img src={yocal1} style={styles.image} alt="yocal logo" />
        <img
          src={yocal1}
          style={{ ...styles.image, ...styles.gif }}
          alt="yocal logo"
        />
        <img src={yocal1} style={styles.image} alt="yocal logo" />
      </div>
      <div style={styles.detail}>
        <p style={styles.text}>
          A traveling and social app for adventurers. Explore new lands and meet
          locals who know where to find the good stuff. Search Places of
          interest get user submitted photos and reviews with the Foursquare
          API. Real-time chat with local experts who love to share their
          expertise and make new friends.
        </p>
      </div>
      <div style={styles.tech}>
        <p>Technologies</p>
        <div style={styles.listContainer}>
          <ul style={{ ...styles.list, ...styles.listOne }}>
            <li>• HTML</li>
            <li>• CSS</li>
            <li>• JavaScript</li>
            <li>• REST</li>
          </ul>
          <ul style={styles.list}>
            <li>• Node.js</li>
            <li>• Express.js</li>
            <li>• React.js</li>
            <li>• MaterializeCSS</li>
          </ul>
          <ul style={styles.list}>
            <li>• Foursquare API</li>
            <li>• Heroku</li>
          </ul>
        </div>
      </div>
      <div style={styles.links}>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://github.com/sutthirath/yocal")}
        >
          Source Code
        </button>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://yocal.herokuapp.com/")}
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
    paddingTop: "4em",
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
    maxWidth: "8em",
    borderRadius: "10px",
    margin: "0 1px"
  },
  gif: {
    border: "3px solid rgba(255,255,255,.9)",
    borderLeft: "1px solid rgba(255,255,255,.9)",
    borderRight: "1px solid rgba(255,255,255,.9)"
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
    border: "3px solid rgba(255,255,255,.9)",
    borderLeft: "1px solid rgba(255,255,255,.9)",
    borderRight: "1px solid rgba(255,255,255,.9)"
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

export default Yocal;
