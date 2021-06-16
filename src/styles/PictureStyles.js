import React from 'react';
import styled from 'styled-components';

// Main
export const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPictureColumns = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: lightgoldenrodyellow;
  padding: 10px;
`;

export const StyledMainPicture = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: mediumpurple;
  padding: 10px;
`

// Inside PictureColumns
export const IndividualPictureColumn = styled.div`
  width: 80%;
  height: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  background-color: darkolivegreen;
`
