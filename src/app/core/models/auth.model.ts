export enum AuthStatus{
    Idle= 'IDLE',
    loading= 'LOADING',
    authenticated= 'AUTHENTICATED',
    error= 'ERROR',
}

export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export interface AuthRequest{
    email: string;
    password: string;
}