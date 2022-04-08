import React from 'react';
import { MobileLayout } from '../../app.module/app.layouts';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { menuItem } from '../../app.module/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app.module/app.configs';
import { useUser } from '../../app.module/app.services/app.user.service';


const Profile = () => {
    const [ user, loading, error ] = useAuthState(auth);
    const userdata = useUser(user?.uid || "0")
    return(
        <div>
        {userdata.watchedObject?.firstName}
        <MobileLayout
            centerIcon={<AddIcon />}
            centerColor={blue[700]}
            activeItem={2}
            menuItems={[
                menuItem(<MapIcon />, "Карта"),
                menuItem(<PersonIcon />, "Профиль"),
            ]} />
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