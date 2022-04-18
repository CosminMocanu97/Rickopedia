import React, { useEffect, useReducer } from "react";
import classNames from "classnames";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./loader";
// API
import { getSingleCharacterData } from "../api/getSingleCharacter";
import { getEpisodeName } from "../api/getEpisode";
// Images
import male from "../assets/male.webp";
import female from "../assets/female.webp";
import heart from "../assets/heart.webp";
import species from "../assets/species.webp";
import location from "../assets/location.webp";
import camera from "../assets/camera.webp";
import genderless from "../assets/genderless.webp";
import unknown from "../assets/unknown.webp";
import dead from "../assets/dead.webp";
// Styled component
import { CharacterDetailsContainer } from "../styledComponents/characterDetailsContainer";
// Interface
import { EpisodeInterface } from "../interfaces/episodeProps";
import { CharacterStateInterface } from "../interfaces/detailsStateProps";
// Reducer
import { characterReducer } from "../reducers/characterDetailsReducer";

const CharacterDetails = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const initialState: CharacterStateInterface = {
    data: undefined,
    episodes: [],
    loading: true
  };
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const { data, episodes, loading } = state;

  // API call to get character's data and name of all episodes
  useEffect(() => {
    const fetchData = async (id: string) => {
      dispatch({ type: "LOADING_START" })
      try {
        let response = await getSingleCharacterData(id);
        let URLs = response.data.episode;
        let listOfEpisodes = await getEpisodeName(URLs);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: { data: response.data, episodeList: listOfEpisodes },
        });
        dispatch({ type: "LOADING_OVER" })
      } catch (error) {
        dispatch({ type: "LOADING_OVER" })
        navigate("/");
      }
    };

    if (id) fetchData(id);
  }, [id, navigate]);

  return (
    <CharacterDetailsContainer>
    {loading ? <Loading /> :
      data && (
        <div className="wrapper">
          <div className="profile">
            <h3> {data.name} </h3>
            <img src={data.image} alt="" />
          </div>

          <div className="characterInfo">
            <div>
              <p
                className={classNames("genderBadge", {
                  maleBadge: data.gender === "Male",
                  femaleBadge: data.gender === "Female",
                })}
              >
                <img
                  src={
                    data.gender === "Male"
                      ? male
                      : data.gender === "Female"
                      ? female
                      : data.gender === "Genderless"
                      ? genderless
                      : unknown
                  }
                  alt=""
                />
                {data.gender}
              </p>
            </div>

            <div>
              <p className="species">
                <img src={species} alt="Species:" /> {data.species}
              </p>
              <p className="location">
                <img src={location} alt="Location:" /> {data.location.name}
              </p>
              <p
                className={classNames({
                  alive: data.status === "Alive",
                  dead: data.status === "Dead",
                  unknown: data.status === "unknown",
                })}
              >
                <img
                  src={
                    data.status === "Alive"
                      ? heart
                      : data.status === "Dead"
                      ? dead
                      : unknown
                  }
                  alt="Status:"
                />
                {data.status}
              </p>
            </div>
          </div>

          <label>
            <img className="camera" src={camera} alt="" />
          </label>
          <ul className="list">
            {episodes.map((episodeName: EpisodeInterface, index: number) => (
              <li key={index}>
                <span> {episodeName.episode}</span> : {episodeName.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </CharacterDetailsContainer>
  );
};

export default CharacterDetails;
