export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Industry',
    url: '/industry',
    icon: 'icon-puzzle',
    children: [
    
      {
        name: 'Add Industry',
        url: '/industry/addindustry',
        icon: 'icon-puzzle'
      },
      {
        name: 'Manage Industry',
        url: '/industry/manageindustry',
        icon: 'icon-puzzle'
      },
    ]
  },

   {
     name: 'Product',
   url: '/product',
    icon: 'icon-star',
    children: [
      {
        name: 'Add Product',
        url: '/product/addproduct',
        icon: 'icon-star',
      },
      {
        name: 'Manage Product',
        url: '/product/manageproduct',
        icon: 'icon-star'
      },
      // {
      //   name: 'Edit',
      //   url:'/product/editproduct',
      //   icon: 'icon-star'
      // }
     
    ]
   },

    {
    name: 'Stocks',
    url: '/stock',
    icon: 'icon-bell',
    children: [
      {
        name: 'Add Stock',
        url: '/stock/addstock',
        icon: 'icon-bell'
      },
      {
        name: 'View Stock',
        url: '/stock/managestock',
        icon: 'icon-bell'
      },
      {
        name: 'Stock Summary',
        url: '/stock/transaction',
        icon: 'icon-bell'
      }
    ]
  },

  {
    name: 'Reports',
  url: '/buttons',
     icon: 'icon-cursor',
    children: [
      {
        name: 'Inventory Information',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
     
    ]
  },
 ];
