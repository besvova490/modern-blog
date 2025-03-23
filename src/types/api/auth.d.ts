export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}
