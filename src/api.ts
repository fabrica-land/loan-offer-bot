/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type RegridTypeAheadResultDto = {
  /** @minLength 1 */
  category: string
  /**
   * @maxItems 2
   * @minItems 2
   */
  centroid?: number[]
  /** @minLength 1 */
  context: string
  /** @minLength 1 */
  headline: string
  /** @minLength 1 */
  owner?: string
  /** @minLength 1 */
  parcelnumb?: string | null
  /** @minLength 1 */
  path: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  score: number
  /** @minLength 1 */
  type: string
}[]

export enum NetworkName {
  BaseSepolia = 'base-sepolia',
  Ethereum = 'ethereum',
  Sepolia = 'sepolia',
}

export interface MetadataAttributeDto {
  display_type?: 'number' | 'boost_number' | 'boost_percentage' | 'date' | null
  /** @minLength 1 */
  max_value?: string | null
  /** @minLength 1 */
  trait_type: string
  value: string | number
}

export interface MetadataDto {
  /** @example "APN 074-142-22, santa-cruz, CA" */
  name: string
  /** @example "https://media3.fabrica.land/ethereum/0x534137ae9f67c534878aa6edf554dd45e1be1265/14533765190045828665/image?theme=dark" */
  image: string
  /** @example "https://media3.fabrica.land/ethereum/0x534137ae9f67c534878aa6edf554dd45e1be1265/14533765190045828665/image?theme=light" */
  image_light: string
  /** @example "Possession of this NFT grants full rights to the **real property** in the County of santa-cruz (CA) described as:\n\n---\n\n`Lots 37, 38 and 39 in Block 12, as shown and delineated on Zayante Lakes Subdivision No. 4 filed for record in Map Book 25 Page 3 Santa Cruz County Records.`\n\n---\n\nThe property has a provenance score of 0. Detailed information about the property and its score [can be found here](https://testnets.fabrica.land/property/sepolia/16266859686070254879).\n\nLegal Title of the property is held in the holding entity *Fabrica KNEU2T Trust* linked to this NFT and recorded at the County of santa-cruz, CA ([proof of title](https://ipfs.fabrica.land/ipfs/QmRb48wGf9kP93RqzLdM4SsNo9GwfPrgcj7ixeSxHZTtHi)). **By electronically signing a transaction to acquire the NFT, the buyer acknowledges and accepts all terms, duties and liabilities described in the [Operating Agreement](ipfs://QmQsWprJjxxQVQiDvPHSXcUDc5seWEfQ8XYGdKZqSoA5kv)**." */
  description: string
  /** @example "https://media3.fabrica.land/ethereum/0x534137ae9f67c534878aa6edf554dd45e1be1265/14533765190045828665/animation" */
  animation_url?: string
  /** @example "https://testnets.fabrica.land/property/sepolia/16266859686070254879" */
  external_url: string
  /** @example [{"trait_type":"Country","value":"US-RI"},{"trait_type":"Holding Entity","value":"Fabrica KNEU2T Trust"},{"trait_type":"Acres","display_type":"number","value":0.52},{"trait_type":"City","value":"Zayante"},{"trait_type":"County","value":"santa-cruz"},{"trait_type":"State","value":"CA"},{"trait_type":"Parcel","value":"074-142-22"}] */
  attributes?: MetadataAttributeDto[]
}

export enum ImageTheme {
  Dark = 'dark',
  Light = 'light',
}

export interface MetaStreetValuationDto {
  quote: {
    token: any
    /** @pattern ^[0-9]+$ */
    tokenId: string
    currency: any
    /** @pattern ^[0-9]+$ */
    price: string
    /**
     * @min 0
     * @exclusiveMin false
     */
    timestamp: number
    /**
     * @min 0
     * @exclusiveMin false
     */
    duration: number
  }
  signature?: any
}

export interface SubmitOfferNftDto {
  /**
   * @pattern /^[0-9]+$/
   * @example "12345678901234567890"
   */
  id: string
  /**
   * @pattern /^0x[a-fA-F0-9]{40}$/
   * @example "0xb52ED2Dc8EBD49877De57De3f454Fd71b75bc1fD"
   */
  address: string
}

export interface SubmitNftfiOfferWalletDto {
  /**
   * @pattern /^0x[a-fA-F0-9]{40}$/
   * @example "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
   */
  address: string
}

export interface SubmitNftfiOfferLoanTermsInterestDto {
  prorated: boolean
}

export interface SubmitNftfiOfferLoanTermsDto {
  /** @example 63072000 */
  duration: number
  /**
   * @pattern /^[0-9]+$/
   * @example "210000000000"
   */
  repayment: string
  /**
   * @pattern /^[0-9]+$/
   * @example "200000000000"
   */
  principal: string
  /**
   * @pattern /^0x[a-fA-F0-9]{40}$/
   * @example "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"
   */
  currency: string
  /**
   * @pattern /^[0-9]+$/
   * @example "1729173440"
   */
  expiry: string
  interest: SubmitNftfiOfferLoanTermsInterestDto
}

export interface SubmitNftfiOfferTermsDto {
  loan: SubmitNftfiOfferLoanTermsDto
}

export interface SubmitNftfiOfferDto {
  nft: SubmitOfferNftDto
  lender: SubmitNftfiOfferWalletDto
  borrower: SubmitNftfiOfferWalletDto
  terms: SubmitNftfiOfferTermsDto
  /**
   * @pattern /^0x[a-fA-F0-9]+$/
   * @example "0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef"
   */
  signature: string
}

export interface SignedNftfiOfferDto {
  /** @format uuid */
  id: string
  /** @minLength 1 */
  type?: string
  date?: {
    /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
    offered: string
  }
  nft: {
    /** @pattern ^[0-9]+$ */
    id: string
    address: any
    /** @minLength 1 */
    name?: string
    project?: {
      /** @minLength 1 */
      name: string
    }
  }
  lender: {
    address: any
    /** @pattern ^[0-9]+$ */
    nonce: string
  }
  borrower: {
    address: 'n/a'
  }
  terms: {
    loan: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      duration: number
      repayment: number | string
      principal: number | string
      /**
       * @min 0
       * @exclusiveMin false
       */
      apr?: number
      /**
       * @min 0
       * @exclusiveMin false
       */
      cost?: number
      currency: any
      /**
       * @min 0
       * @exclusiveMin false
       */
      expiry: number
      interest: {
        prorated: boolean
        bps: number | string | null
      }
      /**
       * @min 0
       * @exclusiveMin false
       */
      origination?: number
      /** @minLength 1 */
      unit?: string
    }
  }
  nftfi?: {
    contract: {
      /** @minLength 1 */
      name: string
    }
    fee: {
      bps: number | string
    }
  }
  signature: any
}

