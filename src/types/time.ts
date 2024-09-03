import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'

dayjs.extend(relativeTime)

export const durationToFriendlyString = (duration: number): string =>
  dayjs.unix(duration).from(0).slice(3)
