import { useState } from "react";

function StudentForm({ onStudentAdded }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    program: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!formData.email.includes("@")) newErrors.email = "Email must contain @";
    if (!formData.program.trim()) newErrors.program = "Program is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const body = new URLSearchParams();
      body.append("firstName", formData.firstName);
      body.append("lastName", formData.lastName);
      body.append("email", formData.email);
      body.append("program", formData.program);

      const response = await fetch("http://localhost/assignment2/register.php", {
        method: "POST",
        body: body,
      });

      const data = await response.json();

      if (data.status === "success") {
        setMessage("Student registered successfully!");
        setFormData({ firstName: "", lastName: "", email: "", program: "" });
        if (onStudentAdded) onStudentAdded();
      } else {
        setMessage("Error: " + (data.message || "Registration failed"));
      }
    } catch (err) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div className="card">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Program</label>
          <input
            type="text"
            name="program"
            value={formData.program}
            onChange={handleChange}
          />
          {errors.program && <p className="error">{errors.program}</p>}
        </div>

        <button type="submit">Register</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default StudentForm;