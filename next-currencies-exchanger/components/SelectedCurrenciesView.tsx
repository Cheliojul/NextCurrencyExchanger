import React from 'react';

import { useStore } from '../lib/utils/Hooks/useStoreHook';
import CurrencyView from './CurrencyView';

const SelectedCurrenciesView: React.FC = () => {
  const { subCurrencies } = useStore((state) => state);

  return (
    <div className="flex w-full bg-gray-200 items-center">
      <p className="text-indigo-600 text-lg font-semibold mx-10">
        Selected currencies:
      </p>
      <div className="flex">
        {subCurrencies.map((currency) => (
          <div>
            <CurrencyView currency={currency} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCurrenciesView;
