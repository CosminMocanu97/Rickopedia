import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useParams, useNavigate } from 'react-router-dom';
// API
import { getSingleCharacterData } from '../api/getSingleCharacter';
import { getEpisodeName } from '../api/getEpisode';
// Images
import male from '../assets/male.png'
import female from '../assets/female.png'
import heart from '../assets/heart.png'
import species from '../assets/species.png'
import location from '../assets/location.png'
import camera from '../assets/camera.png'
import genderless from '../assets/genderless.png'
import unknown from '../assets/unknown.png'
import dead from '../assets/dead.png'
// Styled component
import { CharacterDetailsContainer } from '../styledComponents/characterDetailsContainer';
// Interface
import { EpisodeInterface } from '../interfaces/episodeProps';

const CharacterDetails = () => {
    const { id } = useParams<string>()
    const navigate = useNavigate()
    const [data, setData] = useState<any>('')
    const [episodes, setEpisodes] = useState<any>([])

    const fetchData = async (id: string) => {
        try {
            let response = await getSingleCharacterData(id);
            setData(response.data)
            let URLs = response.data.episode
            let res = await getEpisodeName(URLs)
            setEpisodes(res)
        } catch (error) {
            navigate("/")
        }
    };

    useEffect(() => {
        if (id)
            fetchData(id)
    }, [id])

    return (
        <CharacterDetailsContainer>
            {data &&
                <div className="wrapper">
                    <div className="profile">
                        <h3> {data.name} </h3>
                        <img src={data.image} alt="" />
                    </div>

                    <div className="characterInfo">
                        <div>
                            <p className={classNames('genderBadge', {
                                maleBadge: data.gender === 'Male',
                                femaleBadge: data.gender === 'Female'
                            })}> <img src={
                                data.gender === 'Male' ? male : 
                                data.gender === 'Female' ? female :
                                data.gender === 'Genderless' ? genderless : 
                                unknown} alt="" /> {data.gender} </p>
                        </div>

                        <div>
                            <p className='species'> <img src={species} alt='Species:' /> {data.species} </p>
                            <p className='location'> <img src={location} alt='Location:' /> {data.location.name} </p>
                            <p className={classNames({
                                alive: data.status === 'Alive',
                                dead: data.status === 'Dead',
                                unknown: data.status === 'unknown'
                            })}> <img src={ 
                                data.status === 'Alive' ? heart : 
                                data.status === 'Dead' ? dead : 
                                unknown } alt='Status:' /> {data.status} </p>
                        </div>
                    </div>

                    <label> <img className='camera' src={camera} alt='' />  </label>
                    <ul className='list'>
                        {episodes.map((episodeName: EpisodeInterface, index: number) =>
                            <li key={index}> <span> {episodeName.episode}</span> : {episodeName.name} </li>
                        )}
                    </ul>

                </div>
            }
        </CharacterDetailsContainer>
    );
};

export default CharacterDetails;
