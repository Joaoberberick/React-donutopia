interface props {
  link: string;
}

const NavLink = ({ link }: props) => {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link">
        {link}
      </a>
    </li>
  );
};

export default NavLink;
