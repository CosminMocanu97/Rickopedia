import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// API
import { getSingleCharacter } from "../api/getSingleCharacter";
// Styled component
import {
  Avatar,
  CameraImage,
  CharacterDetailsContainer,
  CharacterInfoWrapper,
  Details,
  GenderBadge,
  Location,
  Profile,
  Species,
  Status,
  UnorderedList,
  Wrapper,
} from "../styledComponents/characterDetailsContainer";
// FC
import Loading from "./loader";
// Interface
import { EpisodeInterface } from "../interfaces/episodeProps";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

const CharacterDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams<string>();
  const navigate = useNavigate();
  const { data, episodes, loading } = useSelector(
    (state: RootState) => state.character
  );

  // API call to get character's data and name of all episodes
  useEffect(() => {
    const fetchData = async (id: string) => {
      try {
        const resultAction = await dispatch(getSingleCharacter(id));
        if (resultAction.meta.requestStatus === "rejected") {
          throw new Error(`Character with id ${id} doesn't exist`);
        }
      } catch (error) {
        navigate("/", { replace: true });
      }
    };

    if (id) {
      fetchData(id);
    }
  }, [id, dispatch, navigate]);

  return (
    <React.Fragment>
      {loading && <Loading />}

      {data && (
        <CharacterDetailsContainer>
          <Wrapper>
            <Profile>
              <h3> {data.name} </h3>
              <Avatar src={data.image} alt="" />
            </Profile>

            <CharacterInfoWrapper>
              <GenderBadge gender={data.gender}>
                <p>
                  <img alt="" />
                  {data.gender}
                </p>
              </GenderBadge>

              <Details>
                <Species>
                  <img alt="Species:" /> {data.species}
                </Species>

                <Location>
                  <img alt="Location:" /> {data.location.name}
                </Location>

                <Status status={data.status}>
                  <img alt="Status:" />
                  {data.status}
                </Status>
              </Details>
            </CharacterInfoWrapper>

            <CameraImage alt="" />
            <UnorderedList>
              {episodes.map((episode: EpisodeInterface) => (
                <li key={episode.id}>
                  <span> {episode.episode}</span> : {episode.name}
                </li>
              ))}
            </UnorderedList>
          </Wrapper>
        </CharacterDetailsContainer>
      )}
    </React.Fragment>
  );
};

export default CharacterDetails;
