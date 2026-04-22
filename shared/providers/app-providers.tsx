import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

import { queryClient } from '@/shared/api/query-client';
import { ReactQuerySync } from '@/shared/lib/react-query/sync';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuerySync />
      {children}
    </QueryClientProvider>
  );
}
