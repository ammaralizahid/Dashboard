
const SideBarData = [
    {
      identifier: "Dashboard",
      title: "Dashboard",
      path: "/",
      icon: <img src={dashboard} alt="dashboard" />,
      activeIcon: <img src={activeDashboard} alt="dashboard" />,
    },
    {
      identifier: "Inventory",
      title: "Inventory",
      path: "/inventory",
      icon: <img src={inventory} alt="inventory" />,
      activeIcon: <img src={activeInventory} alt="inventory" />,
      iconClose: <FontAwesomeIcon icon={faChevronDown} />,
      iconOpen: <FontAwesomeIcon icon={faChevronUp} />,
      subNav: [
        {
          subnavigation: true,
          identifier: "AddInventory",
          title: "Add Inventory",
          path: "/inventory/add",
          icon: <img width="20px" height="20px" src={addIcon} alt="addIcon" />,
          activeIcon: (
            <img width="20px" height="20px" src={activeAddIcon} alt="addIcon" />
          ),
        },
        {
          subnavigation: true,
          identifier: "MyList",
          title: "My List",
          path: "/inventory",
          icon: <img width="20px" height="20px" src={list} alt="list" />,
          activeIcon: (
            <img width="20px" height="20px" src={activeList} alt="list" />
          ),
        },
      ],
    },
  ]

export default SideBarData