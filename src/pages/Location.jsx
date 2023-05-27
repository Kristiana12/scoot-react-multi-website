import { Link } from 'react-router-dom';

const Location = () => {
  return (
    <div className="location">
      Location
      <li>
        <Link to="/about/1">Link 1</Link>
      </li>
      <li>
        <Link to="/about/2">Link 2</Link>
      </li>
    </div>
  );
};

export default Location;
