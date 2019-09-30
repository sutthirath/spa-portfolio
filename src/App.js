import React, { Component } from "react";

import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import SideBar from "./components/SideBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sBar: "none"
    };
  }

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
    return (
      <div style={styles.container}>
        <SideBar sBar={this.state.sBar} scrollToBottom={this.scrollToBottom} />
        <Intro scrollToBottom={this.scrollToBottom} />
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
