import React from 'react';


const Complaint = () => (
    <div>Complaints Module</div>
);

export default {
    routeProps: {
        path: 'complaint',
        exact: true,
        index: false,
        element: <Complaint />,
    },
    name: 'Complaints',
};