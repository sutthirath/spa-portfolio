import React from "react";

import Form from "../components/Form";
import Seattle from "../components/art/Seattle";

import trees from "../images/trees.svg";

class Contact extends React.Component {
  render() {
    const { mobile } = this.props;
    return (
      <div style={styles.container}>
        <Form mobile={mobile} />
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
    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
};

export default Contact;
