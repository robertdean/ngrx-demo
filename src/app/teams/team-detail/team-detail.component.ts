import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Observable } from 'rxjs';
import { Team } from '../team.model';
import { getTeamByIdWithMebers } from '../store/team.selectors';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team$: Observable<any>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.team$ = this.store.pipe(select(getTeamByIdWithMebers));
  }
}
