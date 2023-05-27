import { NavLink } from 'react-router-dom';

const NavigationLink = ({ link }) => {
  return (
    <li>
      <NavLink to={`/${link}`}>{link}</NavLink>
    </li>
  );
};

export default NavigationLink;
