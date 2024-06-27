import { CountryType } from '@/entities/countries/types';

export const getAllCountries = async (): Promise<
  string[]
> => {
  return fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Failed to fetch countries');
    })
    .then((res) => {
      return res.map(
        (c: CountryType) => c.translations.rus.official,
      );
    });
};
