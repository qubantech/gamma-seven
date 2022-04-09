import React, { useState } from 'react';
import DesktopLayout from '../../app.module/app.layouts/desktop.layout/desktop.layout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import {
    Chip,
    CircularProgress,
    Divider,
    Drawer,
    IconButton, List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ManagermodalLayout from '../../app.module/app.layouts/managermodal.layout/managermodal.layout';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ChartrequestsModule from '../chartrequests.module/chartrequests.module';

let drawerWidth = 480;

const ManagerProfileModule = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [info, setInfo] = useState("")
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex:1 },
        {
            field: 'title',
            headerName: 'Заголовок',
            flex:6,
            editable: false,
        },
        {
            field: 'tags',
            headerName: 'Категории',
            flex:4,
            editable: false,
            renderCell: (params) => (
                <Stack direction={"row"} spacing={1}>
                    {Object.values(params.value).map((el:any)=>{
                       return( <div>
                        <Chip label={el.toString() || ""} />
                        </div>)
                    })}
                </Stack>
            )
        },
        {
            field: 'maxTime',
            headerName: 'Время',
            type: 'number',
            flex:2,
        },
        {
            field: 'city',
            headerName: 'Город',
            description: 'This column has a value getter and is not sortable.',
            flex:2,
        },
        {
            field: 'institution',
            headerName: 'Учреждение',
            description: 'This column has a value getter and is not sortable.',
            flex:2,
        },
        {
            field: 'status',
            headerName: 'Статус',
            description: 'This column has a value getter and is not sortable.',
            type: 'number',
            flex:1,
            renderCell: (params => <CircularProgress variant="determinate" value={params.value} />
            )
        },
    ];

    const rows = [ {id:1, title:"sdhj gh jf gg  fd  ft g cf   vfc fh b fcdrfth jg fdxs dfgh j gfd", tags:["ass","sass", "sass"], maxTime:2, city: "qw", status: 50}, {id:2, tags:"ass", maxTime:2, city: "qw"}]

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }));

    interface AppBarProps extends MuiAppBarProps {
        open?: boolean;
    }

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="fixed" open={open}>
                <DesktopLayout open={open} setOpen={setOpen}/>
            </AppBar>
            <Main open={!open}>
                <DataGrid
                    sx={{marginTop:"64px"}}
                    autoHeight={true}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableColumnMenu
                    onCellClick={(e:any)=> {
                        setIsOpenModal(true)
                        setInfo("sas")
                    }}
                />
                <ManagermodalLayout isOpen={isOpenModal} onChangeState={setIsOpenModal} info={info} />
            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ArrowBackIosIcon/>
                        <Typography variant={"h6"} align={"center"}>Статистика</Typography>
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <ChartrequestsModule/>
                {/*<List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <ArrowBackIosIcon/>
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>*/}
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                вылов
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}
export default {
    routeProps: {
        path: '/managerprofile',
        exact: true,
        index: false,
        element: <ManagerProfileModule/>,
    },
    name: 'ManagerProfile',
};