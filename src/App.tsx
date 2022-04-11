import React, { useState } from "react";
import logo from "./assets/rick-and-morty-logo.png";
import background from "./assets/background.jpg";
import portal from "./assets/portal.png";
import TextField from "./components/input";
import SelectField from "./components/select";
import SearchButton from "./components/searchButton";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: column;
`;
const Form = styled.form`
  margin-top: 50px;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Logo = styled.img``;

const name = ["Alive", "Dead", "Unknown"];

const App: React.FC = () => {
  const [test, setTest] = useState<string>("");
  return (
    <Container>
      <img src={logo} alt="logo" />
      <Form>
        <TextField
          value={test}
          onChange={(e) => setTest(e?.target.value || "")}
          placeholder={`Character's name`}
        />
        <SelectField
          value=""
          onChange={(e) => console.log(e?.target.value)}
          options={name}
        />
        <SearchButton type="submit" imgSrc={portal} alt="Search" />
      </Form>

      <div>
        <p> AICI ARAT INFO </p>
      </div>
    </Container>
  );
};

export default App;
