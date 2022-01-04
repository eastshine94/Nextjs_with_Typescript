import React from 'react';
import { QueryClient, QueryClientProvider, DefaultOptions } from 'react-query';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const defaultOptions: DefaultOptions = {
  queries: {
    // TODO: is `true` better choice for webview in hybrid app?
    refetchOnWindowFocus: false,
    retry: 0,
    useErrorBoundary: true
  },
  mutations: {
    useErrorBoundary: true
  }
};

const queryClient = new QueryClient({ defaultOptions });

export function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default { ReactQueryProvider };
