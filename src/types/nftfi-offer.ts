import { z } from 'zod'
import { PATTERN_POSITIVE_INTEGER_STRING, PositiveIntegerString } from './positive-integer-string'
import { EthereumAddress, PATTERN_ETHEREUM_ADDRESS } from './ethereum-address'
import { NonEmptyString } from './non-empty-string'
import { PATTERN_PREFIXED_HEX_STRING, PrefixedHexString } from './hex-string'

export enum NftfiLoanContract {
  FixedV1 = 'v1.loan.fixed',
  FixedV2 = 'v2.loan.fixed',
  FixedV2_1 = 'v2-1.loan.fixed',
  FixedV2_3 = 'v2-3.loan.fixed',
  FixedCollectionV2 = 'v2.loan.fixed.collection',
  FixedCollectionV2_3 = 'v2-3.loan.fixed.collection',
}

export const NftfiOffer = z.object({
  id: z.string().uuid(),
  date: z
    .object({
      offered: z.string().datetime({ offset: true }),
    })
    .optional(),
  nft: z.object({
    id: PositiveIntegerString,
    address: EthereumAddress,
    name: NonEmptyString.optional(),
    project: z.object({ name: NonEmptyString }).optional(),
  }),
  lender: z.object({
    address: EthereumAddress,
    nonce: PositiveIntegerString,
  }),
  borrower: z.object({
    address: z.union([
      z.string().regex(PATTERN_ETHEREUM_ADDRESS),
      z.literal('n/a'),
    ]),
  }),
  referrer: z.object({
    address: EthereumAddress,
  }),
  terms: z.object({
    loan: z.object({
      duration: z.number().int().nonnegative(),
      repayment: z.union([
        z.number().int().nonnegative(),
        PositiveIntegerString,
      ]),
      principal: z.union([
        z.number().int().nonnegative(),
        PositiveIntegerString,
      ]),
      apr: z.number().nonnegative().optional(),
      cost: z.number().nonnegative().optional(),
      currency: EthereumAddress,
      expiry: z.number().int().nonnegative(),
      interest: z.object({
        prorated: z.boolean(),
        bps: z.union([
          z.number().int().nonnegative(),
          z.string().regex(PATTERN_POSITIVE_INTEGER_STRING),
        ]),
      }),
      unit: NonEmptyString.optional(),
    }),
  }),
  nftfi: z.object({
    contract: z.object({
      name: z.nativeEnum(NftfiLoanContract),
    }),
    fee: z.object({
      bps: z.union([z.number().int().nonnegative(), PositiveIntegerString]),
    }),
  }),
  signature: z.string().regex(PATTERN_PREFIXED_HEX_STRING).nullable(),
})
export type NftfiOffer = z.infer<typeof NftfiOffer>

export const NftfiOffers = z.array(NftfiOffer)
export type NftfiOffers = z.infer<typeof NftfiOffers>

export const SignedNftfiOffer = NftfiOffer.extend({
  signature: PrefixedHexString,
})
export type SignedNftfiOffer = z.infer<typeof SignedNftfiOffer>
