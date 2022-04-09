import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import ReportsList from './reportsList';

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import IconButton from '@mui/material/IconButton';

const ReportsDrawerContent = () => {
    const [isReportList, setReportList] = useState(true);


    return (
        <Stack alignItems={ "center" } justifyContent={ isReportList ?  "" : "center" } sx={{ minHeight: "50vh" }}>
            {
                isReportList &&
                (
                    <>
                        <Button fullWidth variant={ "outlined" } sx={{ mt: "10px", mb: "20px" }}>Создать отчет</Button>
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
                            }}>
                    <AddCircleOutlineRoundedIcon sx={{ height: "100px", width: "100px"  }}/>
                </IconButton>
            }
        </Stack>
    );
};

export default ReportsDrawerContent;