export interface LoanOfferDto {
  loanProvider: 'MetaStreet' | 'NFTfi'
  loanType: 'fixed' | 'prorated'
  loanContract: any
  /** @minLength 1 */
  offerId: string
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  offeredDate: string
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  offerExpiry: string
  borrower: any
  lender: any
  currency: any
  /** @minLength 1 */
  currencySymbol: string | null
  /** @pattern ^[0-9]+$ */
  principal: string
  principalScaled: string
  /** @pattern ^[0-9]+$ */
  maxRepayment: string
  maxRepaymentScaled: string
  collateralContract: any
  /** @pattern ^[0-9]+$ */
  collateralId: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  durationSeconds: number
  /** @minLength 1 */
  durationFormatted: string
  /**
   * @min 0
   * @exclusiveMin false
   */
  interestForDurationBps: number | null
  /**
   * @min 0
   * @exclusiveMin false
   */
  interestForDurationPercent: number | null
  /**
   * @min 0
   * @exclusiveMin false
   */
  aprBps: number | null
  /**
   * @min 0
   * @exclusiveMin false
   */
  aprPercent: number | null
  /**
   * @min 0
   * @exclusiveMin false
   */
  marketplaceFeeBps: number
  /**
   * @min 0
   * @exclusiveMin false
   */
  marketplaceFeePercent: number
}

export enum CollectedFieldOwner {
  New = 'new',
  Old = 'old',
}

export type StringToStringDto = Record<string, string>

export interface OffRampStepsAndFieldsDto {
  /**
   * A positive integer string: in the US, this is the county FIPS code
   * @pattern ^[0-9]+$
   */
  adminId: string
  /**
   * In the US, this is the parcel number, or APN
   * @minLength 1
   */
  propertyId: string
  /** The level of Fabrica support for this jurisdiction */
  workflowSupport: 'notConfigured' | 'supported' | 'unsupported'
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key:
      | 'collect-info-from-user'
      | 'doc-setup'
      | 'property-research'
      | 'recording-documents'
      | 'research-review'
      | 'sign-and-notarize'
    /** @minLength 1 */
    text: string
    userActions?: (
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'document'
          /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
          mimeType: string
          omitStepIfNoAssociatedDoc?: boolean
        }
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'external'
          mimeType: any
          omitStepIfNoAssociatedDoc: any
        }
    )[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key:
        | 'collect-info-from-user'
        | 'doc-setup'
        | 'property-research'
        | 'recording-documents'
        | 'research-review'
        | 'sign-and-notarize'
      /** @minLength 1 */
      text: string
      userActions?: (
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'document'
            /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
            mimeType: string
            omitStepIfNoAssociatedDoc?: boolean
          }
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'external'
            mimeType: any
            omitStepIfNoAssociatedDoc: any
          }
      )[]
    }[]
  }[]
}

export interface OffRampStartDto {
  /** @minItems 1 */
  grantees?: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use grantee array, instead; Whether the property is currently owned by an individual person or a legal entity */
  ownerType?: 'concurrent' | 'entity' | 'individual'
  /**
   * DEPRECATED: Use grantee array, instead; The legal first (given) name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFirstName?: string
  /**
   * DEPRECATED: Use grantee array, instead; The legal middle name or initial either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalMiddleName?: string | null
  /**
   * DEPRECATED: Use grantee array, instead; The legal last name (surname) either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalLastName?: string
  /**
   * DEPRECATED: Use grantee array, instead; The legal name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFullName?: string
  /** The email address of the person minting the token: should represent one of the supply recipients */
  email: string
  /**
   * DEPRECATED: Use grantee array, instead; For entity owners only, the ISO-3166-1 or ISO-3166-2 jurisdiction (`US-` followed by lower-case two-letter state, for the US) in which the owning entity is incorporated
   * @minLength 1
   */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use grantee array, instead; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use grantee array, instead; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use grantee array, instead; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  /**
   * The first line of the grantee's address for tax purposes, e.g. 100 Quaker Lane
   * @minLength 1
   */
  mailTaxAddressLine1: string
  /**
   * The second line of the grantee's address for tax purposes, e.g. Suite 420
   * @minLength 1
   */
  mailTaxAddressLine2?: string | null
  /**
   * The third line of the grantee's address for tax purposes, e.g. Beverly Hills, CA 90210
   * @minLength 1
   */
  mailTaxAddressLine3: string
  collectedFields?: Record<string, string>
}

export interface OffRampDto {
  workflow: {
    /** @format uuid */
    id: string
    workflow: 'change-of-ownership' | 'loans' | 'offramp' | 'onramp' | 'proof-of-ownership'
    network: 'base-sepolia' | 'ethereum' | 'sepolia'
    contractAddress: any
    /** @pattern ^[0-9]+$ */
    tokenId: string
    status: 'canceled' | 'complete' | 'in-progress'
  }
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  createdAt: string
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  updatedAt: string
  /** @minItems 1 */
  grantees: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use grantees array; Whether the property is currently owned by an individual person or a legal entity */
  ownerType: 'concurrent' | 'entity' | 'individual'
  /**
   * DEPRECATED: Use grantees array; The legal first (given) name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFirstName: string
  /**
   * DEPRECATED: Use grantees array; The legal middle name or initial either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalMiddleName?: string | null
  /**
   * DEPRECATED: Use grantees array; The legal last name (surname) either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalLastName: string
  /**
   * DEPRECATED: Use grantees array; The legal name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFullName: string
  /** The email address of the person minting the token: should represent one of the supply recipients */
  email: string
  /**
   * DEPRECATED: Use grantees array; For entity owners only, the ISO-3166-1 or ISO-3166-2 jurisdiction (`US-` followed by lower-case two-letter state, for the US) in which the owning entity is incorporated
   * @minLength 1
   */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use grantees array; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use grantees array; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use grantees array; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key:
      | 'collect-info-from-user'
      | 'doc-setup'
      | 'property-research'
      | 'recording-documents'
      | 'research-review'
      | 'sign-and-notarize'
    status: 'not-started' | 'in-progress' | 'complete' | 'failed'
    /** @minLength 1 */
    text: string
    userActions?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
      key: string
      /** @minLength 1 */
      prompt: string
      /** @minLength 1 */
      detail?: string
      /** @minLength 1 */
      label: string
      url?: string
      disposition: 'document' | 'external'
      /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
      mimeType?: string
    }[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key:
        | 'collect-info-from-user'
        | 'doc-setup'
        | 'property-research'
        | 'recording-documents'
        | 'research-review'
        | 'sign-and-notarize'
      status: 'not-started' | 'in-progress' | 'complete' | 'failed'
      /** @minLength 1 */
      text: string
      userActions?: {
        /**
         * @min 0
         * @exclusiveMin false
         */
        order: number
        /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
        key: string
        /** @minLength 1 */
        prompt: string
        /** @minLength 1 */
        detail?: string
        /** @minLength 1 */
        label: string
        url?: string
        disposition: 'document' | 'external'
        /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
        mimeType?: string
      }[]
    }[]
  }[]
}

