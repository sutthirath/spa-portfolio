import React from "react";

import rainier1 from "../../images/rainier1.svg";
import rainier2 from "../../images/rainier2.svg";
import rainier3 from "../../images/rainier3.svg";

function Rainier({ mobile }) {
  let styles = desktopStyles;
  if (mobile) {
    styles = mobileStyles;
  }
  return (
    <div style={styles.container}>
      <img
        src={rainier3}
        style={{ ...styles.image, ...styles.peak }}
        alt="rainier peak"
      />
      <img
        src={rainier2}
        style={{ ...styles.image, ...styles.mid }}
        alt="rainier mid"
      />
      <img
        src={rainier1}
        style={{ ...styles.image, ...styles.base }}
        alt="rainier base"
      />
    </div>
  );
}

const desktopStyles = {
  container: {
    width: "100%",
    height: "40em",
    display: "flex",
    alignItems: "flex-end"
  },
  image: {
    maxWidth: "100%",
    maxHieght: "100%",
    position: "absolute"
  },
  peak: {
    zIndex: "0"
  },
  mid: {
    zIndex: "1"
  },
  base: {
    zIndex: "2"
  }
};

const mobileStyles = {
  container: {
    width: "100%",
    height: "11em",
    display: "flex",
    alignItems: "flex-end"
  },
  image: {
    maxWidth: "100%",
    maxHieght: "100%",
    position: "absolute"
  },
  peak: {
    zIndex: "0"
  },
  mid: {
    zIndex: "1"
  },
  base: {
    zIndex: "2"
  }
};

export default Rainier;
