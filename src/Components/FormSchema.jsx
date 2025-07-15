import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function FormSchema({ onAddTask, onCancel }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const formData = new FormData(form);
    const newTask = {
      title: formData.get("validationCustom01"),
      dueDate: formData.get("validationCustom02"),
      startTime: formData.get("validationCustomUsername"),
      endTime: formData.get("validationCustom03"),
      priority: formData.get("validationCustom04"),
      category: formData.get("validationCustom05"),
      description: formData.get("validationCustom06"),
    };
    onAddTask(newTask);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className=" border border-1 p-4 rounded-2 "
    >
      <Row className="mb-3 text-start">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Task title"
            defaultValue=""
            name="validationCustom01"
          />
          <Form.Control.Feedback className="text-center">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" className="text-center">
            {" "}
            please provide a title{" "}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="Date"
            placeholder="Due Date"
            defaultValue=""
            name="validationCustom02"
          />
          <Form.Control.Feedback className="text-center">
            Looks good!
          </Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" className="text-center">
            {" "}
            please provide a date{" "}
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 text-start">
        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Start time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Start time"
            name="validationCustomUsername"
            required
          />
          <Form.Control.Feedback type="invalid" className="text-center">
            Please choose a time.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>End time</Form.Label>
          <Form.Control
            type="time"
            placeholder="End time"
            name="validationCustom03"
            required
          />
          <Form.Control.Feedback type="invalid" className="text-center">
            Please provide a time.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 text-start">
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Priority</Form.Label>
          <Form.Control as="select" name="validationCustom04" required>
            <option value="Low">Low</option>
            <option value="medium">medium</option>
            <option value="High">High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label className="text-start">Category</Form.Label>
          <Form.Control as="select" name="validationCustom05" required>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Health">Health</option>
            <option value="Learning">Learning</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <Row className="mb-5 text-start">
        <Form.Group as={Col} md="12" controlId="validationCustom06">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            defaultValue=""
            name="validationCustom06"
          />
        </Form.Group>
      </Row>

      <Button type="submit" className="mx-2 border-0">
        Add Task
      </Button>
      <Button onClick={onCancel} className="mx-3 border-0">
        Cancel
      </Button>
    </Form>
  );
}
