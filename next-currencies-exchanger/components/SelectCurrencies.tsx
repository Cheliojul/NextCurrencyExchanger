import React, { ChangeEvent, useEffect } from 'react';

import { useCrossTabState } from '../lib/hooks/useCrossTabState';
import { useStore } from '../lib/store/store';

const SelectCurrencies: React.FC = () => {
  const { mainCurrency, allCurrencies, setMainCurrency } = useStore(
    (state) => state
  );
  const [main, setMain] = useCrossTabState('main', '');

  useEffect(() => {
    if (main !== '') {
      setMainCurrency(main);
    }
  }, [main]);

  const onMainCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setMainCurrency(value);
    setMain(value);
  };

  return (
    <div className="flex w-full h-16 bg-gray-200 justify-around items-center">
      <p className="text-indigo-600 text-lg font-semibold">
        Current Main Currency - {mainCurrency}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-indigo-600 text-lg font-semibold">
          Change main currency{' '}
        </p>
        <select
          name="main-currency"
          id="first-currency"
          value={mainCurrency}
          onChange={(e) => onMainCurrencyChange(e)}
          className="mx-2 px-1 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"
        >
          {allCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default SelectCurrencies;
