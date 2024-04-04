import { z } from 'zod'
import { NonEmptyString } from './non-empty-string'
import { HttpUrlString } from './url-strings'

export enum MetadataAttributeDisplayType {
  Number = 'number',
  BoostNumber = 'boost_number',
  BoostPercentage = 'boost_percentage',
  Date = 'date',
}

export const NftAttribute = z.object({
  display_type: z.nativeEnum(MetadataAttributeDisplayType).nullable().optional(),
  max_value: NonEmptyString.nullable().optional(),
  trait_type: NonEmptyString.optional(),
  value: z.union([z.string(), z.number()]),
})
export type NftAttribute = z.infer<typeof NftAttribute>

export const NftMetadata = z.object({
  name: NonEmptyString,
  description: NonEmptyString,
  image: NonEmptyString,
  animation_type: NonEmptyString.optional(),
  animation_url: HttpUrlString.optional(),
  external_url: HttpUrlString,
  attributes: z.array(NftAttribute).optional(),
})
export type NftMetadata = z.infer<typeof NftMetadata>
