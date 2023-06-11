import { ContactForm, ContactLocations } from '../../../ExportComponents';
import { StyledContactSection } from '../../../styles/Form.styled';

const ContactInfo = () => {
  return (
    <>
      <StyledContactSection className="section-form">
        <h2 className="section-title">Let's get in touch</h2>
        <p className="paragraph">
          Fill up the form if you want to make an appointment or if you have
          further questions.
        </p>
        <div className="background-color">
          <ContactForm />
        </div>
      </StyledContactSection>
      <ContactLocations />
    </>
  );
};

export default ContactInfo;
