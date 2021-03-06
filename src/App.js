import React, { Component } from "react";

import Intro from "./pages/Intro";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

import SideBar from "./components/SideBar";
import MobileLinks from "./components/MobileLinks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sBar: "none",
      vWidth: 0,
    };
  }

  watchWidth = (width) => {
    return this.setState({
      vWidth: width,
    });
  };

  handleScroll = () => {
    if (window.scrollY >= 120) {
      return this.setState({
        sBar: "flex",
      });
    } else if (window.scrollY < 120) {
      return this.setState({
        sBar: "none",
      });
    }
  };

  scrollToBottom = () => {
    let scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };

  componentDidMount() {
    const width = window.innerWidth;
    this.watchWidth(width);
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentDidUpdate() {
    const width = window.innerWidth;
    window.addEventListener("resize", () => {
      if (this.state.vWidth !== width) {
        this.watchWidth(width);
      }
    });
  }

  render() {
    const { sBar, vWidth } = this.state;
    const stb = this.scrollToBottom;
    if (vWidth > 0 && vWidth <= 800) {
      // Mobile View
      return (
        <div style={styles.container}>
          <Intro scrollToBottom={stb} mobile={true} />
          {
            // Jan 14, 2021 - I disabled these pages until I'm ready for my next opportunity
            /* <Projects mobile={true} />
            <Contact mobile={true} /> */
          }
          <MobileLinks scrollToBottom={stb} />
        </div>
      );
    } else {
      // Desktop View
      return (
        <div style={styles.container}>
          <SideBar sBar={sBar} scrollToBottom={stb} />
          <Intro scrollToBottom={stb} />
          {
            // Jan 14, 2021 - I disabled these pages until I'm ready for my next opportunity
            /* <Projects />
            <Contact /> */
          }
        </div>
      );
    }
  }
}

const styles = {
  container: {
    margin: "0",
    padding: "0",
    width: "100%",
  },
};

export default App;
