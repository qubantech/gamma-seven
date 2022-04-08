import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';

interface FacilityContentProps {
    title: string,
    // description: string,
    // date: string
}


export const FacilityContent: FC<FacilityContentProps> =
    ({
        title,
     }) => {
    return (
        <Container>
            <Typography variant={"body1"}> { title } </Typography>

        </Container>
    );
};
