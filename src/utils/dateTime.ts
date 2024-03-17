export const unixTimestampToDateTime = (unixTimestamp: number): string => {
  return new Date(unixTimestamp * 1000).toLocaleTimeString()
}
