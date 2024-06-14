import "./Header.css";
import Form from "../Form/Form";
import StarIcon from "@mui/icons-material/Star";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
function Header() {
  return (
    <div className="header-div">
      <div className="hero-section">
        <h1>Masterclass on Freelancing</h1>
        <p>
          Learn Everything About Freelancing: Setting Up Your Business, Finding
          Clients, Managing Projects, Financial Management, and Growing Your
          Career to Build a Successful Freelance Business from Scratch!
        </p>
        <div className="header-div__left">
          <button className="header-button__left">
            <StarIcon style={{ color: "fcdc25" }} className="icon" /> 5
          </button>
          <button className="header-button__left">
            {" "}
            <SubscriptionsIcon
              style={{ color: "2575fc" }}
              className="icon"
            />{" "}
            Over 150+ Enrollments
          </button>
          <button className="header-button__left">
            {" "}
            <DateRangeIcon style={{ color: "2575fc" }} className="icon" />3 Days
          </button>
          <button className="header-button__left">
            {" "}
            <AccessTimeFilledIcon
              style={{ color: "2575fc" }}
              className="icon"
            />
            2hrs/day{" "}
          </button>
        </div>
      </div>
      <div><Form /></div>
    </div>
  );
}

export default Header;
