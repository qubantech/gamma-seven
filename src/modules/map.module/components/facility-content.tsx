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
            <Typography variant={"h5"} style={{marginTop: '0.7em'}}> { title } </Typography>
            <Grid container spacing={2} style={{marginBottom: '2em', marginTop: '1.3em'}} >
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Donec posuere faucibus egestas"} onClick={ onClick } number={12} date={"2 дня"} />
                </Grid>
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Suspendisse sodales interdum massa sed semper"} onClick={ onClick } number={15} date={"3 дня"} />
                </Grid>
                <Grid item xs={12}>
                    <ComplaintCardLayout title={"Vestibulum id felis laoreet, ullamcorper ex ut, vestibulum felis"} onClick={ onClick } number={42} date={"4 дня"} />
                </Grid>
            </Grid>
        </>
    );
};
