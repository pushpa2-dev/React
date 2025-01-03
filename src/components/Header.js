import {CON_LOGO} from "../Utils/constants"
const Header = () => {
    return (
      <div className="header">
        <div className="Logo-container">
          <img
            className="logo"
            src= {CON_LOGO }
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;