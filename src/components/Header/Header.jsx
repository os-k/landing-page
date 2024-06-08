import "./Header.css";
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
            <StarIcon style={{color :"fcdc25" }}className="icon" /> 5
          </button>
          <button className="header-button__left">
            {" "}
            <SubscriptionsIcon style={{color :"2575fc" }} className="icon" /> Over 150+ Enrollments
          </button>
          <button className="header-button__left">
            {" "}
            <DateRangeIcon style={{color :"2575fc" }} className="icon" />3 Days
          </button>
          <button className="header-button__left">
            {" "}
            <AccessTimeFilledIcon style={{color :"2575fc" }} className="icon" />
            2hrs/day{" "}
          </button>
        </div>
      </div>
      <div className="form-container">
        <form className="header-form">
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              placeholder="John"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">
              Last Name <span className="optional">(Optional)</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <div className="mobile-number__div">
              <input
                type="text"
                id="country-code"
                name="country-code"
                placeholder="+91"
                required
              />
              <input
                type="tel"
                id="mobile-number"
                name="mobile-number"
                required
                placeholder="8586080747"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="batch">I want to learn Freelancing to:</label>
            <select id="batch" name="batch" required>
              <option value="">-- Choose your Objective --</option>
              <option value="Gain multiple income streams">
                Gain multiple income streams
              </option>
              <option value="Build my portfolio">Build my portfolio</option>
              <option value="Work from Anywhere">Work from Anywhere</option>
              <option value="Set my own schedule">Set my own schedule</option>
              <option value="Embrace continuous learning">
                Embrace continuous learning
              </option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Enroll Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
