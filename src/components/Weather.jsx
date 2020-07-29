import React from 'react';

import { Segment } from 'semantic-ui-react';

export const Weather = ({info}) => {
  /* const tempType = (t) => {
    t = t.toString().replace('.', '').slice(0, 3);
    return `${t.slice(0, 2)}.${t.slice(2)}°C`
  } */
  function ktc(kelvin) { // convert KelvinToCelsius
    if (kelvin < (0)) {
      return `0°C`;
    } else {
      return `${(kelvin-273.15).toString().slice(0, 4)}°C`;
    }
  }
  const fullInfo = {
    1: `${info['weather'][0]['main']}, ${info['weather'][0]['description']}`,
    2: `Temperature: ${ktc(info['main']['temp'])}`,
    3: `Feels like: ${ktc(info['main']['feels_like'])}`,
    4: `Wind: ${info['wind']['speed']}m/sec`
  }
  return (
    <Segment.Group stacked>
      <Segment>{fullInfo['1']}</Segment>
      <Segment>{fullInfo['2']}</Segment>
      <Segment>{fullInfo['3']}</Segment>
      <Segment>{fullInfo['4']}</Segment>
    </Segment.Group>
  )
}