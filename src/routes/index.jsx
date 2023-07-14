import React, {Suspense} from "react";


import {Navigate, useRoutes} from "react-router-dom";

const Zksync = React.lazy(() => import("@pages/Zksync"));
const MainPage = React.lazy(() => import("@pages/MainPage"));
const router = [
    {
        path: '/', element: <MainPage/>,
        children: [
            {
                path: '/zksync',
                element: <Zksync/>,
            },
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
