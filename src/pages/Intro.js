import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Links from "../components/Links";
import Clouds from "../components/art/Clouds";

import stars from "../images/stars.svg";

class Intro extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Navbar style={styles.nav}>
          <NavbarBrand href="/" style={styles.brand}>
            Sean Vilaysane
          </NavbarBrand>
          <Links
            className="ml-auto"
            scrollToBottom={this.props.scrollToBottom}
          />
        </Navbar>
        <div style={styles.textContainer}>
          <p style={styles.text}>
            "I'm Sean, a Full Stack Developer in the Seattle area, thank you for
            visiting!"
          </p>
        </div>
        <Clouds />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    background: `url(${stars})`,
    backgroundRepeat: "space"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between"
  },
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "5em",
    textDecoration: "none"
  },
  textContainer: {
    margin: "0",
    padding: "0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  text: {
    fontFamily: "damion",
    fontSize: "3em",
    maxWidth: "40%",
    marginBottom: "0"
  }
};

export default Intro;
