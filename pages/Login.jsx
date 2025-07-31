import Button from "react-bootstrap/Button";
import "../styles/loginandregisterBG.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../src/firebase-config";
import Swal from "sweetalert2";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        getAuth(app),
        input.email,
        input.password
      );

      await Swal.fire({
        title: "Login Successful!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/Tasks");
    } catch (error) {
      await Swal.fire({
        title: "Login Failed",
        text: "something went",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginAndRegisterContainer d-flex align-items-center">
      <div className="formBG bg-light col-sm-7 col-md-5 col-lg-4 col-xl-3 col-11 rounded-3 p-4 mx-auto my-auto">
        <h4 className="text-center">Login</h4>
        <p>Welcome back! Please login to your account</p>
        <form
          className="d-flex flex-column align-items-center my-4"
          onSubmit={submit}
        >
          <div className="mb-3 col-11">
            <label className="email my-2">
              <i className="bi bi-envelope-check mx-1"></i> Email Address
            </label>
            <input
              className="emailField form-control"
              type="email"
              placeholder="Type your Email"
              onChange={handleInput}
              name="email"
              required
            />
          </div>

          <div className="mb-3 col-11">
            <label className="password my-2">
              <i className="bi bi-lock mx-1"></i> Password
            </label>
            <input
              className="passwordField form-control"
              type="password"
              placeholder="Type your Password"
              onChange={handleInput}
              name="password"
              required
            />
          </div>

          <Button
            variant="primary"
            type="submit"
            className="subBut border-0 border col-8 my-3"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
        <p>Or Sign Up Using</p>
        <Link to="/Register" className="signUpBut">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
