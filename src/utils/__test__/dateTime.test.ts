import { unixTimestampToDateTime } from '../dateTime'

describe('unixTimestampToDateTime', () => {
  it('should convert unix timestamp to formatted time string', () => {
    const unixTimestamp = 1628764800
    const expectedTime = '12:40:00 PM'

    const result = unixTimestampToDateTime(unixTimestamp)

    expect(result).toEqual(expectedTime)
  })
})
