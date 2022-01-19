import React from 'react';

import { useStore } from '../lib/store/store';
import CurrencyView from './CurrencyView';

const AllCurrenciesView: React.FC = () => {
  const { allCurrencies, setSubCurrencies, subCurrencies, mainCurrency } =
    useStore((state) => state);
  const handleClickCurrency = (currency: string) => {
    setSubCurrencies([...subCurrencies, currency]);
  };
  return (
    <div className="flex flex-col w-full bg-gray-200 justify-around items-center">
      <p className="text-xl text-indigo-600 font-bold pb-2">All currencies:</p>
      <div className="flex w-full scroll-auto overflow-auto hide-scroll-bar">
        {allCurrencies
          .filter((currency) => {
            if (mainCurrency === currency || subCurrencies.includes(currency))
              return false;
            return true;
          })
          .map((currency) => (
            <div
              key={currency}
              onDoubleClick={() => handleClickCurrency(currency)}
            >
              <CurrencyView currency={currency} />
            </div>
          ))}
      </div>
      <p className="text-xl text-indigo-600 font-bold pt-2">
        Click on list and use arrows to navigate
      </p>
      <p className="text-xl text-indigo-600 font-bold pb-2">
        Double click to select
      </p>
    </div>
  );
};

export default AllCurrenciesView;
