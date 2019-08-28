import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Links from "../components/Links";
import stars from "../images/stars.svg";

class Intro extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Navbar style={styles.nav}>
          <NavbarBrand href="/" style={styles.brand}>
            Sean Vilaysane
          </NavbarBrand>
          <Links className="ml-auto" />
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
  nav: {
    display: "flex",
    justifyContent: "space-between"
  },
  brand: {
    color: "white",
    fontFamily: "damion",
    fontSize: "5em",
    textDecoration: "none"
  }
};

export default Intro;
