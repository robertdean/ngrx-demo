import { Action } from '@ngrx/store';

export interface IBrowserState {
  online: boolean;
}
export const initialState: IBrowserState = {
  online: false
};
export enum BrowserActionTypes {
  IsOnline = '[Browser] is Online',
  IsOffline = '[Browser] is Offline'
}

export class IsOnline implements Action {
  readonly type = BrowserActionTypes.IsOnline;
}

export class IsOffline implements Action {
  readonly type = BrowserActionTypes.IsOffline;
}

export type BrowserActions = IsOnline | IsOffline;

export function browserReducer(
  state = initialState,
  action: BrowserActions
): IBrowserState {
  switch (action.type) {
    case BrowserActionTypes.IsOnline: {
      return { online: true };
    }
    case BrowserActionTypes.IsOffline: {
      return { online: false };
    }
    default:
      return state;
  }
}
