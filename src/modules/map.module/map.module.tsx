import React, { useState } from 'react';
import { MedicalFacilitiesMap } from './components/medical-facilities-map';
import AddIcon from '@mui/icons-material/Add';

import { MobileLayout } from '../../app.module/app.layouts';

import facilities from './components/facilities.json';
import { menuItems } from '../../app.module/app.layouts/mobile.layout/mobile.layout';
import { Autocomplete, Container, IconButton, Stack, TextField } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PRIMARY_COLOR } from '../../index';

const MapPage = () => {
    const [mapState, setMapState] = useState({center: [45.0360, 38.9746], zoom: 12});
    const [userCoordinates, setUserCoordinates] = useState(false);

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
        <div style={{position: "relative"}}>
            <Container sx={{
                position: "absolute",
                zIndex: 500,
                backgroundColor: 'white',
                // marginTop: "20px",
                marginBottom: "-20px",
                boxShadow: "0px 10px 15px darkGrey",
                borderRadius: "0 0 30px 30px",
                width: "100vw",
            }}>
                <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"space-between"}>
                    <Autocomplete
                        color={ "secondary" }
                        sx={{ marginTop: "30px", marginBottom: "30px", width: "100%" }}
                        options={ facilities.features }
                        defaultValue={ null }
                        getOptionLabel={ (option) => option.properties.title }
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                variant="standard"
                                label="Больница"
                                placeholder="Выберите больницу"
                            />
                        }
                        onChange={(event: any, value: any) => {
                            setMapState({ center: value.geometry.coordinates, zoom: 15 })
                        }}
                    />
                    <IconButton color={ "primary" } onClick={ onGeopositionClick } sx={{marginTop: "20px", marginBottom: "20px", borderRadius: "100%", border: `1px solid ${PRIMARY_COLOR}`}}>
                        <LocationOnIcon fontSize={"large"}/>
                    </IconButton>
                </Stack>
            </Container>
            <MedicalFacilitiesMap facilities={ facilities } mapState={ mapState } userCoordinates={ userCoordinates }/>
            <MobileLayout
                centerIcon={ <AddIcon /> }
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