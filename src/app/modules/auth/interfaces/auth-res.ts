export interface FBAuthResponsePayload {
  kind: string;
  email: string;
  idToken: string;
  localId: string;
  expiresIn: string;
  displayName: string;
  registered: boolean;
  refreshToken: string;
}

export interface FBAuthResponseError {
  error: {
    code: number;
    errors: FBAuthError[];
    message: string;
  }
}

export interface FBAuthError {
  domain: string;
  reason: string;
  message: string;
}
