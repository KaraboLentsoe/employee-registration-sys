import React, { useState } from "react";
import { Container, Card, Row, styled, Button } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { Input, Spacer } from "@nextui-org/react";
import { supabase } from "../../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";

export default function Form() {
  /* Install Chackra UI(search) and Include a Navbar */
  // Name
  // Last Name
  // Temperature Reading
  // Email
  // Date, Make your Date to be Read Only

  const submissionSuccess = () =>
    toast(" Submitted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "success",
    });

  const submissionFail = () =>
    toast(" Sorry, Something Went Wrong", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      type: "error",
    });

  const [formRegister, setFormRegister] = useState({
    name: "", // These are my property names from the input labels
    surname: "",
    identification: 0,
    temperature: 0,
    email: "",
  });

  //submit data to supa base
  const submissionToDataBase = async () => {
    try {
      const fieldToDB = await supabase.from("EmployeeList").insert([
        {
          name: formRegister.name,
          surname: formRegister.surname,
          identification: formRegister.identification,
          temperature: formRegister.temperature,
          email: formRegister.email,
        },
      ]);
      submissionSuccess();
    } catch (err) {
      submissionFail();
    }
  };

  const handleChange = (event) => {
    //event is not key but target is a react "function/keyword"
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submissionToDataBase();
  };

  // We included the date and removed a few characters
  const current = new Date();
  const date = current.toString();

  const getFormattedDate = date.slice(0, 21);

  // The Styling of a Button Using Next UI

  // Dropdown Usability below
  const [select, setSelected] = useState(new Set(["Select One"]));

  const selectedValue = React.useMemo(
    () => Array.from(select).join(", ").replace("/_", "/ "),
    [select]
  );

  return (
    <>
      <ToastContainer />
      <Container justify="center" align="center">
        <Card
          css={{
            mw: "50rem",
            top: "20px",
            bottom: "40px",
            alignItems: "center",
          }}
          isHoverable
        >
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  clearable
                  bordered
                  required
                  width="320px"
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={formRegister.name}
                ></Input>
              </div>

              <br />
              <div>
                <Input
                  clearable
                  bordered
                  required
                  width="320px"
                  label="Last Name"
                  type="text"
                  name="surname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formRegister.surname}
                ></Input>
              </div>

              <br />
              <div>
                <Input
                  clearable
                  bordered
                  required
                  width="320px"
                  label="ID Number"
                  type="number"
                  name="identification"
                  placeholder="Your ID"
                  pattern="[0-13]{1,13}"
                  onChange={handleChange}
                  value={formRegister.identification}
                ></Input>
              </div>

              <br />
              <div>
                <Input
                  clearable
                  bordered
                  required
                  width="320px"
                  label="Temperature Reading"
                  type="number"
                  name="temperature"
                  pattern="[0-60]{1,2}"
                  placeholder="Your Temperature"
                  onChange={handleChange}
                  value={formRegister.temperature}
                ></Input>
              </div>

              <br />

              <div>
                <label>
                  <p>Type of Visitation</p>
                  <Spacer y={0.5} />
                  <Dropdown>
                    <Dropdown.Button css={{ backgroundColor: "#155263" }}>
                      {selectedValue}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label="Static Actions"
                      selectionMode="single"
                      selectedKeys={select}
                      onSelectionChange={setSelected}
                    >
                      <Dropdown.Item key="Visitor" withDivider>
                        Visitor
                      </Dropdown.Item>
                      <Dropdown.Item key="Employee" withDivider>
                        Employee
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </label>
              </div>

              <br />
              <div>
                <Input
                  clearable
                  bordered
                  required
                  width="320px"
                  label="E-mail"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                  value={formRegister.email}
                ></Input>
              </div>
              <br />
              <div>
                <label>
                  <Input
                    bordered
                    width="320px"
                    label="Date of Signing"
                    type="text"
                    name="date"
                    readOnly={true}
                    value={getFormattedDate}
                  ></Input>
                  <Spacer y={1.5} />
                </label>
              </div>
              <Button
                type="submit"
                value="Submit"
                rounded
                css={{ backgroundColor: "#155263", left: "70px" }}
              >
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
