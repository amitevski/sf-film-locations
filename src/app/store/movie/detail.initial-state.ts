import { IFilmDetails } from './movie.types';

export const DetailFactory = (): IFilmDetails => {
  return {
    film: null,
    locations: null,
    hasError: false
  };
};

export const INITIAL_STATE: IFilmDetails = DetailFactory();
