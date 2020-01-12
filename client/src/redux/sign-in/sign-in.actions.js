import { SingInTypes } from "./sign-in.types";

export const signInStart = () => ({
  type: SingInTypes.SING_IN_START
});

export const signInSuccess = data => ({
  type: SingInTypes.SING_IN_SUCCESS,
  payload: data
});

export const signInError = error => ({
  type: SingInTypes.SING_IN_FAILURE,
  payload: error
});
