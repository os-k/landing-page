import "./Form.css";
import { useState } from "react";
import { ClipLoader } from 'react-spinners';
function Form() {
  const initialFormData =
  {
    email: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    mobileNumber: "",
    objective: "",
  }
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(FormData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      window.location.href = 'https://paystack.com/pay/fnupworkmasterclass';
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (result.success) {
        alert("Form submitted successfully!");
        setLoading(false);
        setFormData(initialFormData)
      } else {
        alert("Form submission failed.");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("An error occurred: " + error.message);
    }
  };
  return (
    <div>
      <div className="form-container">
        <form className="header-form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="email">Email Id</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              required
              placeholder="John"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">
              Last Name <span className="optional">(Optional)</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              placeholder="Doe"
              onChange={handleChange}
              required
              value={formData.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile-number">Mobile Number</label>
            <div className="mobile-number__div">
              <input
                type="text"
                id="countryCode"
                name="countryCode"
                placeholder="+91"
                required
                onChange={handleChange}
                value={formData.countryCode}
              />
              <input
                type="tel"
                id="mobile-number"
                name="mobileNumber"
                required
                placeholder="8586080747"
                onChange={handleChange}
                value={formData.mobileNumber}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="objective">I want to learn Freelancing to:</label>
            <select
              id="objective"
              name="objective"
              required
              onChange={handleChange}
              value={formData.objective}
            >
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
          <button disabled={loading} type="submit" className="submit-button">
          {loading ? <ClipLoader size={20} /> : 'Enroll Now'}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
