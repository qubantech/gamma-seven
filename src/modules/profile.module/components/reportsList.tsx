import React, { useState } from 'react';
import { AppBar, Button, Dialog, IconButton, Slide, Stack, Toolbar, Typography } from '@mui/material';

import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { Report } from './report';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';

const reports = [
    "21.02.22",
    "21.02.21",
    "09.01.12"
]

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
    const [currentReport, setCurrentReport] = useState("");

    const handleClickOpen = ( report: string ) => {
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
                                Отчет от { report }
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
                <AppBar sx={{ position: 'relative', mb: "10px" }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={ handleClose }
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            { currentReport }
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Report
                    complaintsAmount={ 0 }
                    complaintsAmountPerDayHist={ [] }
                    complaintsMeaningfulnessMeanScore={ 0 }
                    complaintsPending={ 0 }
                    complaintsProcessed={ 0 }
                    complaintsRejected={ 0 }
                    createdAt={ "22.12.22" }
                    maxComplaintProcessingTime={ 24 }
                    meanComplaintProcessingTime={ 23 }
                    mostPopularKeywords={ ["Очередь", "dsd", "adsad"] }
                    mostPopularScripts={ ["asds", "asdas", "asda"] }
                    mostPopularTopics={ ["ada"] }
                    peakComplaintsAmountDate={ "12.12.22" }
                    peakComplaintsAmountNumber={ 10 }
                />
            </Dialog>
        </>
    );
};

export default ReportsList;