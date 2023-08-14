import Dashboard from '../../assets/svg/Dashboard.svg'
import {DashboardPurple,InventoryIcon,
  InventoryIconHover,ArrowUp,ArrowDown} from '../../assets/svg/svg'
const SideBarData = [
    {
      identifier: "Dashboard",
      title: "Dashboard",
      path: "/dashboard",
      icon: <img src={Dashboard} alt="dashboard" />,
      iconHover:<DashboardPurple/>,
      activeIcon: <img src={Dashboard} alt="dashboard" />,
    },
    {
      identifier: "Inventory",
      title: "Inventory",
      path: "/inventory",
      icon:<InventoryIcon/> ,
      activeIcon:<InventoryIcon/>,
      iconHover:<InventoryIconHover/>,
      subNavArrowUp:<ArrowUp/>,
      subNavArrowDown:<ArrowDown/>,
      subNav: [
        {
          subnavigation: true,
          identifier: "AddInventory",
          title: "Add Inventory",
          path: "/inventory/add",
          icon: <img width="20px" height="20px" src={Dashboard} alt="addIcon" />,
          iconHover: <DashboardPurple/>,
          activeIcon: <img width="20px" height="20px" src={Dashboard} alt="addIcon" />,
        },
        {
          subnavigation: true,
          identifier: "MyList",
          title: "My List",
          path: "/inventory",
          icon: <img width="20px" height="20px" src={Dashboard} alt="addIcon" />,
          iconHover: <DashboardPurple/>,
          activeIcon: <img width="20px" height="20px" src={Dashboard} alt="addIcon" />,
        },
      ],
    },
  ]

  export default SideBarData;
