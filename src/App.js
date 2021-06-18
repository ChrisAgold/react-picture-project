import './App.css';
import React, {useState, useEffect} from 'react';
import {MainPictureColumn, MainPicture, Heading, HeadingTwo, HeaderList, List} from './Components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faCheese} from '@fortawesome/free-solid-svg-icons';
import {faFish} from '@fortawesome/free-solid-svg-icons';
import {
    StyledSidebar,
    StyledMainPicture,
    StyledMain,
    StyledButton,
    StyledHeading,
    StyledHeadingTwo,
    StyledRow,
} from "./styles";

function App() {

    const data = require('./data.json')
    // js, set state, manipulate props
    const [picture, setPicture] = useState('')

    return (
        <StyledMain>
            {/*COLUMNS or SIDEBAR-------------------------------------*/}
            <StyledSidebar>
                {/*Select an item heading*/}
                <StyledHeading><Heading/></StyledHeading>
                {/*list of header options: types: [food, alcohol...etc]*/}
                <HeaderList setPicture={setPicture}/>
            </StyledSidebar>
            {/*MAIN ROW or MAIN PICTURE-------------------------------------*/}

            {/* State is changed here */}

            <MainPicture
                kanji={picture.kanji}
                icon={picture.icon}
                itemdescription={picture.itemdescription}
                price={picture.price}>
            </MainPicture>

        </StyledMain>
    );
}

export default App;
