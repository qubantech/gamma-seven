import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';
import ComplaintCardLayout from '../../../app.module/app.layouts/complaint-card.layout/complaint-card.layout';

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
        <>
            <Typography variant={"h6"}> { title } </Typography>
            <ComplaintCardLayout title={"Тема жалобы"} onClick={ () => {} } number={999} date={"2 дня"} />
        </>
    );
};
