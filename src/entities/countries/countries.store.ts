import { createStore } from 'zustand';
import { createSelectors } from '@/shared/utils/with-selectors';

type CountriesStoreState = {
  countries?: string[];
  setCountries: (countries?: string[]) => void;
};
const store = createStore<CountriesStoreState>()((set) => ({
  countries: [],
  setCountries: (countries: string[] | undefined) =>
    set((state) => {
      return {
        ...state,
        countries: [
          ...(state.countries ?? []),
          ...(countries ?? []),
        ],
      };
    }),
}));
export const useCountriesStore = createSelectors(store);
