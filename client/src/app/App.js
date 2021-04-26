import React from 'react';
import AppRouter from '../routers/AppRouter';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import 'fontsource-oswald';

const themeDark = createMuiTheme({
  typography: {
    fontFamily: [
      'Oswald',
    ].join(','),
  },
});

function App() {
  return (
    <MuiThemeProvider theme={themeDark}>
      <Container maxWidth="lg">
        <AppRouter />
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
