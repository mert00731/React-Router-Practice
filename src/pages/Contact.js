import React from "react";

import { Form, redirect, useActionData } from "react-router-dom";

export const Contact = () => {
  const errors = useActionData();

  return (
    <div className="contact">
      <h3>Contact</h3>
      <Form method="post" action="/help/contact">
        <div>
          <label htmlFor="email">Email</label>
          {errors && errors.email && <p className="error">{errors.email}</p>}

          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          {errors && errors.message && (
            <p className="error">{errors.message}</p>
          )}

          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email");
  const message = data.get("message");

  const errors = {};

  if (typeof email !== "string" || !email.includes("@")) {
    errors.email = "You should write an email !";
  }

  if (typeof message !== "string" || message.length < 10) {
    errors.message = "You should write atleast 10 characters !";
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  //   await sendMessage(email, message);

  return redirect("/");
};
