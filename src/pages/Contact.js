import React from "react";

import Form from "../components/Form";
import Seattle from "../components/ArtSeattle";

import trees from "../images/trees.svg";

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Form />
        <Seattle />
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    height: "100%",
    background: `url(${trees})`,
    backgroundRepeat: "space",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

export default Contact;
