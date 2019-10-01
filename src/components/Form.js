import React from "react";

import Email_Icon from "../images/email_icon.svg";

function Form() {
  return (
    <form
      className="contact-form"
      style={styles.container}
      method="post"
      name="portfolio-msg"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="portfolio-msg" />
      <label className="hidden" style={styles.bot}>
        Don’t fill this out if you're human:
        <input className="contact-input" type="text" name="bot-field" />
      </label>
      <input
        className="contact-input"
        style={{ ...styles.name, ...styles.input }}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="contact-input"
        style={{ ...styles.email, ...styles.input }}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        className="contact-textarea"
        style={{ ...styles.message, ...styles.input }}
        placeholder="Send me a message"
        name="message"
        required
      />
      <div data-netlify-recaptcha="true" />
      <button className="send-btn" style={styles.button} type="submit">
        <img src={Email_Icon} style={styles.image} alt="submit your message" />
        <p style={styles.text}>Send</p>
      </button>
    </form>
  );
}

const styles = {
  container: {
    margin: "10em 0",
    width: "35em",
    height: "18em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: "30px"
  },
  bot: {
    display: "none"
  },
  input: {
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: "1em",
    border: "none",
    color: "white",
    fontFamily: "Nunito, sans-serif"
  },
  name: {
    marginTop: "2em",
    borderRadius: "20px 20px 4px 4px"
  },
  email: {
    margin: ".5em 0",
    borderRadius: "4px"
  },
  message: {
    height: "60%",
    borderRadius: "4px 4px 20px 20px",
    resize: "none"
  },
  button: {
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "damion",
    background: "none",
    border: "none",
    color: "white"
  },
  image: {
    width: "2em",
    filter: "invert(1)"
  },
  text: {
    fontSize: "2em",
    margin: ".3em"
  }
};

export default Form;