export enum TokenOwnerType {
  Concurrent = 'concurrent',
  Entity = 'entity',
  Individual = 'individual',
}

export interface OnRampStepsAndFieldsDto {
  /**
   * A positive integer string: in the US, this is the county FIPS code
   * @pattern ^[0-9]+$
   */
  adminId: string
  /**
   * In the US, this is the parcel number, or APN
   * @minLength 1
   */
  propertyId: string
  /** The level of Fabrica support for this jurisdiction */
  workflowSupport: 'notConfigured' | 'supported' | 'unsupported'
  /** Whether or not this jurisdiction supports fractionalized ownership */
  fractionalOwnershipSupported: boolean
  fieldsToCollect?: string[]
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key:
      | 'celebration'
      | 'collect-info-from-user'
      | 'doc-setup'
      | 'generate-description'
      | 'generate-image'
      | 'minting'
      | 'property-research'
      | 'recording-and-minting'
      | 'recording-documents'
      | 'research-info-from-services'
      | 'research-review'
      | 'sign-and-notarize'
    /** @minLength 1 */
    text: string
    userActions?: (
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'document'
          /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
          mimeType: string
          omitStepIfNoAssociatedDoc?: boolean
        }
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'external'
          mimeType: any
          omitStepIfNoAssociatedDoc: any
        }
    )[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key:
        | 'celebration'
        | 'collect-info-from-user'
        | 'doc-setup'
        | 'generate-description'
        | 'generate-image'
        | 'minting'
        | 'property-research'
        | 'recording-and-minting'
        | 'recording-documents'
        | 'research-info-from-services'
        | 'research-review'
        | 'sign-and-notarize'
      /** @minLength 1 */
      text: string
      userActions?: (
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'document'
            /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
            mimeType: string
            omitStepIfNoAssociatedDoc?: boolean
          }
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'external'
            mimeType: any
            omitStepIfNoAssociatedDoc: any
          }
      )[]
    }[]
  }[]
}

export interface OnRampStartDto {
  /** @minItems 1 */
  grantors?: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use grantors array; Whether the property is currently owned by an individual person or a legal entity */
  ownerType?: 'concurrent' | 'entity' | 'individual'
  /**
   * DEPRECATED: Use grantors array; The legal first (given) name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @pattern \w+
   */
  legalFirstName?: string
  /**
   * DEPRECATED: Use grantors array; The legal middle name or initial either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @pattern \w+
   */
  legalMiddleName: string | null
  /**
   * DEPRECATED: Use grantors array; The legal last name (surname) either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @pattern \w+
   */
  legalLastName?: string
  /**
   * DEPRECATED: Use grantors array; The legal full name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @pattern \w+\W+\w+
   */
  legalFullName?: string
  /**
   * The email address of the person minting the token
   * @pattern ^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
   */
  email: string
  /**
   * The ISO-3166-1 (two-letter country code) or ISO-3166-2 (with 2 or 3 upercase letter or numeric subdivision code after a hyphen), of the property
   * @pattern [A-Z]{2}(-[A-Z]{2})?
   */
  country?: string
  /**
   * A positive integer string (leading zeroes allowed): in the US, this is the county FIPS code
   * @pattern ^[0-9]+$
   */
  adminId?: string
  /**
   * In the US, this is the parcel number, or APN
   * @minLength 1
   */
  propertyId?: string
  /** The latitude of the property */
  lat?: number
  /** The longitude of the property */
  lon?: number
  /** The boundary shape of the property: if left out, will be retrieved from the vendor */
  geoJson?: any
  /** The total area of the land parcel, in acres */
  acres?: number
  /** The vendor used to lookup the value; correlates with `vendorId` */
  vendor?: 'regrid' | 'regrid-path'
  /**
   * The ID of the property at the vendor specified in `vendor`
   * @minLength 1
   */
  vendorId?: string
  /**
   * The input-box content the web-site visitor accepted when searching for the property
   * @minLength 1
   */
  clientInput?: string
  /** A map of Ethereum addresses to how much supply of the token should be allocated to each address */
  recipients: Record<string, string>
  /** DEPRECATED: Use grantors array; For entity owners only, the full jursidiction name (e.g.: California) in which the owning entity is incorporated */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use grantors array; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use grantors array; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use grantors array; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  collectedFields?: Record<string, string>
  /**
   * The legal description of the property: if left out, it will be looked up in DataTree
   * @minLength 1
   * @pattern .*\S.*
   */
  legalDescription?: string
  /**
   * A marketing description for the property: if left out, we will use AI to generate one
   * @minLength 1
   * @pattern .*\S.*
   */
  userDescription?: string
  /** A list of images and videos to include in the property's configuration */
  media?: {
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source?: string
    /** @minLength 1 */
    fileName?: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    description?: string
    type?: 'animation' | 'image' | 'video'
    /** @minLength 1 */
    order?: string | null
    delete?: boolean
  }[]
  /** A list of documents to include in the property's configuration */
  documents?: {
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source?: string
    /** @minLength 1 */
    fileName?: string
    /**
     * A short description of the document
     * @minLength 1
     * @maxLength 255
     */
    description?: string | null
    /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
    type?: string
    /** @minLength 1 */
    order?: string | null
    delete?: boolean
  }[]
}

