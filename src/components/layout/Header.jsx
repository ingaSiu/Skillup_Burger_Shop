// Write all the code here

import DropdownMenu from './DropdownMenu';
import { FiShoppingCart } from 'react-icons/fi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <div>
        <a href="/">
          <IoFastFoodOutline />
        </a>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>

        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
