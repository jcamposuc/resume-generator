import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreatorTemplate1 } from './components/CreatorTemplate1';
import { PreviewPage } from './components/PreviewPage';
import { DownloadPage } from './components/DownloadPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, {
    path: "/fill-resume",
    element: <CreatorTemplate1 />,
  }, {
    path: "/preview",
    element: <PreviewPage />,
  }, {
    path: "/download",
    element: <DownloadPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
