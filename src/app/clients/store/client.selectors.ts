import { getRouterState } from './../../reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './client.reducer';
import * as fromClient from './client.reducer';
export const selectClientState = createFeatureSelector<State>('client');

export const selectClientsLoading = createSelector(
  selectClientState,
  clientState => clientState.loading
);
export const selectAllClients = createSelector(
  selectClientState,
  fromClient.selectAll
);

export const selectActiveClients = createSelector(selectAllClients, clients =>
  clients.filter(x => x.status === 'ACTIVE')
);

export const selectActiveClientCount = createSelector(
  selectAllClients,
  clients => clients.filter(x => x.status === 'ACTIVE').length
);

export const getClientById = createSelector(
  selectClientState,
  getRouterState,
  (state, router) => {
    console.log(state.entities);
    return (
      router.state &&
      router.state['params'] &&
      state.entities[+router.state['params'].id]
    );
  }
);