import React from "react";

import Intro from "./pages/Intro";
import Links from "./components/Links";

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Intro />
        <Links />
      </div>
    );
  }
}

const styles = {
  container: {}
};

export default App;
