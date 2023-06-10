import { Input } from '../../../ExportComponents';
import { StyledForm, StyledInputField } from '../../../styles/Form.styled';
import { useRef, useState } from 'react';

const isEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const successMessage = (
  <div className="success-message">
    <p className="title-m">
      Thank you for your message, we will reach up to you as soon as possible!
    </p>
  </div>
);

const ContactForm = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [textareaError, setTextAreaError] = useState(false);
  const [showSuccesMessage, setshowSuccesMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const textareaRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    //Name input validation
    setNameError(nameInputRef.current.value.trim().length === 0);

    //Email input validation
    if (emailInputRef.current.value.trim().length === 0) {
      setEmailError(true);
      setEmailErrorMessage('Input should not be empty');
    } else if (!isEmail(emailInputRef.current.value)) {
      setEmailError(true);
      setEmailErrorMessage('Email format not valid');
    } else {
      setEmailError(false);
    }

    //Textarea input validation
    setTextAreaError(textareaRef.current.value.trim().length === 0);

    if (
      nameInputRef.current.value.trim().length !== 0 &&
      emailInputRef.current.value.trim().length !== 0 &&
      textareaRef.current.value.trim().length !== 0 &&
      emailInputRef.current.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setshowSuccesMessage(true);
    }
  };

  return (
    <>
      {showSuccesMessage ? (
        successMessage
      ) : (
        <StyledForm onSubmit={submitHandler}>
          <StyledInputField>
            <Input
              label="First and last name:"
              type="text"
              id="name"
              ref={nameInputRef}
            />
            {nameError && (
              <p className="error-message">Input should not be empty</p>
            )}
          </StyledInputField>
          <StyledInputField>
            <Input label="Email:" type="text" id="email" ref={emailInputRef} />
            {emailError && <p className="error-message">{emailErrorMessage}</p>}
          </StyledInputField>
          <StyledInputField>
            <label htmlFor="message">Your Message:</label>
            <textarea
              id="message"
              rows={10}
              cols={20}
              ref={textareaRef}
            ></textarea>
            {textareaError && (
              <p className="error-message">Input should not be empty</p>
            )}
          </StyledInputField>
          <button type="submit" className="btn-secondary">
            Send
          </button>
        </StyledForm>
      )}
    </>
  );
};

export default ContactForm;
