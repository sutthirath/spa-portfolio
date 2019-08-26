import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import stars from "../images/stars.svg";

class Intro extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Navbar>
          <NavbarBrand href="/" style={styles.brand}>
            Sean Vilaysane
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "30vh",
    background: `url(${stars})`,
    backgroundRepeat: "space"
  },
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "5em",
    textDecoration: "none"
  }
};

export default Intro;
