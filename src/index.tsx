import React from 'react'
import ReactDOM from 'react-dom'

import { RouterRoot } from './app.module/app'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'


ReactDOM.render(
    <React.StrictMode>
        <RouterRoot/>
    </React.StrictMode>,
    document.getElementById('root')
)
