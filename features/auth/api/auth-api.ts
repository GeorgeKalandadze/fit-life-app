import { request } from '@/shared/api/http';

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

export type AuthSession = {
  user: AuthUser;
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
};

type AuthEnvelope = {
  data: AuthSession;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export async function login(payload: LoginPayload): Promise<AuthSession> {
  const response = await request<AuthEnvelope>('/auth/login', {
    method: 'POST',
    body: payload,
  });

  return response.data;
}

export async function register(payload: RegisterPayload): Promise<AuthSession> {
  const response = await request<AuthEnvelope>('/auth/register', {
    method: 'POST',
    body: payload,
  });

  return response.data;
}
