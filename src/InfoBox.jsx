import style from "./css_modules/InfoBox.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
  const int_url =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const Hot_url =
    "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dbpa9jxwFTZnW-yyyJccEU_FqhEL3fXqMIP68kbLUFw=";
  const Cold_url =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const Rain_url =
    "https://images.unsplash.com/photo-1561471026-0bbb77535d25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFJhaW55JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
  return (
    <div>
      <Card className={style.infoBox}>
        <CardMedia
          component="img"
          image={
            info.humidity > 80 ? Rain_url : info.temp > 15 ? Hot_url : Cold_url
          }
          title="Weather Image"
          className={style.image}
        />
        <CardContent>
        <Typography 
  variant="h5" 
  component="div"
  sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontWeight: 'bold', 
    color: '#0288d1', 
    marginBottom: '16px',
    fontSize: '1.7rem !important'  // Increase font size for prominence
  }}
>
  {/* City Name */}
  {info.city}

  {/* Weather Icon with conditional rendering */}
  <span style={{ marginLeft: '10px' }}>
    {info.humidity > 80 ? <ThunderstormIcon sx={{ fontSize: '2rem', color: '#0288d1' }} /> 
      : info.temp > 15 ? <WbSunnyIcon sx={{ fontSize: '2rem', color: '#FFD700' }} /> 
      : <AcUnitIcon sx={{ fontSize: '2rem', color: '#00BFFF' }} />}
  </span>
</Typography>
          <div className={style.weatherDetails}>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Temp</span>
              <span>{info.temp}°C</span>
            </div>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Temp_Min</span>
              <span>{info.tempMin}°C</span>
            </div>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Temp_Max</span>
              <span>{info.tempMax}°C</span>
            </div>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Feels_like</span>
              <span>{info.feels_like}°C</span>
            </div>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Humidity</span>
              <span>{info.humidity}%</span>
            </div>
            <div className={style.weatherRow}>
              <span className={style.weatherLabel}>Weather</span>
              <span>{info.weather}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
