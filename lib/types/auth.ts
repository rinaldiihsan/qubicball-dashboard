export interface LoginCredentials {
  username: string;
  password: string;
}

export interface JWTPayload {
  userId: string;
  username: string;
  iat?: number;
  exp?: number;
}

export interface AuthUser {
  userId: string;
  username: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  user?: AuthUser;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}

export interface AuthError {
  success: false;
  message: string;
  error?: string;
}
