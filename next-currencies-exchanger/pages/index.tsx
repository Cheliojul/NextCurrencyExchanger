import type { NextPage } from 'next';
import { useEffect } from 'react';

import MainPage from '../components/MainPage';
import { MockData } from '../lib/utils/mock';
import { useStore } from '../lib/store/store';

import instance from '../lib/utils/api';

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
    const newData = await instance.get(
      'http://api.exchangeratesapi.io/v1/',
      {
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
    <>
      <MainPage />
    </>
  );
};

export async function getServerSideProps() {
  const data = await instance.get(
    'http://api.exchangeratesapi.io/v1/latest',
    {
      params: {
        access_key: '9e4ed663c99e27f164fa1aa8972c66de',
      },
    }
  );
  return { props: { data: data.data.rates || MockData } };
}

export default Home;
