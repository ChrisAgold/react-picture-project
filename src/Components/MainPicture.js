import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    StyledPictureColumns,
    IndividualPictureRow,
} from "../styles";

export const MainPictureRow = (props) => {

    // js, props, state
    const title = props.title;
    const icon = props.icon;

    return (
        <div>
            <IndividualPictureRow>
                <div style={{
                    marginBottom:'10px',
                    fontWeight: 'bold',
                    fontSize: '30px'
                }}>{title}</div>

                <div style={{
                    fontSize: '40px'
                }}>{icon}</div>
            </IndividualPictureRow>
        </div>
    )
}




