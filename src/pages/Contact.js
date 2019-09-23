import React from "react";

import Form from "../components/Form";

import trees from "../images/trees.svg";

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <Form />
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100vw",
    height: "30vh",
    background: `url(${trees})`,
    backgroundRepeat: "space",
    display: "flex",
    justifyContent: "center"
  }
};

export default Contact;
