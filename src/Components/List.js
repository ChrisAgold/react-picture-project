import React from 'react';
import styled from 'styled-components';
import {StyledButton, StyledHeading, StyledPictureColumns} from "../styles";

export const List = () => {
    const data = require('../data.json');

    return (
        <>
            {data.items.map((item) => {
                return (<StyledButton>
                        {item.englishname}
                    </StyledButton>
                );
            })}
        </>
    );
}
