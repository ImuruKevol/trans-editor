import App, { Container } from 'next/app';
import React from 'react';
import GlobalStyles from '../styles/global-styles';
import { ThemeProvider } from '../styles/themed-components';
import theme from '../styles/theme';

function ReactApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}/>
      </ThemeProvider>
    </Container>
  )
}

export default ReactApp
