
function toTime(utc) {
  const localTime = new Date(utc)
  return(localTime.toLocaleTimeString('en', { timeStyle: 'short', hour12: true }))
}

export default toTime;