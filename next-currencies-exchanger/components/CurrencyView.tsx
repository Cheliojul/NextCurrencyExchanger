import React from 'react';

type StateTypeProps = {
  currency: string;
};

const CurrencyView: React.FC<StateTypeProps> = ({
  currency,
}: StateTypeProps) => {
  return (
    <div
      key={currency}
      className="rounded-full h-10 w-20 mx-2 flex items-center bg-indigo-600 justify-center shadow-lg border-2 border-white hover:border-2 hover:border-gray-500 focus:outline-none"
    >
      <p className="text-white">{currency}</p>
    </div>
  );
};
export default CurrencyView;
