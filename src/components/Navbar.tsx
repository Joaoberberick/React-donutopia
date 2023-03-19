import { ReactNode } from "react";
import "./styles/Navbar.css";

interface props {
  name: string;
  logo?: string;
  children?: ReactNode;
}

const Navbar = ({ name, logo, children }: props) => {
  return (
    <div className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="navbar-brand">
          <img className="logo" src={logo} alt="" />
          {name}
        </div>
        <div className="nav-links d-none d-lg-block">
          <ul className="navbar-nav">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
