import React, { Component } from "react";

import Yocal from "../components/projects/Yocal";
import SeattleTransit from "../components/projects/SeattleTransit";
import BugInvaders from "../components/projects/BugInvaders";
import Rainier from "../components/art/Rainier";

import rain from "../images/rain.svg";

class Projects extends Component {
  render() {
    const { mobile } = this.props;
    return (
      <div style={styles.container}>
        <Yocal mobile={mobile} />
        <SeattleTransit mobile={mobile} />
        <BugInvaders mobile={mobile} />
        <Rainier mobile={mobile} />
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
    backgroundRepeat: "repeat"
  }
};

export default Projects;
