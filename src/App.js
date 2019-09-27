import React, { Component } from "react";

import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <SideBar />
        <Intro />
        <Projects />
        <Contact />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0"
  }
};

export default App;
