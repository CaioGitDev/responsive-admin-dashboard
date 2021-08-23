
// define seeds
const seeds_sidebarMenus = {
  "menus": [
    {
      "menu__link": "#",
      "menu__iconClass": "las la-igloo",
      "menu__title": "Dashboard",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-users",
      "menu__title": "Customers",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-clipboard-list",
      "menu__title": "Projects",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-shopping-bag",
      "menu__title": "Orders",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-receipt",
      "menu__title": "Inventory",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-user-circle",
      "menu__title": "Accounts",
    },
    {
      "menu__link": "#",
      "menu__iconClass": "las la-clipboard-list",
      "menu__title": "Tasks",
    },
  ]
}

// define html templates
const template_sidebarMenu = {'<>':'ul','html':[
  {'<>':'li','obj':function(){return(this.menus)},'html':[
    {"<>":"a","href":"${menu__link}","html":[
      {"<>":"span","class":"${menu__iconClass}","html":""},
      {"<>":"span","html":"${menu__title}"}
    ]}
  ]}
]};

// create sidebar menu links
const sidebarMenu = () => {
  const sideBar = document.querySelector("main__sidebar-menu")

  $('#main__sidebar-menu').json2html(seeds_sidebarMenus, template_sidebarMenu)
}


sidebarMenu()