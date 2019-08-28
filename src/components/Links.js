import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

function Links() {
  return (
    <div style={styles.container}>
      <Nav style={styles.nav} horizontal>
        <NavItem style={styles.item}>
          <NavLink href="" style={styles.link}>
            Email
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink
            href="https://www.linkedin.com/in/seanvilaysane/"
            style={styles.link}
          >
            LinkedIn
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink href="https://github.com/sutthirath" style={styles.link}>
            Github
          </NavLink>
        </NavItem>
        <NavItem style={styles.item}>
          <NavLink href="" style={styles.link}>
            Resume
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

const styles = {
  container: {},
  nav: {
    display: "flex",
    listStyleType: "none"
  },
  item: {
    padding: "30px"
  },
  link: {
    color: "white",
    textDecoration: "none"
  }
};

export default Links;
