import { validCronExpression } from 'ts-cron-validator'
import { z } from 'zod'

export const CronExpression = z.string().refine(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  validCronExpression,
  'Must be a valid cron expression',
)
export type CronExpression = z.infer<typeof CronExpression>
