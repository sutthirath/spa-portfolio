import React from "react";

import Intro from "./pages/Intro";
import SideBar from "./components/SideBar";

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Intro />
        <SideBar />
      </div>
    );
  }
}

const styles = {
  container: {}
};

export default App;
