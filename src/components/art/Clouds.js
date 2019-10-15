import React from "react";

import cloud from "../../images/clouds.svg";

function Clouds({ mobile }) {
  let styles = desktopStyles;
  if (mobile) {
    styles = mobileStyles;
  }
  return (
    <div style={styles.container}>
      <img src={cloud} style={styles.image} alt="clouds and Sean" />
    </div>
  );
}

const desktopStyles = {
  container: {
    width: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "flex-end"
  },
  image: {
    margin: "0",
    padding: "0",
    height: "auto",
    maxWidth: "100%"
  }
};

const mobileStyles = {
  container: {
    width: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    justifyContent: "flex-end",
    overflow: "hidden"
  },
  image: {
    position: "relative",
    margin: "0",
    padding: "0",
    height: "auto",
    width: "auto",
    maxWidth: "800px",
    maxHeight: "800px",
    left: "100px"
  }
};

export default Clouds;
