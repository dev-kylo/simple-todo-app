/* eslint-disable @typescript-eslint/no-unsafe-argument */
// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handler';

export const onUnhandledRequest = (req: any) => {
    // const url = req.url.href;
    // if (url.includes('favicons') || url.includes('manifest') || url.includes('static')) return;
    console.warn('Unhandled %s request to %s', req.method, req.url.href);
};

export const startMockedService = () => {
    const worker = setupWorker(...handlers);
    worker.start({ onUnhandledRequest });
};
