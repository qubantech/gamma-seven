import { Chip, Drawer, Stack, SwipeableDrawer } from '@mui/material';
import { DrawerLayout } from '../drawer.layout/drawer.layout';
import Typography from '@mui/material/Typography';
import { complaintsModel } from '../../app.services/app.complaints.service/models/complaints.model';

const InfodrawerLayout = ({isOpen, onChangeState, info, height = "auto"}:
                              {isOpen: boolean, onChangeState: (b:boolean) => void, info: complaintsModel, height?: string}) => {
    return (
        <DrawerLayout
            isOpen={isOpen}
            onChangeState={onChangeState}
            height={height && height || "auto"}
            children={
            <div style={{marginBottom: '1.8em', marginTop: '1.2em'}}>
                <Stack pb={"10px"} direction={"row"} alignItems={"center"} spacing={1}>
                    { (info.status == "accepted") &&
                    <Chip label={info.status} color={"info"} /> || <Chip label={info.status} color={"success"} />}
                    <Typography variant={"caption"}>Дата обращения</Typography>
                    <Typography variant={"caption"}>{info.dateSent}</Typography>
                </Stack>
                <Typography variant={"h5"} style={{marginBottom: '0.3em'}}>{info.theme}</Typography>
                <Typography variant={"subtitle1"}>Краснодарская городская клиническая больница скорой медицинской помощи</Typography>
                <Stack py={"10px"} direction={"row"} alignItems={"flex-end"} spacing={1.2} style={{marginBottom: '1em'}}>
                    {info.tags && info.tags.map((el) => {
                        return <Chip label={el} />
                    })
                    }
                </Stack>
                <Typography variant={"body1"}>
                    {info.text}
                </Typography>
            </div>}
        />
    )
}
export default InfodrawerLayout