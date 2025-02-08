/* eslint-disable @typescript-eslint/no-unsafe-call */
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TodoContainer from './container/TodoContainer';
import { startMockedService } from './mocks/browser';
import './App.css';

// Create a client
const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root')!);

startMockedService();

root.render(
    <QueryClientProvider client={queryClient}>
        <TodoContainer />
    </QueryClientProvider>
);
