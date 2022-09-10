import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function App() {
  const [nom, setNom] = useState();
  const [adress, setAdress] = useState();

  const handelSubmit = (event) => {
    event.preventDefault();

    console.log(nom, adress);
  };
  return (
    <Container>
      <Form>
        <Form.Group
          className="mb-3"
          controlId="textInputForm"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>Nom</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="text"
            placeholder="Enter nom"
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="textInputadress"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>Adress</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="text"
            placeholder="Adress"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="textInputadress"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>Ville</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="text"
            placeholder="Ville"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="textInputadress"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>pays</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="textInputadress"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>Téléphone</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="text"
            placeholder="Ville"
          />
          <Form.Control
            style={{ width: "50%" }}
            type="text"
            placeholder="poste"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="textInputadress"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Label style={{ width: "50%" }}>Ville</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="date"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
