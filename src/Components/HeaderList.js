import React, {useState} from 'react';

import {StyledHeading} from "../styles";

import {List} from "./List";

export const HeaderList = (props) => {
    const data = require('../data.json');
    const [visible, setVisible] = useState(false);
    const [clickedType, setClickedType] = useState();

    // PROP for setting picture from App.js
    const setPicture = props.setPicture;

    function clickHandler(type) {
        setClickedType(type)
        setVisible(!visible)
    }


    return (
        <>
            {data.types.map((type) => {
                const buttonStyle = clickedType !== type ? {
                    backgroundColor: '#dbdbb8'
                } : !visible? {backgroundColor:'#dbdbb8'}:{backgroundColor: '#f3ce75'}
                return (<>
                        <StyledHeading key={type} onClick={() => clickHandler(type)} style={buttonStyle}>
                            {type}
                        </StyledHeading>

                        {visible && clickedType === type && <List setPicture={setPicture} type={type}/>}
                    </>
                );
            })}
        </>
    );
}
