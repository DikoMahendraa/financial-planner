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
    label: 'alokasi',
    color: 'bg-majorelle-blue',
    route: '/calculation'
  },
  {
    label: 'pengaturan',
    color: 'bg-mid-blue-purple',
    route: '/settings'
  }
];

const listFilterExpenses = ['pulsa', 'kebutuhan', 'jajan', 'lainnya'];
const listFilterIncomes = ['gajian', 'tabungan', 'investasi', 'lainnya'];
const listCategoryExpenses = ['pulsa', 'kebutuhan', 'jajan', 'lainnya'];
const listCategoryIncomes = ['gajian', 'tabungan', 'investasi', 'lainnya'];

const SALDO_INCREASE = 'Hore, pengeluaranmu stabil, jangan lupa menabung';
const SALDO_DECREASE =
  'Wah, SALDO kamu minus nih, coba muhasabah pengeluaranmu';
const SALDO_EMPTY = 'Hm, kamu belum buat pemasukanmu nih.';

export {
  bottomNavigation,
  listFilterExpenses,
  listFilterIncomes,
  listCategoryExpenses,
  listCategoryIncomes,
  SALDO_INCREASE,
  SALDO_DECREASE,
  SALDO_EMPTY
};
