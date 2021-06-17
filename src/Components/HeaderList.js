import React, {useState} from 'react';
import styled from 'styled-components';
import {StyledHeading, StyledPictureColumns} from "../styles";
import {MainPictureColumn} from "./PictureColumn";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
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
                return (<>
                        <StyledHeading key={type} onClick={()=>clickHandler(type)}>
                            {type}
                        </StyledHeading>

                        {visible && clickedType===type&& <List setPicture={setPicture} type={type}/>}
                    </>


                );
            })}
        </>
    );
}
{/*<a onClick={() => setPicture("FirstPicture")}>*/
}
{/*    */
}
{/*</a>*/
}

{/*{picture === "FirstPicture" &&*/
}
{/*<MainPictureColumn onClick={() => setPicture("FirstPicture")} title={'コーヒー'}*/
}
{/*                   icon={<FontAwesomeIcon icon={faCoffee}/>}/>}*/
}
