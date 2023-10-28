import React, {Suspense} from "react";


import {Navigate, useRoutes} from "react-router-dom";
import Linea from "@pages/Linea/index.jsx";

const Zksync = React.lazy(() => import("@pages/Zksync"));
const MainPage = React.lazy(() => import("@pages/MainPage"));
const ZkInfo = React.lazy(() => import("@pages/ZkInfo"));
const Setting = React.lazy(() => import("@pages/Setting"));
const router = [
    {
        path: '/', element: <MainPage/>,
        children: [
            {
                path: '/zksync',
                element: <Zksync/>,
            },
            {
                path: '/zk_info',
                element: <ZkInfo/>
            },
            {
                path: '/linea',
                element: <Linea/>
            },
            {
                path: '/setting',
                element: <Setting/>
            }
        ]
    },
    {path: "*", element: <Navigate to="/"/>},

];

const WrapperRouter = () => {
    let result = useRoutes(router);
    return (
        <Suspense>
            {result}
        </Suspense>
    );
};

export default WrapperRouter;
