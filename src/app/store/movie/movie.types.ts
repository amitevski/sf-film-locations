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

export class Movie implements IMovie {
  constructor(
    public title: string,
    public actor_1: string,
    public actor_2: string,
    public actor_3: string,
    public director: string,
    public distributor: string,
    public production_company: string,
    public release_year: string,
    public writer: string,
    public locations: string[],
    ) {}
}


export interface IGmapLocation {
  lat: number;
  lng: number;
}

export interface IGmapGeometry {
  location: IGmapLocation;
}
export interface ILocation {
  geometry: IGmapGeometry;
}
export interface IFilmDetails {
  film?: IMovie;
  locations?: ILocation[];
  hasError?: boolean;
}
