import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Layout } from '../components/ui/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // not needed for this application
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* Note: following dev tool will be excluded from the production build by react-query */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Layout>
  );
}

export default MyApp;
