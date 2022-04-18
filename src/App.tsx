import React, { useState, useEffect, useMemo } from "react";
import { debounce } from "lodash";
// Components
import TextField from "./components/input";
import SelectField from "./components/select";
import Card from "./components/card";
import Button from "./components/button";
import Pagination from "./components/pagination";
// Styled only components
import { Form } from "./styledComponents/form";
import { Catalog } from "./styledComponents/catalog";
// Images
import logo from "./assets/rick-and-morty-logo.png";
import heart from "./assets/heart.png";
import dead from "./assets/dead.png";
import unknown from "./assets/unknown.png";
import portal from "./assets/portal.png";
import meeseeksBox from "./assets/meeseeksBox.png";
// APIs
import { getCharactersData } from "./api/getCharacters";
import { getSelectOptions } from "./api/getSelectOptions";
// Interfaces
import { CharacterInterface } from "./interfaces/characterProps";
// Styled app container
import { Container } from "./styledComponents/appContainer";
import { Error } from "./styledComponents/error";

import rick from './assets/rick.png'
const song = require("./assets/meeseeks.mp3");

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [array, setArray] = useState<Array<CharacterInterface>>([]);
  const [input, setInput] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  // function that returns information about the characters
  const fetchData = async (
    pageNumber: number,
    name: string,
    status: string
  ) => {
    try {
      let response = await getCharactersData(pageNumber, name, status);
      setArray(response.data.results);
      setTotalPages(response.data.info.pages);
    } catch (error) {
      setError("No results found!");
    }
  };
  /* [Needs work] function used to get options for the select filter (the problem with this function
    is that it returns only the characters for the first page which may not have all the existing statuses) */
  const getOptions = async () => {
    let selectOptions = new Set<string>();
    let response = await getSelectOptions();
    response.data.results.forEach((character: CharacterInterface) => {
      selectOptions.add(character.status);
    });
    setOptions(Array.from(selectOptions));
  };

  let audio = new Audio(song);

  const start = () => {
    audio.play();
    const dataUpdated = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      ...array,
    ];

    setArray(dataUpdated);
  };
  // function that resets the form on button click (portal icon)
  const handleFormReset = () => {
    setInput("");
    setStatus("");
  };
  // function that handles pagination
  const handlePagination = (pageNumber: number) => {
    setPage(pageNumber);
  };
  // function for the onChange event on status select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setStatus(e?.target.value);
  };
  // function for the onChange event for the character's name input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setInput(e?.target.value);
  };
  /* added lodash debounce (kinda got lazy to write my own function for this) which updates the state 
  value for the input after 0.3 seconds to minimize the number of api calls */
  const debouncedInput = useMemo(() => debounce(handleChange, 300), []);
  // onMount set the options for the select input based on the existing statuses returned from the /characters api
  useEffect(() => {
    getOptions();
  }, []);
  // onUpdate fetch new data if any of the 3 parameteres from the dependecy array changes
  useEffect(() => {
    fetchData(page, input, status);
  }, [page, input, status]);

  return (
    <Container>
      <img onClick={start} src={meeseeksBox} alt="" className="meeseeksBox" />
      <img src={logo} alt="logo" className="logo" />

      <Form onReset={handleFormReset}>
        <label> Filters: </label>
        <TextField onChange={debouncedInput} placeholder={`Character's name`} />
        <SelectField
          value={status}
          onChange={handleSelectChange}
          options={options}
        />
        <Button type="reset" imgSrc={portal} alt="" />
      </Form>

      {error ? 
        <Error>
          <img src={rick} alt="" />
          <p> {error} </p>
        </Error> 
        :
        <>
          <Catalog>
            {array.map((data, index) => (
              <Card
                key={index}
                onClick={start}
                img={data.status === "Alive" ? heart :
                  data.status === "Dead" ? dead : unknown}
                name={data.name}
                status={data.status}
                avatar={data.image}
              />
            ))}
          </Catalog>

          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              handlePagination={handlePagination}
            />
          )}
        </>
      }
    </Container>
  );
};

export default App;
