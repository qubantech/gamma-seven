import React from 'react';
import { MobileLayout } from '../../app.module/app.layouts';
import AddIcon from '@mui/icons-material/Add';
import { blue, red } from '@mui/material/colors';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { menuItem } from '../../app.module/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app.module/app.configs';
import { useUser } from '../../app.module/app.services/app.user.service';
import Card from '@mui/material/Card';
import { Box, CardActionArea, Container, Tab, Tabs } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import CheckIcon from '@mui/icons-material/Check';
import ExpandCardLayout from '../../app.module/app.layouts/expand-card.layout/expand-card.layout';
import Typography from '@mui/material/Typography';
import ComplaintCardLayout from '../../app.module/app.layouts/complaint-card.layout/complaint-card.layout';


const Profile = () => {
    const [user, loading, error ] = useAuthState(auth);
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const userdata = useUser(user?.uid || "0")

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
                <ComplaintCardLayout title={"Ненавижу боddddddлницы"} date={"2 дня"} number={228} onClick={() => {}}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                sas
            </TabPanel>
        </>
    )

    return(
        <div>
            <Container>
            <ExpandCardLayout onClick={() => {}}
                              title={userdata.watchedObject?.firstName && <Typography m={0} p={0} variant={"body1"}>{userdata.watchedObject?.firstName}</Typography> || <div></div>}
                              subtitle={userdata.watchedObject?.lastName && <Typography m={0} p={0} variant={"subtitle2"}>{userdata.watchedObject?.lastName}</Typography> || <div></div>}
                              righttext={""}
                              description={description()}
            />
            <Tabs variant={"fullWidth"} value={value} onChange={handleChange}>
                <Tab icon={<HourglassBottomIcon/>} iconPosition="start" label={"В работе"}/>
                <Tab icon={<CheckIcon/>} iconPosition="start" label={"Завершенные"}/>
            </Tabs>
                {tabsContent()}
        <MobileLayout
            centerIcon={<AddIcon />}
            centerColor={blue[700]}
            activeItem={2}
            menuItems={[
                menuItem(<MapIcon />, "Карта"),
                menuItem(<PersonIcon />, "Профиль"),
            ]} />
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