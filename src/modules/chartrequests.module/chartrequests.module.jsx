import React, { useEffect } from 'react';
import { Chart } from "react-google-charts";
import Typography from '@mui/material/Typography';

export const data = [
    /*["День", "Жалобы", "ПЗ Анализы", "Ожидание", "Качество обслуживания"],
    ["08.04", 8,4, 7,9],
    ["09.04", 6, 6,5,3],*/
    /*["Don Sharp (1978)", 6.5, 6.4],
    ["James Hawes (2008)", 4.4, 6.2],*/
];

const options = {
    vAxis: { title: "Общее количество заявок" },
    isStacked: true,
    legend: { position: "top", maxLines: 3 },
    curveType: 'function',
};

const rand = () => {
    return Math.floor(Math.random()*10)
}


export default function ChartrequestsModule() {
    useEffect(()=> {
        data.push(["День", "Жалобы", "ПЗ Анализы", "Ожидание", "Качество обслуживания"])
        data.push(["03.04", rand(), rand(), rand(), rand()])
        data.push(["04.04", rand(), rand(), rand(), rand()])
        data.push(["05.04", rand(), rand(), rand(), rand()])
        data.push(["06.04", rand(), rand(), rand(), rand()])
        data.push(["07.04", rand(), rand(), rand(), rand()])
        data.push(["08.04", rand(), rand(), rand(), rand()])
        data.push(["09.04", rand()/3, rand()/3, rand()/3, rand()/3])
        data.push(["10.04", rand()/3, rand()/3, rand()/3, rand()/3])
    },[])
    return (
        <>
            <Typography align={"center"} mt={"10px"}  variant={"h6"}>Распределение заявок по категориям</Typography>
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
