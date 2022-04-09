import React from 'react';
import DesktopLayout from '../../app.module/app.layouts/desktop.layout/desktop.layout';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const ManagerProfileModule = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Заголовок',
            flex:5,
            editable: false,
        },
        {
            field: 'tags',
            headerName: 'Категории',
            flex:2,
            editable: false,
        },
        {
            field: 'maxTime',
            headerName: 'Осталось времени',
            type: 'number',
            flex:2,
            editable: false,
        },
        {
            field: 'city',
            headerName: 'Город',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            flex:2,
        },
    ];

    const rows = [ {id:1, title:"sdhj gh jf gg  fd  ft g cf   vfc fh b fcdrfth jg fdxs dfgh j gfd", tags:"ass", maxTime:2, city: "qw"}, {id:2, tags:"ass", maxTime:2, city: "qw"}]


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
                    onCellClick={(e:any)=>console.log(e)}
                />
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