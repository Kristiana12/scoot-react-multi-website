import { Input } from '../../../ExportComponents';
import { StyledForm } from '../../../styles/Form.styled';

const ContactForm = () => {
  return (
    <StyledForm>
      <Input label="First and last name:" type="text" id="name" />
      <Input label="Email:" type="text" id="email" />
      <label htmlFor="message">Your Message:</label>
      <textarea id="message" rows={10} cols={20}></textarea>
      <button type="submit" className="btn-secondary">
        Send
      </button>
    </StyledForm>
  );
};

export default ContactForm;
