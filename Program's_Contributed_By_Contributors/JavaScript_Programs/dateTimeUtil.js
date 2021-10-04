function subtractDaysFromDate (dateInSeconds, days) {
  const daysInSecs = days * 86_400
  return dateInSeconds - daysInSecs
}
