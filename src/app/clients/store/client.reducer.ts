import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Client } from './client.model';
import { ClientActions, ClientActionTypes } from './client.actions';

export interface State extends EntityState<Client> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();

export const initialState: State = adapter.getInitialState({
  loading: false,
  loaded: false
});

export function reducer(state = initialState, action: ClientActions): State {
  switch (action.type) {
    case ClientActionTypes.AddClient: {
      return adapter.addOne(action.payload.client, state);
    }

    case ClientActionTypes.UpsertClient: {
      return adapter.upsertOne(action.payload.client, state);
    }

    case ClientActionTypes.AddClients: {
      return adapter.addMany(action.payload.clients, state);
    }

    case ClientActionTypes.UpsertClients: {
      return adapter.upsertMany(action.payload.clients, state);
    }

    case ClientActionTypes.UpdateClientSuccess: {
      return adapter.updateOne(action.payload, state);
    }

    case ClientActionTypes.UpdateClients: {
      return adapter.updateMany(action.payload.clients, state);
    }

    case ClientActionTypes.DeleteClient: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ClientActionTypes.DeleteClients: {
      return adapter.removeMany(action.payload.ids, state);
    }
    case ClientActionTypes.FetchClients: {
      return { ...state, loading: true };
    }

    case ClientActionTypes.LoadClients: {
      return adapter.addAll(action.payload.clients, {
        ...state,
        loading: false,
        loaded: true
      });
    }

    case ClientActionTypes.ClearClients: {
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
