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
                            style={{justifyContent: 'center'}}
                            action={
                            <IconButton sx={{transform: 'rotate(270deg)' , marginLeft: "auto", width: "50px", height: "50px"}}>
                                <ChevronRightIcon />
                            </IconButton>
                            }
                            title={ <Typography variant={"body1"}> {title} </Typography> }
                            subheader={
                            <Stack direction={"row"} spacing={1}>
                                {badge &&
                                    <div>
                                        badge
                                    </div>}
                                {date && <Stack direction={"row"}>
                                    <TimerIcon sx={{width: "20px", height: "20px"}}/>
                                    <Typography>{date}</Typography>
                                </Stack>}
                                <div>
                                    #{number}
                                </div>
                            </Stack>}
                />
            </CardActionArea>
        </Card>
    )
}
export default ComplaintCardLayout