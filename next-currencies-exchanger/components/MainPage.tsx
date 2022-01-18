import type { NextPage } from 'next';
import AllCurrenciesView from './AllCurrenciesView';

import CurrencyPair from './CurrencyPair';
import ExchangePairList from './ExchangePairList';
import SelectCurrencies from './SelectCurrencies';
import SelectedCurrenciesView from './SelectedCurrenciesView';

const MainPage: NextPage = () => {
  return (
    <div className="">
      <SelectCurrencies />
      <AllCurrenciesView />
      <SelectedCurrenciesView />
      <ExchangePairList />
    </div>
  )
}
export default MainPage;