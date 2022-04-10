import { Chart } from 'react-google-charts';
import React, { useEffect } from 'react';
import { data } from './chartrequests.module';
import Typography from '@mui/material/Typography';

const rand = () => {
    return Math.floor(Math.random()*10)
}

export const PiechartModule = () => {
    console.log(data)
    return(
        <>
            <Typography align={"center"} mt={"10px"}  variant={"h6"}>Распределение заявок за сегодняшний день (10.04)</Typography>
               <Chart
                chartType="PieChart"
                data={data[0].map((el, index) =>
                   [el, data[data.length-1][index]]
                )}
                width={"100%"}
                height={"400px"}
                />
        </>
    )
}