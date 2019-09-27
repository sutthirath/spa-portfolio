import React from "react";

import seattle from "../../images/seattle.svg";

function Seattle() {
  return (
    <div style={styles.container}>
      <img src={seattle} style={styles.image} alt="Seattle Skyline" />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "flex-end"
  },
  image: {
    maxWidth: "100%",
    margin: "0",
    padding: "0"
  }
};

export default Seattle;
