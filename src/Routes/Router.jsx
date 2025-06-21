import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayout from '../Layout/RootLayout';

const Router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout
    }
])
export default Router;