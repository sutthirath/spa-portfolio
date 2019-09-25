import React from "react";

function Yocal() {
  return (
    <div style={styles.container}>
      <h1>Yocal</h1>
      <div>IMAGES</div>
      <div>
        <p>
          A traveling and social app for adventurers. Explore new lands and meet
          locals who know where to find the good stuff. Search Places of
          interest get user submitted photos and reviews with the Foursquare
          API. Real-time chat with local experts who love to share their
          expertise and make new friends.
        </p>
      </div>
      <div>
        <p>Technologies</p>
        <ul style={styles.list}>
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
      <div>
        <button style={styles.button}>Source Code</button>
        <button style={styles.button}>View App</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    textAlign: "center"
  },
  list: {
    listStyleType: "none"
  },
  button: {
    fontFamily: "Damion",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "5px"
  }
};

export default Yocal;
