import React, { FC } from 'react';
import {
    AppBar,
    Button,
    Container,
    Dialog,
    Grid,
    IconButton,
    Paper,
    Slide,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import CloseIcon from '@mui/icons-material/Close';
import { AuditStat } from '../../../app.module/app.models/models';

import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const gridBlockStyle = {
    // margin: "auto",
    // width: "100%",
    width: "135px",
    height: "120px",
    padding: "15px",
    boxShadow: "0px 10px 15px darkGrey",
    // backgroundColor: "rgba(244,170,151,0.3)",
    // border: "1px solid black",

}

export const Report: FC<AuditStat> = ({
    complaintsAmount,
    complaintsAmountPerDayHist,
    complaintsMeaningfulnessMeanScore,
    complaintsPending,
    complaintsProcessed,
    complaintsRejected,
    createdAt,
    maxComplaintProcessingTime,
    meanComplaintProcessingTime,
    mostPopularKeywords,
    mostPopularScripts,
    mostPopularTopics,
    peakComplaintsAmountDate,
    peakComplaintsAmountNumber
}) => {

    return (
        <div style={{ padding: "10px" }}>
            <Button fullWidth variant={ "outlined" } sx={{ mb: "10px" }} >Скачать отчет</Button>
            <Stack spacing={2} justifyContent={ "space-evenly" } >
                <Stack direction={ "row" } spacing={2} justifyContent={ "space-evenly" } >
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden" }}>
                        <Typography variant={ "h6" } sx={{ mb: "5px" }}>Жалобы: { complaintsAmount }</Typography>
                        <Typography variant={ "body2" } >Рассмотрено: { complaintsProcessed }</Typography>
                        <Typography variant={ "body2" } >В процессе: { complaintsPending }</Typography>
                        <Typography variant={ "body2" } >Отказано: { complaintsRejected }</Typography>
                        {/*<DescriptionOutlinedIcon style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>*/}
                        <DescriptionTwoToneIcon color={ "secondary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>

                    </Paper>
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden" }}>
                        <Typography variant={ "body2" } sx={{ lineHeight: 1.2, mb: "10px" }}>Макс. время обработки: <b>{ maxComplaintProcessingTime } мин.</b></Typography>
                        <Typography variant={ "body2" } sx={{ lineHeight: 1.2 }}>Ср. время обработки: <b>{ meanComplaintProcessingTime } мин.</b> </Typography>
                        <AccessTimeTwoToneIcon color={ "secondary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>
                    </Paper>
                </Stack>
                <Stack >
                    <Paper sx={{ padding: "15px", textAlign: "center", boxShadow: "0px 10px 15px darkGrey",}}>
                        <Typography variant={ "subtitle1" }>Самое популярное слово:</Typography>
                        <Typography variant={ "h6" }>{ mostPopularKeywords[0] }</Typography>
                    </Paper>
                </Stack>



            </Stack>
        </div>
    );
};
