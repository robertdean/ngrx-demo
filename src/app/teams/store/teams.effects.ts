import { Update } from '@ngrx/entity';
import {
  LoadTeams,
  FetchTeams,
  UpdateTeamSuccess,
  TeamActionTypes,
  UpdateTeam,
  DeleteTeamSuccess,
  DeleteTeam
} from './teams.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpTeamService } from '../team.service';

import { Team } from '../team.model';

@Injectable()
export class TeamEffects {
  constructor(
    private actions$: Actions,
    private teamService: HttpTeamService
  ) {}

  @Effect()
  updateTeam$ = this.actions$
    .ofType<UpdateTeam>(TeamActionTypes.UpdateTeam)
    .pipe(
      switchMap(action =>
        this.teamService.update(action.payload).pipe(
          map(response => {
            return new UpdateTeamSuccess({
              id: response.id,
              changes: response
            });
          })
        )
      )
    );

  @Effect()
  deleteTeam$ = this.actions$
    .ofType<DeleteTeam>(TeamActionTypes.DeleteTeam)
    .pipe(
      switchMap(action => {
        console.log(action);
        return this.teamService
          .delete(+action.payload.id)
          .pipe(map(_ => new DeleteTeamSuccess(action.payload)));
      })
    );

  @Effect()
  fetchAllTeams$ = this.actions$
    .ofType<FetchTeams>(TeamActionTypes.FetchTeams)
    .pipe(
      switchMap(() => {
        return this.teamService
          .getAll()
          .pipe(map(data => new LoadTeams({ loading: false, teams: data })));
      })
    );
}
