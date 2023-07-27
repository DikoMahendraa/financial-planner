type TypeBottomNavigation = {
  label: string;
  color: string;
  route: string;
};

const bottomNavigation: Array<TypeBottomNavigation> = [
  {
    label: 'home',
    color: 'bg-forest-green',
    route: '/'
  },
  {
    label: 'income',
    color: 'bg-majorelle-blue',
    route: '/incomes'
  },
  {
    label: 'expanses',
    color: 'bg-earth-yellow',
    route: '/expanses'
  },
  {
    label: 'settings',
    color: 'bg-mid-blue-purple',
    route: '/settings'
  }
];

export { bottomNavigation };
