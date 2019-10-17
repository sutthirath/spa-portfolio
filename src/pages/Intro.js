import React, { Component } from "react";

import Links from "../components/Links";
import Clouds from "../components/art/Clouds";

import stars from "../images/stars.svg";

class Intro extends Component {
  render() {
    const { mobile, scrollToBottom } = this.props;
    if (mobile) {
      return (
        <div style={styles.container}>
          <div style={mobileStyles.nav}>
            <h1 href="/" style={mobileStyles.brand}>
              Sean Vilaysane
            </h1>
          </div>
          <div style={styles.textContainer}>
            <p style={mobileStyles.text}>
              I'm Sean, a Full Stack Developer in the Seattle area.
            </p>
            <p style={mobileStyles.text}>
              I enjoy cerating delightful user experiences and making complex
              systems not so complex.
            </p>
          </div>
          <Clouds mobile={mobile} />
        </div>
      );
    } else {
      return (
        <div style={styles.container}>
          <div style={styles.nav}>
            <h1 href="/" style={styles.brand}>
              Sean Vilaysane
            </h1>
            <Links scrollToBottom={scrollToBottom} />
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text}>
              I'm Sean, a Full Stack Developer in the Seattle area.
            </p>
            <p style={styles.text}>
              I enjoy cerating delightful user experiences and making complex
              systems not so complex.
            </p>
          </div>
          <Clouds />
        </div>
      );
    }
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    background: `url(${stars})`,
    backgroundRepeat: "repeat"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "5em",
    textDecoration: "none",
    margin: "0",
    padding: "0"
  },
  textContainer: {
    margin: "6em 0",
    padding: "0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    fontFamily: "damion",
    fontSize: "2em",
    maxWidth: "60%",
    margin: "0"
  }
};

const mobileStyles = {
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "3em",
    textDecoration: "none",
    margin: "0",
    marginTop: ".5em",
    padding: "0"
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  text: {
    fontFamily: "damion",
    fontSize: "1.8em",
    maxWidth: "90%",
    margin: "0",
    padding: "0"
  }
};

export default Intro;
