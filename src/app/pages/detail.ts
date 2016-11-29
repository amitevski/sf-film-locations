import { Component, OnInit, OnDestroy } from '@angular/core';
import { IFilmDetails } from '../store/movie/movie.types';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { DetailActions } from '../actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  providers: [],
  templateUrl: './detail.html',
  styleUrls: ['./detail.sass']
})
export class DetailPageComponent implements OnInit, OnDestroy {

  private sub: any;

  @select(['details', 'film']) film$: Observable<IFilmDetails>;
  @select(['details', 'locations']) locations$: Observable<IFilmDetails>;
  @select(['details', 'hasError']) hasError$: Observable<IFilmDetails>;

  constructor(private actions: DetailActions, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.actions.fetch(params['slug']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
