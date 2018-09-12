import { getRouterState } from '../../reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './teams.reducer';

import * as fromTeams from './teams.reducer';
import { selectActiveClients } from '../../clients/store/client.selectors';
export const selectTeamState = createFeatureSelector<State>('teams');
export const selectClientState = createFeatureSelector<State>('client');

export const selectTeamsLoading = createSelector(
  selectTeamState,
  teamState => teamState.loading
);
export const selectAllTeams = createSelector(
  selectTeamState,
  fromTeams.selectAll
);

export const selectActiveTeams = createSelector(selectAllTeams, teams =>
  teams.filter(x => x.status === 'ACTIVE')
);

export const selectPendingTeams = createSelector(selectAllTeams, teams =>
  teams.filter(x => x.status === 'PENDING')
);

export const selectActiveTeamCount = createSelector(
  selectAllTeams,
  teams => teams.filter(x => x.status === 'ACTIVE').length
);

export const getTeamById = createSelector(
  selectTeamState,
  getRouterState,
  (state, router) => {
    return (
      router.state &&
      router.state['params'] &&
      state.entities[+router.state['params'].id]
    );
  }
);

export const getTeamByIdWithMebers = createSelector(
  getTeamById,
  selectActiveClients,
  (team, clients) => {
    console.log(clients);
    const members = clients.slice(0, 10);
    return {
      team,
      members
    };
  }
);
