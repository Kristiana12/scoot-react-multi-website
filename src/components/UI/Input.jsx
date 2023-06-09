import { forwardRef } from 'react';

const Input = forwardRef(({ label, id, inputType }, ref) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={inputType} ref={ref} />
    </>
  );
});

export default Input;
