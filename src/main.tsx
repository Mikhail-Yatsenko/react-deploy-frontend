import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {About} from "./pages/About.tsx";
import {Welcome} from "./pages/Welcome.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'Welcome',
                element: <Welcome />,
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
