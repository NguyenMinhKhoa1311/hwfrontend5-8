import { createReducer, on } from '@ngrx/store';
import * as IdTokenActions from '../actions/idToken.actions';
import { AuthState } from '../states/auth.state';

export const initialState: AuthState = {
  idToken: '',
  // ... other initial state properties
};
export const authReducer = createReducer(
  initialState,
  on(IdTokenActions.getIdToken, (state, action) => {
    console.log(action.type);
    return {
      ...state,
      idToken: action.idToken,
    };
  })
);