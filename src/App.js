// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { Grid, Typography, CssBaseline} from '@mui/material';
// import Card from './Card';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Grid, Typography, Box} from '@mui/material';
import Card from './Card';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MainApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      spacing={5}
      height="100%"
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
    <Box 
      marginLeft="0"
      marginTop="5%"
    > 
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
      <Grid item>
        <Typography variant="h5" color="secondary" align='center'>
          weather report
        </Typography>
      </Grid>
      <Grid item>
        <Card />
      </Grid>
    </Grid>
  );
}

export default function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MainApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
