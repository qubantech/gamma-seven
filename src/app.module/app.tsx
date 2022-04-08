import React, { useEffect } from 'react';

import { auth } from './app.configs';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';

import { Loader, ServerError } from './app.components';
import { AuthLayout, MobileLayout } from './app.layouts';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { CommonModules } from '../modules';
import { useWatchedObject } from "./app.services/app.realtimedb.service";
import { RTDB } from "./app.resources/app.resouces.realtimedb";

import { blue, red } from '@mui/material/colors';

export const RouterRoot = () => {
    return <BrowserRouter>
        <Routes>
            <Route {...RootModule.routeProps}/>
            {
                CommonModules.map(module =>
                    <Route {...module.routeProps}
                           key={module.name}
                    />
                )
            }
        </Routes>
    </BrowserRouter>
}

export const menuItem = (icon: JSX.Element, label?: string) => {
    return (
        <div>
            {icon}
            {label && <div>{label}</div>}
        </div>
    )
}


const App = () => {

    const [ user, loading, error ] = useAuthState(auth);
    const { watchedObject, setWatchedObject } = useWatchedObject<String>(RTDB.SAMPLE_PATH);

    useEffect(() => {
        setWatchedObject('Этот текст отпавляется в базу и возвращается обратно');
    }, [])

    return (
        <>
            <div>
                Realtime db demo
                <p>
                    {watchedObject && <strong>Объект в базе: {watchedObject}</strong>}
                </p>
            </div>
            <header>
                <ul>
                    {
                        CommonModules.map(module =>
                            <li key={module.name}>
                                <Link to={module.routeProps.path}>
                                    {module.name}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </header>
            {
                error
                && <ServerError/>
                || loading
                && <Loader/>
                || <AuthLayout user={user}/>
            }
        </>
    );

}

const RootModule = {
    routeProps: {
        path: '/',
        exact: true,
        index: false,
        element: <App/>
    },
    name: 'AppName'
}