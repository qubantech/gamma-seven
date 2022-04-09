import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import ComplaintCardLayout from '../../../app.module/app.layouts/complaint-card.layout/complaint-card.layout';

interface FacilityContentProps {
    title: string,
    onClick: () => void ,
    // description: string,
    // date: string
}


export const FacilityContent: FC<FacilityContentProps> =
    ({
        title,
         onClick
     }) => {
    return (
        <>
            <Typography variant={"h6"}> { title } </Typography>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Тема жалобы 1"} onClick={ onClick } number={999} date={"2 дня"} />
                </Grid>
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Тема жалобы 2"} onClick={ onClick } number={111} date={"3 дня"} />
                </Grid>
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Тема жалобы 3"} onClick={ onClick } number={222} date={"4 дня"} />
                </Grid>
            </Grid>
        </>
    );
};
