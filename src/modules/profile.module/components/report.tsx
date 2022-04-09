import React, { FC } from 'react';
import {
    AppBar,
    Button, Chip,
    Container,
    Dialog,
    Grid,
    IconButton,
    Paper,
    Slide,
    Stack,
    Typography,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import CloseIcon from '@mui/icons-material/Close';
import { AuditStat } from '../../../app.module/app.models/models';

import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandCardLayout from '../../../app.module/app.layouts/expand-card.layout/expand-card.layout';
import ChartrequestsModule from '../../chartrequests.module/chartrequests.module';

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
            {/*<Stack spacing={2} justifyContent={ "space-evenly" } >*/}
                <Grid mb={"15px"} container direction={ "row" } spacing={2} columns={12} >
                    <Grid item xs={6}>
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden", width:"100%" }}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "h6" } sx={{ mb: "5px" }}>Жалобы: { complaintsAmount }</Typography>
                            <Typography variant={ "body2" } >Рассмотрено: { complaintsProcessed }</Typography>
                            <Typography variant={ "body2" } >В процессе: { complaintsPending }</Typography>
                            <Typography variant={ "body2" } >Отказано: { complaintsRejected }</Typography>
                            {/*<DescriptionOutlinedIcon style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>*/}
                            <DescriptionTwoToneIcon color={ "secondary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden", width:"100%" }}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "body2" } sx={{ lineHeight: 1.2, mb: "10px" }}>Макс. время обработки: <b>{ maxComplaintProcessingTime } мин.</b></Typography>
                            <Typography variant={ "body2" } sx={{ lineHeight: 1.2 }}>Ср. время обработки: <b>{ meanComplaintProcessingTime } мин.</b> </Typography>
                            <AccessTimeTwoToneIcon color={ "secondary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>
                        </div>
                    </Paper>
                    </Grid>
                </Grid>
                <Stack mb={"15px"}  >
                    <Paper sx={{textAlign: "center", boxShadow: "0px 10px 15px darkGrey",}}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "subtitle1" }>Самое популярное слово:</Typography>
                            <Typography variant={ "h6" }>{ mostPopularKeywords[0] }</Typography>
                        </div>
                    </Paper>
                </Stack>
                <Stack mb={"15px"} >
                    <ExpandCardLayout subtitle={<div/>} title={
                        <div>
                        <Typography variant={"h6"} align={"center"}>Средняя осмысленность: 0.43</Typography>
                                <Typography py={"10px"} align={"center"}>Популярные ключевые слова:</Typography>
                                <Grid spacing={2}>
                                    {["words", "wods", "wcdju"].map((el) => {
                                        return <Chip sx={{fontSize:"16px", marginRight:"10px"}} label={el}/>
                                    })}
                                </Grid>
                        </div>
                    } description={
                        <div>
                            <Typography align={"center"} py={"10px"}>Популярные темы:</Typography>
                            <Grid spacing={2} pb={"10px"}>
                                {["words", "wods", "wcdju"].map((el) => {
                                    return <Chip sx={{fontSize:"16px", marginRight:"10px"}} label={el}/>
                                })}
                            </Grid>
                            <Typography align={"center"} py={"10px"}>Популярные сценарии:</Typography>
                            <Grid spacing={2}>
                                {["words", "wods", "wcdju"].map((el) => {
                                    return <Chip sx={{fontSize:"16px", marginRight:"10px"}} label={el}/>
                                })}
                            </Grid>
                        </div>
                    }/>

                </Stack>
                    <Stack mb={"15px"} >
                    <ExpandCardLayout subtitle={<div/>} title={<ChartrequestsModule/>}
                                      description={
                                          <div>
                                              Eще график
                                          </div>}/>
                </Stack>



           {/* </Stack>*/}
        </div>
    );
};
