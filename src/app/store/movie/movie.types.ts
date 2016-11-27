export interface IImdb {
  imdbRating: string;
  imdbID: string;
  Genre: string;
  Poster: string;
}

export interface IMovie {
  title: string;
  actor_1?: string;
  actor_2?: string;
  actor_3?: string;
  director?: string;
  distributor?: string;
  production_company?: string;
  release_year?: string;
  writer?: string;
  locations?: string[];
  imdb?: IImdb;
};
