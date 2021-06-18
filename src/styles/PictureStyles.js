import React from 'react';
import styled from 'styled-components';

// Main
export const StyledMain = styled.div`
  display: flex;
  height:100vh;
  align-items: center;
  justify-content: center;
`

export const StyledSidebar = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  padding: 10px;
  overflow-y: scroll;
  margin-top: 2rem;
  //-webkit-scrollbar {
  //  display: none;
  //}
  //-ms-overflow-style: none;
  //scrollbar-width: none;
`;

export const StyledMainPicture = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: mediumpurple;
  justify-content: space-evenly;
  align-items: center;
  background-image: url('https://avante.biz/wp-content/uploads/Anime-Cherry-Blossom/Anime-Cherry-Blossom73.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

// Inside PictureColumns
export const IndividualPictureColumn = styled.div`
  max-width: 80%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IndividualPictureRow = styled.div`
  max-width: 80%;
  height: 100%;
  margin: 1rem;
  display: flex;
  background-color:red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.div`
  background-color: lightskyblue; /* Green */
  margin-bottom:3%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  cursor: pointer;
  border-radius: 20px;
`

export const StyledHeading = styled.div`
  background-color: plum;
  margin-bottom:10%;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 35px;
  border-radius: 20px;
`

export const StyledPictureHeader = styled.div`
  background-color: plum;
  border: none;
  width:50%;
  text-align: center;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 40px;
  float: left;
  border-radius: 20px;
`
export const StyledPictureBody = styled.div`
  background-color: plum;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 40px;
  width:50%;
  text-align: center;
  float: left;
  border-radius: 20px;
`

export const StyledRow = styled.div`
    justify-content: center;
  align-items: center;
    `
