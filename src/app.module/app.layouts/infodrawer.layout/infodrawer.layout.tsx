import { Chip, Drawer, Stack, SwipeableDrawer } from '@mui/material';
import { DrawerLayout } from '../drawer.layout/drawer.layout';
import Typography from '@mui/material/Typography';

const InfodrawerLayout = ({isOpen, onChangeState, info, height = "auto"}:
                              {isOpen: boolean, onChangeState: (b:boolean) => void, info: any, height?: string}) => {
    return (
        <DrawerLayout
            isOpen={isOpen}
            onChangeState={onChangeState}
            height={height && height || ""}
            children={
            <div>
                <Stack pb={"10px"} direction={"row"} alignItems={"center"} spacing={1}>
                    <Chip label="status" color="success" />
                    <Typography variant={"caption"}>Дата</Typography>
                    <Typography variant={"caption"}>#666</Typography>
                </Stack>
                <Typography variant={"h5"}>Название</Typography>
                <Typography variant={"h6"}>Учреждение</Typography>
                <Stack py={"10px"} direction={"row"} alignItems={"flex-end"} spacing={1}>
                    <Chip label="tag1" color="default" />
                    <Chip label="tag2" color="default" />
                </Stack>
                <Typography variant={"body1"}>
                    Text idfu c uifdhmj ydgchvv jkhjdnbyhjyhyk jnjh hky hb gh dgfhjg fi uly ty uyh u c gr hdghj hgf hj yf hot fyhj
                </Typography>
            </div>}
        />
    )
}
export default InfodrawerLayout