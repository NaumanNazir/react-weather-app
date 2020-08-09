import React from 'react';

function Weather(props) {
  const { city, country, humidity, temperature, description, error } = props
  return (
    <div>
      {city && country && <p> Location: {city}, {country} </p>}
      {temperature && <p> Temperature: {temperature} </p>}
      {humidity && <p> Humidity: {humidity} </p>}
      {description && <p> Description: {description} </p>}
      {error && <p> {error} </p>}
    </div>
  );
}

export default Weather;
