import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
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
            <Grid container spacing={2} >

            </Grid>
            <ComplaintCardLayout title={"Тема жалобы 1"} onClick={ () => {} } number={999} date={"2 дня"} />
            <ComplaintCardLayout title={"Тема жалобы 2"} onClick={ () => {} } number={111} date={"3 дня"} />
            <ComplaintCardLayout title={"Тема жалобы 3"} onClick={ () => {} } number={222} date={"4 дня"} />
            <ComplaintCardLayout title={"Тема жалобы 4"} onClick={ () => {} } number={333} date={"2 дня"} />
        </>
    );
};
