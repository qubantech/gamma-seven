import React from 'react';
import { ObjectManager } from 'react-yandex-maps';

const ObjectManagerContainer = ({facilities, onPlacemarkClick}) => {
    return (
        <>
            <ObjectManager
                options={{
                    clusterize: true,
                    gridSize: 100,
                }}
                clusters={{
                    preset: 'islands#pinkClusterIcons',
                }}
                features={ facilities }
                instanceRef={ref =>
                    ref?.objects.events.add('click', (e) => {
                        const objectId = e.get('objectId');
                        let obj = ref?.objects.getById(objectId);
                        onPlacemarkClick(obj)
                    })}
            />
        </>
    );
};

export default ObjectManagerContainer;