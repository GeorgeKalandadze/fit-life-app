import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login, register, type AuthSession, type LoginPayload, type RegisterPayload } from '@/features/auth/api/auth-api';

export const authKeys = {
  session: ['auth', 'session'] as const,
};

function setSession(queryClient: ReturnType<typeof useQueryClient>, session: AuthSession) {
  queryClient.setQueryData(authKeys.session, session);
}

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => login(payload),
    onSuccess: (session) => setSession(queryClient, session),
  });
}

export function useRegisterMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => register(payload),
    onSuccess: (session) => setSession(queryClient, session),
  });
}
