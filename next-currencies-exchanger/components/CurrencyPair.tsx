import React, { FocusEvent, useState } from 'react';
import { useCrossTabState } from '../lib/hooks/useCrossTabState';

import { useStore } from '../lib/store/store';

type StateTypeProps = {
  subCurrency: string;
};

const initialState = {
  'first-currency': 0,
  'second-currency': 0,
};
const CurrencyPair: React.FC<StateTypeProps> = ({ subCurrency }) => {
  const { rates, mainCurrency } = useStore((state) => state);
  const [pairState, setPairState] = useState(initialState);
  const onInputChange = (event) => {
    const value = event.target.value;
    setPairState({
      ...pairState,
      [event.target.name]: value,
    });
  };

  const onInputBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    const input = e.target;

    if (input.name.includes('first')) {
      setPairState({
        ...pairState,
        'second-currency':
          Math.round(input.value * (rates[subCurrency] || 1) * 100) / 100,
      });
    }

    if (input.name.includes('second')) {
      setPairState({
        ...pairState,
        'first-currency':
          Math.round((input.value / (rates[subCurrency] || 1)) * 100) / 100,
      });
    }
  };

  return (
    <div className="flex w-full bg-gray-200 justify-around p-10">
      <div className="flex w-2/5 items-center">
        <p className="text-indigo-600 font-bold p-2 text-xl">{mainCurrency}</p>
        <input
          type="number"
          name="first-currency"
          id="first-currency"
          value={pairState['first-currency']}
          onChange={(e) => onInputChange(e)}
          onBlur={(e) => onInputBlur(e)}
          className="text-indigo-600 text-lg font-semibold px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white border-0 shadow outline-none focus:outline-none focus:ring w-full rounded-2xl"
        />
      </div>
      <div className="flex w-2/5 items-center">
        <p className="text-indigo-600 font-bold p-2 text-xl">{subCurrency}</p>
        <input
          type="number"
          name="second-currency"
          id="second-currency"
          value={pairState['second-currency']}
          onBlur={(e) => onInputBlur(e)}
          onChange={(e) => onInputChange(e)}
          className="text-indigo-600 text-lg font-semibold px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white border-0 shadow outline-none focus:outline-none focus:ring w-full rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CurrencyPair;
