import { FC, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { DrawerLayout } from '../../../app.module/app.layouts/drawer.layout/drawer.layout';
import { FacilityContent } from './facility-content';
import ObjectManagerContainer from './object-manager-container';

interface MedicalFacilitiesMapProps {
    facilities: any,
    userCoordinates: Number[],
}

export const MedicalFacilitiesMap: FC<MedicalFacilitiesMapProps> =
    ({
        facilities,
        userCoordinates
     }) => {

    const [selectedPoint, setSelectedPoint] = useState( facilities.features[0] );
    const [drawerState, setDrawerState] = useState(false);

    const onPlacemarkClick = (point: any) => {
        setSelectedPoint(point);
        setDrawerState(true);
        console.log(point)
    };

        return (
        <>
            <YMaps>
                <Map state={{center: [45.0360, 38.9746], zoom: 12}} width={"100vw"} height={"100vh"}>
                    <ObjectManagerContainer facilities={facilities} onPlacemarkClick={onPlacemarkClick}/>
                </Map>
            </YMaps>
            <DrawerLayout
                isOpen={ drawerState }
                onChangeState={ setDrawerState }
                children={ <FacilityContent title={ selectedPoint.properties.title } /> }
            />
        </>

    );
}