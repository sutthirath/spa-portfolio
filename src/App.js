import React from "react";

import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import SideBar from "./components/SideBar";
import Rainier from "./components/art/Rainier";

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Intro />
        <SideBar />
        <Projects />
        <Rainier />
        <Contact />
      </div>
    );
  }
}

const styles = {
  container: {}
};

export default App;
