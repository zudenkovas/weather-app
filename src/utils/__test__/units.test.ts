import { formatHumidity, formatTemperature, formatWindSpeed } from '../units'

describe('units tests', () => {
  describe('formatTemperature', () => {
    it('should return "N/A" when temperature is undefined', () => {
      const temperature = undefined
      const result = formatTemperature(temperature)
      expect(result).toBe('N/A')
    })

    it('should return "N/A" when temperature is NaN', () => {
      const temperature = NaN
      const result = formatTemperature(temperature)
      expect(result).toBe('N/A')
    })

    it('should round the temperature and append °C', () => {
      const temperature = 25.6
      const result = formatTemperature(temperature)
      expect(result).toBe('26°C')
    })
  })
  describe('formatWindSpeed', () => {
    it('should return "N/A" when speed is undefined', () => {
      expect(formatWindSpeed(undefined)).toBe('N/A')
    })

    it('should return "N/A" when speed is NaN', () => {
      expect(formatWindSpeed(NaN)).toBe('N/A')
    })

    it('should return the formatted wind speed when speed is a number', () => {
      expect(formatWindSpeed(10)).toBe('10 m/s')
      expect(formatWindSpeed(20)).toBe('20 m/s')
      expect(formatWindSpeed(0)).toBe('0 m/s')
    })
  })

  describe('formatHumidity', () => {
    it('should return "N/A" when humidity is undefined', () => {
      const humidity = undefined
      const result = formatHumidity(humidity)
      expect(result).toBe('N/A')
    })

    it('should return "N/A" when humidity is NaN', () => {
      const humidity = NaN
      const result = formatHumidity(humidity)
      expect(result).toBe('N/A')
    })

    it('should return the formatted humidity when humidity is a number', () => {
      const humidity = 80
      const result = formatHumidity(humidity)
      expect(result).toBe('80%')
    })
  })
})
