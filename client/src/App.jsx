import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Button, Form, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [nom, setNom] = useState("");
  const [address, setAddress] = useState("");
   const [ville, setVille] = useState("");
    const [pays, setPays] = useState("");
    const [telephone, setTelephone] = useState("");
    const [debut_contact, setDebut_contact] = useState("");
const obj = {
  Tunis: '+216',
  USA: '+319',

}
      const getInitialState = () => {
              const value = '+216';
              return value;
            };

            const [value, setValue] = useState(getInitialState);


             const handleNum = (e) =>{

             setTelephone(obj[pays]+ e.target.value)
             }


            const handleChange = (e) => {

              setPays(e.target.value);
            };

  const handelSubmit = async (event) => {

  console.log (event.target)
    event.preventDefault();
        await axios({
          method: "post",
           url:`http://localhost:8080/api/employees/add`,

          data: {
             nom:nom,
             address:address,
             ville:ville,
             pays:pays,
             telephone:telephone,
             debut_contact:debut_contact
          },
        })
          .then((response) => {
                console.log(response.data)

          })
window.location.reload(false);
      };




  return (
    <Container>

    <label  className="label labcolor" style={{marginTop:'30px', marginBottom:'30px'}}>Contact</label>

      <Form onSubmit={handelSubmit}>
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
               onChange={(e) => setNom(e.target.value)}
               value={nom}
          />
        </Form.Group>

         <Form.Group
                  className="mb-3"
                  controlId="textInputForm"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label style={{ width: "50%" }}>Address</Form.Label>
                  <Form.Control
                    style={{ width: "50%" }}
                    type="text"
                    placeholder="Enter address"
                       onChange={(e) => setAddress(e.target.value)}
                                        value={address}
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
                onChange={(e) => setVille(e.target.value)}
                                            value={ville}
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
                  <Form.Label style={{ width: "50%" }}>Pays</Form.Label>
                   <select style={{ width: "50%" }}  onChange={handleChange}>
                              <option >choisir une pays</option>
                              <option value="Tunis">Tunis</option>
                              <option value="USA">USA</option>

                            </select>
                </Form.Group>






       <Form.Group
                       className="mb-3"
                       controlId="textInputForm"
                       style={{
                         display: "flex",
                         justifyContent: "space-between",
                       }}
                     >

                       <Form.Label style={{ width: "50%" }}>Telephone</Form.Label>
                       <Form.Control
                         style={{ width: "50%" }}
                         type="text"
                         placeholder="Enter votre numero"

                         onChange={handleNum}
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
          <Form.Label style={{ width: "50%" }}>Début de contrat</Form.Label>
          <Form.Control
            style={{ width: "50%" }}
            type="date"
             onChange={(e) => setDebut_contact(e.target.value)}
                           value={debut_contact}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="primary" type="Button" style={{marginLeft:'10px'}}>
                  Annuler
        </Button>
      </Form>
    </Container>
  );
}

export default App;








