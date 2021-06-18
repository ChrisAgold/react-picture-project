import React from 'react';
import styled from 'styled-components';

// Main
export const StyledMain = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const StyledSidebar = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e2a099;
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
  justify-content: space-evenly;
  align-items: center;
  //background: rgb(255,90,90);
  //background: radial-gradient(circle, rgba(255,90,90,1) 55%, rgba(248,248,255,1) 82%, rgba(255,250,250,1) 87%);
  background-image: url('https://images3.alphacoders.com/593/thumb-1920-593270.jpg');
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
  background-color: red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledButton = styled.div`
  background-color: #f0eae0; 
  margin-bottom: 3%;
  font-weight: bold;
  border: none;
  color: #1b2853;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  cursor: pointer;
  border-radius: 20px;
`

export const StyledHeading = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  color: #1b2853;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 50px;
  font-weight: bold;
`

export const StyledHeadingTwo = styled.div`

  border: none;
  color: #1b2853;
  padding-bottom: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  border-radius: 50px;
  font-weight: bold;
`

export const StyledPictureHeader = styled.div`
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(30px);
  border: none;
  width: 50%;
  text-align: center;
  color: #e4dfd6;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 40px;
  float: left;
  border-radius: 50px;
`
export const StyledPictureBody = styled.div`
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(30px);
  border: none;
  color: #e4dfd6;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 40px;
  width: 50%;
  text-align: center;
  float: left;
  border-radius: 50px;
`

export const StyledRow = styled.div`
  justify-content: center;
  align-items: center;
`

export const StyledCardImage = styled.div`
  max-width: 100%;
  height: auto;
`


// export const StyledCat = styled.div`
// background-image: url('https://media3.giphy.com/media/E1aQoM7X5uObdhImS3/200.webp?cid=ecf05e47iskrpko856vzvmeew5yo3xy8z3x7fndyx9341psq&rid=200.webp&ct=g');
//   width: 100%;
//   height: 100%;
//   background-repeat: no-repeat;
//  margin-left: 2rem;
//   overflow-y: scroll;
// `
