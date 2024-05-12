import { Link } from "react-router-dom";
import Logo from "@/assets/icons/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen">
      <nav className="w-6/12 m-auto flex justify-between items-center py-2 bg-white space-x-4">
        <Link to="/">
          <img
            style={{ width: "138px", height: "25px" }}
            src={Logo}
            alt="Logo"
          />
        </Link>
        <Link to="/favorites">즐겨찾기</Link>
      </nav>
    </div>
  );
};

export default Navbar;
