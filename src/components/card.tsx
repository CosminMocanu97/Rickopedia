import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0px 0px 3px 2px rgb(180,217,74);
    transition: 0.3s;
    min-width:150px;
    padding:5px 8px;
    border-radius:12px;
    font-family:RickAndMorty;
    font-size:15px;
    background-color:rgb(26,24,38);
    display:flex;
    flex-direction:column;
    gap:5px;

    img {
      width:100%;
      border-radius:12px;
      flex:1;
    }

    div img {
      height:40px;
      width:40px;
      flex:0;
    }

    p {
      margin:0;
      color:rgb(0,176,200);
    }

    p:nth-child(2) {
      display:flex;
      justify-content:center;
      align-items:center;
    }
    
`

interface CardProps {
  name: string;
  status: string;
  avatar: string;
  img: string;
}

const Card = ({ name, status, avatar, img }: CardProps) => {
  return (
    <Container>
      <img src={avatar} alt="Avatar" />
      <div>
        <p> <b>{name}</b></p>
        <p style={{color: status === 'Alive' ? '#0BDA51' : status === 'Dead' ? '#FF0038' : '#757575'}}> <img src={img} alt="" /> <b>{status}</b> </p>
      </div>
    </Container>
  );
};

export default Card;
