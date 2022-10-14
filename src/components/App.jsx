import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { List } from './List/List';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <List />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

// how can i get a data from countries in angular?
