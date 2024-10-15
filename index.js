function getTimezoneOffsetMS(timeZone, date) {
    const tz = date.toLocaleString('en', { timeZone, timeStyle: 'long' }).split(' ').slice(-1)[0];
    const dateString = date.toDateString();
    const offset = Date.parse(`${dateString} UTC`) - Date.parse(`${dateString} ${tz}`);
    return offset;
}

function constructDateInTimezone(timeZone, year, month, date, hours, minutes, seconds) {
  const isoDateString = `${year}-${month}-${date} ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}Z`;
  const utcDate = new Date(isoDateString);
  const offset = getTimezoneOffsetMS(timeZone, utcDate);
  return new Date(utcDate.getTime() - offset);
}

module.exports = {
  getTimezoneOffsetMS,
  constructDateInTimezone
}