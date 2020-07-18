import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { lessonsReducer } from '@thirty/core-data'

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  lessonsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
