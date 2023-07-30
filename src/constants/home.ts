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
    label: 'pengeluaran',
    color: 'bg-majorelle-blue',
    route: '/incomes'
  },
  {
    label: 'pemasukan',
    color: 'bg-earth-yellow',
    route: '/expenses'
  },
  {
    label: 'pengaturan',
    color: 'bg-mid-blue-purple',
    route: '/settings'
  }
];

export { bottomNavigation };