export interface OnRampDto {
  /**
   * The actual token ID that will be minted when all steps are complete
   * @pattern ^[0-9]+$
   */
  tokenId: string
  network: 'base-sepolia' | 'ethereum' | 'sepolia'
  contractAddress: any
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  createdAt: string
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  updatedAt: string
  status: 'canceled' | 'minted' | 'premint' | 'unsupportedJurisdiction'
  operatorAddress: any
  /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
  operatingAgreement: string
  /** @minLength 1 */
  legalDescription: string | null
  /** @minItems 1 */
  grantors: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use grantors array instead; Whether the property is currently owned by an individual person or a legal entity */
  ownerType: 'concurrent' | 'entity' | 'individual' | null
  /**
   * DEPRECATED: Use grantors array instead; The legal first (given) name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFirstName?: string | null
  /**
   * DEPRECATED: Use grantors array instead; The legal middle name or initial either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalMiddleName?: string | null
  /**
   * DEPRECATED: Use grantors array instead; The legal last name (surname) either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalLastName?: string | null
  /**
   * DEPRECATED: Use grantors array instead; The legal name either of the current owner of the property, or of the person authorized to transfer ownership of the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFullName?: string | null
  /** @minLength 1 */
  lat: string | null
  /** @minLength 1 */
  lon: string | null
  geoJson: any
  vendor: 'regrid' | 'regrid-path' | null
  /** @minLength 1 */
  vendorId: string | null
  /** @minLength 1 */
  userDescription: string | null
  /** The email address of the person minting the token: should represent one of the supply recipients */
  email: string
  /** @minLength 1 */
  country: string
  /**
   * A positive integer string: in the US, this is the county FIPS code
   * @pattern ^[0-9]+$
   */
  adminId: string
  /**
   * In the US, this is the parcel number, or APN
   * @minLength 1
   */
  propertyId: string
  /** A map of Ethereum addresses to how much supply of the token should be allocated to each address */
  recipients: Record<string, string>
  /**
   * DEPRECATED: Use grantors array instead; For entity owners only, the ISO-3166-1 or ISO-3166-2 jurisdiction (`US-` followed by lower-case two-letter state, for the US) in which the owning entity is incorporated
   * @minLength 1
   */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use grantors array instead; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use grantors array instead; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use grantors array instead; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  collectedFields: Record<string, string>
  media: {
    /** @minLength 1 */
    type: string
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source: string | null
    /**
     * @minLength 1
     * @maxLength 255
     */
    description: string | null
    /** @minLength 1 */
    order: string | null
    /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
    createdAt: string
    /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
    updatedAt: string
  }[]
  documents: {
    /** @minLength 1 */
    type: string
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source: string | null
    /**
     * @minLength 1
     * @maxLength 255
     */
    description: string | null
    /** @minLength 1 */
    order: string | null
    /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
    createdAt: string
    /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
    updatedAt: string
  }[]
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key:
      | 'celebration'
      | 'collect-info-from-user'
      | 'doc-setup'
      | 'generate-description'
      | 'generate-image'
      | 'minting'
      | 'property-research'
      | 'recording-and-minting'
      | 'recording-documents'
      | 'research-info-from-services'
      | 'research-review'
      | 'sign-and-notarize'
    status: 'not-started' | 'in-progress' | 'complete' | 'failed'
    /** @minLength 1 */
    text: string
    userActions?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
      key: string
      /** @minLength 1 */
      prompt: string
      /** @minLength 1 */
      detail?: string
      /** @minLength 1 */
      label: string
      url?: string
      disposition: 'document' | 'external'
      /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
      mimeType?: string
    }[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key:
        | 'celebration'
        | 'collect-info-from-user'
        | 'doc-setup'
        | 'generate-description'
        | 'generate-image'
        | 'minting'
        | 'property-research'
        | 'recording-and-minting'
        | 'recording-documents'
        | 'research-info-from-services'
        | 'research-review'
        | 'sign-and-notarize'
      status: 'not-started' | 'in-progress' | 'complete' | 'failed'
      /** @minLength 1 */
      text: string
      userActions?: {
        /**
         * @min 0
         * @exclusiveMin false
         */
        order: number
        /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
        key: string
        /** @minLength 1 */
        prompt: string
        /** @minLength 1 */
        detail?: string
        /** @minLength 1 */
        label: string
        url?: string
        disposition: 'document' | 'external'
        /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
        mimeType?: string
      }[]
    }[]
  }[]
}

export interface FabricaTokenConfigurationDto {
  proofOfTitle?: {
    document?: string
    documentId?: string
    documentName?: string
    source?: string
    grantor?: string
  }
  /** @minLength 1 */
  propertyNickName?: string
  /** @minLength 1 */
  userDescription?: string
  media?: {
    type: 'animation' | 'image' | 'video'
    source: string | string
    description?: string
    /** @minLength 1 */
    order?: string
  }[]
  documents?: {
    /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
    type: string
    source: string | string
    description?: string
    /** @minLength 1 */
    order?: string
  }[]
  vendor?: 'regrid' | 'regrid-path'
  /** @minLength 1 */
  vendorId?: string
  holdingEntityDate?: string
}

export interface PatchConfigurationDto {
  /**
   * A description of the property
   * @minLength 1
   * @maxLength 4096
   */
  userDescription?: string | null
  documents?: {
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source?: string
    /** @minLength 1 */
    fileName?: string
    /**
     * A short description of the document
     * @minLength 1
     * @maxLength 255
     */
    description?: string | null
    /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
    type?: string
    /** @minLength 1 */
    order?: string | null
    delete?: boolean
  }[]
  media?: {
    /** @pattern ^ipfs:\/\/[a-zA-Z1-9]+$ */
    source?: string
    /** @minLength 1 */
    fileName?: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    description?: string
    type?: 'animation' | 'image' | 'video'
    /** @minLength 1 */
    order?: string | null
    delete?: boolean
  }[]
  files?: {
    /** @minLength 1 */
    fieldname: string
    /** @minLength 1 */
    originalname: string
    /** @minLength 1 */
    encoding: string
    /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
    mimetype: string
    /**
     * @min 0
     * @exclusiveMin false
     */
    size: number
    stream: any
    /** @minLength 1 */
    destination: string
    /** @minLength 1 */
    filename: string
    /** @minLength 1 */
    path: string
    buffer: any
  }[]
}

export interface ProofOfOwnershipStepsAndFieldsDto {
  /**
   * A positive integer string: in the US, this is the county FIPS code
   * @pattern ^[0-9]+$
   */
  adminId: string
  /**
   * In the US, this is the parcel number, or APN
   * @minLength 1
   */
  propertyId: string
  /** The level of Fabrica support for this jurisdiction */
  workflowSupport: 'notConfigured' | 'supported' | 'unsupported'
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key: 'collect-info-from-user' | 'doc-setup' | 'property-research' | 'sign-and-notarize'
    /** @minLength 1 */
    text: string
    userActions?: (
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'document'
          /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
          mimeType: string
          omitStepIfNoAssociatedDoc?: boolean
        }
      | {
          /**
           * @min 0
           * @exclusiveMin false
           */
          order: number
          /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
          key: string
          /** @minLength 1 */
          prompt: string
          /** @minLength 1 */
          detail?: string
          /** @minLength 1 */
          label: string
          disposition: 'external'
          mimeType: any
          omitStepIfNoAssociatedDoc: any
        }
    )[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key: 'collect-info-from-user' | 'doc-setup' | 'property-research' | 'sign-and-notarize'
      /** @minLength 1 */
      text: string
      userActions?: (
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'document'
            /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
            mimeType: string
            omitStepIfNoAssociatedDoc?: boolean
          }
        | {
            /**
             * @min 0
             * @exclusiveMin false
             */
            order: number
            /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
            key: string
            /** @minLength 1 */
            prompt: string
            /** @minLength 1 */
            detail?: string
            /** @minLength 1 */
            label: string
            disposition: 'external'
            mimeType: any
            omitStepIfNoAssociatedDoc: any
          }
      )[]
    }[]
  }[]
}

