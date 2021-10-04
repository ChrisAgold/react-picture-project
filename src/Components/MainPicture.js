import React from 'react';

import {
StyledPictureHeader, StyledPictureBody, StyledMainPicture,
} from "../styles";

export const MainPicture = (props) => {
    // js, props, state
    // const title = props.title;
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
                }}><img src={icon} style={{width: '300px'}} alt="image"/></div>

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




