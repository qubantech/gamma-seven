import React from 'react';


const Profile = () => (
    <div>Profile</div>
);

export default {
    routeProps: {
        path: 'profile',
        exact: true,
        index: false,
        element: <Profile/>,
    },
    name: 'Profile',
};