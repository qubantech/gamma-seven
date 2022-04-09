import React, { useState } from 'react';
import DesktopLayout from '../../app.module/app.layouts/desktop.layout/desktop.layout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Chip, CircularProgress, Stack } from '@mui/material';
import ManagermodalLayout from '../../app.module/app.layouts/managermodal.layout/managermodal.layout';

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
            /*valueSetter: (params => {
                <CircularProgress variant="determinate" value={100} />
            })*/
        },
    ];

    const rows = [ {id:1, title:"sdhj gh jf gg  fd  ft g cf   vfc fh b fcdrfth jg fdxs dfgh j gfd", tags:["ass","sass", "sass"], maxTime:2, city: "qw", status: 50}, {id:2, tags:"ass", maxTime:2, city: "qw"}]


    return (
        <>
            <DesktopLayout/>
            <div style={{width:"100%"}}>
                <DataGrid
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
            </div>
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