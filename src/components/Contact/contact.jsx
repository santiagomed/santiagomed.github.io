import React from "react";
import keys from "./emailJSKeys.json";
import emailjs from "emailjs-com";
import Joi from "joi-browser";
import Form from "../common/form";

class Contact extends Form {
  state = {
    data: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Username"),
    email: Joi.string().email().required().label("Email"),
    subject: Joi.string().required().label("Subject"),
    message: Joi.string().required().label("Message"),
  };

  doSubmit = () => {
    const { name, email, subject, message } = this.state.data;

    let templateParams = {
      from_name: email,
      reply_to: email,
      sender_name: name,
      to_name: "santiagm@umich.edu",
      subject: subject,
      message_html: message,
    };

    emailjs
      .send(keys.SERVICE_ID, keys.TEMPLATE_ID, templateParams, keys.USER_ID)
      .then((res) => {
        console.log("Email successfully sent!", res.status, res.text);
      })
      .catch((err) => console.error("Email sending failed", err));

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      data: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      errors: {},
    });
  };

  render() {
    return (
      <div className="center">
        <h1 className="center-text m-4">Contact Me!</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("subject", "Subject")}
          {this.renderInput("message", "Message", false)}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default Contact;
