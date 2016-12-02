import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMovie, IAppState, ILocation } from '../store';
import { NgRedux } from 'ng2-redux';
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

  film$: Observable<IMovie>;
  locations$: Observable<ILocation[]>;
  hasError$: Observable<boolean>;

  constructor(private actions: DetailActions, private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) {
    this.film$ = this.ngRedux.select(state => state.details.film);
    this.locations$ = this.ngRedux.select(state => state.details.locations);
    this.hasError$ = this.ngRedux.select(state => state.details.hasError);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.actions.fetch(params['slug']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
