import React from 'react';
import { CardActionArea } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

import { COMPLIANT_CARD_COLOR } from '../../../index';

const ReportsCardButton = ( props: {onClick: () => void} ) => {
    return (
        <Card sx={{width: "100%", backgroundColor: COMPLIANT_CARD_COLOR, boxShadow: "0px 3px 3px darkGrey", marginTop: "10px"}}>
            <CardActionArea>
                <CardHeader
                            onClick={ props.onClick }
                            action={
                                <IconButton sx={{transform: 'rotate(90deg)' , marginLeft: "auto", width: "50px", height: "50px"}}>
                                    <ChevronRightIcon />
                                </IconButton>
                            }
                            title={ <Typography variant={"body1"}>Получить отчеты</Typography> }
                />
            </CardActionArea>
        </Card>
    );
};

export default ReportsCardButton;