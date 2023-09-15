import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DevSupport ComponentPreviews={ComponentPreviews}
                                                      useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


