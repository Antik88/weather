import SearchIcon from '@mui/icons-material/Search';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import { TextField, Grid, Button, Typography} from '@mui/material';

const Card = () => {
    return (
      <Grid container direction="column" alignItems="center" justify="center">
        <TextField
          variant="outlined"
          label="location"
          fullWidth
          style={{ marginBottom: "2em" }}
          color="secondary"
          id = "city"
        />
        <Button id="search-btn" color="secondary" size='large' style={{ marginBottom: "2em" }} startIcon={<SearchIcon/>} onClick={handleSubmit}>
          Search
        </Button>
        <Grid container id="result-box" style={{display: "none", textAlign: "center", alignItems: "center"}} >
          <Grid item xs={12} md={0} className="result-kurz-class" style={{textAlign: 'center'}}>
            <Typography id="result-kurz" variant="h6" style={{marginBottom: "0.5em"}}></Typography>
          </Grid>
          <Grid item xs={2} >
            <DeviceThermostatIcon/>
          </Grid>
          <Grid item xs={5}>
            <Typography id="result" variant="subtitle1"></Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography id="result-desc" variant="subtitle2"></Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  
    function handleSubmit() {
      const APIKey = "603267a347210c31ac96d13bb9596c0a"
      const city = document.getElementById('city').value;
      const result = document.getElementById('result') 
      const kurz = document.getElementById('result-kurz')
      const desc = document.getElementById('result-desc')
  
      if(city === "")
        return;
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
  
        if (json.cod === '404') {
          console.log("ERROR!");
          return;
        }
  
        document.getElementById('result-box').style.display = ""
  
        kurz.innerHTML = json.weather[0].main 
        result.innerHTML =  json.main.temp + " °C"
        desc.innerHTML = json.weather[0].description
  
        result.style.display = "";
      });
    }
  };
  
export default Card