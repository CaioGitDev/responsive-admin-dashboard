
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
const seeds_mainCardSimples = {
  "cards": [
    {
      "card__title": "33",
      "card__subtitle": "Customers",
      "card_iconClass": "las la-users"
    },
    {
      "card__title": "79",
      "card__subtitle": "Projects",
      "card_iconClass": "las la-clipboard"
    },
    {
      "card__title": "221",
      "card__subtitle": "Orders",
      "card_iconClass": "las la-shopping-bag"
    },
    {
      "card__title": "15,000.00 €",
      "card__subtitle": "Income",
      "card_iconClass": "las la-wallet"
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

const template_mainCardSimple = {"<>":"div","class":"cards","html":[
  {"<>":"div","class":"card__single",'obj': function() {return (this.cards)}, "html":[
      {"<>":"div","html":[
          {"<>":"h1","html":"${card__title}"},
          {"<>":"span","html":"${card__subtitle}"}
        ]},
      {"<>":"div","html":[
          {"<>":"span","class":"${card_iconClass}","html":""}
        ]}
    ]}
]}

// create sidebar menu links
const createSidebarMenu = () => {
  $('#main__sidebar-menu').json2html(seeds_sidebarMenus, template_sidebarMenu)
}

//create main card simple
const createMainCardSimple = () => {
  $('#main__cards').json2html(seeds_mainCardSimples, template_mainCardSimple)
}

createSidebarMenu()
createMainCardSimple()