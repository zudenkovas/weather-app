export const formatTemperature = (temperature?: number) => {
  if (temperature === undefined || isNaN(temperature)) {
    return 'N/A'
  }

  const roundedTemperature = Math.round(temperature)

  return `${roundedTemperature}°C`
}

export const formatWindSpeed = (speed?: number) => {
  if (speed === undefined || isNaN(speed)) {
    return 'N/A'
  }

  return `${speed} m/s`
}

export const formatHumidity = (humidity?: number) => {
  if (humidity === undefined || isNaN(humidity)) {
    return 'N/A'
  }

  return `${humidity}%`
}
