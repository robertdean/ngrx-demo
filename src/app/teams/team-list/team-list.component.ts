import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { FetchTeams } from '../store/teams.actions';
import { Team } from '../team.model';
import { selectAllTeams, selectTeamsLoading } from '../store/team.selectors';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams$: Observable<Team[]>;
  loading$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new FetchTeams());
    this.teams$ = this.store.pipe(select(selectAllTeams));
    this.loading$ = this.store.pipe(select(selectTeamsLoading));
  }
}
