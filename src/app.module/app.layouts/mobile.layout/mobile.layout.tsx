import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import React, { useState } from 'react';
import "./mobile.layout.css"
import { menuItem } from '../../app';
import MapIcon from '@mui/icons-material/Map';
import PersonIcon from '@mui/icons-material/Person';
import NewinfoDrawer from '../newinfodrawer.layout/newinfodrawer.layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../app.configs';
import { PRIMARY_COLOR } from '../../../index';

export const menuItems = () => [
    menuItem(<MapIcon />, "Карта", "/map"),
    menuItem(<PersonIcon />, "Профиль", "/profile")]

export function MobileLayout ({centerIcon, centerColor, menuItems, activeItem=-1}:
                            {centerIcon?: JSX.Element, centerColor?: string, menuItems: Array<JSX.Element>, activeItem?:number}){
    const [value, setValue] = React.useState(activeItem);
    const [isOpenNewDrawer, setIsOpenNewDrawer] = useState(false)
    const [ user, loading, error ] = useAuthState(auth);

    return (
            <Paper sx={{height:50, position: 'fixed',zIndex:50, bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {menuItems.slice(0, menuItems.length/2).map((el,index) => {
                        return (
                            <BottomNavigationAction className={"animationItem"} value={index} key={index} icon={el} />
                        )
                    })}
                    {centerIcon && <div style={{width:60}}/> }
                    {centerIcon && <BottomNavigationAction className={"animationItem"}
                                                           sx={{position: "absolute",
                                                               borderRadius: "100%",
                                                               bottom: 0,
                                                               height: 77,
                                                               marginBottom: "5px",
                                                               right:"50% - 35px",
                                                               backgroundColor: PRIMARY_COLOR
                                                           }}
                                                           value={1}
                                                           onClick={() => setIsOpenNewDrawer(true)}
                                                           icon={centerIcon}/>}
                    {menuItems.slice(menuItems.length/2, menuItems.length).map((el,index) => {
                        return (
                            <BottomNavigationAction className={"animationItem"} key={index+menuItems.length/2} value={index+menuItems.length/2+1} icon={el} />
                        )
                    })}
                    <NewinfoDrawer isOpen={isOpenNewDrawer} onChangeState={setIsOpenNewDrawer} uid={user?.uid || ""}/>
                </BottomNavigation>
            </Paper>
    )
}