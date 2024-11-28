import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";
import React from 'react';
import ReactDOM from 'react-dom/client'

Sentry.init({
    dsn: "https://f563762ca134600ca79138c73edea9a8@o4508257602633728.ingest.de.sentry.io/4508257619214416",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect,
        }),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0, 
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0, 
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
