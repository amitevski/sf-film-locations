import { Component, Input } from '@angular/core';
import { ILocation } from '../../store/movie/movie.types';


@Component({
  selector: 'app-location-map',
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.sass']
})
export class LocationMapComponent {

  @Input()
  locations: ILocation[];

  locationArray: ILocation[];
  lat = 37.757763;
  lng = -122.447643;
  zoom: number = 12;

  constructor() { }

}
