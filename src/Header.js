import React from 'react';
import styled from 'styled-components';



const NavBarDiv = styled.nav`
display: flex;
justify-content: center;
align-content: center;
width: 100%;
margin-top: 15px;
background-color: lightblue;
background-repeat: repeat;
background-size: 200px 200px;
`;

const Title = styled.h1`
  font-size: 100px;
  text-align: center;
  color: royalblue;
`;

const Header = props => {
  console.log(props, "props")
  return (
    <NavBarDiv>
      {props.data && 
      <div>
        <Title>NASA Photo of the Day!</Title>
        <h3>{props.data.title}</h3>
        <h3>{props.data.date}</h3>
      </div>
      }
    </NavBarDiv>
    )
  }

export default Header;


