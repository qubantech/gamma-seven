import React from 'react'
import ReactDOM from 'react-dom'

import { RouterRoot } from './app.module/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            // main: "#f4aa97",
            main: "#E4AEC5",
        },
        secondary: {
            main: "#FAD9E6",
        }
    },
});



ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterRoot/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
