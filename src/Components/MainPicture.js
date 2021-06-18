import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {
    StyledPictureColumns,
    IndividualPictureRow, StyledPictureHeader, StyledPictureBody, StyledMainPicture, StyledMain, StyledCardImage
} from "../styles";

export const MainPicture = (props) => {
    // js, props, state
    const title = props.title;
    const kanji = props.kanji;
    const price = props.price;
    const itemdescription = props.itemdescription;
    const icon = props.icon;

    return (
        <StyledMainPicture>
            {kanji&&icon ?<StyledPictureHeader>
                {kanji}
            </StyledPictureHeader>:<StyledPictureHeader>
                Select a category on the left...
            </StyledPictureHeader>}

            {itemdescription&&<StyledPictureBody>
                <div style={{
                    width: 'auto',
                    textAlign: 'center',
                    padding: '15px',
                }}><img src={icon} style={{width: '300px'}}/></div>

                <div style={{
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    marginLeft: '10px',
                }}>{price}</div>

                <div style={{
                    marginBottom: '10px',
                    fontWeight: 'bold',
                    fontSize: '20px'
                }}>{itemdescription}</div>
            </StyledPictureBody>}

            {/*<div style={{*/}
            {/*    marginBottom: '10px',*/}
            {/*    fontWeight: 'bold',*/}
            {/*    fontSize: '30px'*/}
            {/*}}>{icon}</div>*/}

        </StyledMainPicture>
    )
}




