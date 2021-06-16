import React, {useState, useEffect} from 'react';
import {
    StyledPictureColumns,
    IndividualPictureColumn,
} from "../styles";

export const MainPictureColumn = () => {
    return (
        <div>
            <IndividualPictureColumn>
                <div>Picture</div>
            </IndividualPictureColumn>
            <IndividualPictureColumn>
                <div>Picture</div>
            </IndividualPictureColumn>
            <IndividualPictureColumn>
                <div>Picture</div>
            </IndividualPictureColumn>
        </div>
    )
}




