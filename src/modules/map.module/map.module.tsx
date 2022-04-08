import React from 'react';
import { MedicalFacilitiesMap } from './components/medical-facilities-map';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { menuItem } from '../../app.module/app';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { MobileLayout } from '../../app.module/app.layouts';

import facilities from './components/facilities.json';

const MapPage = () => (
    <div>
        <MedicalFacilitiesMap facilities={facilities} userCoordinates={[45.0360, 38.9746]}/>
        <MobileLayout
            centerIcon={<AddIcon />}
            centerColor={blue[700]}
            activeItem={0}
            menuItems={[
                menuItem(<MapIcon />, "Карта"),
                menuItem(<PersonIcon />, "Профиль"),
            ]} />
    </div>
);

export default {
    routeProps: {
        path: 'map',
        exact: true,
        index: false,
        element: <MapPage/>,
    },
    name: 'Map',
};