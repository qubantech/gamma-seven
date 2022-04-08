import { FC, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { DrawerLayout } from '../../../app.module/app.layouts/drawer.layout/drawer.layout';
import { FacilityContent } from './facility-content';
import ObjectManagerContainer from './object-manager-container';

interface MedicalFacilitiesMapProps {
    facilities: any,
    mapState: any,
    userCoordinates: boolean,
}

export const MedicalFacilitiesMap: FC<MedicalFacilitiesMapProps> =
    ({
        facilities,
         mapState,
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
                <Map state={ mapState } width={ "100vw" } height={ "100vh" }>
                    <ObjectManagerContainer facilities={ facilities } onPlacemarkClick={ onPlacemarkClick }/>
                    {
                        userCoordinates &&
                        <Placemark
                            geometry={ mapState.center }
                            options={{
                                preset:'islands#redPersonIcon'
                            }}
                        />
                    }
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