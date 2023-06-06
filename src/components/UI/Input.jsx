import { StyledInputField } from '../styles/Form.styled';

const Input = ({ label, id, inputType }) => {
  return (
    <StyledInputField>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={inputType} />
    </StyledInputField>
  );
};

export default Input;
