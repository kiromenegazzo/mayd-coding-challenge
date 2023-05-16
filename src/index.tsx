import { StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import { StyleSheetManager } from 'styled-components';

import { Styles, ThemeProvider } from 'features/ui';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <StrictMode>
    <StyleSheetManager disableVendorPrefixes={process.env.NODE_ENV === 'development'}>
      <ThemeProvider >
        <>
          <Styles/>
          <App/>
        </>
      </ThemeProvider>
    </StyleSheetManager>
  </StrictMode>,
);
