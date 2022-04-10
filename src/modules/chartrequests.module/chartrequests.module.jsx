import React, { useEffect } from 'react';
import { Chart } from "react-google-charts";
import Typography from '@mui/material/Typography';
const options = {
    vAxis: { title: "Общее количество заявок" },
    isStacked: true,
    legend: { position: "top", maxLines: 3 },
    curveType: 'function',
};

const rand = () => {
    return Math.floor(Math.random()*10)
}

export const data = [
    ["День", "Жалобы общего характера", "Пункты забора анализов", "Качество обслуживания"],
    ["03.04", rand()*2, rand(), rand()],
    ["04.04", rand()*2, rand(), rand()],
    ["05.04", rand()*2, rand(), rand()],
    ["06.04", rand()*2, rand(), rand()],
    ["07.04", rand()*2, rand(), rand()],
    ["08.04", rand()*2, rand(), rand()],
    ["09.04", Math.floor(rand()), Math.floor(rand()/3), Math.floor(rand()/3)],
    ["10.04", Math.floor(rand()), Math.floor(rand()/2), Math.floor(rand()/2)]

];

export default function ChartrequestsModule() {
    return (
        <>
            <Typography align={"center"} mt={"10px"}  variant={"h6"}>Распределение заявок по категориям за последнюю неделю</Typography>
            {data &&
                <Chart
                    chartType="AreaChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                    legendToggle
                />
            }
        </>
    );
}
