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
          <div style={mobileStyles.textContainer}>
            <p style={mobileStyles.text}>
              <span style={mobileStyles.welcome}>Welcome to my site!</span>
              <br></br>
              I'm a Full Stack Developer in the Seattle area. I'm working on a
              new version of my portfolio. In the meantime, please visit my
              LinkedIn and GitHub, thanks for visiting!
              <br></br>
              <strong>
                Warmly,
                <br></br>
                Sean
              </strong>
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
              <span style={mobileStyles.welcome}>Welcome to my site!</span>
              <br></br>
              I'm a Full Stack Developer in the Seattle area. I'm working on a
              new version of my portfolio. In the meantime, please visit my
              LinkedIn and GitHub, thanks for visiting!
              <br></br>
              <strong>Warmly, Sean</strong>
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
    backgroundRepeat: "repeat",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: "0 10px 0 0",
  },
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "5em",
    textDecoration: "none",
    margin: "0 0 0 10px",
    padding: "0",
  },
  textContainer: {
    margin: "6em 0",
    padding: "0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "damion",
    fontSize: "2em",
    maxWidth: "60%",
    margin: "0",
  },
};

const mobileStyles = {
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "3em",
    textDecoration: "none",
    margin: "0",
    marginTop: ".5em",
    padding: "0",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textContainer: {
    margin: "4em 0 3em 0",
    padding: "0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "damion",
    fontSize: "1.8em",
    maxWidth: "90%",
    margin: "0",
    padding: "0",
    textAlign: "left",
  },
  welcome: {
    fontSize: "1.5em",
  },
};

export default Intro;
