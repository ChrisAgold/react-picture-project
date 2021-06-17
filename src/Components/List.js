import React from 'react';
import styled from 'styled-components';
import {StyledButton, StyledHeading, StyledPictureColumns} from "../styles";

export const List = (props) => {
    const data = require('../data.json');
    return (
        <>
            {data.items.map((item) => {
                return (item.type === props.type ? <StyledButton key={item.englishname}>
                    {item.englishname}
                </StyledButton> : <div key={item.englishname}/>);
            })}
        </>
    );
}
