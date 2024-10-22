// assets
import { IconDashboard, IconShield, IconBiohazard, IconSettings } from "@tabler/icons-react";

// constant
const icons = { IconDashboard, IconShield, IconBiohazard, IconSettings };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const pages = {
  id: "pages",
  title: "Pages",
  type: "group",
  children: [
    {
      id: "default",
      title: "Dashboard",
      type: "item",
      url: "/",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "/hazard-and-control",
      title: "Hazard and Control",
      type: "item",
      url: "/hazard-and-control",
      icon: icons.IconDashboard,
      breadcrumbs: false,
    },
    {
      id: "/risk-prediction",
      title: "Risk Prediction",
      type: "item",
      url: "/risk-prediction",
      icon: icons.IconBiohazard,
      breadcrumbs: false,
    },
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: "/settings",
      icon: icons.IconSettings,
      breadcrumbs: false,
    },
  ],
};

export default pages;
