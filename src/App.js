import './App.css';
import React, {useState} from 'react';
import {MainPictureColumn, MainPictureRow} from './Components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {
    StyledPictureColumns,
    StyledMainPicture,
    StyledMain,
} from "./styles";


function App() {

    // js, set state, manipulate props
    const [picture, setPicture] = useState('')

    return (
        <StyledMain>
            {/*COLUMNS*/}

            <StyledPictureColumns>
                <MainPictureColumn onClick={() =>
                    setPicture(<MainPictureColumn picture />)} title={'A Drink Sir?' +
                'コーヒー'} icon={<FontAwesomeIcon icon={faCoffee}/>}/>
                <MainPictureColumn title={'チーズ'} icon={<FontAwesomeIcon icon={faCheese}/>}/>
            </StyledPictureColumns>


            {/*MAIN ROW*/}
            <StyledMainPicture>
                <MainPictureRow title={'コーヒー'} icon={<FontAwesomeIcon icon={faCoffee}/>}/>
            </StyledMainPicture>
        </StyledMain>
    );
}

export default App;
