import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/HomePage/HomePage/HomePage.tsx';
import './locales/i18n.ts';
import { theme } from './styles/themes/lightTheme.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { BrowserRouter } from 'react-router-dom';
import './firebase';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
