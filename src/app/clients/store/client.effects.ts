import { Update } from '@ngrx/entity';
import {
  LoadClients,
  FetchClients,
  UpdateClientSuccess,
  ClientActionTypes,
  UpdateClient,
  DeleteClientSuccess,
  DeleteClient
} from './client.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { HttpClientService } from '../client.service';

import { Client } from './client.model';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientService: HttpClientService
  ) {}

  @Effect()
  updateClient$ = this.actions$
    .ofType<UpdateClient>(ClientActionTypes.UpdateClient)
    .pipe(
      switchMap(action =>
        this.clientService.update(action.payload).pipe(
          map(response => {
            return new UpdateClientSuccess({
              id: response.id,
              changes: response
            });
          })
        )
      )
    );

  @Effect()
  deleteClient$ = this.actions$
    .ofType<DeleteClient>(ClientActionTypes.DeleteClient)
    .pipe(
      switchMap(action => {
        console.log(action);
        return this.clientService
          .delete(+action.payload.id)
          .pipe(map(_ => new DeleteClientSuccess(action.payload)));
      })
    );

  @Effect()
  fetchAllClients$ = this.actions$
    .ofType<FetchClients>(ClientActionTypes.FetchClients)
    .pipe(
      switchMap(() => {
        return this.clientService
          .getAll()
          .pipe(
            map(data => new LoadClients({ loading: false, clients: data }))
          );
      })
    );
}
