export const timeSince = (unixTime) => {
  const seconds = (Date.now() / 1000) - unixTime

  let interval = Math.floor(seconds / (60 * 60 * 24 * 365))
  if (interval >= 1) {
    return `${pluralize(interval, 'years', 'year')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24 * 30))
  if (interval >= 1) {
    return `${pluralize(interval, 'months', 'month')} ago`
  }

  interval = Math.floor(seconds / (60 * 60 * 24))
  if (interval >= 1) {
    return `${pluralize(interval, 'days', 'day')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${pluralize(interval, 'hours', 'hour')} ago`
  }

  interval = Math.floor(seconds / (60 * 60))
  if (interval >= 1) {
    return `${pluralize(interval, 'minutes', 'minute')} ago`
  }

  return 'less than a minute ago'
}

export const pluralize = (count, plural, singular, zero = plural) => {
  switch (count) {
    case 0: return zero
    case 1: return `${count} ${singular}`
    default: return `${count} ${plural}`
  }
}
