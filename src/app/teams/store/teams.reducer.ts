import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Team } from '../team.model';
import { TeamActions, TeamActionTypes } from './teams.actions';

export interface State extends EntityState<Team> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Team> = createEntityAdapter<Team>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false
});

export function reducer(state = initialState, action: TeamActions): State {
  switch (action.type) {
    case TeamActionTypes.AddTeam: {
      return adapter.addOne(action.payload.team, state);
    }

    case TeamActionTypes.UpsertTeam: {
      return adapter.upsertOne(action.payload.team, state);
    }

    case TeamActionTypes.AddTeams: {
      return adapter.addMany(action.payload.teams, state);
    }

    case TeamActionTypes.UpsertTeams: {
      return adapter.upsertMany(action.payload.teams, state);
    }

    case TeamActionTypes.UpdateTeamSuccess: {
      return adapter.updateOne(action.payload, state);
    }

    case TeamActionTypes.UpdateTeams: {
      return adapter.updateMany(action.payload.teams, state);
    }

    case TeamActionTypes.DeleteTeamSuccess: {
      return adapter.removeOne(action.payload.id, state);
    }

    case TeamActionTypes.DeleteTeams: {
      return adapter.removeMany(action.payload.ids, state);
    }
    case TeamActionTypes.FetchTeams: {
      return { ...state, loading: true };
    }

    case TeamActionTypes.LoadTeams: {
      return adapter.addAll(action.payload.teams, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case TeamActionTypes.ClearTeams: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
