import React from 'react';

import MCardInEx from '@/components/molecules/CardInEx';

export default function PageIncomes() {
  return (
    <div className="h-screen px-5 pt-5 ">
      <p className="font-bold capitalize text-xl mb-4">Your incomes list</p>
      <hr />
      <div className="mt-4">
        {[1, 2, 3].map(key => {
          return (
            <MCardInEx
              key={key}
              label="Expense"
              name="Bayar Hutang dan Tanah"
              date="22 May 2023"
              amount="2.000.000"
              type="expense"
              variant="small"
              showLabel={false}
            />
          );
        })}
      </div>
    </div>
  );
}
