import React from 'react';

import { useStore } from '../lib/store/store';
import CurrencyPair from './CurrencyPair';

const ExchangePairList: React.FC = () => {
  const subCurrencies = useStore((state) => state.subCurrencies);

  return (
    <div className="flex flex-col">
      {subCurrencies.map((subCurrency) => (
        <CurrencyPair subCurrency={subCurrency}/>
      ))}
    </div>
  );
};
export default ExchangePairList;
