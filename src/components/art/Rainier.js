import React from "react";

import rainier1 from "../../images/rainier1.svg";
import rainier2 from "../../images/rainier2.svg";
import rainier3 from "../../images/rainier3.svg";

function Rainier() {
  return (
    <div style={styles.container}>
      <img src={rainier3} alt="rainier peak" />
      <img src={rainier2} alt="rainier mid" />
      <img src={rainier1} alt="rainier base" />
    </div>
  );
}

const styles = {
  container: {
    width: "100%"
  }
};

export default Rainier;
