import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "./utils/debounce";
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
import logo from "./assets/rick-and-morty-logo.webp";
import portal from "./assets/portal.webp";
import meeseeksBox from "./assets/meeseeksBox.webp";
import rick from "./assets/rick.webp";
// APIs
import { getCharacters } from "./api/getCharacters";
// Interfaces
import { CharacterInterface } from "./interfaces/characterProps";
// Styled app container
import { Container, Logo, MeeseeksBox } from "./styledComponents/appContainer";
import { Error, ErrorParagraph, ErrorImage } from "./styledComponents/error";
// Reducer
import { newMeesseks } from "./assets/meeseeks";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./redux/store";
import { actions } from "./redux/appSlice";

const audio = require("./assets/meeseeks.mp3");

const App: React.FC = () => {
  const {
    data,
    name,
    status,
    currentPage,
    totalPages,
    error,
    errorMessage,
    loading,
  } = useSelector((state: RootState) => state.app);

  const { reset_form, page_change, input_change, select_change, meeseeks_box } =
    actions;

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const selectOptions = ["Alive", "Dead", "unknown"];
  const [inputValue, setInputValue] = useState<string>("");
  const meeseeksVoice = new Audio(audio);

  const start = () => {
    if (!data.some((data) => data.id === newMeesseks.id)) {
      meeseeksVoice.play();
      dispatch(meeseeks_box(newMeesseks));
    }
  };

  // function that resets the form on button click (portal icon)
  const handleFormReset = () => {
    dispatch(reset_form());
    setInputValue("");
  };
  // function that handles pagination
  const handlePagination = (pageNumber: number) => {
    dispatch(page_change(pageNumber));
  };
  // function for the onChange event on status select
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(select_change(e?.target.value));
  };
  // function for the onChange event for the character's name input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e?.target.value);
    debouncedInput(e?.target.value);
  };

  const debouncedInput = useMemo(
    () => debounce((value: string) => dispatch(input_change(value)), 300),
    [dispatch, input_change]
  );

  // onUpdate fetch new data if any of the 3 parameteres from the dependecy array changes
  useEffect(() => {
    dispatch(getCharacters({ currentPage, name, status }));
  }, [currentPage, name, status, dispatch]);

  return (
    <Container>
      <MeeseeksBox onClick={start} src={meeseeksBox} alt="" />
      <Logo src={logo} alt="logo" />

      <Form onReset={handleFormReset}>
        <TextField
          value={inputValue}
          onChange={handleChange}
          placeholder={`Character's name`}
        />
        <SelectField
          value={status}
          onChange={handleSelectChange}
          options={selectOptions}
        />
        <Button type="reset" imgSrc={portal} alt="" />
      </Form>

      <React.Fragment>
        {loading && <Loading />}

        {error && (
          <Error>
            <ErrorImage src={rick} alt="" />
            <ErrorParagraph> {errorMessage} </ErrorParagraph>
          </Error>
        )}

        {!loading && !error && data.length > 0 && (
          <>
            <Catalog>
              {data.map((data: CharacterInterface) => (
                <Card
                  key={data.id}
                  onClick={() => navigate(`/character/${data.id}`)}
                  name={data.name}
                  status={data.status}
                  avatar={data.image}
                />
              ))}
            </Catalog>

            {totalPages > 1 && (
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                handlePagination={handlePagination}
              />
            )}
          </>
        )}
      </React.Fragment>
    </Container>
  );
};

export default App;
