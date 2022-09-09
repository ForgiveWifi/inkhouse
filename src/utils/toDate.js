

function toDate(utc, length) {
  const localTime = new Date(utc)
  const options = { year: "numeric", month: length, day: "numeric" }
  return(localTime.toLocaleDateString(undefined, options))
}

export default toDate;
