import React, { Component } from "react";

import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import SideBar from "./components/SideBar";
import MobileLinks from "./components/MobileLinks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sBar: "none"
      // vWidth: 0
    };
  }

  /* Make component that finds view width on load */
  // watchWidth = () => {}

  handleScroll = () => {
    if (window.scrollY >= 120) {
      return this.setState({
        sBar: "flex"
      });
    } else if (window.scrollY < 120) {
      return this.setState({
        sBar: "none"
      });
    }
  };

  scrollToBottom = () => {
    let scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  render() {
    // Pass vWidth to each page
    const { sBar } = this.state;
    const stb = this.scrollToBottom;
    return (
      <div style={styles.container}>
        <SideBar sBar={sBar} scrollToBottom={stb} />
        <MobileLinks scrollToBottom={stb} />
        <Intro scrollToBottom={stb} />
        <Projects />
        <Contact />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%"
  }
};

export default App;
