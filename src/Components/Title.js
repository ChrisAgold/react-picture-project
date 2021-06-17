import React from 'react';
import styled from 'styled-components';
import {StyledHeading, StyledPictureColumns} from "../styles";

export const Title = () => {
    const data = require('../data.json');

    return (
        <>
            {data.types.map((type) => {
                return (<StyledHeading>
                        {type}
                    </StyledHeading>
                );
            })}
        </>
    );
}
