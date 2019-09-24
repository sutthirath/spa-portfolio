import React from "react";

import seattle from "../images/seattle.svg";

function Seattle() {
  return (
    <footer style={styles.container}>
      <img src={seattle} style={styles.image} alt="Seattle Skyline" />
    </footer>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "0",
    padding: "0"
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
};

export default Seattle;
