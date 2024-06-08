import "./Navbar.css";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-section__1">
        <a href="/">Home</a>
        <a href="/">Course Overview</a>
        <a href="/">Instructor</a>
        <a href="/">Testimonials</a>
        <a href="/">Pricing</a>
        <a href="/">FAQs</a>
        <a href="/">Contact</a>
      </div>
      <div className="navbar-section__2">
        <SyncAltIcon />
        <PersonIcon />
        <FavoriteBorderIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
}
export default Navbar;
