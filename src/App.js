import './App.css';
import React, {useState, useEffect} from 'react';
import {MainPictureColumn, MainPicture, Heading, HeadingTwo, HeaderList} from './Components';

import {
    StyledSidebar,
    StyledMain,
    StyledHeading,
    StyledHeadingTwo,
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
                <StyledHeading><Heading /></StyledHeading>
                <StyledHeadingTwo><HeadingTwo /></StyledHeadingTwo>
                {/*list of header options: types: [food, alcohol...etc]*/}
                <HeaderList setPicture={setPicture}/>
                {/*<StyledCat><Cat/></StyledCat>*/}
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
