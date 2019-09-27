import React from "react";

import cloud from "../../images/clouds.svg";

function Clouds() {
  return (
    <div style={styles.container}>
      <img src={cloud} style={styles.image} alt="clouds and Sean" />
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

export default Clouds;
