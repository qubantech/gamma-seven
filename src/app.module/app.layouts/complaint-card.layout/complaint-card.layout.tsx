import Card from '@mui/material/Card';
import { Box, CardActionArea, Grid, Stack } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const ComplaintCardLayout = ({onClick, title, badge, date, number}:
                               { onClick?: () => void, title: string, badge?: JSX.Element, date?: string, number:number}) => {

    return(
        <Card sx={{width: "100%"}}>
            <CardActionArea>
                <CardHeader onClick={onClick}
                            action={
                            <IconButton sx={{transform: 'rotate(270deg)' , marginLeft: "auto", width: "50px", height: "50px"}}>
                                <ChevronRightIcon />
                            </IconButton>
                            }
                            title={ <Typography variant={"body1"}> {title} </Typography> }
                            subheader={
                            <Stack direction={"row"} spacing={2}>
                                {badge &&
                                    <div>
                                        badge
                                    </div>}
                                {date && <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <TimerIcon fontSize={"small"}/>
                                    <Typography variant={"body2"}>{date}</Typography>
                                </Stack>}
                                <Typography variant={"body2"}>
                                    #{number}
                                </Typography>
                            </Stack>}
                />
            </CardActionArea>
        </Card>
    )
}
export default ComplaintCardLayout