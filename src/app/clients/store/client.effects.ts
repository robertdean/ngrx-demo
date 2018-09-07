import { ClientActionTypes } from './client.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { HttpClientService } from '../client.service';
import { LoadClients, FetchClients } from './client.actions';

@Injectable()
export class ClientEffects {
  constructor(
    private actions$: Actions,
    private clientService: HttpClientService
  ) {}

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
