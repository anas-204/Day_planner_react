import { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "../src/firebase-config";
import "../styles/loginandregisterBG.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        getAuth(app),
        input.email,
        input.password
      );
      await sendEmailVerification(userCredential.user);
      await Swal.fire({
        title: "Account Created!",
        text: "Redirecting to login...",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      navigate("/Login");
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          await Swal.fire({
            title: "Email already in use",
            text: "Please use a different email address",
            icon: "error",
            confirmButtonText: "OK",
          });
          break;
        case "auth/weak-password":
          await Swal.fire({
            title: "Weak Password",
            text: "Please choose a stronger password (min 6 chars)",
            icon: "error",
            confirmButtonText: "OK",
          });
          break;
        case "auth/invalid-email":
          await Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address",
            icon: "error",
            confirmButtonText: "OK",
          });
          break;
        default:
          await Swal.fire({
            title: "Registration Failed",
            text: error.message,
            icon: "error",
            confirmButtonText: "OK",
          });
      }
    }
  };

  return (
    <div className="loginAndRegisterContainer d-flex align-items-center">
      <div className="formBG bg-light col-sm-7 col-md-5 col-lg-4 col-xl-3 col-11 rounded-3 p-4 mx-auto my-auto">
        <h4 className="text-center">Sign Up</h4>
        <p>Create your account to get started.</p>

        <form
          onSubmit={submit}
          className="d-flex flex-column align-items-center my-4"
        >
          <div className="mb-3 col-11">
            <label className="name my-2">
              <i className="bi bi-person mx-1"></i> User Name
            </label>
            <input
              className="form-control nameField"
              type="text"
              placeholder="Type your name"
              onChange={handleInput}
              name="name"
              value={input.name}
              required
            />
          </div>

          <div className="mb-3 col-11">
            <label className="email my-1">
              <i className="bi bi-envelope-check mx-2"></i> Email Address
            </label>
            <input
              className="form-control emailField"
              type="email"
              placeholder="Type your Email"
              onChange={handleInput}
              name="email"
              value={input.email}
              required
            />
          </div>

          <div className="mb-3 col-11">
            <label className="password my-2">
              <i className="bi bi-lock mx-1"></i> Password
            </label>
            <input
              className="form-control passwordField"
              type="password"
              placeholder="Type your Password"
              onChange={handleInput}
              name="password"
              value={input.password}
              required
              minLength="6"
            />
            <small className="text-muted">Minimum 6 characters</small>
          </div>

          <button
            type="submit"
            className="btn btn-primary subBut border-0 border col-8 my-3"
          >
            Sign Up
          </button>
        </form>

        <p>Already have an account?</p>
        <Link to="/Login" className="signInBut">
          Sign In
        </Link>
      </div>
    </div>
  );
}
