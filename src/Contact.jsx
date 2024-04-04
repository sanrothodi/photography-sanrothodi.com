import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
    <div className="contact-form">

      <h1 className="contact-me">Contact</h1>

      <form  className="kwes-form" action="https://kwes.io/api/foreign/forms/Y2fdOksViwrs7LlVeJmC" method="post" id="contact-form">

          <div className="form-name" for="name">Name<span className="required"></span></div>
          <div><input type="text" name="name" className="field" placeholder="Full name" rules="required|max:255"/></div>

          <div className="form-name" for="email">Email <span className="required"></span></div>
          <div><input type="text" name="email" className="field" placeholder="Email" rules="required|email|max:255"/></div>

          <div className="form-name" for="subject">Subject <span className="required"></span></div>
          <div><input type="text" name="subject" className="field" placeholder="Subject" rules="required|max:255"/></div>

          <div className="form-name" for="message">Message <span className="required"></span></div>
          <div className="grow-wrap" ><textarea name="message" className="message-field" id="message" rows="12" cols="100" placeholder="Tell me more" onInput="this.parentNode.dataset.replicatedValue = this.value"></textarea></div>

        <div className="submit-button-position"><input className="button" type="submit" value="Send"/></div>

      </form>
    </div>
  </div>
  );
};

export default Contact;