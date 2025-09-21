import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ mode = "signup" }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    e.target.reset();
    setShowPassword(false);

    if (mode === "signup") {
      navigate("/");
    }
  }
  return (
    <form onSubmit={handleSubmit} className="auth-container">
      {mode === "signup" && (
        <>
          <li>
            <label htmlFor="first-name">First Name</label>
            <input id="first-name" type="text" name="first-name" required />
          </li>
          <li>
            <label htmlFor="last-name">Last Name</label>
            <input id="last-name" type="text" name="last-name" required />
          </li>
        </>
      )}

      <li>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </li>
      <li style={{ position: "relative" }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          minLength="8"
          required
        />
        <span
          onClick={togglePassword}
          style={{
            position: "absolute",
            right: "40px",
            top: "35px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {showPassword ? "👁️" : "🙈"}
        </span>
      </li>

      {mode === "signup" ? (
        <button type="submit">Sign Up</button>
      ) : (
        <button type="submit">Log In</button>
      )}
    </form>
  );
}
