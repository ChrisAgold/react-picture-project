import React from 'react';

import {StyledButton} from "../styles";




export const List = (props) => {
    const data = require('../data.json');
    const setPicture = props.setPicture;

    return (
        <>
            {data.items.map((item) => {
                return (item.type === props.type ? <StyledButton onClick={() => setPicture(item)} key={item.englishname}>
                    {/*<StyledButton onClick={() => setPicture("FirstPicture")} title={'コーヒー'}*/}
                    {/*              icon={<FontAwesomeIcon icon={faCoffee} style={{fontSize: 100}}/>} key={item*/}
                    {item.englishname}
                </StyledButton> : <div key={item.englishname}/>);
            })}
        </>
    );
}
