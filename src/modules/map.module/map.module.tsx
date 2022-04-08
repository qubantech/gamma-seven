import React, { useState } from 'react';
import { MedicalFacilitiesMap } from './components/medical-facilities-map';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { menuItem } from '../../app.module/app';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import { MobileLayout } from '../../app.module/app.layouts';

import facilities from './components/facilities.json';
import { menuItems } from '../../app.module/app.layouts/mobile.layout/mobile.layout';
import { Button, IconButton } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';

const MapPage = () => {
    const [mapState, setMapState] = useState({center: [45.0360, 38.9746], zoom: 12});
    const [userCoordinates, setUserCoordinates] = useState(false)

    const onGeopositionClick = () => {
        if (!navigator.geolocation) {
            setMapState({center: [45.0360, 38.9746], zoom: 12});
            console.log("not supp")
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                setMapState({center: [position.coords.latitude, position.coords.longitude], zoom: 15});
                setUserCoordinates(true);
                console.log("done")
            }, (e) => {
                setMapState({center: [45.0360, 38.9746], zoom: 12});
                console.log(e)
            });
        }
    }

    return (
        <div>
            <IconButton color={ "primary" } onClick={ onGeopositionClick } >
                <LocationOnIcon />
            </IconButton>
            <MedicalFacilitiesMap facilities={ facilities } mapState={ mapState } userCoordinates={ userCoordinates }/>
            <MobileLayout
                centerIcon={ <AddIcon /> }
                centerColor={ blue[700] }
                activeItem={ 0 }
                menuItems={ menuItems() } />
        </div>
    )
};

export default {
    routeProps: {
        path: 'map',
        exact: true,
        index: false,
        element: <MapPage/>,
    },
    name: 'Map',
};