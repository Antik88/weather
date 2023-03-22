import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import {useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Grid, Typography, Box } from '@mui/material';
import Card from './Card';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MainApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{ height: '1000px' }}
    >
      <Grid
        container
        direction="column"
        spacing={5}
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Grid item>
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Grid>
        <Grid item>
            <Typography 
              variant='h5'
              color={theme.palette.mode === 'dark' ? "secondary" : "black"}
              align='center'
            >
              weather report
            </Typography>
        </Grid>
        <Grid item>
          <Card />
        </Grid>
      </Grid>
    </Box>
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
