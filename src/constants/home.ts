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
    route: '/expenses'
  },
  {
    label: 'pemasukan',
    color: 'bg-earth-yellow',
    route: '/incomes'
  },
  {
    label: 'pengaturan',
    color: 'bg-mid-blue-purple',
    route: '/settings'
  }
];

const listFilterExpenses = ['pulsa', 'kebutuhan', 'jajan', 'lainnya'];
const listFilterIncomes = ['gajian', 'tabungan', 'investasi', 'lainnya'];

export { bottomNavigation, listFilterExpenses, listFilterIncomes };
