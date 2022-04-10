import Card from '@mui/material/Card';
import { CardActionArea, Stack } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { COMPLIANT_CARD_COLOR } from '../../../index';



const ComplaintCardLayout = ({onClick, title, badge, date, number}:
                               { onClick?: () => void, title: string, badge?: JSX.Element, date?: string, number:number}) => {

    return(
        <Card sx={{width: "100%", backgroundColor:  COMPLIANT_CARD_COLOR, marginBottom:"10px", boxShadow: "0px 3px 3px darkGrey"}}>
            <CardActionArea>
                <CardHeader onClick={onClick}
                            action={
                            <IconButton sx={{transform: 'rotate(90deg)' , marginLeft: "auto", width: "50px", height: "50px"}}>
                                <ChevronRightIcon />
                            </IconButton>
                            }
                            title={ <Typography variant={"body1"}> {title} </Typography> }
                            subheader={
                            <Stack direction={"row"} spacing={2}>
                                {badge &&
                                        badge}
                                {date && <Stack direction={"row"} alignItems={"center"} spacing={1} style={{marginTop: '1em'}}>
                                    <TimerIcon fontSize={"small"}/>
                                    <Typography variant={"body2"}>{date}</Typography>
                                    <Typography variant={"body2"}>
                                        #{number}
                                    </Typography>
                                </Stack>}
                            </Stack>}
                />
            </CardActionArea>
        </Card>
    )
}
export default ComplaintCardLayout