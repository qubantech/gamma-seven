import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import React from "react";
import "./mobile.layout.css"
import {purple} from "@mui/material/colors";

export function MobileLayout ({centerIcon, centerColor = purple[500], menuItems}:
                            {centerIcon?: JSX.Element, centerColor?: string, menuItems: Array<JSX.Element>}){
    const [value, setValue] = React.useState(0);
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
                            <BottomNavigationAction className={"animationItem"} key={index} icon={el} />
                        )
                    })}
                    {centerIcon && <div style={{width:60}}/> }
                    {centerIcon && <BottomNavigationAction className={"animationItem"} sx={{position: "absolute",
                        width:70, height:70, borderRadius: "35px 35px 0 0", bottom: 0,
                        right:"50% - 35px",backgroundColor: centerColor}} icon={centerIcon}/>}
                    {menuItems.slice(menuItems.length/2, menuItems.length).map((el,index) => {
                        return (
                            <BottomNavigationAction className={"animationItem"} key={index} icon={el} />
                        )
                    })}
                </BottomNavigation>
            </Paper>
    )
}