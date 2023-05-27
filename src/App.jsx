import { styled } from 'styled-components';

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split('').reverse()} />
);

function App() {
  return (
    <>
      <div>
        <Button>Normal Button</Button>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
      </div>
    </>
  );
}

const Button = styled.button`
  display: inline-block;
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  display: block;
`;

export default App;
