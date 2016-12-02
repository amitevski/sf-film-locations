import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import 'rxjs/add/operator/debounceTime';


import { SearchActions } from '../../actions';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {

  searchForm = new FormGroup({
    querystring: new FormControl()
  });

  constructor(private actions: SearchActions) { }

  ngOnInit() {
    this.instantSearchListener();
  }

  /**
   * dispatch search action if user submits form
   * via pressing enter 
   */
  onSubmit(searchForm) {
    this.actions.search(searchForm.value.querystring);
  }

  /**
   * listen for changes in searchForm
   * debounce while user is typing
   * and dispatch search action with querystring
   */
  private instantSearchListener() {
    this.searchForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .map(form => this.actions.search(form.querystring))
      .subscribe();
  }

}
