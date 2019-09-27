import React, { Component } from "react";

import Yocal from "../components/projects/Yocal";
import SeattleTransit from "../components/projects/SeattleTransit";
import BugInvaders from "../components/projects/BugInvaders";
import Rainier from "../components/art/Rainier";

import rain from "../images/rain.svg";

class Projects extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Yocal />
        <SeattleTransit />
        <BugInvaders />
        <Rainier />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
    background: `url(${rain})`,
    backgroundRepeat: "space"
  }
};

export default Projects;
