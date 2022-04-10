import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import ReportsList from './reportsList';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IconButton from '@mui/material/IconButton';
import { DrawerLayout } from '../../../app.module/app.layouts/drawer.layout/drawer.layout';
import CreateReport from './create-report';

const ReportsDrawerContent = () => {
    const [isReportList, setReportList] = useState(true);
    const [createReportDrawerState, setCreateReportDrawerState] = useState(false);

    return (
        <Stack alignItems={ "center" } justifyContent={ isReportList ?  "" : "center" } sx={{ minHeight: "50vh" }}>
            {
                isReportList &&
                (
                    <>
                        <Button
                            fullWidth
                            color={ "primary" }
                            variant={ "outlined" }
                            sx={{ mt: "10px", mb: "20px" }}
                            onClick={ () => setCreateReportDrawerState(true) }
                        >
                            Получить отчет
                        </Button>
                        <ReportsList />
                    </>
                )
                ||
                <IconButton color={ "primary" }
                            sx={{
                                height: "100px",
                                width: "100px",
                                mt: "10px",
                                border: "1px solid",
                                borderRadius: "5px",
                                padding: "100px",
                            }}
                            onClick={ () => setCreateReportDrawerState(true) }
                >
                    <AddCircleOutlineRoundedIcon sx={{ height: "100px", width: "100px"  }}/>
                </IconButton>
            }
            <DrawerLayout
                isOpen={ createReportDrawerState }
                onChangeState={ setCreateReportDrawerState }
                children={ <CreateReport setDrawerState={ setCreateReportDrawerState }/> }
            />
        </Stack>
    );
};

export default ReportsDrawerContent;