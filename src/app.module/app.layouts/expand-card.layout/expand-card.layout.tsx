import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {purple, red} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CardActionArea, CardActions, Stack} from "@mui/material";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ExpandCardLayout = ({onClick, avatar, title, subtitle, righttext, description}:
                        { onClick?: () => void, avatar?: string, title: JSX.Element, subtitle: JSX.Element, righttext?: string, description?: JSX.Element }) => {
    let iconSize = "50px"
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (e: any) => {
        e.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <Card sx={{width: "100%"}}>
            <CardActionArea>
                <CardHeader onClick={onClick}
                            avatar={
                                avatar && (
                                <Avatar src={avatar} sx={{bgcolor: red[500], width: "85px", height: "85px"}} aria-label="recipe">
                                </Avatar>
                                )
                            }
                            action={
                                <Stack alignItems="center" direction="row" spacing={2}>
                                    <Typography variant={"h5"}>{righttext}</Typography>
                                    {description &&
                                        <ExpandMore
                                            sx={{width: iconSize, height: iconSize}}
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon/>
                                        </ExpandMore>
                                    }
                                </Stack>
                            }
                            title={title}
                            subheader={subtitle}
                />
            </CardActionArea>
            {description &&
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {description}
                    </CardContent>
                </Collapse>
            }
        </Card>
    );

}

export default ExpandCardLayout