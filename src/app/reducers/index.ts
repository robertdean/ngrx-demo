import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromClient from '../clients/store/client.reducer';
import * as fromTeams from '../teams/store/teams.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { IBrowserState, browserReducer } from './browser';

export interface AppState {
  router: RouterReducerState;
  client: fromClient.State;
  browser: IBrowserState;
  teams: fromTeams.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  client: fromClient.reducer,
  browser: browserReducer,
  teams: fromTeams.reducer
};

export const getRouterState = createFeatureSelector<RouterReducerState>(
  'router'
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
