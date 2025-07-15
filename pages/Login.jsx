import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("write a valid email")
    .required("email is required"),
  password: Yup.string()
    .min(4, " too short ")
    .max(25, "too long")
    .required("passwod is required"),
});

export default function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    validateOnChange: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form
      className="d-flex flex-column align-items-center"
      onSubmit={formik.handleSubmit}
    >
      <Form.Group className="mb-3 col-8 " controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
        />
      </Form.Group>
      <div>
        {formik.touched.email && formik.errors.email
          ? formik.errors.email
          : null}
      </div>
      <Form.Group className="mb-3 col-8">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
