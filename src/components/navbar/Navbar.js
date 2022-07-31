import Profile from "../profile/Profile";
import "./style/Navbar.css";
import Logout from "../logout/Logout";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <a href="/" className="nav-title">
            TITA - PRUEBA
          </a>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <div>
            <Profile />
          </div>
          <div>
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
