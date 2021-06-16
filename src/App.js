import './App.css';
import React, {useState} from 'react';
import {MainPictureColumn, MainPictureRow} from './Components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {faFish} from '@fortawesome/free-solid-svg-icons';
import {
    StyledPictureColumns,
    StyledMainPicture,
    StyledMain,
    StyledButton,
} from "./styles";


function App() {

    // js, set state, manipulate props
    const [picture, setPicture] = useState('SecondPicture')

    return (
        <StyledMain>
            {/*COLUMNS*/}
            <StyledPictureColumns>
                <StyledButton onClick={() => setPicture("FirstPicture")}>
                    <FontAwesomeIcon icon={faCoffee}/>
                </StyledButton>
                <StyledButton onClick={() => setPicture("SecondPicture")}>
                    <FontAwesomeIcon icon={faCheese}/>
                </StyledButton>
                <StyledButton onClick={() => setPicture("ThirdPicture")}>
                    <FontAwesomeIcon icon={faFish}/>
                </StyledButton>
            </StyledPictureColumns>

            {/*MAIN ROW*/}
            <StyledMainPicture>
                {picture === "FirstPicture" && <MainPictureColumn onClick={() => setPicture("FirstPicture")} title={'コーヒー'} icon={<FontAwesomeIcon icon={faCoffee}/>}/>}

                {picture === "SecondPicture" &&
                <MainPictureColumn title={'チーズ'} icon={<FontAwesomeIcon icon={faCheese}/>}/>}

                {picture === "ThirdPicture" && <MainPictureColumn title={'魚'} icon={<FontAwesomeIcon icon={faFish}/>}/>}
            </StyledMainPicture>
        </StyledMain>
    );
}

export default App;
