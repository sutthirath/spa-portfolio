import React from "react";

import seattletransit1 from "../../images/seattletransit1.png";

function SeattleTransit() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seattle Transit</h1>
      <div style={styles.images}>
        <img
          src={seattletransit1}
          style={styles.image}
          alt="seattletransit logo"
        />
        <img
          src={seattletransit1}
          style={{ ...styles.image, ...styles.gif }}
          alt="seattletransit logo"
        />
        <img
          src={seattletransit1}
          style={styles.image}
          alt="seattletransit logo"
        />
      </div>
      <div style={styles.detail}>
        <p>
          An interactive public transit app for the Seattle, WA area. Created
          with the OneBusAway API but designed with the collaboration of Sean
          Vilaysane, Henry Hong, and Chris Tack. Easy to navigate interface with
          a beautiful visualization of local transit data.
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
            <li>• E.js</li>
            <li>• MaterializeCSS</li>
          </ul>
          <ul style={styles.list}>
            <li>• OneBusAway API</li>
            <li>• Mapbox API</li>
            <li>• Heroku</li>
          </ul>
        </div>
      </div>
      <div style={styles.links}>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://github.com/sutthirath/SeattleTransit")}
        >
          Source Code
        </button>
        <button
          style={styles.button}
          type="button"
          onClick={() => link("https://nameless-harbor-37613.herokuapp.com/")}
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

const styles = {
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
    flexDireaction: "row",
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

export default SeattleTransit;
