import React from 'react';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../app.configs';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
//@ts-ignore
import icon from "./icon.svg"

const DesktopLayout = ({open, setOpen}:{open:boolean, setOpen:(b:boolean)=> void}) => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate()
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        signOut(auth)
            .then((res) => navigate("/"))
    }

    const settings = [{key:'Редактировать', value:()=>{}}, {key:'Выход', value:()=>{logout()}}];

    return (
        <>
            <AppBar sx={{zIndex:1500}} position="static">
                <Toolbar>
                    <div style={{ flexGrow: 1 }}>
                    <img src={icon}></img>
                    </div>
                    {/*<Typography variant="h6" component="div" >
                        Просмотр заявок
                    </Typography>*/}
                    <Stack alignItems={"center"} spacing={0} pr={"10px"}>
                        <Typography variant={"caption"}>Сегодня/по плану:</Typography>
                        <Typography color={"white"}> 6/20</Typography>
                    </Stack>
                    <IconButton sx={{marginRight:'10px'}} onClick={() => {setOpen(!open)}}><QueryStatsIcon/></IconButton>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting.key} onClick={setting.value}>
                                    <Typography textAlign="center">{setting.key}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default DesktopLayout