export interface ProofOfOwnershipStartDto {
  /** @minItems 1 */
  owners?: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use owners array; Whether the property is currently owned by an individual person or a legal entity */
  ownerType?: 'concurrent' | 'entity' | 'individual'
  /**
   * DEPRECATED: Use owners array; The legal first (given) name either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFirstName?: string
  /**
   * DEPRECATED: Use owners array; The legal middle name or initial either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalMiddleName?: string | null
  /**
   * DEPRECATED: Use owners array; The legal last name (surname) either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalLastName?: string
  /**
   * DEPRECATED: Use owners array; The legal name either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFullName?: string
  /** The email address of the person proving their ownership */
  email: string
  /**
   * DEPRECATED: Use owners array; For entity owners only, the ISO-3166-1 or ISO-3166-2 jurisdiction (`US-` followed by lower-case two-letter state, for the US) in which the owning entity is incorporated
   * @minLength 1
   */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  collectedFields?: Record<string, string>
}

export interface ProofOfOwnershipDto {
  workflow: {
    /** @format uuid */
    id: string
    workflow: 'change-of-ownership' | 'loans' | 'offramp' | 'onramp' | 'proof-of-ownership'
    network: 'base-sepolia' | 'ethereum' | 'sepolia'
    contractAddress: any
    /** @pattern ^[0-9]+$ */
    tokenId: string
  }
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  createdAt: string
  /** @pattern ^\d{1,4}(-\d{2}(-\d{2}(T\d{2}(:\d{2}(:\d{2}(\.\d{3,6})?)?)?)?(Z|([+-]\d{2}(:\d{2})?))?)?)?$ */
  updatedAt: string
  /** @minItems 1 */
  owners: {
    signerType: 'entity'
    /**
     * @minLength 1
     * @maxLength 255
     */
    name: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    type: string
    /**
     * @minLength 1
     * @maxLength 255
     */
    jurisdiction: string
    /** @minItems 1 */
    signers: {
      signerType: 'individual'
      /** @minLength 1 */
      role?: string | null
      /** @minLength 1 */
      firstName: string
      /** @minLength 1 */
      middleName?: string | null
      /** @minLength 1 */
      lastName: string
      /** @minLength 1 */
      fullName: string
      email?: string | null
      /** @minItems 1 */
      signers?: {
        signerType: 'concurrent'
        /** @minLength 1 */
        qualifier: string
        /** @minItems 1 */
        signers: any[]
      }[]
    }[]
  }[]
  /** DEPRECATED: Use owners array; Whether the property is currently owned by an individual person or a legal entity */
  ownerType: 'concurrent' | 'entity' | 'individual'
  /**
   * DEPRECATED: Use owners array; The legal first (given) name either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFirstName: string
  /**
   * DEPRECATED: Use owners array; The legal middle name or initial either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalMiddleName?: string | null
  /**
   * DEPRECATED: Use owners array; The legal last name (surname) either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalLastName: string
  /**
   * DEPRECATED: Use owners array; The legal name either of the current owner of the property, or of the person authorized to administer the property on behalf of the entity that owns the property
   * @minLength 1
   */
  legalFullName: string
  email: string
  /**
   * DEPRECATED: Use owners array; For entity owners only, the ISO-3166-1 or ISO-3166-2 jurisdiction (`US-` followed by lower-case two-letter state, for the US) in which the owning entity is incorporated
   * @minLength 1
   */
  incorporationJurisdiction?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the type of the entity
   * @minLength 1
   */
  entityType?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the legal name of the entity
   * @minLength 1
   */
  entityName?: string | null
  /**
   * DEPRECATED: Use owners array; For entity owners only, the role within the entity of the person submitted for the `legalFullName` property
   * @minLength 1
   */
  entityRole?: string | null
  steps: {
    /**
     * @min 0
     * @exclusiveMin false
     */
    order: number
    key: 'collect-info-from-user' | 'doc-setup' | 'property-research' | 'sign-and-notarize'
    status: 'not-started' | 'in-progress' | 'complete' | 'failed'
    /** @minLength 1 */
    text: string
    userActions?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
      key: string
      /** @minLength 1 */
      prompt: string
      /** @minLength 1 */
      detail?: string
      /** @minLength 1 */
      label: string
      url?: string
      disposition: 'document' | 'external'
      /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
      mimeType?: string
    }[]
    substeps?: {
      /**
       * @min 0
       * @exclusiveMin false
       */
      order: number
      key: 'collect-info-from-user' | 'doc-setup' | 'property-research' | 'sign-and-notarize'
      status: 'not-started' | 'in-progress' | 'complete' | 'failed'
      /** @minLength 1 */
      text: string
      userActions?: {
        /**
         * @min 0
         * @exclusiveMin false
         */
        order: number
        /** @pattern ^[a-z0-9]+(-[a-z0-9]+)*$ */
        key: string
        /** @minLength 1 */
        prompt: string
        /** @minLength 1 */
        detail?: string
        /** @minLength 1 */
        label: string
        url?: string
        disposition: 'document' | 'external'
        /** @pattern ^[a-z]+\/[a-z]+(\+[a-z]+)?$ */
        mimeType?: string
      }[]
    }[]
  }[]
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://fabrica-v3-staging.onrender.com'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title fabrica-v3-api
 * @version 0.0.1
 * @baseUrl https://fabrica-v3-staging.onrender.com
 * @contact Fabrica Inc. <hello@fabrica.land> (https://www.fabrica.land/)
 *
 * Fabrica V3 Token API built in TypeScript, Nest.js, and GraphQL
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  regrid = {
    /**
     * No description
     *
     * @tags Regrid
     * @name RegridTypeAhead
     * @summary For the address/APN type-ahead lookup on Soil's on-ramp/new page
     * @request GET:/regrid/type-ahead
     */
    regridTypeAhead: (
      query: {
        /** The type-ahead query */
        query: string
      },
      params: RequestParams = {},
    ) =>
      this.request<RegridTypeAheadResultDto, any>({
        path: `/regrid/type-ahead`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Regrid
     * @name GetRegridTile
     * @request GET:/regrid/tile/{z}/{x}/{y}
     */
    getRegridTile: (z: string, x: string, y: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/regrid/tile/{z}/{x}/{y}`,
        method: 'GET',
        ...params,
      }),
  }
  networkName = {
    /**
     * @description Assembles NFT metadata for marketplaces in OpenSea metadata format
     *
     * @tags Metadata
     * @name GetMetadata
     * @summary Get Metadata
     * @request GET:/{networkName}/{contractAddress}/{tokenId}
     */
    getMetadata: (tokenId: number, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<MetadataDto, void>({
        path: `/${networkName}/${contractAddress}/${tokenId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the HTML content for a flyover animation of the property, suitable for use in an iFrame
     *
     * @tags Media
     * @name GetAnimationHtml
     * @summary Get Animation HTML
     * @request GET:/{networkName}/{contractAddress}/{tokenId}/animation
     */
    getAnimationHtml: (
      tokenId: number,
      contractAddress: string,
      networkName: NetworkName,
      query?: {
        'use-subgraph'?: boolean
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/${networkName}/${contractAddress}/${tokenId}/animation`,
        method: 'GET',
        query: query,
        ...params,
      }),

    /**
     * @description Get image content to represent the land, suitable for use in a marketplace listing
     *
     * @tags Media
     * @name GetImage
     * @summary Get Image
     * @request GET:/{networkName}/{contractAddress}/{tokenIdOrWalletAddress}/image
     */
    getImage: (
      networkName: NetworkName,
      tokenIdOrWalletAddress: string,
      contractAddress: string,
      query?: {
        /** @example "light" */
        theme?: ImageTheme
        /** @example 200 */
        height?: number
        /** @example 640 */
        width?: number
        'use-subgraph'?: boolean
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/${networkName}/${contractAddress}/${tokenIdOrWalletAddress}/image`,
        method: 'GET',
        query: query,
        ...params,
      }),
  }
  pdf417 = {
    /**
     * @description Generates a PDF 417 barcode from the `content` query-string array
     *
     * @tags Media
     * @name GeneratePdf417Barcode
     * @request GET:/pdf417
     */
    generatePdf417Barcode: (
      query: {
        /**
         * The height of the generated barcode, in pixels: default 480
         * @example "480"
         */
        height?: number
        /**
         * The width of the generated barcode, in pixels: default 640
         * @example "640"
         */
        width?: number
        /** An array of values to encode, pipe-separated, into the barcode */
        content: any[]
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/pdf417`,
        method: 'GET',
        query: query,
        ...params,
      }),
  }
  metaStreet = {
    /**
     * No description
     *
     * @tags MetaStreet
     * @name GetMetaStreetValuation
     * @request GET:/meta-street/{networkName}/{poolAddress}/{contractAddress}/{tokenId}/signed-valuation
     */
    getMetaStreetValuation: (
      tokenId: number,
      contractAddress: string,
      poolAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<MetaStreetValuationDto, any>({
        path: `/meta-street/${networkName}/${poolAddress}/${contractAddress}/${tokenId}/signed-valuation`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  }
  nftfi = {
    /**
     * No description
     *
     * @tags NFTfi
     * @name SubmitOffer
     * @request POST:/nftfi/{networkName}/{contractAddress}/{tokenId}/offer
     * @secure
     */
    submitOffer: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: SubmitNftfiOfferDto,
      params: RequestParams = {},
    ) =>
      this.request<SignedNftfiOfferDto, any>({
        path: `/nftfi/${networkName}/${contractAddress}/${tokenId}/offer`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags NFTfi
     * @name GetOffers
     * @request GET:/nftfi/{networkName}/{contractAddress}/offer
     * @secure
     */
    getOffers: (contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/nftfi/${networkName}/${contractAddress}/offer`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NFTfi
     * @name GetOffersForToken
     * @request GET:/nftfi/{networkName}/{contractAddress}/offer/token/{tokenId}
     * @secure
     */
    getOffersForToken: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/nftfi/${networkName}/${contractAddress}/offer/token/${tokenId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NFTfi
     * @name GetSignedLoanOffer
     * @request PUT:/nftfi/{networkName}/{contractAddress}/offer/token/{tokenId}/signed
     * @secure
     */
    getSignedLoanOffer: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: LoanOfferDto,
      params: RequestParams = {},
    ) =>
      this.request<SignedNftfiOfferDto, void>({
        path: `/nftfi/${networkName}/${contractAddress}/offer/token/${tokenId}/signed`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  changeOfOwnership = {
    /**
     * No description
     *
     * @tags Change-of-Ownership
     * @name ChangeOfOwnershipControllerSaveCollectedFieldsForChangeOfOwnership
     * @request POST:/change-of-ownership/{workflowId}/user-info/{owner}
     */
    changeOfOwnershipControllerSaveCollectedFieldsForChangeOfOwnership: (
      owner: CollectedFieldOwner,
      workflowId: string,
      data: StringToStringDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/change-of-ownership/${workflowId}/user-info/${owner}`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  }
  offRamp = {
    /**
     * @description Ensure the property exists in third-party system; return required steps and additional fields to collect
     *
     * @tags Off-Ramp
     * @name GetStepsAndFieldsForOffRamp
     * @summary Find property and get steps and fields for off-ramping it
     * @request GET:/off-ramp/{networkName}/{contractAddress}/{tokenId}/steps-and-fields
     * @secure
     */
    getStepsAndFieldsForOffRamp: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<OffRampStepsAndFieldsDto, void>({
        path: `/off-ramp/${networkName}/${contractAddress}/${tokenId}/steps-and-fields`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This allows for Fabrica to collect information from the user, generate documents, and the owner's signing of documents to prepare for recording the property with the county
     *
     * @tags Off-Ramp
     * @name OffRampProperty
     * @summary Off-ramp the property represented by a burned Fabrica token
     * @request POST:/off-ramp/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    offRampProperty: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: OffRampStartDto,
      params: RequestParams = {},
    ) =>
      this.request<OffRampDto, any>({
        path: `/off-ramp/${networkName}/${contractAddress}/${tokenId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the off-ramp progress for a specific burned Fabrica v3 token, by the provided tokenId
     *
     * @tags Off-Ramp
     * @name GetOffRamp
     * @summary Get an off-ramping property by its burned tokenId
     * @request GET:/off-ramp/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    getOffRamp: (tokenId: string, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<OffRampDto, any>({
        path: `/off-ramp/${networkName}/${contractAddress}/${tokenId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Off-Ramp
     * @name CancelOffRamp
     * @summary Cancel the off-ramping of a property by its tokenId
     * @request DELETE:/off-ramp/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    cancelOffRamp: (tokenId: string, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/off-ramp/${networkName}/${contractAddress}/${tokenId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description Get burned Fabrica v3 tokens that have not yet completed the off-ramp process
     *
     * @tags Off-Ramp
     * @name GetOffRamps
     * @summary Get a list of tokens in the off-ramp process
     * @request GET:/off-ramp/{networkName}/{contractAddress}
     * @secure
     */
    getOffRamps: (
      contractAddress: string,
      networkName: NetworkName,
      query: {
        /** @example "0xF2C690Df6678f4EA5C44C292194119bed71218Ad" */
        wallet: string
      },
      params: RequestParams = {},
    ) =>
      this.request<OffRampDto[], any>({
        path: `/off-ramp/${networkName}/${contractAddress}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  onRamp = {
    /**
     * @description Ensure the property exists in third-party system; return required steps and additional fields to collect
     *
     * @tags On-Ramp
     * @name GetStepsAndFieldsForOnRamp
     * @summary Find property and get steps and fields for on-ramping it
     * @request GET:/on-ramp/steps-and-fields/{country}/{admin}/{property}
     * @secure
     */
    getStepsAndFieldsForOnRamp: (
      property: string,
      admin: string,
      country: string,
      query: {
        /**
         * If left out, individual is assumed
         * @example "individual"
         */
        'owner-type'?: TokenOwnerType
        /**
         * The longitude of the property
         * @example -71.54298635199666
         */
        lon: number
        /**
         * The latitude of the property
         * @example 41.61894000135362
         */
        lat: number
      },
      params: RequestParams = {},
    ) =>
      this.request<OnRampStepsAndFieldsDto, void>({
        path: `/on-ramp/steps-and-fields/${country}/${admin}/${property}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This allows for Fabrica to perform async research and preparation required to be completed before a token can be minted
     *
     * @tags On-Ramp
     * @name OnRampProperty
     * @summary On-ramp a property to Fabrica as a premint, for later minting
     * @request POST:/on-ramp/{networkName}/{contractAddress}
     * @secure
     */
    onRampProperty: (
      contractAddress: string,
      networkName: NetworkName,
      data: OnRampStartDto,
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto, any>({
        path: `/on-ramp/${networkName}/${contractAddress}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all pre-minted Fabrica v3 tokens in the on-ramp process that will be minted to the provided `walletAddress`, filtered by an adminId (county FIPS in the US) and propertyId (APN in the US) if they are provided
     *
     * @tags On-Ramp
     * @name GetOnRamps
     * @summary Get a list of on-ramping tokens
     * @request GET:/on-ramp/{networkName}/{contractAddress}
     * @secure
     */
    getOnRamps: (
      contractAddress: string,
      networkName: NetworkName,
      query?: {
        /**
         * Filter the results for the wallet by adminId (county FIPS code in the US) of the properties; if this is provided, `property` must also be provided
         * @example "44003"
         */
        admin?: string
        /**
         * Filter the results for the wallet by propertyId (APN in the US) of the properties; if this is provided, `admin` must also be provided
         * @example "019 019 133 0000"
         */
        property?: string
        /** @example "0xF2C690Df6678f4EA5C44C292194119bed71218Ad" */
        wallet?: string
      },
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto[], any>({
        path: `/on-ramp/${networkName}/${contractAddress}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags On-Ramp
     * @name UpdateOnRampConfiguration
     * @summary Replace an on-ramping token's configuration, without file-upload support
     * @request PUT:/on-ramp/{networkName}/{contractAddress}/on-ramp/{tokenId}/configuration
     * @secure
     */
    updateOnRampConfiguration: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: FabricaTokenConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/on-ramp/${networkName}/${contractAddress}/on-ramp/${tokenId}/configuration`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags On-Ramp
     * @name PatchOnRampConfiguration
     * @summary Update or remove fields from an on-ramping token's configuration, while uploading files
     * @request PATCH:/on-ramp/{networkName}/{contractAddress}/on-ramp/{tokenId}/configuration
     * @secure
     */
    patchOnRampConfiguration: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/on-ramp/${networkName}/${contractAddress}/on-ramp/${tokenId}/configuration`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * @description Get a specific pre-minted Fabrica v3 token by the provided tokenId
     *
     * @tags On-Ramp
     * @name GetOnRamp
     * @summary Get an on-ramping premint by its tokenId
     * @request GET:/on-ramp/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    getOnRamp: (tokenId: string, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<OnRampDto, any>({
        path: `/on-ramp/${networkName}/${contractAddress}/${tokenId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags On-Ramp
     * @name CancelOnRamp
     * @summary Cancel the on-ramping of a property by its premint tokenId
     * @request DELETE:/on-ramp/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    cancelOnRamp: (tokenId: string, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/on-ramp/${networkName}/${contractAddress}/${tokenId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags On-Ramp
     * @name MarkOnRampCelebrationComplete
     * @summary Indicate that the token-minting celebration has been viewed by the end user
     * @request POST:/on-ramp/{networkName}/{contractAddress}/{tokenId}/mark-celebration-complete
     * @secure
     */
    markOnRampCelebrationComplete: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto, any>({
        path: `/on-ramp/${networkName}/${contractAddress}/${tokenId}/mark-celebration-complete`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  token = {
    /**
     * @description Ensure the property exists in third-party system; return required steps and additional fields to collect
     *
     * @tags Token
     * @name GetStepsAndFields
     * @summary DEPRECATED: PLEASE SWITCH TO THE getStepsAndFieldsForOnRamp ENDPOINT AND PASS THE DYNAMIC JWT
     * @request GET:/token/steps-and-fields/{country}/{admin}/{property}
     * @deprecated
     * @secure
     */
    getStepsAndFields: (
      property: string,
      admin: string,
      country: string,
      query: {
        /**
         * If left out, individual is assumed
         * @example "individual"
         */
        'owner-type'?: TokenOwnerType
        /**
         * The longitude of the property
         * @example -71.54298635199666
         */
        lon: number
        /**
         * The latitude of the property
         * @example 41.61894000135362
         */
        lat: number
      },
      params: RequestParams = {},
    ) =>
      this.request<OnRampStepsAndFieldsDto, void>({
        path: `/token/steps-and-fields/${country}/${admin}/${property}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This allows for Fabrica to perform async research and preparation required to be completed before a token can be minted
     *
     * @tags Token
     * @name PremintToken
     * @summary DEPRECATED: PLEASE SWITCH TO THE onRampProperty ENDPOINT
     * @request POST:/token/{networkName}/{contractAddress}/premint
     * @deprecated
     * @secure
     */
    premintToken: (
      contractAddress: string,
      networkName: NetworkName,
      data: OnRampStartDto,
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto, any>({
        path: `/token/${networkName}/${contractAddress}/premint`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get all pre-minted Fabrica v3 tokens that will be minted to the provided `walletAddress`, filtered by an adminId (county FIPS in the US) and propertyId (APN in the US) if they are provided
     *
     * @tags Token
     * @name GetPremints
     * @summary DEPRECATED: PLEASE SWITCH TO getOnRamps AND PASS THE DYNAMIC JWT
     * @request GET:/token/{networkName}/{contractAddress}/premint
     * @deprecated
     * @secure
     */
    getPremints: (
      contractAddress: string,
      networkName: NetworkName,
      query: {
        /**
         * Filter the results for the wallet by adminId (county FIPS code in the US) of the properties; if this is provided, `property` must also be provided
         * @example "44003"
         */
        admin?: string
        /**
         * Filter the results for the wallet by propertyId (APN in the US) of the properties; if this is provided, `admin` must also be provided
         * @example "019 019 133 0000"
         */
        property?: string
        /** @example "0xF2C690Df6678f4EA5C44C292194119bed71218Ad" */
        wallet: string
      },
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto[], any>({
        path: `/token/${networkName}/${contractAddress}/premint`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This allows for Fabrica to perform async research and preparation required to be completed before a token can be minted
     *
     * @tags Token
     * @name PremintTokenV2
     * @summary DEPRECATED: PLEASE SWITCH TO THE onRampProperty ENDPOINT AND PASS THE DYNAMIC JWT
     * @request POST:/token/{networkName}/{contractAddress}/premint/v2
     * @deprecated
     * @secure
     */
    premintTokenV2: (
      contractAddress: string,
      networkName: NetworkName,
      data: OnRampStartDto,
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto, any>({
        path: `/token/${networkName}/${contractAddress}/premint/v2`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token
     * @name PatchPremintConfiguration
     * @summary DEPRECATED: PLEASE SWITCH TO THE patchOnRampConfiguration ENDPOINT AND PASS THE DYNAMIC JWT
     * @request PATCH:/token/{networkName}/{contractAddress}/premint/{tokenId}/configuration
     * @deprecated
     * @secure
     */
    patchPremintConfiguration: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/token/${networkName}/${contractAddress}/premint/${tokenId}/configuration`,
        method: 'PATCH',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token
     * @name PatchTokenConfiguration
     * @summary Update or remove fields from a token's configuration
     * @request PATCH:/token/{networkName}/{contractAddress}/token/{tokenId}/configuration
     * @secure
     */
    patchTokenConfiguration: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: PatchConfigurationDto,
      params: RequestParams = {},
    ) =>
      this.request<string, any>({
        path: `/token/${networkName}/${contractAddress}/token/${tokenId}/configuration`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a specific pre-minted Fabrica v3 token that will be minted to the provided `walletAddress`, by the provided tokenId
     *
     * @tags Token
     * @name GetPremint
     * @summary DEPRECATED: PLEASE SWITCH TO getOnRamp AND PASS THE DYNAMIC JWT
     * @request GET:/token/{networkName}/{contractAddress}/premint/{tokenId}
     * @deprecated
     * @secure
     */
    getPremint: (tokenId: string, contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<OnRampDto, any>({
        path: `/token/${networkName}/${contractAddress}/premint/${tokenId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Token
     * @name MarkCelebrationComplete
     * @summary DEPRECATED: PLEASE SWITCH TO markOnRampCelebrationComplete AND PASS THE DYNAMIC JWT
     * @request POST:/token/{networkName}/{contractAddress}/premint/{tokenId}/mark-celebration-complete
     * @deprecated
     * @secure
     */
    markCelebrationComplete: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<OnRampDto, any>({
        path: `/token/${networkName}/${contractAddress}/premint/${tokenId}/mark-celebration-complete`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  proofOfOwnership = {
    /**
     * @description Ensure the property exists in third-party system; return required steps and additional fields to collect
     *
     * @tags Proof-of-Ownership
     * @name GetStepsAndFieldsForProofOfOwnership
     * @summary Find property and get steps and fields for proving ownership of it
     * @request GET:/proof-of-ownership/{networkName}/{contractAddress}/{tokenId}/steps-and-fields
     * @secure
     */
    getStepsAndFieldsForProofOfOwnership: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<ProofOfOwnershipStepsAndFieldsDto, void>({
        path: `/proof-of-ownership/${networkName}/${contractAddress}/${tokenId}/steps-and-fields`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description This allows for Fabrica to collect information from the user, generate documents, and the owner's signing of documents to prove ownership of a property
     *
     * @tags Proof-of-Ownership
     * @name ProveOwnershipOfProperty
     * @summary Prove ownership of the Fabrica token representing ownership of a property
     * @request POST:/proof-of-ownership/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    proveOwnershipOfProperty: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      data: ProofOfOwnershipStartDto,
      params: RequestParams = {},
    ) =>
      this.request<ProofOfOwnershipDto, any>({
        path: `/proof-of-ownership/${networkName}/${contractAddress}/${tokenId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get the proof-of-ownership progress for a specific Fabrica v3 token, by the provided tokenId
     *
     * @tags Proof-of-Ownership
     * @name GetProofOfOwnership
     * @summary Get the status of a proof-of-ownership workflow for a property by its tokenId
     * @request GET:/proof-of-ownership/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    getProofOfOwnership: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<ProofOfOwnershipDto, any>({
        path: `/proof-of-ownership/${networkName}/${contractAddress}/${tokenId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Proof-of-Ownership
     * @name CancelProofOfOwnership
     * @summary Cancel the in-progress proof-of-ownership workflow for a property by its tokenId
     * @request DELETE:/proof-of-ownership/{networkName}/{contractAddress}/{tokenId}
     * @secure
     */
    cancelProofOfOwnership: (
      tokenId: string,
      contractAddress: string,
      networkName: NetworkName,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/proof-of-ownership/${networkName}/${contractAddress}/${tokenId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  }
  syndication = {
    /**
     * No description
     *
     * @tags Syndication
     * @name RetsFeed
     * @summary RETS syndication feed of all Fabrica tokens and premints that are for sale
     * @request GET:/syndication/{networkName}/{contractAddress}/rets
     */
    retsFeed: (contractAddress: string, networkName: NetworkName, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/syndication/${networkName}/${contractAddress}/rets`,
        method: 'GET',
        ...params,
      }),
  }
}
