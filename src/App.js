import './App.css';
import React from 'react';
import { MainPictureColumn } from './Components';
import {
    StyledPictureColumns,
    StyledMainPicture,
    StyledMain,
} from "./styles";

function App() {
    return (
        <StyledMain>
            {/*COLUMNS*/}
            <StyledPictureColumns>
                <MainPictureColumn/>
            </StyledPictureColumns>

            {/*MAIN ROW*/}
            <StyledMainPicture>
                sdf;lsdjflajsdl;fkajsdl;kfjaslkfjasdl;fkjsa kldjalsfj
            </StyledMainPicture>
        </StyledMain>
    );
}

export default App;
