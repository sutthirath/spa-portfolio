import React from "react";

import seattle from "../../images/seattle.svg";

function Seattle({ mobile }) {
  let styles = desktopStyles;
  if (mobile) {
    styles = mobileStyles;
  }
  return (
    <div style={styles.container}>
      <img src={seattle} style={styles.image} alt="Seattle Skyline" />
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
    maxWidth: "100%",
    margin: "0",
    padding: "0"
  }
};

const mobileStyles = {
  container: {
    width: "100%",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden"
  },
  image: {
    width: "auto",
    height: "auto",
    maxWidth: "800px",
    maxHeight: "800px",
    margin: "0",
    padding: "0"
  }
};

export default Seattle;
