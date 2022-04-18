import React, { useState, useEffect, useMemo, useReducer } from "react";
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
// Components
import TextField from "./components/input";
import SelectField from "./components/select";
import Card from "./components/card";
import Button from "./components/button";
import Pagination from "./components/pagination";
import Loading from "./components/loader";
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
import rick from "./assets/rick.png";
// APIs
import { getCharactersData } from "./api/getCharacters";
import { getSelectOptions } from "./api/getSelectOptions";
// Interfaces
import { CharacterInterface } from "./interfaces/characterProps";
import { StateInterface } from "./interfaces/stateProps";
// Styled app container
import { Container } from "./styledComponents/appContainer";
import { Error } from "./styledComponents/error";
// Reducer
import { reducer } from "./reducers/appReducer";
import { newMeesseks } from "./assets/meeseeks";

const audio = require("./assets/meeseeks.mp3");

const App: React.FC = () => {
  let meeseeksVoice = new Audio(audio);
  const navigate = useNavigate()
  const initialState: StateInterface = {
    data: [],
    name: "",
    status: "",
    currentPage: 1,
    totalPages: 0,
    error: false,
    errorMessage: "",
    loading: true
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, name, status, currentPage, totalPages, error, errorMessage, loading } = state

  const [options, setOptions] = useState<string[]>([]);

  // function that returns information about the characters
  const fetchData = async (
    pageNumber: number,
    name: string,
    status: string
  ) => {
    dispatch({ type: "LOADING_START" })
    try {
      let response = await getCharactersData(pageNumber, name, status);
      dispatch({ type: "ERROR_DISABLED" })
      dispatch({ type: "FETCH_SUCCESS", payload: { data: response.data.results, totalPages: response.data.info.pages } })
      dispatch({ type: "LOADING_OVER" })
    } catch (error) {
      dispatch({ type: "ERROR_ENABLED", payload: "No results found!" })
      dispatch({ type: "LOADING_OVER" })
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

  const start = () => {
    meeseeksVoice.play();
    dispatch({ type: "MEESEEKS_BOX", payload: newMeesseks })
    console.log(state.data)
  };

  // function that resets the form on button click (portal icon)
  const handleFormReset = () => {
    dispatch({ type: "RESET_FORM" })
  };
  // function that handles pagination
  const handlePagination = (pageNumber: number) => {
    dispatch({ type: "PAGE_CHANGE", payload: pageNumber })
  };
  // function for the onChange event on status select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SELECT_CHANGE", payload: e?.target.value })
  };
  // function for the onChange event for the character's name input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT_CHANGE", payload: e?.target.value })
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
    fetchData(currentPage, name, status);
  }, [currentPage, name, status]);

  return (
    <Container>
      {loading ? <Loading /> :
        <>
          <img onClick={start} src={meeseeksBox} alt="" className="meeseeksBox" />
          <img src={logo} alt="logo" className="logo" />

          <Form onReset={handleFormReset}>
            <TextField onChange={debouncedInput} placeholder={`Character's name`} />
            <SelectField
              value={status}
              onChange={handleSelectChange}
              options={options}
            />
            <Button type="reset" imgSrc={portal} alt="" />
          </Form>

          {error ? (
            <Error>
              <img src={rick} alt="" />
              <p> {errorMessage} </p>
            </Error>
          ) : (
            <>
              <Catalog>
                {data.map((data: CharacterInterface, index: number) => (
                  <Card
                    key={index}
                    onClick={() => navigate(`/${data.id}`)}
                    img={
                      data.status === "Alive"
                        ? heart
                        : data.status === "Dead"
                          ? dead
                          : unknown
                    }
                    name={data.name}
                    status={data.status}
                    avatar={data.image}
                  />
                ))}
              </Catalog>

              {totalPages > 1 && (
                <Pagination
                  page={state.currentPage}
                  totalPages={totalPages}
                  handlePagination={handlePagination}
                />
              )}
            </>
          )}
        </>}
    </Container>
  );
};

export default App;
