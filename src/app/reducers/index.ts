import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromClient from '../clients/store/client.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
  client: fromClient.State;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  client: fromClient.reducer
};

export const getRouterState = createFeatureSelector<RouterReducerState>(
  'router'
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
