import React from "react";

import Email_Icon from "../images/email_icon.svg";

function Form() {
  return (
    <form
      className="contact-form"
      style={styles.container}
      method="post"
      name="portfolio-msg"
      action="/success"
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
        style={styles.name}
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="contact-input"
        style={styles.email}
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <textarea
        className="contact-textarea"
        style={styles.message}
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
  name: {
    width: "90%",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: "2em",
    padding: "1em",
    border: "none",
    borderRadius: "30px 30px 0 0",
    color: "white",
    fontFamily: "Nunito, sans-serif"
  },
  email: {
    width: "90%",
    margin: ".5em 0",
    padding: "1em",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "none",
    color: "white",
    fontFamily: "Nunito, sans-serif"
  },
  message: {
    width: "90%",
    height: "60%",
    padding: "1em",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "none",
    borderRadius: "0 0 30px 30px",
    resize: "none",
    color: "white",
    fontFamily: "Nunito, sans-serif"
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
