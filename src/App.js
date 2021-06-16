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
                <StyledButton style={{
                    backgroundColor: '#4CAF50', /* Green */
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                }}>
                    <button onClick={() => setPicture("FirstPicture")}/>
                </StyledButton>
                <StyledButton>
                    <button onClick={() => setPicture("SecondPicture")}/>
                </StyledButton>
                <StyledButton>
                    <button onClick={() => setPicture("ThirdPicture")}/>
                </StyledButton>



                {picture === "FirstPicture" && <MainPictureColumn onClick={() => setPicture("FirstPicture")} title={'A Drink Sir?'} icon={<FontAwesomeIcon icon={faCoffee}/>}/>}

                {picture === "SecondPicture" &&
                <MainPictureColumn title={'チーズ'} icon={<FontAwesomeIcon icon={faCheese}/>}/>}

                {picture === "ThirdPicture" && <MainPictureColumn title={'魚'} icon={<FontAwesomeIcon icon={faFish}/>}/>}

            </StyledPictureColumns>


            {/*MAIN ROW*/}
            <StyledMainPicture>
                <MainPictureRow title={'コーヒー'} icon={<FontAwesomeIcon icon={faCoffee}/>}/>
            </StyledMainPicture>
        </StyledMain>
    );
}

export default App;
