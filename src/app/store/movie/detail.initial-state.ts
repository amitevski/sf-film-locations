import {
  IFilmDetails
} from './movie.types';

export const DetailFactory = (): IFilmDetails => {
  return {
    film: null,
    locations: null,
  };
};

export const INITIAL_STATE: IFilmDetails = DetailFactory();
