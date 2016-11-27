import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { SearchActions } from '../../actions';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {

  constructor(private actions: SearchActions) { }

  ngOnInit() {
  }

  onSubmit(searchForm: NgForm) {
    this.actions.search(searchForm.value.querystring);
  }

}
