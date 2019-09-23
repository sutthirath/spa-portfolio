import React from "react";

import rain from "../images/rain.svg";

class Projects extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <p>Projects</p>
      </div>
    );
  }
}

const styles = {
  container: {
    height: "30vh",
    background: `url(${rain})`,
    backgroundRepeat: "space"
  }
};

export default Projects;
