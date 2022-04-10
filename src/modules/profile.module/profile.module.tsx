import React, { useEffect, useState } from 'react';
import { MobileLayout } from '../../app.module/app.layouts';
import AddIcon from '@mui/icons-material/Add';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app.module/app.configs';
import { useUser } from '../../app.module/app.services/app.user.service';
import { Box, Button, Chip, Container, Skeleton, Tab, Tabs } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import ExpandCardLayout from '../../app.module/app.layouts/expand-card.layout/expand-card.layout';
import Typography from '@mui/material/Typography';
import ComplaintCardLayout from '../../app.module/app.layouts/complaint-card.layout/complaint-card.layout';
import InfodrawerLayout from '../../app.module/app.layouts/infodrawer.layout/infodrawer.layout';
import { menuItems } from '../../app.module/app.layouts/mobile.layout/mobile.layout';
//@ts-ignore
import zdhoo from "./img_avatar.png"
import { auditService } from '../../app.module/app.services/app.auditstat.service';




import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { DrawerLayout } from '../../app.module/app.layouts/drawer.layout/drawer.layout';
import ReportsCardButton from './components/reports-card-button';
import ReportsDrawerContent from './components/reports-drawer-content';
import { appComplaintsService } from '../../app.module/app.services/app.complaints.service';
import {
    complaintsModel,
    complaintsModelInitState,
} from '../../app.module/app.services/app.complaints.service/models/complaints.model';


const Profile = () => {
    const [user, loading, error ] = useAuthState(auth);
    const [value, setValue] = React.useState(0);
    const [complaints, setComplaints] = useState<complaintsModel[]>([])

    const [drawer, setDrawer] = useState<complaintsModel>(complaintsModelInitState)
    const navigate = useNavigate()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const userdata = useUser(user?.uid || "0")

    const logout = () => {
        signOut(auth)
            .then((res) => navigate("/"))
    }

    const description = () => (
        <div>
            <Typography>Город: {userdata.watchedObject?.city || ""}</Typography>
            <Typography>Пол: {userdata.watchedObject?.sex || ""}</Typography>
        </div>
    )

    interface TabPanelProps {
        children?: React.ReactNode;
        index: number;
        value: number;
    }

    function TabPanel(props: TabPanelProps) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const tabsContent = () => (
        <>
            <TabPanel value={value} index={0}>
                {complaints && complaints.map((el) => {
                    const date2 = new Date(el.dateSent);

                    // One day in milliseconds
                    const oneDay = 1000 * 60 * 60 * 24;

                    // Calculating the time difference between two dates
                    const diffInTime = date2.getTime() - Date.now() + 30*oneDay;

                    // Calculating the no. of days between two dates
                    const diffInDays = Math.round(diffInTime / oneDay);
                    return <ComplaintCardLayout title={el.theme} date={diffInDays.toString() + " дней"} number={Number(el.id)} onClick={() => setDrawer(el)}/>
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{marginBottom: '1em'}}>
                <ComplaintCardLayout title={"Fusce lobortis lorem nec enim dapibus pellentesque."} date={"4 дня"} number={55} onClick={() => setDrawer(complaintsModelInitState)}/>
                </div>
                <ComplaintCardLayout title={"Pellentesque id ligula sem."} date={"15 дней"} number={12} onClick={() => setDrawer(complaintsModelInitState)}/>
            </TabPanel>
        </>
    )

    useEffect(()=> {
        /*if (user) {
        auditService.getAudit(user?.uid || "")
            .then((resp) => {
                console.log(resp.data)
            })
        }*/
        if (user?.uid) {
            appComplaintsService.getUserComplaints(user?.uid)
                .then((resp) => {
                    console.log(resp)
                    setComplaints(resp)
                })
        }
    },[user])

//backgroundColor: "rgba(244,170,151,0.3)"

    const [reportsDrawer, setReportsDrawer] = useState(false);

    const onReportsCardButtonClick = () => {
        setReportsDrawer(true)
    }

    return(
        <div>
            <Container>
            <ExpandCardLayout onClick={() => {logout()}}
                              avatar={zdhoo}
                              title={userdata.watchedObject?.firstName &&
                                  <Typography m={0} p={0} variant={"h5"}>{userdata.watchedObject?.firstName}</Typography> || <div></div>}
                              subtitle={userdata.watchedObject?.lastName &&
                                  <Typography m={0} p={0} variant={"body1"}>{userdata.watchedObject?.lastName}</Typography> || <div></div>}
                              righttext={""}
                              description={description()}

            />
                <ReportsCardButton onClick={ () => setReportsDrawer(true) }/>
                <DrawerLayout
                    isOpen={ reportsDrawer }
                    onChangeState={ setReportsDrawer }
                    children={ <ReportsDrawerContent/> }
                />


                {user &&
                    <Tabs sx={{ paddingTop: "10px", paddingBottom: "10px" }} variant={"fullWidth"} value={value}
                               onChange={handleChange}>
                        <Tab icon={<HourglassBottomIcon />} iconPosition="start" label={"В работе"} />
                        <Tab icon={<CheckIcon />} iconPosition="start" label={"Завершенные"} />
                    </Tabs> || <Skeleton animation="wave" sx={{marginY:"20px"}} variant="rectangular" width={"100%"} height={200} />}

                {user && tabsContent()}
                <MobileLayout
                    centerIcon={<AddIcon />}
                    activeItem={2}
                    menuItems={menuItems()}
                />
                <InfodrawerLayout isOpen={drawer !== complaintsModelInitState && true || false} onChangeState={(b:boolean)=>{if (!b) setDrawer(complaintsModelInitState) }} info={drawer}/>
            </Container>
    </div>
)};

export default {
    routeProps: {
        path: 'profile',
        exact: true,
        index: false,
        element: <Profile/>,
    },
    name: 'Profile',
};