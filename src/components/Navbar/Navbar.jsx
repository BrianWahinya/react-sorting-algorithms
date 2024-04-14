import { Link } from "react-router-dom";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <div className="div-navbar">
      <Link to={"/sort/selection"}>Selection</Link>
      <Link to={"/sort/merge"}>Merge</Link>
      <Link to={"/sort/quick"}>Quick</Link>
      <Link to={"/sort/insertion"}>Insertion</Link>
    </div>
  );
};
export default Navbar;
