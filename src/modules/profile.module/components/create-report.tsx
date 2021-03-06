import React, { useEffect, useState } from 'react';
import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { appAuditService } from '../../../app.module/app.services/app.audit.service';

const CreateReport = (props: {
    setDrawerState: (a:boolean) => void ,
    updateList: boolean,
    setUpdateList: (a:boolean) => void}
) => {
    const [startDate, setStartDate] = useState("01-Jan-2001" );
    const [endDate, setEndDate] = useState("01-Jan-2001" );
    const [creationParams, setCreationParams] = useState({ dateStart: "", dateEnd: "" });

    const onStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(e.target.value);
    }

    const onEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(e.target.value);
    }

    const onCreateReportClick = () => {
        const params = {
                dateStart: startDate,
                dateEnd: endDate
        }
        setCreationParams(params);
        props.setDrawerState(false);
    }

    useEffect(() => {
        if ( creationParams.dateStart != "" ) {
            console.log(creationParams)

            appAuditService.createReportForUser({
                dateStart: "05-Aug-2010",
                dateEnd: "05-Dec-2017"
            }, "6251e15151f2eeeb962a3507")
                .then(result => {
                    console.log(result)

                    // appAuditService.createReportForUser(creationParams, result.id)
                    //     .then(result => {
                    //         console.log(result)
                    //     })
                    //     .catch(error => console.log(error));

                })
                .catch(error => console.log(error));
            // window.open('https://audit.quban.tech/report/create/user/62520ab5e50d6652ec57c527')
            const a = props.updateList;
            props.setUpdateList(!a);
        }
    }, [creationParams])

    return (
        <Container sx={{minHeight: "50vh" }}>
            <Typography variant={"h6"} sx={{ mt: "10px", mb: "20px" }}>
                ?????????????? ????????????, ???? ?????????????? ???????????? ???????????????? ??????????
            </Typography>
            <Stack spacing={2}>
                <TextField label="???????? ????????????" variant="standard" placeholder={ "01-Jan-2001" } onChange={ onStartDateChange }/>
                <TextField label="???????? ??????????" variant="standard" placeholder={ "01-Jan-2001" } onChange={ onEndDateChange }/>
            </Stack>
            <Button
                fullWidth
                variant={ "outlined" }
                color={ "primary" }
                sx={{ mt: "40px" }}
                onClick={ onCreateReportClick }
            >
                ????????????????
            </Button>
        </Container>
    );
};

export default CreateReport;