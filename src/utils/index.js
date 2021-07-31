export const timeSince = (unixTime) => {
  const seconds = (Date.now() / 1000) - unixTime

  let interval = Math.floor(seconds / (60 * 60 * 24 * 365))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'year', 'years')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24 * 30))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'month', 'months')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'day', 'days')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'hour', 'hours')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${interval} ${pluralize(interval, 'minute', 'minutes')} ago`
  }

  return 'less than a minute ago'
}

export const pluralize = (count, singular, plural) => {
  return count === 1 ? singular : plural
}
