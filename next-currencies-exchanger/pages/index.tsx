import type { NextPage } from 'next';
import { useEffect } from 'react';

import MainPage from '../components/MainPage';
import { MockData } from '../lib/utils/mock';
import { useStore } from '../lib/utils/Hooks/useStoreHook';

import instance from './../lib/utils/axios';

const Home: NextPage = ({ data }) => {
  const { mainCurrency, setRates, setAllCurrencies } = useStore(
    (state) => state
  );

  useEffect(() => {
    let currenciesList = Object.keys(data);
    setRates(data);
    setAllCurrencies(currenciesList);
  }, [data]);

  const fetchNewRates = async () => {
    const newData = await instance().get(
      'http://api.exchangeratesapi.io/v1/',
      {
        method: 'get',
        params: {
          access_key: '9e4ed663c99e27f164fa1aa8972c66de',
        },
      }
    );
    setRates(newData.data.rates);
  };

  useEffect(() => {
    fetchNewRates();
  }, [mainCurrency]);

  return (
    <div>
      <MainPage />
    </div>
  );
};

export async function getServerSideProps() {
  const data = await instance().get(
    'http://api.exchangeratesapi.io/v1/latest',
    {
      method: 'get',
      params: {
        access_key: '9e4ed663c99e27f164fa1aa8972c66de',
      },
    }
  );
  return { props: { data: data.data.rates || MockData } };
}

export default Home;
