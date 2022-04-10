import React, { useEffect, useState } from 'react';
import { AppBar, Button, Dialog, IconButton, Slide, Stack, Toolbar, Typography } from '@mui/material';

import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Report } from './report';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import { appAuditService } from '../../../app.module/app.services/app.audit.service';
import {
    ReportModel,
    ReportModelInitState,
} from '../../../app.module/app.services/app.audit.service/models/report.model';

// const reports = [
//     "21.02.22",
//     "21.02.21",
//     "09.01.12"
// ]

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const ReportsList = () => {
    const [open, setOpen] = React.useState(false);
    const [currentReport, setCurrentReport] = useState<ReportModel>(ReportModelInitState);

    const [reports, setReports] = useState<Array<ReportModel>>([]);

    useEffect(()=>{
        appAuditService.getAllReports()
            .then(results => {
                console.log(results)
                setReports(results)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    const handleClickOpen = (report: ReportModel) => {
        setOpen(true);
        setCurrentReport( report )
    };

    const handleClose = () => {
        setOpen(false);

    };




    return (
        <>
            <Stack spacing={1} alignItems={ "center" } width={ "100%" }>
                {
                    reports.map( (report) => {
                        return (
                            <Button
                                fullWidth
                                variant={ "contained" }

                                startIcon={ <ArticleOutlinedIcon/> }
                                onClick={ () => handleClickOpen(report) }
                            >
                                Отчет от { new Date(report.createdAt).toLocaleDateString("en-US") }
                            </Button>
                        )
                    })
                }
            </Stack>

            <Dialog
                fullScreen
                open={ open }
                onClose={ handleClose }
                TransitionComponent={ Transition }
            >
                <AppBar color={ "secondary" } sx={{ position: 'relative', mb: "10px" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={ handleClose }
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography  sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {/*{ currentReport }*/}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Report { ...currentReport } />
            </Dialog>
        </>
    );
};

export default ReportsList;