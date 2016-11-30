import { Slug } from 'ng2-slugify';
const slug = new Slug('default');

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
  poster?(): string;
  slug?(): string;
}

export class Movie implements IMovie {
  DEFAULT_IMG: string = `/assets/square.png`;

  static create(m: IMovie): Movie {
    return new Movie(
      m.title,
      m.actor_1,
      m.actor_2,
      m.actor_3,
      m.director,
      m.distributor,
      m.production_company,
      m.release_year,
      m.writer,
      m.locations,
      m.imdb);
  }

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
    public imdb?: IImdb
  ) {
    this.filterLocations();
  }

  poster(withFallback = true): string {
    if (this.imdb && this.imdb.Poster && this.imdb.Poster !== 'N/A') {
      return this.imdb.Poster;
    }

    if (withFallback) {
      return this.DEFAULT_IMG;
    }
    return '';
  }

  slug() {
    return slug.slugify(this.title);
  }

  private filterLocations() {
    this.locations = this.locations.filter(x => x != null);
  }
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
