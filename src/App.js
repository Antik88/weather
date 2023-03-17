import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Typography, CssBaseline} from '@mui/material';
import Card from './Card';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>      
    <CssBaseline />
    <Grid
      container
      alignItems="center"
      direction="column"
      spacing={5}
      marginTop= "5%"
    >
      <Grid item>
        <Typography variant="h5" color="secondary">
          weather report
        </Typography>
      </Grid>
      <Grid item>
        <Card />
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}