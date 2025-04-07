import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xwplrgba");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (state.succeeded) {
      setShowSuccessMessage(true);
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
        window.location.reload();
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [state.succeeded]);

  return (
    <div>
      {showSuccessMessage && (
        <div className="success-message">
          Grazie per averci contattato!
        </div>
      )}
      {!state.succeeded && (
        <form style={{position: 'relative', top: '140vh'}} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Indirizzo Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Il tuo messaggio</label>
            <textarea
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit-btn">
            Invia
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
