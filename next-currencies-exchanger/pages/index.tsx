import type { NextPage } from 'next';
import { useEffect } from 'react';

import MainPage from '../components/MainPage';
import { MockData } from '../lib/utils/mock';
import { useStore } from '../lib/store/store';

import { getCurrencyRate } from '../lib/services/currencyService';

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
    try {
      const newData = await getCurrencyRate(
        'http://api.exchangeratesapi.io/v1/',
        {}
      );
      setRates(newData.data.rates);
    } catch (e) {}
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
  try {
    const data = await getCurrencyRate(
      'http://api.exchangeratesapi.io/v1/',
      {}
    );

    return { props: { data: data.data.rates } };
  } catch (e) {}

  return { props: { data: MockData } };
}

export default Home;
