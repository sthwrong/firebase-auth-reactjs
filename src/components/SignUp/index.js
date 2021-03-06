import React, { useContext } from "react";
import { FirebaseAuth } from "../../provider/AuthProvider";
import { withRouter } from "react-router-dom";

const SignUp = () => {
  const { handleSignUp, inputs, setInputs, errors } = useContext(FirebaseAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* replace the div tags with a form tag */}

      {/* make inputs  */}
      <input
        onChange={handleChange}
        name="email"
        placeholder="email"
        value={inputs.email}
      />
      <input
        onChange={handleChange}
        name="password"
        placeholder="password"
        value={inputs.password}
      />
      <button>Sign up</button>
      {errors.length > 0
        ? [...new Set(errors)].map((error) => (
            <p style={{ color: "red" }} key="">
              {error}
            </p>
          ))
        : null}
    </form>
  );
};

export default withRouter(SignUp);
