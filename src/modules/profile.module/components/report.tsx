import React, { FC, useEffect, useState } from 'react';
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
import { appAuditService } from '../../../app.module/app.services/app.audit.service';
import {
    ReportModel,
    ReportModelInitState,
} from '../../../app.module/app.services/app.audit.service/models/report.model';
import { DrawerLayout } from '../../../app.module/app.layouts/drawer.layout/drawer.layout';
import GetReportDrawerContent from './get-report-drawer-content';
import { PiechartModule } from '../../chartrequests.module/piechart.module';

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
    boxShadow: "0px 3px 3px darkGrey",
    // backgroundColor: "rgba(244,170,151,0.3)",
    // border: "1px solid black",

}

export const Report: FC<ReportModel> = (props) => {
    const [getReportDrawerState, setGetReportDrawerState] = useState(false);


    const onCreateReport = () => {
        appAuditService.getReportPDFAndSendToEmail(props._id,
            "wlashcontact@gmail.com")
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.log(error));

        window.open(`https://audit.quban.tech/report/pdf/${props._id}`)
        setGetReportDrawerState(true);
    }

    return (
        <div style={{ padding: "10px" }}>
            <DrawerLayout
                isOpen={ getReportDrawerState }
                onChangeState={ setGetReportDrawerState }
                style={{ zIndex: 1500 }}
                children={ <GetReportDrawerContent id={ props._id }/> }
            />
            <Button
                fullWidth
                variant={ "outlined" }
                sx={{ mb: "30px" }}
                onClick={ () => setGetReportDrawerState(true)}
            >
                Получить отчет
            </Button>
            {/*<Stack spacing={2} justifyContent={ "space-evenly" } >*/}
                <Grid mb={"15px"} container direction={ "row" } spacing={2} columns={12} >
                    <Grid item xs={6}>
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden", width:"100%" }}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "h6" } sx={{ mb: "5px" }}>Жалобы: { props.complaintsAmount }</Typography>
                            <Typography variant={ "body2" } >Рассмотрено: { props.complaintsProcessed }</Typography>
                            <Typography variant={ "body2" } >В процессе: { props.complaintsPending }</Typography>
                            <Typography variant={ "body2" } >Отказано: { props.complaintsRejected }</Typography>
                            <DescriptionTwoToneIcon color={ "primary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>
                        </div>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper style={{ ...gridBlockStyle, position: "relative", overflow: "hidden", width:"100%" }}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "body2" } sx={{ lineHeight: 1.2, mb: "10px" }}>Макс. время обработки: <b>{ Math.round(props.maxComplaintProcessingTime) } д.</b></Typography>
                            <Typography variant={ "body2" } sx={{ lineHeight: 1.2 }}>Ср. время обработки: <b>{ Math.round(props.maxComplaintProcessingTime) } д.</b> </Typography>
                            <AccessTimeTwoToneIcon color={ "primary" } style={{ position: "absolute", bottom: -20, right: -25, fontSize: "90px", zIndex: 1 }}/>
                        </div>
                    </Paper>
                    </Grid>
                </Grid>
                <Stack mb={"15px"}  >
                    <Paper sx={{textAlign: "center", boxShadow: "0px 3px 3px darkGrey"}}>
                        <div style={{padding:"15px"}}>
                            <Typography variant={ "subtitle1" }>Самое популярное слово:</Typography>
                            <Typography variant={ "h6" }>{ props.mostPopularKeywords[0] }</Typography>
                        </div>
                    </Paper>
                </Stack>
                <Stack mb={"15px"} >
                    <ExpandCardLayout subtitle={<div/>} title={
                        <div >
                            <Typography variant={"h6"} align={"center"}>Средняя осмысленность</Typography>
                            <Typography  align={"center"} style={{ fontSize: "17px" }} sx={{mb: "20px"}}> { props.complaintsMeaningfulnessMeanScore }</Typography>
                            <Typography variant={"h6"} py={"10px"} align={"center"}>Популярные ключевые слова</Typography>
                            <Grid spacing={2}>
                                { props.mostPopularKeywords.map((el) => {
                                    return <Chip sx={{fontSize:"16px", margin:"5px"}} label={el}/>
                                })}
                            </Grid>
                        </div>
                    } description={
                        <div>
                            <Typography variant={"h6"} align={"center"} py={"10px"}>Популярные темы</Typography>
                            <Grid spacing={2} pb={"10px"}>
                                { props.mostPopularTopics.map((el) => {
                                    return <Chip sx={{fontSize:"16px", margin:"5px"}} label={el}/>
                                })}
                            </Grid>
                            <Typography variant={"h6"} align={"center"} py={"10px"}>Популярные сценарии</Typography>
                            <Grid spacing={2}>
                                {props.mostPopularScripts.map((el) => {
                                    return <Chip sx={{fontSize:"16px", margin:"5px" }} label={el}/>
                                })}
                            </Grid>
                        </div>
                    }/>

                </Stack>
                    <Stack mb={"15px"} >
                        {/*<Paper sx={{textAlign: "center", boxShadow: "0px 3px 3px darkGrey"}}>
                            <div style={{ padding: '15px' }}>
                                <ChartrequestsModule/>
                            </div>
                        </Paper>*/}
                    <ExpandCardLayout subtitle={<div/>} title={<PiechartModule/>}
                                      description={
                                          <ChartrequestsModule/>}/>
                </Stack>



           {/* </Stack>*/}
        </div>
    );
};
