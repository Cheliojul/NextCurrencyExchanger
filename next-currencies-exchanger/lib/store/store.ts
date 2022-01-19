import create from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

type RatesType = {
  mainCurrency: string;
  allCurrencies: string[];
  subCurrencies: string[];
  rates: { [x: string]: number }[] | [];
  setRates: (payload: { [x: string]: number }[]) => void;
  setMainCurrency: (payload: string) => void;
  setSubCurrencies: (payload: string[]) => void;
  addSubCurrencies: (payload: string[]) => void;
  setAllCurrencies: (payload: string[]) => void;
};

export const useStore = create<RatesType>((set) => ({
  rates: [],
  mainCurrency: 'EUR',
  subCurrencies: [],
  allCurrencies: [],
  setRates: (payload: { [x: string]: number }[]) =>
    set((state) => ({ ...state, rates: payload })),
  setMainCurrency: (payload: string) =>
    set((state) => ({ ...state, mainCurrency: payload })),
  setSubCurrencies: (payload: string[]) =>
    set((state) => ({ ...state, subCurrencies: payload })),
  addSubCurrencies: (payload: string[]) =>
    set((state) => ({
      ...state,
      subCurrencies: [...state.subCurrencies, ...payload],
    })),
  setAllCurrencies: (payload: string[]) =>
    set((state) => ({ ...state, allCurrencies: payload })),
}));

// if (process.env.NODE_ENV === 'development') {
//   mountStoreDevtool('Store', useStore);
// }
