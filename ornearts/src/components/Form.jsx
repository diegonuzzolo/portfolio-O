// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xwplrgba");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form className="contact-form" method="POST" style={{ position: "absolute", bottom: "8%" }} onSubmit={handleSubmit}>
      <div className="form-group">

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        />
        </div>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <div className="form-group">
      <label htmlFor="message">Il tuo messaggio</label>
      <textarea
        id="message"
        name="message"
      />
      </div>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button style={{cursor: 'pointer'}} className="submit-btn" type="submit" disabled={state.submitting}>
        Invia
      </button>
    </form>
  );
}

export default Form;