import React, { useState } from "react";
import logo from "./assets/rick-and-morty-logo.png";
import background from "./assets/background.jpg";
import portal from "./assets/portal.png";
import TextField from "./components/input";
import SelectField from "./components/select";
import SearchButton from "./components/searchButton";
import styled from "styled-components";
import { characters } from "./mock";
import heart from './assets/heart.png'
import dead from './assets/dead.png'
import unknown from './assets/unknown.png'

import Card from "./components/card";

const Container = styled.div`
  height: 100%;
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

  .logo {
    width:25%;
    min-width:270px;
  }
`;
const Form = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom:25px;

  @media (max-width:641px) {
    flex-direction: column;

    img {
      margin-top: -35px;
    }
  }
`;

const Catalog = styled.div`
  // background:white;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 70%;
  position: relative;
  gap: 15px;
  margin-bottom: 50px;

  div {
    flex: 0 0 calc(20% - 30px);
  }

  @media (max-width:641px) {
    width:100%;
  }
`;

const Logo = styled.img``;

const name = ["Alive", "Dead", "Unknown"];

const App: React.FC = () => {
  const [test, setTest] = useState<string>("");
  return (
    <Container>
      <img src={logo} alt="logo" className="logo" />
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

      <Catalog>
        {characters.map((data) => (
          <Card img={data.status === 'Alive' ? heart : data.status === 'Dead' ? dead : unknown } name={data.name} status={data.status} avatar={data.image} />
        ))}
      </Catalog>
    </Container>
  );
};

export default App;
