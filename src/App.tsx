import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { HelmetProvider } from 'react-helmet-async';
import TopBar from '@core/TopBar';
import Footer from '@core/Footer';
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material/styles';
import HelmetComponent from '@core/Helmet';
import Router from '@core/Router';
import getTheme from './theme';

export default function App(): React.ReactElement {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const theme = createTheme(getTheme(mode));

  const toggleColorMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode); // Save the selected mode to localStorage
  };

  React.useEffect(() => {
    // Attempt to find preferred mode
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    if (savedMode) {
      setMode(savedMode);
    } else {
      // Find system preference instead
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <HelmetProvider>
        <HelmetComponent />

        <BrowserRouter>
          <Container>
            <TopBar mode={mode} toggleColorMode={toggleColorMode} />
            <Container
              maxWidth="lg"
              component="main"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 16,
              }}
            >
              <Router />
            </Container>
            <Footer />
          </Container>
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}
