import React, { FC, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { DrawerLayout } from '../../../app.module/app.layouts/drawer.layout/drawer.layout';
import { FacilityContent } from './facility-content';
import ObjectManagerContainer from './object-manager-container';
import InfodrawerLayout from '../../../app.module/app.layouts/infodrawer.layout/infodrawer.layout';

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
    const [pointDrawerState, setPointDrawerState] = useState(false);

    const onPlacemarkClick = (point: any) => {
        setSelectedPoint(point);
        setPointDrawerState(true);
        console.log(point)
    };

        const [idDrawer, setIdDrawer] = useState("")

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
                isOpen={ pointDrawerState }
                onChangeState={ setPointDrawerState }
                children={ <FacilityContent title={ selectedPoint.properties.title } onClick={ () => setIdDrawer("1") }/> }
            />
            <InfodrawerLayout
                isOpen={ idDrawer && true || false }
                onChangeState={ (b:boolean)=>{if (!b) setIdDrawer("") } }
                info={ idDrawer }/>
        </>

    );
}