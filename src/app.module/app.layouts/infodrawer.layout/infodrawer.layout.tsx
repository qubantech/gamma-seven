import { Chip, Drawer, Stack, SwipeableDrawer } from '@mui/material';
import { DrawerLayout } from '../drawer.layout/drawer.layout';
import Typography from '@mui/material/Typography';

const InfodrawerLayout = ({isOpen, onChangeState, info, height = "auto"}:
                              {isOpen: boolean, onChangeState: (b:boolean) => void, info: any, height?: string}) => {
    return (
        <DrawerLayout
            isOpen={isOpen}
            onChangeState={onChangeState}
            height={height && height || "auto"}
            children={
            <div style={{marginBottom: '1.8em', marginTop: '1.2em'}}>
                <Stack pb={"10px"} direction={"row"} alignItems={"center"} spacing={1}>
                    <Chip label="НА РАССМОТРЕНИИ" color="success" />
                    <Typography variant={"caption"}>Дата обращения</Typography>
                    <Typography variant={"caption"}>16.10.2021</Typography>
                </Stack>
                <Typography variant={"h5"} style={{marginBottom: '0.3em'}}>Maecenas non velit eu est vestibulum sollicitudin ac nec purus</Typography>
                <Typography variant={"subtitle1"}>Краснодарская городская клиническая больница скорой медицинской помощи</Typography>
                <Stack py={"10px"} direction={"row"} alignItems={"flex-end"} spacing={1.2} style={{marginBottom: '1em'}}>
                    <Chip label="Персонал" color="default" />
                    <Chip label="Обслуживание" color="default" />
                </Stack>
                <Typography variant={"body1"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non velit eu est vestibulum sollicitudin ac nec purus. Integer quis elementum metus. Pellentesque id ligula sem. Mauris venenatis velit eget sem egestas, sit amet vehicula lectus convallis. Quisque volutpat, lacus eu commodo tincidunt, magna orci dignissim ligula, id euismod mauris orci et quam. Nam mi quam, porttitor at libero quis, pharetra mattis erat. Nulla id risus faucibus, finibus ante a, tempor nisl. Morbi vitae posuere felis, sit amet vestibulum est. Duis vel elementum nulla. Cras tincidunt iaculis lacus sit amet bibendum.
                </Typography>
            </div>}
        />
    )
}
export default InfodrawerLayout