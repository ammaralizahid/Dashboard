import Dashboard from '../../assets/svg/Dashboard.svg'
import DashboardWhite from '../../assets/svg/DashboardWhite.svg'
const SideBarData = [
    {
      identifier: "Dashboard",
      title: "Dashboard",
      path: "/",
      icon: <img src={Dashboard} alt="dashboard" />,
      iconHover: <img src={DashboardWhite} alt="dashboardwhite" />,
      activeIcon: <img src={Dashboard} alt="dashboard" />,
    },
    {
      identifier: "Inventory",
      title: "Inventory",
      path: "/inventory",
      icon: <img src={Dashboard} alt="inventory" />,
      activeIcon: <img src={Dashboard} alt="inventory" />,
    
      subNav: [
        {
          subnavigation: true,
          identifier: "AddInventory",
          title: "Add Inventory",
          path: "/inventory/add",
          icon: <img width="20px" height="20px" src={Dashboard} alt="addIcon" />,
          activeIcon: (
            <img width="20px" height="20px" src={Dashboard} alt="addIcon" />
          ),
        },
        {
          subnavigation: true,
          identifier: "MyList",
          title: "My List",
          path: "/inventory",
          icon: <img width="20px" height="20px" src={Dashboard} alt="list" />,
          activeIcon: (
            <img width="20px" height="20px" src={Dashboard} alt="list" />
          ),
        },
      ],
    },
  ]

  export default SideBarData;
