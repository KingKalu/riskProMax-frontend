import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RiskPrediction from "views/risk-prediction";
import HazardAndControl from "views/hazard-and-control";
import Settings from "views/settings";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "risk-prediction",
      element: <RiskPrediction />,
    },
    {
      path: "hazard-and-control",
      element: <HazardAndControl />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
  ],
};

export default MainRoutes;
