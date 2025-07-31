import { useState } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "../src/firebase-config";
import "../styles/loginAndRegisterBG.css";
import Swal from "sweetalert2";

export default function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

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
        title: "Your account is created successfully",
        icon: "success",
        confirmButtonText: "OK",
        draggable: true,
      });
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          Swal.fire({
            title: "Email already-in-use",
            icon: "error",
            confirmButtonText: "OK",
            draggable: true,
          });
          break;
        case "auth/weak-password":
          Swal.fire({
            title: "Password is weak",
            icon: "error",
            confirmButtonText: "OK",
            draggable: true,
          });
          break;
        case "auth/invalid-email":
          Swal.fire({
            title: "Your account is created successfully",
            icon: "error",
            confirmButtonText: "OK",
            draggable: true,
          });
          break;
        default:
          Swal.fire({
            title: "Your account is created successfully",
            icon: "question",
            confirmButtonText: "OK",
            draggable: true,
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
            <label className="name">
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
            <label className="email">
              <i className="bi bi-envelope-check mx-1"></i> Email Address
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
            <label className="password">
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
