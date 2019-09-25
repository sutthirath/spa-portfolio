import React from "react";

import Yocal from "../components/projects/Yocal";

import rain from "../images/rain.svg";

class Projects extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Yocal />
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
