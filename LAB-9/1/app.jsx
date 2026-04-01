import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateFields = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.password) {
      tempErrors.password = "Password is required.";
      isValid = false;
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    // Prevent page reload
    e.preventDefault();

    if (validateFields()) {
      console.log("Form Submitted Successfully!", formData);

      setIsSuccess(true);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    } else {
    }
  };

  return (
    <div className="container">
      <h2>User Registration</h2>

      {/* Success Message Display */}
      {isSuccess && (
        <div className="success-message">
          Form submitted successfully! Check console for details.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? "error-input" : ""}
          />
          {/* Conditional Error Display */}
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={errors.password ? "error-input" : ""}
          />
          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserForm;
