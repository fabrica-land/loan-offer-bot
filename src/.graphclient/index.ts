// @ts-nocheck
import AutoPaginationTransform from '@graphprotocol/client-auto-pagination'
import MeshCache from '@graphql-mesh/cache-localforage'
import { path as pathModule } from '@graphql-mesh/cross-helpers'
import GraphqlHandler from '@graphql-mesh/graphql'
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http'
import StitchingMerger from '@graphql-mesh/merger-stitching'
import type { GetMeshOptions } from '@graphql-mesh/runtime'
import { MeshResolvedSource } from '@graphql-mesh/runtime'
import {
  ExecuteMeshFn,
  getMesh,
  MeshContext as BaseMeshContext,
  MeshInstance,
  SubscribeMeshFn,
} from '@graphql-mesh/runtime'
import { FsStoreStorageAdapter, MeshStore } from '@graphql-mesh/store'
import PrefixTransform from '@graphql-mesh/transform-prefix'
import type { YamlConfig } from '@graphql-mesh/types'
import { MeshPlugin, MeshTransform } from '@graphql-mesh/types'
import { ImportFn } from '@graphql-mesh/types'
import { PubSub } from '@graphql-mesh/utils'
import { DefaultLogger } from '@graphql-mesh/utils'
import { fetch as fetchFn } from '@whatwg-node/fetch'
import {
  FieldNode,
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
  SelectionSetNode,
} from 'graphql'

import * as importedModule$1 from './sources/fabrica-ethereum/introspectionSchema'
import type { FabricaEthereumTypes } from './sources/fabrica-ethereum/types'
import * as importedModule$0 from './sources/fabrica-sepolia/introspectionSchema'
import type { FabricaSepoliaTypes } from './sources/fabrica-sepolia/types'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigDecimal: { input: any; output: any }
  BigInt: { input: any; output: any }
  Bytes: { input: any; output: any }
  Int8: { input: any; output: any }
  Timestamp: { input: any; output: any }
}

export type Query = {
  ethereum_token?: Maybe<Token>
  ethereum_tokens: Array<Token>
  ethereum_balance?: Maybe<Balance>
  ethereum_balances: Array<Balance>
  ethereum_user?: Maybe<User>
  ethereum_users: Array<User>
  ethereum_transfer?: Maybe<Transfer>
  ethereum_transfers: Array<Transfer>
  ethereum_configurationUpdate?: Maybe<ConfigurationUpdate>
  ethereum_configurationUpdates: Array<ConfigurationUpdate>
  ethereum_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>
  ethereum_operatingAgreementUpdates: Array<OperatingAgreementUpdate>
  ethereum_validatorUpdate?: Maybe<ValidatorUpdate>
  ethereum_validatorUpdates: Array<ValidatorUpdate>
  ethereum_traitMetadata?: Maybe<TraitMetadata>
  ethereum_traitMetadata_collection: Array<TraitMetadata>
  ethereum_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>
  ethereum_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>
  ethereum_traitDefinition?: Maybe<TraitDefinition>
  ethereum_traitDefinitions: Array<TraitDefinition>
  ethereum_traitStringUpdate?: Maybe<TraitStringUpdate>
  ethereum_traitStringUpdates: Array<TraitStringUpdate>
  ethereum_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>
  ethereum_traitDecimalUpdates: Array<TraitDecimalUpdate>
  ethereum_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>
  ethereum_traitBooleanUpdates: Array<TraitBooleanUpdate>
  ethereum_traitString?: Maybe<TraitString>
  ethereum_traitStrings: Array<TraitString>
  ethereum_traitDecimal?: Maybe<TraitDecimal>
  ethereum_traitDecimals: Array<TraitDecimal>
  ethereum_traitBoolean?: Maybe<TraitBoolean>
  ethereum_traitBooleans: Array<TraitBoolean>
  ethereum_loan?: Maybe<Loan>
  ethereum_loans: Array<Loan>
  ethereum_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>
  ethereum_loanLiquidatedEvents: Array<LoanLiquidatedEvent>
  ethereum_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>
  ethereum_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>
  ethereum_loanRepaidEvent?: Maybe<LoanRepaidEvent>
  ethereum_loanRepaidEvents: Array<LoanRepaidEvent>
  ethereum_loanStartedEvent?: Maybe<LoanStartedEvent>
  ethereum_loanStartedEvents: Array<LoanStartedEvent>
  ethereum_obligationReceipt?: Maybe<ObligationReceipt>
  ethereum_obligationReceipts: Array<ObligationReceipt>
  ethereum_promissoryNote?: Maybe<PromissoryNote>
  ethereum_promissoryNotes: Array<PromissoryNote>
  /** Access to subgraph metadata */
  ethereum__meta?: Maybe<_Meta_>
  sepolia_token?: Maybe<Token>
  sepolia_tokens: Array<Token>
  sepolia_balance?: Maybe<Balance>
  sepolia_balances: Array<Balance>
  sepolia_user?: Maybe<User>
  sepolia_users: Array<User>
  sepolia_transfer?: Maybe<Transfer>
  sepolia_transfers: Array<Transfer>
  sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>
  sepolia_configurationUpdates: Array<ConfigurationUpdate>
  sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>
  sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>
  sepolia_validatorUpdate?: Maybe<ValidatorUpdate>
  sepolia_validatorUpdates: Array<ValidatorUpdate>
  sepolia_traitMetadata?: Maybe<TraitMetadata>
  sepolia_traitMetadata_collection: Array<TraitMetadata>
  sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>
  sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>
  sepolia_traitDefinition?: Maybe<TraitDefinition>
  sepolia_traitDefinitions: Array<TraitDefinition>
  sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>
  sepolia_traitStringUpdates: Array<TraitStringUpdate>
  sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>
  sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>
  sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>
  sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>
  sepolia_traitString?: Maybe<TraitString>
  sepolia_traitStrings: Array<TraitString>
  sepolia_traitDecimal?: Maybe<TraitDecimal>
  sepolia_traitDecimals: Array<TraitDecimal>
  sepolia_traitBoolean?: Maybe<TraitBoolean>
  sepolia_traitBooleans: Array<TraitBoolean>
  sepolia_loan?: Maybe<Loan>
  sepolia_loans: Array<Loan>
  sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>
  sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>
  sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>
  sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>
  sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>
  sepolia_loanRepaidEvents: Array<LoanRepaidEvent>
  sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>
  sepolia_loanStartedEvents: Array<LoanStartedEvent>
  sepolia_obligationReceipt?: Maybe<ObligationReceipt>
  sepolia_obligationReceipts: Array<ObligationReceipt>
  sepolia_promissoryNote?: Maybe<PromissoryNote>
  sepolia_promissoryNotes: Array<PromissoryNote>
  /** Access to subgraph metadata */
  sepolia__meta?: Maybe<_Meta_>
}

export type Queryethereum_tokenArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_balanceArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_userArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_transferArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Transfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_configurationUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ConfigurationUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OperatingAgreementUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_validatorUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ValidatorUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitMetadataArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadata_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadata_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadataUriUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDefinitionArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDefinition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDefinition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitStringUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitStringUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimalUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBooleanUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitStringArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitString_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitString_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDecimalArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimal_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimal_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitBooleanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBoolean_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBoolean_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanLiquidatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRenegotiatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanRepaidEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRepaidEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanStartedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanStartedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_obligationReceiptArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ObligationReceipt_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ObligationReceipt_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_promissoryNoteArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Queryethereum__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Querysepolia_tokenArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_balanceArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_userArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_transferArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Transfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ConfigurationUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OperatingAgreementUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ValidatorUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitMetadataArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadata_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadata_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadataUriUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDefinition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDefinition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitStringUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimalUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBooleanUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitStringArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitString_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitString_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDecimalArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimal_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimal_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitBooleanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBoolean_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBoolean_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanLiquidatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRenegotiatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRepaidEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanStartedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ObligationReceipt_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ObligationReceipt_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Querysepolia__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Subscription = {
  ethereum_token?: Maybe<Token>
  ethereum_tokens: Array<Token>
  ethereum_balance?: Maybe<Balance>
  ethereum_balances: Array<Balance>
  ethereum_user?: Maybe<User>
  ethereum_users: Array<User>
  ethereum_transfer?: Maybe<Transfer>
  ethereum_transfers: Array<Transfer>
  ethereum_configurationUpdate?: Maybe<ConfigurationUpdate>
  ethereum_configurationUpdates: Array<ConfigurationUpdate>
  ethereum_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>
  ethereum_operatingAgreementUpdates: Array<OperatingAgreementUpdate>
  ethereum_validatorUpdate?: Maybe<ValidatorUpdate>
  ethereum_validatorUpdates: Array<ValidatorUpdate>
  ethereum_traitMetadata?: Maybe<TraitMetadata>
  ethereum_traitMetadata_collection: Array<TraitMetadata>
  ethereum_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>
  ethereum_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>
  ethereum_traitDefinition?: Maybe<TraitDefinition>
  ethereum_traitDefinitions: Array<TraitDefinition>
  ethereum_traitStringUpdate?: Maybe<TraitStringUpdate>
  ethereum_traitStringUpdates: Array<TraitStringUpdate>
  ethereum_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>
  ethereum_traitDecimalUpdates: Array<TraitDecimalUpdate>
  ethereum_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>
  ethereum_traitBooleanUpdates: Array<TraitBooleanUpdate>
  ethereum_traitString?: Maybe<TraitString>
  ethereum_traitStrings: Array<TraitString>
  ethereum_traitDecimal?: Maybe<TraitDecimal>
  ethereum_traitDecimals: Array<TraitDecimal>
  ethereum_traitBoolean?: Maybe<TraitBoolean>
  ethereum_traitBooleans: Array<TraitBoolean>
  ethereum_loan?: Maybe<Loan>
  ethereum_loans: Array<Loan>
  ethereum_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>
  ethereum_loanLiquidatedEvents: Array<LoanLiquidatedEvent>
  ethereum_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>
  ethereum_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>
  ethereum_loanRepaidEvent?: Maybe<LoanRepaidEvent>
  ethereum_loanRepaidEvents: Array<LoanRepaidEvent>
  ethereum_loanStartedEvent?: Maybe<LoanStartedEvent>
  ethereum_loanStartedEvents: Array<LoanStartedEvent>
  ethereum_obligationReceipt?: Maybe<ObligationReceipt>
  ethereum_obligationReceipts: Array<ObligationReceipt>
  ethereum_promissoryNote?: Maybe<PromissoryNote>
  ethereum_promissoryNotes: Array<PromissoryNote>
  /** Access to subgraph metadata */
  ethereum__meta?: Maybe<_Meta_>
  sepolia_token?: Maybe<Token>
  sepolia_tokens: Array<Token>
  sepolia_balance?: Maybe<Balance>
  sepolia_balances: Array<Balance>
  sepolia_user?: Maybe<User>
  sepolia_users: Array<User>
  sepolia_transfer?: Maybe<Transfer>
  sepolia_transfers: Array<Transfer>
  sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>
  sepolia_configurationUpdates: Array<ConfigurationUpdate>
  sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>
  sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>
  sepolia_validatorUpdate?: Maybe<ValidatorUpdate>
  sepolia_validatorUpdates: Array<ValidatorUpdate>
  sepolia_traitMetadata?: Maybe<TraitMetadata>
  sepolia_traitMetadata_collection: Array<TraitMetadata>
  sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>
  sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>
  sepolia_traitDefinition?: Maybe<TraitDefinition>
  sepolia_traitDefinitions: Array<TraitDefinition>
  sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>
  sepolia_traitStringUpdates: Array<TraitStringUpdate>
  sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>
  sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>
  sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>
  sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>
  sepolia_traitString?: Maybe<TraitString>
  sepolia_traitStrings: Array<TraitString>
  sepolia_traitDecimal?: Maybe<TraitDecimal>
  sepolia_traitDecimals: Array<TraitDecimal>
  sepolia_traitBoolean?: Maybe<TraitBoolean>
  sepolia_traitBooleans: Array<TraitBoolean>
  sepolia_loan?: Maybe<Loan>
  sepolia_loans: Array<Loan>
  sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>
  sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>
  sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>
  sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>
  sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>
  sepolia_loanRepaidEvents: Array<LoanRepaidEvent>
  sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>
  sepolia_loanStartedEvents: Array<LoanStartedEvent>
  sepolia_obligationReceipt?: Maybe<ObligationReceipt>
  sepolia_obligationReceipts: Array<ObligationReceipt>
  sepolia_promissoryNote?: Maybe<PromissoryNote>
  sepolia_promissoryNotes: Array<PromissoryNote>
  /** Access to subgraph metadata */
  sepolia__meta?: Maybe<_Meta_>
}

export type Subscriptionethereum_tokenArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_balanceArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_userArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_transferArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Transfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_configurationUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ConfigurationUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OperatingAgreementUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_validatorUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ValidatorUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitMetadataArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadata_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadata_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadataUriUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDefinitionArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDefinition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDefinition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitStringUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitStringUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimalUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBooleanUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitStringArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitString_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitString_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDecimalArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimal_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimal_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitBooleanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBoolean_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBoolean_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanLiquidatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRenegotiatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanRepaidEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRepaidEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanStartedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanStartedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_obligationReceiptArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ObligationReceipt_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ObligationReceipt_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_promissoryNoteArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionethereum__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Subscriptionsepolia_tokenArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_balanceArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_userArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_transferArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Transfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ConfigurationUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<OperatingAgreementUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ValidatorUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitMetadataArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadata_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadata_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitMetadataUriUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDefinition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDefinition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitStringUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimalUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBooleanUpdate_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitStringArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitString_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitString_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDecimalArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimal_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimal_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitBooleanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBoolean_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBoolean_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanLiquidatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRenegotiatedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanRepaidEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LoanStartedEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ObligationReceipt_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ObligationReceipt_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscriptionsepolia__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Aggregation_interval = 'hour' | 'day'

export type Balance = {
  id: Scalars['Bytes']['output']
  token: Token
  owner: User
  holder: User
  balance: Scalars['BigInt']['output']
}

export type Balance_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  owner?: InputMaybe<Scalars['String']['input']>
  owner_not?: InputMaybe<Scalars['String']['input']>
  owner_gt?: InputMaybe<Scalars['String']['input']>
  owner_lt?: InputMaybe<Scalars['String']['input']>
  owner_gte?: InputMaybe<Scalars['String']['input']>
  owner_lte?: InputMaybe<Scalars['String']['input']>
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  owner_contains?: InputMaybe<Scalars['String']['input']>
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>
  owner_not_contains?: InputMaybe<Scalars['String']['input']>
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  owner_starts_with?: InputMaybe<Scalars['String']['input']>
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  owner_ends_with?: InputMaybe<Scalars['String']['input']>
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  owner_?: InputMaybe<User_filter>
  holder?: InputMaybe<Scalars['String']['input']>
  holder_not?: InputMaybe<Scalars['String']['input']>
  holder_gt?: InputMaybe<Scalars['String']['input']>
  holder_lt?: InputMaybe<Scalars['String']['input']>
  holder_gte?: InputMaybe<Scalars['String']['input']>
  holder_lte?: InputMaybe<Scalars['String']['input']>
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_contains?: InputMaybe<Scalars['String']['input']>
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_contains?: InputMaybe<Scalars['String']['input']>
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_?: InputMaybe<User_filter>
  balance?: InputMaybe<Scalars['BigInt']['input']>
  balance_not?: InputMaybe<Scalars['BigInt']['input']>
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Balance_filter>>>
  or?: InputMaybe<Array<InputMaybe<Balance_filter>>>
}

export type Balance_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'owner'
  | 'owner__id'
  | 'owner__address'
  | 'owner__tokenCount'
  | 'holder'
  | 'holder__id'
  | 'holder__address'
  | 'holder__tokenCount'
  | 'balance'

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input']
}

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  number_gte?: InputMaybe<Scalars['Int']['input']>
}

export type ConfigurationUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  newValue: Scalars['String']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type ConfigurationUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  newValue?: InputMaybe<Scalars['String']['input']>
  newValue_not?: InputMaybe<Scalars['String']['input']>
  newValue_gt?: InputMaybe<Scalars['String']['input']>
  newValue_lt?: InputMaybe<Scalars['String']['input']>
  newValue_gte?: InputMaybe<Scalars['String']['input']>
  newValue_lte?: InputMaybe<Scalars['String']['input']>
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_contains?: InputMaybe<Scalars['String']['input']>
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ConfigurationUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<ConfigurationUpdate_filter>>>
}

export type ConfigurationUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type Loan = {
  id: Scalars['Bytes']['output']
  loanContract: Scalars['Bytes']['output']
  loanId: Scalars['BigInt']['output']
  loanStatus: LoanStatus
  borrower: User
  lender?: Maybe<User>
  loanPrincipalAmount: Scalars['BigInt']['output']
  maximumRepaymentAmount: Scalars['BigInt']['output']
  nftCollateralId: Scalars['BigInt']['output']
  loanERC20Denomination: Scalars['Bytes']['output']
  loanDuration: Scalars['BigInt']['output']
  loanInterestRateForDurationInBasisPoints: Scalars['Int']['output']
  loanAdminFeeInBasisPoints: Scalars['Int']['output']
  nftCollateralWrapper: Scalars['Bytes']['output']
  loanStartTime: Scalars['BigInt']['output']
  nftCollateralContract: Scalars['Bytes']['output']
  revenueSharePartner: Scalars['Bytes']['output']
  revenueShareInBasisPoints: Scalars['Int']['output']
  referralFeeInBasisPoints: Scalars['Int']['output']
  loanMaturityDate?: Maybe<Scalars['BigInt']['output']>
  loanLiquidationDate?: Maybe<Scalars['BigInt']['output']>
  totalRenegotiationFeesPaid: Scalars['BigInt']['output']
  totalRenegotiationAdminFeesPaid: Scalars['BigInt']['output']
  amountPaidToLender?: Maybe<Scalars['BigInt']['output']>
  adminFeePaid?: Maybe<Scalars['BigInt']['output']>
  revenueSharePaid?: Maybe<Scalars['BigInt']['output']>
  obligationReceipt?: Maybe<ObligationReceipt>
  promissoryNotes?: Maybe<Array<PromissoryNote>>
}

export type LoanpromissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
}

export type LoanLiquidatedEvent = {
  id: Scalars['Bytes']['output']
  loan: Loan
  borrower: User
  lender: User
  loanPrincipalAmount: Scalars['BigInt']['output']
  nftCollateralId: Scalars['BigInt']['output']
  loanMaturityDate: Scalars['BigInt']['output']
  loanLiquidationDate: Scalars['BigInt']['output']
  nftCollateralContract: Scalars['Bytes']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type LoanLiquidatedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  borrower?: InputMaybe<Scalars['String']['input']>
  borrower_not?: InputMaybe<Scalars['String']['input']>
  borrower_gt?: InputMaybe<Scalars['String']['input']>
  borrower_lt?: InputMaybe<Scalars['String']['input']>
  borrower_gte?: InputMaybe<Scalars['String']['input']>
  borrower_lte?: InputMaybe<Scalars['String']['input']>
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_contains?: InputMaybe<Scalars['String']['input']>
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_?: InputMaybe<User_filter>
  lender?: InputMaybe<Scalars['String']['input']>
  lender_not?: InputMaybe<Scalars['String']['input']>
  lender_gt?: InputMaybe<Scalars['String']['input']>
  lender_lt?: InputMaybe<Scalars['String']['input']>
  lender_gte?: InputMaybe<Scalars['String']['input']>
  lender_lte?: InputMaybe<Scalars['String']['input']>
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_contains?: InputMaybe<Scalars['String']['input']>
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_contains?: InputMaybe<Scalars['String']['input']>
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_?: InputMaybe<User_filter>
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanMaturityDate?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_not?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanMaturityDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanLiquidationDate?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_not?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanLiquidationDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<LoanLiquidatedEvent_filter>>>
  or?: InputMaybe<Array<InputMaybe<LoanLiquidatedEvent_filter>>>
}

export type LoanLiquidatedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'borrower'
  | 'borrower__id'
  | 'borrower__address'
  | 'borrower__tokenCount'
  | 'lender'
  | 'lender__id'
  | 'lender__address'
  | 'lender__tokenCount'
  | 'loanPrincipalAmount'
  | 'nftCollateralId'
  | 'loanMaturityDate'
  | 'loanLiquidationDate'
  | 'nftCollateralContract'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type LoanRenegotiatedEvent = {
  id: Scalars['Bytes']['output']
  loan: Loan
  borrower: User
  lender: User
  newLoanDuration: Scalars['BigInt']['output']
  newMaximumRepaymentAmount: Scalars['BigInt']['output']
  renegotiationFee: Scalars['BigInt']['output']
  renegotiationAdminFee: Scalars['BigInt']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type LoanRenegotiatedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  borrower?: InputMaybe<Scalars['String']['input']>
  borrower_not?: InputMaybe<Scalars['String']['input']>
  borrower_gt?: InputMaybe<Scalars['String']['input']>
  borrower_lt?: InputMaybe<Scalars['String']['input']>
  borrower_gte?: InputMaybe<Scalars['String']['input']>
  borrower_lte?: InputMaybe<Scalars['String']['input']>
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_contains?: InputMaybe<Scalars['String']['input']>
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_?: InputMaybe<User_filter>
  lender?: InputMaybe<Scalars['String']['input']>
  lender_not?: InputMaybe<Scalars['String']['input']>
  lender_gt?: InputMaybe<Scalars['String']['input']>
  lender_lt?: InputMaybe<Scalars['String']['input']>
  lender_gte?: InputMaybe<Scalars['String']['input']>
  lender_lte?: InputMaybe<Scalars['String']['input']>
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_contains?: InputMaybe<Scalars['String']['input']>
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_contains?: InputMaybe<Scalars['String']['input']>
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_?: InputMaybe<User_filter>
  newLoanDuration?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_not?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>
  newLoanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  newLoanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  newMaximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  newMaximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  newMaximumRepaymentAmount_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  renegotiationFee?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_not?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_gt?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_lt?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_gte?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_lte?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  renegotiationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  renegotiationAdminFee?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_not?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_gt?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_lt?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_gte?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_lte?: InputMaybe<Scalars['BigInt']['input']>
  renegotiationAdminFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  renegotiationAdminFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<LoanRenegotiatedEvent_filter>>>
  or?: InputMaybe<Array<InputMaybe<LoanRenegotiatedEvent_filter>>>
}

export type LoanRenegotiatedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'borrower'
  | 'borrower__id'
  | 'borrower__address'
  | 'borrower__tokenCount'
  | 'lender'
  | 'lender__id'
  | 'lender__address'
  | 'lender__tokenCount'
  | 'newLoanDuration'
  | 'newMaximumRepaymentAmount'
  | 'renegotiationFee'
  | 'renegotiationAdminFee'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type LoanRepaidEvent = {
  id: Scalars['Bytes']['output']
  loan: Loan
  borrower: User
  lender: User
  loanPrincipalAmount: Scalars['BigInt']['output']
  nftCollateralId: Scalars['BigInt']['output']
  amountPaidToLender: Scalars['BigInt']['output']
  adminFee: Scalars['BigInt']['output']
  revenueShare: Scalars['BigInt']['output']
  revenueSharePartner: Scalars['Bytes']['output']
  nftCollateralContract: Scalars['Bytes']['output']
  loanERC20Denomination: Scalars['Bytes']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type LoanRepaidEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  borrower?: InputMaybe<Scalars['String']['input']>
  borrower_not?: InputMaybe<Scalars['String']['input']>
  borrower_gt?: InputMaybe<Scalars['String']['input']>
  borrower_lt?: InputMaybe<Scalars['String']['input']>
  borrower_gte?: InputMaybe<Scalars['String']['input']>
  borrower_lte?: InputMaybe<Scalars['String']['input']>
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_contains?: InputMaybe<Scalars['String']['input']>
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_?: InputMaybe<User_filter>
  lender?: InputMaybe<Scalars['String']['input']>
  lender_not?: InputMaybe<Scalars['String']['input']>
  lender_gt?: InputMaybe<Scalars['String']['input']>
  lender_lt?: InputMaybe<Scalars['String']['input']>
  lender_gte?: InputMaybe<Scalars['String']['input']>
  lender_lte?: InputMaybe<Scalars['String']['input']>
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_contains?: InputMaybe<Scalars['String']['input']>
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_contains?: InputMaybe<Scalars['String']['input']>
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_?: InputMaybe<User_filter>
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountPaidToLender?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_not?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_gt?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_lt?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_gte?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_lte?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountPaidToLender_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  adminFee?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_not?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_gt?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_lt?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_gte?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_lte?: InputMaybe<Scalars['BigInt']['input']>
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  revenueShare?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_not?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_gt?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_lt?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_gte?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_lte?: InputMaybe<Scalars['BigInt']['input']>
  revenueShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  revenueShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<LoanRepaidEvent_filter>>>
  or?: InputMaybe<Array<InputMaybe<LoanRepaidEvent_filter>>>
}

export type LoanRepaidEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'borrower'
  | 'borrower__id'
  | 'borrower__address'
  | 'borrower__tokenCount'
  | 'lender'
  | 'lender__id'
  | 'lender__address'
  | 'lender__tokenCount'
  | 'loanPrincipalAmount'
  | 'nftCollateralId'
  | 'amountPaidToLender'
  | 'adminFee'
  | 'revenueShare'
  | 'revenueSharePartner'
  | 'nftCollateralContract'
  | 'loanERC20Denomination'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type LoanStartedEvent = {
  id: Scalars['Bytes']['output']
  loan: Loan
  borrower: User
  lender: User
  loanPrincipalAmount: Scalars['BigInt']['output']
  maximumRepaymentAmount: Scalars['BigInt']['output']
  nftCollateralId: Scalars['BigInt']['output']
  loanERC20Denomination: Scalars['Bytes']['output']
  loanDuration: Scalars['BigInt']['output']
  loanInterestRateForDurationInBasisPoints: Scalars['Int']['output']
  loanAdminFeeInBasisPoints: Scalars['Int']['output']
  nftCollateralWrapper: Scalars['Bytes']['output']
  loanStartTime: Scalars['BigInt']['output']
  nftCollateralContract: Scalars['Bytes']['output']
  revenueSharePartner: Scalars['Bytes']['output']
  revenueShareInBasisPoints: Scalars['Int']['output']
  referralFeeInBasisPoints: Scalars['Int']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type LoanStartedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  borrower?: InputMaybe<Scalars['String']['input']>
  borrower_not?: InputMaybe<Scalars['String']['input']>
  borrower_gt?: InputMaybe<Scalars['String']['input']>
  borrower_lt?: InputMaybe<Scalars['String']['input']>
  borrower_gte?: InputMaybe<Scalars['String']['input']>
  borrower_lte?: InputMaybe<Scalars['String']['input']>
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_contains?: InputMaybe<Scalars['String']['input']>
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_?: InputMaybe<User_filter>
  lender?: InputMaybe<Scalars['String']['input']>
  lender_not?: InputMaybe<Scalars['String']['input']>
  lender_gt?: InputMaybe<Scalars['String']['input']>
  lender_lt?: InputMaybe<Scalars['String']['input']>
  lender_gte?: InputMaybe<Scalars['String']['input']>
  lender_lte?: InputMaybe<Scalars['String']['input']>
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_contains?: InputMaybe<Scalars['String']['input']>
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_contains?: InputMaybe<Scalars['String']['input']>
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_?: InputMaybe<User_filter>
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  maximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  maximumRepaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanDuration?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_not?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanInterestRateForDurationInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  loanInterestRateForDurationInBasisPoints_not?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_gt?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_lt?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_gte?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_lte?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_in?: InputMaybe<
    Array<Scalars['Int']['input']>
  >
  loanInterestRateForDurationInBasisPoints_not_in?: InputMaybe<
    Array<Scalars['Int']['input']>
  >
  loanAdminFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  loanAdminFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nftCollateralWrapper?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralWrapper_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralWrapper_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanStartTime?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_not?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueShareInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  revenueShareInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  referralFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  referralFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<LoanStartedEvent_filter>>>
  or?: InputMaybe<Array<InputMaybe<LoanStartedEvent_filter>>>
}

export type LoanStartedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'borrower'
  | 'borrower__id'
  | 'borrower__address'
  | 'borrower__tokenCount'
  | 'lender'
  | 'lender__id'
  | 'lender__address'
  | 'lender__tokenCount'
  | 'loanPrincipalAmount'
  | 'maximumRepaymentAmount'
  | 'nftCollateralId'
  | 'loanERC20Denomination'
  | 'loanDuration'
  | 'loanInterestRateForDurationInBasisPoints'
  | 'loanAdminFeeInBasisPoints'
  | 'nftCollateralWrapper'
  | 'loanStartTime'
  | 'nftCollateralContract'
  | 'revenueSharePartner'
  | 'revenueShareInBasisPoints'
  | 'referralFeeInBasisPoints'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type LoanStatus = 'ActiveOrDefault' | 'Liquidated' | 'Repaid'

export type Loan_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanContract?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_not?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanId?: InputMaybe<Scalars['BigInt']['input']>
  loanId_not?: InputMaybe<Scalars['BigInt']['input']>
  loanId_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanId_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanId_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanId_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanStatus?: InputMaybe<LoanStatus>
  loanStatus_not?: InputMaybe<LoanStatus>
  loanStatus_in?: InputMaybe<Array<LoanStatus>>
  loanStatus_not_in?: InputMaybe<Array<LoanStatus>>
  borrower?: InputMaybe<Scalars['String']['input']>
  borrower_not?: InputMaybe<Scalars['String']['input']>
  borrower_gt?: InputMaybe<Scalars['String']['input']>
  borrower_lt?: InputMaybe<Scalars['String']['input']>
  borrower_gte?: InputMaybe<Scalars['String']['input']>
  borrower_lte?: InputMaybe<Scalars['String']['input']>
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  borrower_contains?: InputMaybe<Scalars['String']['input']>
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  borrower_?: InputMaybe<User_filter>
  lender?: InputMaybe<Scalars['String']['input']>
  lender_not?: InputMaybe<Scalars['String']['input']>
  lender_gt?: InputMaybe<Scalars['String']['input']>
  lender_lt?: InputMaybe<Scalars['String']['input']>
  lender_gte?: InputMaybe<Scalars['String']['input']>
  lender_lte?: InputMaybe<Scalars['String']['input']>
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  lender_contains?: InputMaybe<Scalars['String']['input']>
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_contains?: InputMaybe<Scalars['String']['input']>
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  lender_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  lender_?: InputMaybe<User_filter>
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  maximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>
  maximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  maximumRepaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanDuration?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_not?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanInterestRateForDurationInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  loanInterestRateForDurationInBasisPoints_not?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_gt?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_lt?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_gte?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_lte?: InputMaybe<
    Scalars['Int']['input']
  >
  loanInterestRateForDurationInBasisPoints_in?: InputMaybe<
    Array<Scalars['Int']['input']>
  >
  loanInterestRateForDurationInBasisPoints_not_in?: InputMaybe<
    Array<Scalars['Int']['input']>
  >
  loanAdminFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  loanAdminFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  loanAdminFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  nftCollateralWrapper?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralWrapper_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralWrapper_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralWrapper_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  loanStartTime?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_not?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanStartTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  revenueShareInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  revenueShareInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  revenueShareInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  referralFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>
  referralFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>
  referralFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  loanMaturityDate?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_not?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanMaturityDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanMaturityDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanLiquidationDate?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_not?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_gt?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_lt?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_gte?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_lte?: InputMaybe<Scalars['BigInt']['input']>
  loanLiquidationDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loanLiquidationDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalRenegotiationFeesPaid?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_not?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationFeesPaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  totalRenegotiationFeesPaid_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  totalRenegotiationAdminFeesPaid?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_not?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_gt?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_lt?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_gte?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_lte?: InputMaybe<Scalars['BigInt']['input']>
  totalRenegotiationAdminFeesPaid_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  totalRenegotiationAdminFeesPaid_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >
  amountPaidToLender?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_not?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_gt?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_lt?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_gte?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_lte?: InputMaybe<Scalars['BigInt']['input']>
  amountPaidToLender_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  amountPaidToLender_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  adminFeePaid?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_not?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_gt?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_lt?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_gte?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_lte?: InputMaybe<Scalars['BigInt']['input']>
  adminFeePaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  adminFeePaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  revenueSharePaid?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_not?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_gt?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_lt?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_gte?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_lte?: InputMaybe<Scalars['BigInt']['input']>
  revenueSharePaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  revenueSharePaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  obligationReceipt_?: InputMaybe<ObligationReceipt_filter>
  promissoryNotes_?: InputMaybe<PromissoryNote_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Loan_filter>>>
  or?: InputMaybe<Array<InputMaybe<Loan_filter>>>
}

export type Loan_orderBy =
  | 'id'
  | 'loanContract'
  | 'loanId'
  | 'loanStatus'
  | 'borrower'
  | 'borrower__id'
  | 'borrower__address'
  | 'borrower__tokenCount'
  | 'lender'
  | 'lender__id'
  | 'lender__address'
  | 'lender__tokenCount'
  | 'loanPrincipalAmount'
  | 'maximumRepaymentAmount'
  | 'nftCollateralId'
  | 'loanERC20Denomination'
  | 'loanDuration'
  | 'loanInterestRateForDurationInBasisPoints'
  | 'loanAdminFeeInBasisPoints'
  | 'nftCollateralWrapper'
  | 'loanStartTime'
  | 'nftCollateralContract'
  | 'revenueSharePartner'
  | 'revenueShareInBasisPoints'
  | 'referralFeeInBasisPoints'
  | 'loanMaturityDate'
  | 'loanLiquidationDate'
  | 'totalRenegotiationFeesPaid'
  | 'totalRenegotiationAdminFeesPaid'
  | 'amountPaidToLender'
  | 'adminFeePaid'
  | 'revenueSharePaid'
  | 'obligationReceipt'
  | 'obligationReceipt__id'
  | 'obligationReceipt__receiptTokenId'
  | 'obligationReceipt__nftCollateralContract'
  | 'obligationReceipt__nftCollateralId'
  | 'promissoryNotes'

export type ObligationReceipt = {
  id: Scalars['Bytes']['output']
  receiptTokenId: Scalars['BigInt']['output']
  loan: Loan
  nftCollateralContract: Scalars['Bytes']['output']
  nftCollateralId: Scalars['BigInt']['output']
  creator: User
  holder?: Maybe<User>
}

export type ObligationReceipt_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  receiptTokenId?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_not?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>
  receiptTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  receiptTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  creator?: InputMaybe<Scalars['String']['input']>
  creator_not?: InputMaybe<Scalars['String']['input']>
  creator_gt?: InputMaybe<Scalars['String']['input']>
  creator_lt?: InputMaybe<Scalars['String']['input']>
  creator_gte?: InputMaybe<Scalars['String']['input']>
  creator_lte?: InputMaybe<Scalars['String']['input']>
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_contains?: InputMaybe<Scalars['String']['input']>
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_contains?: InputMaybe<Scalars['String']['input']>
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_?: InputMaybe<User_filter>
  holder?: InputMaybe<Scalars['String']['input']>
  holder_not?: InputMaybe<Scalars['String']['input']>
  holder_gt?: InputMaybe<Scalars['String']['input']>
  holder_lt?: InputMaybe<Scalars['String']['input']>
  holder_gte?: InputMaybe<Scalars['String']['input']>
  holder_lte?: InputMaybe<Scalars['String']['input']>
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_contains?: InputMaybe<Scalars['String']['input']>
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_contains?: InputMaybe<Scalars['String']['input']>
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_?: InputMaybe<User_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ObligationReceipt_filter>>>
  or?: InputMaybe<Array<InputMaybe<ObligationReceipt_filter>>>
}

export type ObligationReceipt_orderBy =
  | 'id'
  | 'receiptTokenId'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'nftCollateralContract'
  | 'nftCollateralId'
  | 'creator'
  | 'creator__id'
  | 'creator__address'
  | 'creator__tokenCount'
  | 'holder'
  | 'holder__id'
  | 'holder__address'
  | 'holder__tokenCount'

export type OperatingAgreementUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  newValue: Scalars['String']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type OperatingAgreementUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  newValue?: InputMaybe<Scalars['String']['input']>
  newValue_not?: InputMaybe<Scalars['String']['input']>
  newValue_gt?: InputMaybe<Scalars['String']['input']>
  newValue_lt?: InputMaybe<Scalars['String']['input']>
  newValue_gte?: InputMaybe<Scalars['String']['input']>
  newValue_lte?: InputMaybe<Scalars['String']['input']>
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_contains?: InputMaybe<Scalars['String']['input']>
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<OperatingAgreementUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<OperatingAgreementUpdate_filter>>>
}

export type OperatingAgreementUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export type PromissoryNote = {
  id: Scalars['Bytes']['output']
  noteTokenId: Scalars['BigInt']['output']
  loan?: Maybe<Loan>
  creator: User
  holder?: Maybe<User>
}

export type PromissoryNote_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  noteTokenId?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_not?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>
  noteTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  noteTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  loan?: InputMaybe<Scalars['String']['input']>
  loan_not?: InputMaybe<Scalars['String']['input']>
  loan_gt?: InputMaybe<Scalars['String']['input']>
  loan_lt?: InputMaybe<Scalars['String']['input']>
  loan_gte?: InputMaybe<Scalars['String']['input']>
  loan_lte?: InputMaybe<Scalars['String']['input']>
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  loan_contains?: InputMaybe<Scalars['String']['input']>
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_contains?: InputMaybe<Scalars['String']['input']>
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  loan_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  loan_?: InputMaybe<Loan_filter>
  creator?: InputMaybe<Scalars['String']['input']>
  creator_not?: InputMaybe<Scalars['String']['input']>
  creator_gt?: InputMaybe<Scalars['String']['input']>
  creator_lt?: InputMaybe<Scalars['String']['input']>
  creator_gte?: InputMaybe<Scalars['String']['input']>
  creator_lte?: InputMaybe<Scalars['String']['input']>
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_contains?: InputMaybe<Scalars['String']['input']>
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_contains?: InputMaybe<Scalars['String']['input']>
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_?: InputMaybe<User_filter>
  holder?: InputMaybe<Scalars['String']['input']>
  holder_not?: InputMaybe<Scalars['String']['input']>
  holder_gt?: InputMaybe<Scalars['String']['input']>
  holder_lt?: InputMaybe<Scalars['String']['input']>
  holder_gte?: InputMaybe<Scalars['String']['input']>
  holder_lte?: InputMaybe<Scalars['String']['input']>
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  holder_contains?: InputMaybe<Scalars['String']['input']>
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_contains?: InputMaybe<Scalars['String']['input']>
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  holder_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  holder_?: InputMaybe<User_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<PromissoryNote_filter>>>
  or?: InputMaybe<Array<InputMaybe<PromissoryNote_filter>>>
}

export type PromissoryNote_orderBy =
  | 'id'
  | 'noteTokenId'
  | 'loan'
  | 'loan__id'
  | 'loan__loanContract'
  | 'loan__loanId'
  | 'loan__loanStatus'
  | 'loan__loanPrincipalAmount'
  | 'loan__maximumRepaymentAmount'
  | 'loan__nftCollateralId'
  | 'loan__loanERC20Denomination'
  | 'loan__loanDuration'
  | 'loan__loanInterestRateForDurationInBasisPoints'
  | 'loan__loanAdminFeeInBasisPoints'
  | 'loan__nftCollateralWrapper'
  | 'loan__loanStartTime'
  | 'loan__nftCollateralContract'
  | 'loan__revenueSharePartner'
  | 'loan__revenueShareInBasisPoints'
  | 'loan__referralFeeInBasisPoints'
  | 'loan__loanMaturityDate'
  | 'loan__loanLiquidationDate'
  | 'loan__totalRenegotiationFeesPaid'
  | 'loan__totalRenegotiationAdminFeesPaid'
  | 'loan__amountPaidToLender'
  | 'loan__adminFeePaid'
  | 'loan__revenueSharePaid'
  | 'creator'
  | 'creator__id'
  | 'creator__address'
  | 'creator__tokenCount'
  | 'holder'
  | 'holder__id'
  | 'holder__address'
  | 'holder__tokenCount'

export type Token = {
  id: Scalars['Bytes']['output']
  mintTimestamp: Scalars['BigInt']['output']
  booleanTraits?: Maybe<Array<TraitBoolean>>
  configuration: Scalars['String']['output']
  supply: Scalars['BigInt']['output']
  balances?: Maybe<Array<Balance>>
  creator: User
  decimalTraits?: Maybe<Array<TraitDecimal>>
  definition: Scalars['String']['output']
  operatingAgreement: Scalars['String']['output']
  stringTraits?: Maybe<Array<TraitString>>
  tokenId: Scalars['BigInt']['output']
  transfers?: Maybe<Array<Transfer>>
  uri: Scalars['String']['output']
  validator: Scalars['Bytes']['output']
}

export type TokenbooleanTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitBoolean_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitBoolean_filter>
}

export type TokenbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
}

export type TokendecimalTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitDecimal_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitDecimal_filter>
}

export type TokenstringTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<TraitString_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TraitString_filter>
}

export type TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Transfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transfer_filter>
}

export type Token_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  mintTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  mintTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  mintTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  booleanTraits_?: InputMaybe<TraitBoolean_filter>
  configuration?: InputMaybe<Scalars['String']['input']>
  configuration_not?: InputMaybe<Scalars['String']['input']>
  configuration_gt?: InputMaybe<Scalars['String']['input']>
  configuration_lt?: InputMaybe<Scalars['String']['input']>
  configuration_gte?: InputMaybe<Scalars['String']['input']>
  configuration_lte?: InputMaybe<Scalars['String']['input']>
  configuration_in?: InputMaybe<Array<Scalars['String']['input']>>
  configuration_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  configuration_contains?: InputMaybe<Scalars['String']['input']>
  configuration_contains_nocase?: InputMaybe<Scalars['String']['input']>
  configuration_not_contains?: InputMaybe<Scalars['String']['input']>
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  configuration_starts_with?: InputMaybe<Scalars['String']['input']>
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  configuration_not_starts_with?: InputMaybe<Scalars['String']['input']>
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  configuration_ends_with?: InputMaybe<Scalars['String']['input']>
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  configuration_not_ends_with?: InputMaybe<Scalars['String']['input']>
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  supply?: InputMaybe<Scalars['BigInt']['input']>
  supply_not?: InputMaybe<Scalars['BigInt']['input']>
  supply_gt?: InputMaybe<Scalars['BigInt']['input']>
  supply_lt?: InputMaybe<Scalars['BigInt']['input']>
  supply_gte?: InputMaybe<Scalars['BigInt']['input']>
  supply_lte?: InputMaybe<Scalars['BigInt']['input']>
  supply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  balances_?: InputMaybe<Balance_filter>
  creator?: InputMaybe<Scalars['String']['input']>
  creator_not?: InputMaybe<Scalars['String']['input']>
  creator_gt?: InputMaybe<Scalars['String']['input']>
  creator_lt?: InputMaybe<Scalars['String']['input']>
  creator_gte?: InputMaybe<Scalars['String']['input']>
  creator_lte?: InputMaybe<Scalars['String']['input']>
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  creator_contains?: InputMaybe<Scalars['String']['input']>
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_contains?: InputMaybe<Scalars['String']['input']>
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  creator_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  creator_?: InputMaybe<User_filter>
  decimalTraits_?: InputMaybe<TraitDecimal_filter>
  definition?: InputMaybe<Scalars['String']['input']>
  definition_not?: InputMaybe<Scalars['String']['input']>
  definition_gt?: InputMaybe<Scalars['String']['input']>
  definition_lt?: InputMaybe<Scalars['String']['input']>
  definition_gte?: InputMaybe<Scalars['String']['input']>
  definition_lte?: InputMaybe<Scalars['String']['input']>
  definition_in?: InputMaybe<Array<Scalars['String']['input']>>
  definition_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  definition_contains?: InputMaybe<Scalars['String']['input']>
  definition_contains_nocase?: InputMaybe<Scalars['String']['input']>
  definition_not_contains?: InputMaybe<Scalars['String']['input']>
  definition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  definition_starts_with?: InputMaybe<Scalars['String']['input']>
  definition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  definition_not_starts_with?: InputMaybe<Scalars['String']['input']>
  definition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  definition_ends_with?: InputMaybe<Scalars['String']['input']>
  definition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  definition_not_ends_with?: InputMaybe<Scalars['String']['input']>
  definition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  operatingAgreement?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_gt?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_lt?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_gte?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_lte?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_in?: InputMaybe<Array<Scalars['String']['input']>>
  operatingAgreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  operatingAgreement_contains?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_contains_nocase?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_contains?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  operatingAgreement_starts_with?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_starts_with?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  operatingAgreement_ends_with?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_ends_with?: InputMaybe<Scalars['String']['input']>
  operatingAgreement_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >
  stringTraits_?: InputMaybe<TraitString_filter>
  tokenId?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transfers_?: InputMaybe<Transfer_filter>
  uri?: InputMaybe<Scalars['String']['input']>
  uri_not?: InputMaybe<Scalars['String']['input']>
  uri_gt?: InputMaybe<Scalars['String']['input']>
  uri_lt?: InputMaybe<Scalars['String']['input']>
  uri_gte?: InputMaybe<Scalars['String']['input']>
  uri_lte?: InputMaybe<Scalars['String']['input']>
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_contains?: InputMaybe<Scalars['String']['input']>
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_contains?: InputMaybe<Scalars['String']['input']>
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  validator?: InputMaybe<Scalars['Bytes']['input']>
  validator_not?: InputMaybe<Scalars['Bytes']['input']>
  validator_gt?: InputMaybe<Scalars['Bytes']['input']>
  validator_lt?: InputMaybe<Scalars['Bytes']['input']>
  validator_gte?: InputMaybe<Scalars['Bytes']['input']>
  validator_lte?: InputMaybe<Scalars['Bytes']['input']>
  validator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  validator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  validator_contains?: InputMaybe<Scalars['Bytes']['input']>
  validator_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>
}

export type Token_orderBy =
  | 'id'
  | 'mintTimestamp'
  | 'booleanTraits'
  | 'configuration'
  | 'supply'
  | 'balances'
  | 'creator'
  | 'creator__id'
  | 'creator__address'
  | 'creator__tokenCount'
  | 'decimalTraits'
  | 'definition'
  | 'operatingAgreement'
  | 'stringTraits'
  | 'tokenId'
  | 'transfers'
  | 'uri'
  | 'validator'

export type TraitBoolean = {
  id: Scalars['Bytes']['output']
  token: Token
  key: Scalars['String']['output']
  displayName: Scalars['String']['output']
  value: Scalars['Boolean']['output']
}

export type TraitBooleanUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  traitKey: Scalars['String']['output']
  newValue?: Maybe<Scalars['Boolean']['output']>
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type TraitBooleanUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  traitKey?: InputMaybe<Scalars['String']['input']>
  traitKey_not?: InputMaybe<Scalars['String']['input']>
  traitKey_gt?: InputMaybe<Scalars['String']['input']>
  traitKey_lt?: InputMaybe<Scalars['String']['input']>
  traitKey_gte?: InputMaybe<Scalars['String']['input']>
  traitKey_lte?: InputMaybe<Scalars['String']['input']>
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue?: InputMaybe<Scalars['Boolean']['input']>
  newValue_not?: InputMaybe<Scalars['Boolean']['input']>
  newValue_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitBooleanUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitBooleanUpdate_filter>>>
}

export type TraitBooleanUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'traitKey'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type TraitBoolean_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  key?: InputMaybe<Scalars['String']['input']>
  key_not?: InputMaybe<Scalars['String']['input']>
  key_gt?: InputMaybe<Scalars['String']['input']>
  key_lt?: InputMaybe<Scalars['String']['input']>
  key_gte?: InputMaybe<Scalars['String']['input']>
  key_lte?: InputMaybe<Scalars['String']['input']>
  key_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_contains?: InputMaybe<Scalars['String']['input']>
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_contains?: InputMaybe<Scalars['String']['input']>
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_starts_with?: InputMaybe<Scalars['String']['input']>
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_ends_with?: InputMaybe<Scalars['String']['input']>
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  displayName_not?: InputMaybe<Scalars['String']['input']>
  displayName_gt?: InputMaybe<Scalars['String']['input']>
  displayName_lt?: InputMaybe<Scalars['String']['input']>
  displayName_gte?: InputMaybe<Scalars['String']['input']>
  displayName_lte?: InputMaybe<Scalars['String']['input']>
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_contains?: InputMaybe<Scalars['String']['input']>
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['Boolean']['input']>
  value_not?: InputMaybe<Scalars['Boolean']['input']>
  value_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  value_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitBoolean_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitBoolean_filter>>>
}

export type TraitBoolean_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'key'
  | 'displayName'
  | 'value'

export type TraitDecimal = {
  id: Scalars['Bytes']['output']
  token: Token
  key: Scalars['String']['output']
  displayName: Scalars['String']['output']
  value?: Maybe<Scalars['Int']['output']>
}

export type TraitDecimalUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  traitKey: Scalars['String']['output']
  newValue?: Maybe<Scalars['Int']['output']>
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type TraitDecimalUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  traitKey?: InputMaybe<Scalars['String']['input']>
  traitKey_not?: InputMaybe<Scalars['String']['input']>
  traitKey_gt?: InputMaybe<Scalars['String']['input']>
  traitKey_lt?: InputMaybe<Scalars['String']['input']>
  traitKey_gte?: InputMaybe<Scalars['String']['input']>
  traitKey_lte?: InputMaybe<Scalars['String']['input']>
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue?: InputMaybe<Scalars['Int']['input']>
  newValue_not?: InputMaybe<Scalars['Int']['input']>
  newValue_gt?: InputMaybe<Scalars['Int']['input']>
  newValue_lt?: InputMaybe<Scalars['Int']['input']>
  newValue_gte?: InputMaybe<Scalars['Int']['input']>
  newValue_lte?: InputMaybe<Scalars['Int']['input']>
  newValue_in?: InputMaybe<Array<Scalars['Int']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitDecimalUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitDecimalUpdate_filter>>>
}

export type TraitDecimalUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'traitKey'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type TraitDecimal_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  key?: InputMaybe<Scalars['String']['input']>
  key_not?: InputMaybe<Scalars['String']['input']>
  key_gt?: InputMaybe<Scalars['String']['input']>
  key_lt?: InputMaybe<Scalars['String']['input']>
  key_gte?: InputMaybe<Scalars['String']['input']>
  key_lte?: InputMaybe<Scalars['String']['input']>
  key_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_contains?: InputMaybe<Scalars['String']['input']>
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_contains?: InputMaybe<Scalars['String']['input']>
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_starts_with?: InputMaybe<Scalars['String']['input']>
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_ends_with?: InputMaybe<Scalars['String']['input']>
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  displayName_not?: InputMaybe<Scalars['String']['input']>
  displayName_gt?: InputMaybe<Scalars['String']['input']>
  displayName_lt?: InputMaybe<Scalars['String']['input']>
  displayName_gte?: InputMaybe<Scalars['String']['input']>
  displayName_lte?: InputMaybe<Scalars['String']['input']>
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_contains?: InputMaybe<Scalars['String']['input']>
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  value?: InputMaybe<Scalars['Int']['input']>
  value_not?: InputMaybe<Scalars['Int']['input']>
  value_gt?: InputMaybe<Scalars['Int']['input']>
  value_lt?: InputMaybe<Scalars['Int']['input']>
  value_gte?: InputMaybe<Scalars['Int']['input']>
  value_lte?: InputMaybe<Scalars['Int']['input']>
  value_in?: InputMaybe<Array<Scalars['Int']['input']>>
  value_not_in?: InputMaybe<Array<Scalars['Int']['input']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitDecimal_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitDecimal_filter>>>
}

export type TraitDecimal_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'key'
  | 'displayName'
  | 'value'

export type TraitDefinition = {
  id: Scalars['Bytes']['output']
  type: TraitType
  key: Scalars['String']['output']
  displayName: Scalars['String']['output']
}

export type TraitDefinition_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  type?: InputMaybe<TraitType>
  type_not?: InputMaybe<TraitType>
  type_in?: InputMaybe<Array<TraitType>>
  type_not_in?: InputMaybe<Array<TraitType>>
  key?: InputMaybe<Scalars['String']['input']>
  key_not?: InputMaybe<Scalars['String']['input']>
  key_gt?: InputMaybe<Scalars['String']['input']>
  key_lt?: InputMaybe<Scalars['String']['input']>
  key_gte?: InputMaybe<Scalars['String']['input']>
  key_lte?: InputMaybe<Scalars['String']['input']>
  key_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_contains?: InputMaybe<Scalars['String']['input']>
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_contains?: InputMaybe<Scalars['String']['input']>
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_starts_with?: InputMaybe<Scalars['String']['input']>
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_ends_with?: InputMaybe<Scalars['String']['input']>
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  displayName_not?: InputMaybe<Scalars['String']['input']>
  displayName_gt?: InputMaybe<Scalars['String']['input']>
  displayName_lt?: InputMaybe<Scalars['String']['input']>
  displayName_gte?: InputMaybe<Scalars['String']['input']>
  displayName_lte?: InputMaybe<Scalars['String']['input']>
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_contains?: InputMaybe<Scalars['String']['input']>
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitDefinition_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitDefinition_filter>>>
}

export type TraitDefinition_orderBy = 'id' | 'type' | 'key' | 'displayName'

export type TraitMetadata = {
  id: Scalars['Bytes']['output']
  uri: Scalars['String']['output']
  decoded: Scalars['String']['output']
}

export type TraitMetadataUriUpdate = {
  id: Scalars['Bytes']['output']
  uri: Scalars['String']['output']
  decoded: Scalars['String']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type TraitMetadataUriUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
  uri_not?: InputMaybe<Scalars['String']['input']>
  uri_gt?: InputMaybe<Scalars['String']['input']>
  uri_lt?: InputMaybe<Scalars['String']['input']>
  uri_gte?: InputMaybe<Scalars['String']['input']>
  uri_lte?: InputMaybe<Scalars['String']['input']>
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_contains?: InputMaybe<Scalars['String']['input']>
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_contains?: InputMaybe<Scalars['String']['input']>
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded?: InputMaybe<Scalars['String']['input']>
  decoded_not?: InputMaybe<Scalars['String']['input']>
  decoded_gt?: InputMaybe<Scalars['String']['input']>
  decoded_lt?: InputMaybe<Scalars['String']['input']>
  decoded_gte?: InputMaybe<Scalars['String']['input']>
  decoded_lte?: InputMaybe<Scalars['String']['input']>
  decoded_in?: InputMaybe<Array<Scalars['String']['input']>>
  decoded_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  decoded_contains?: InputMaybe<Scalars['String']['input']>
  decoded_contains_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_contains?: InputMaybe<Scalars['String']['input']>
  decoded_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_starts_with?: InputMaybe<Scalars['String']['input']>
  decoded_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_starts_with?: InputMaybe<Scalars['String']['input']>
  decoded_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_ends_with?: InputMaybe<Scalars['String']['input']>
  decoded_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_ends_with?: InputMaybe<Scalars['String']['input']>
  decoded_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitMetadataUriUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitMetadataUriUpdate_filter>>>
}

export type TraitMetadataUriUpdate_orderBy =
  | 'id'
  | 'uri'
  | 'decoded'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type TraitMetadata_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  uri?: InputMaybe<Scalars['String']['input']>
  uri_not?: InputMaybe<Scalars['String']['input']>
  uri_gt?: InputMaybe<Scalars['String']['input']>
  uri_lt?: InputMaybe<Scalars['String']['input']>
  uri_gte?: InputMaybe<Scalars['String']['input']>
  uri_lte?: InputMaybe<Scalars['String']['input']>
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  uri_contains?: InputMaybe<Scalars['String']['input']>
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_contains?: InputMaybe<Scalars['String']['input']>
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  uri_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded?: InputMaybe<Scalars['String']['input']>
  decoded_not?: InputMaybe<Scalars['String']['input']>
  decoded_gt?: InputMaybe<Scalars['String']['input']>
  decoded_lt?: InputMaybe<Scalars['String']['input']>
  decoded_gte?: InputMaybe<Scalars['String']['input']>
  decoded_lte?: InputMaybe<Scalars['String']['input']>
  decoded_in?: InputMaybe<Array<Scalars['String']['input']>>
  decoded_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  decoded_contains?: InputMaybe<Scalars['String']['input']>
  decoded_contains_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_contains?: InputMaybe<Scalars['String']['input']>
  decoded_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_starts_with?: InputMaybe<Scalars['String']['input']>
  decoded_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_starts_with?: InputMaybe<Scalars['String']['input']>
  decoded_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_ends_with?: InputMaybe<Scalars['String']['input']>
  decoded_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  decoded_not_ends_with?: InputMaybe<Scalars['String']['input']>
  decoded_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitMetadata_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitMetadata_filter>>>
}

export type TraitMetadata_orderBy = 'id' | 'uri' | 'decoded'

export type TraitString = {
  id: Scalars['Bytes']['output']
  key: Scalars['String']['output']
  displayName: Scalars['String']['output']
  token: Token
  value?: Maybe<Scalars['String']['output']>
}

export type TraitStringUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  traitKey: Scalars['String']['output']
  newValue?: Maybe<Scalars['String']['output']>
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type TraitStringUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  traitKey?: InputMaybe<Scalars['String']['input']>
  traitKey_not?: InputMaybe<Scalars['String']['input']>
  traitKey_gt?: InputMaybe<Scalars['String']['input']>
  traitKey_lt?: InputMaybe<Scalars['String']['input']>
  traitKey_gte?: InputMaybe<Scalars['String']['input']>
  traitKey_lte?: InputMaybe<Scalars['String']['input']>
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  traitKey_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue?: InputMaybe<Scalars['String']['input']>
  newValue_not?: InputMaybe<Scalars['String']['input']>
  newValue_gt?: InputMaybe<Scalars['String']['input']>
  newValue_lt?: InputMaybe<Scalars['String']['input']>
  newValue_gte?: InputMaybe<Scalars['String']['input']>
  newValue_lte?: InputMaybe<Scalars['String']['input']>
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  newValue_contains?: InputMaybe<Scalars['String']['input']>
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitStringUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitStringUpdate_filter>>>
}

export type TraitStringUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'traitKey'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type TraitString_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  key_not?: InputMaybe<Scalars['String']['input']>
  key_gt?: InputMaybe<Scalars['String']['input']>
  key_lt?: InputMaybe<Scalars['String']['input']>
  key_gte?: InputMaybe<Scalars['String']['input']>
  key_lte?: InputMaybe<Scalars['String']['input']>
  key_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  key_contains?: InputMaybe<Scalars['String']['input']>
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_contains?: InputMaybe<Scalars['String']['input']>
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  key_starts_with?: InputMaybe<Scalars['String']['input']>
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_ends_with?: InputMaybe<Scalars['String']['input']>
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  displayName_not?: InputMaybe<Scalars['String']['input']>
  displayName_gt?: InputMaybe<Scalars['String']['input']>
  displayName_lt?: InputMaybe<Scalars['String']['input']>
  displayName_gte?: InputMaybe<Scalars['String']['input']>
  displayName_lte?: InputMaybe<Scalars['String']['input']>
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  displayName_contains?: InputMaybe<Scalars['String']['input']>
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  value?: InputMaybe<Scalars['String']['input']>
  value_not?: InputMaybe<Scalars['String']['input']>
  value_gt?: InputMaybe<Scalars['String']['input']>
  value_lt?: InputMaybe<Scalars['String']['input']>
  value_gte?: InputMaybe<Scalars['String']['input']>
  value_lte?: InputMaybe<Scalars['String']['input']>
  value_in?: InputMaybe<Array<Scalars['String']['input']>>
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  value_contains?: InputMaybe<Scalars['String']['input']>
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>
  value_not_contains?: InputMaybe<Scalars['String']['input']>
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  value_starts_with?: InputMaybe<Scalars['String']['input']>
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  value_ends_with?: InputMaybe<Scalars['String']['input']>
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<TraitString_filter>>>
  or?: InputMaybe<Array<InputMaybe<TraitString_filter>>>
}

export type TraitString_orderBy =
  | 'id'
  | 'key'
  | 'displayName'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'value'

export type TraitType = 'string' | 'decimal' | 'boolean' | 'epochSeconds'

export type Transfer = {
  id: Scalars['Bytes']['output']
  operator: Scalars['Bytes']['output']
  from?: Maybe<User>
  to?: Maybe<User>
  token: Token
  value: Scalars['BigInt']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type Transfer_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  operator?: InputMaybe<Scalars['Bytes']['input']>
  operator_not?: InputMaybe<Scalars['Bytes']['input']>
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  from?: InputMaybe<Scalars['String']['input']>
  from_not?: InputMaybe<Scalars['String']['input']>
  from_gt?: InputMaybe<Scalars['String']['input']>
  from_lt?: InputMaybe<Scalars['String']['input']>
  from_gte?: InputMaybe<Scalars['String']['input']>
  from_lte?: InputMaybe<Scalars['String']['input']>
  from_in?: InputMaybe<Array<Scalars['String']['input']>>
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  from_contains?: InputMaybe<Scalars['String']['input']>
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>
  from_not_contains?: InputMaybe<Scalars['String']['input']>
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  from_starts_with?: InputMaybe<Scalars['String']['input']>
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  from_ends_with?: InputMaybe<Scalars['String']['input']>
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  from_?: InputMaybe<User_filter>
  to?: InputMaybe<Scalars['String']['input']>
  to_not?: InputMaybe<Scalars['String']['input']>
  to_gt?: InputMaybe<Scalars['String']['input']>
  to_lt?: InputMaybe<Scalars['String']['input']>
  to_gte?: InputMaybe<Scalars['String']['input']>
  to_lte?: InputMaybe<Scalars['String']['input']>
  to_in?: InputMaybe<Array<Scalars['String']['input']>>
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  to_contains?: InputMaybe<Scalars['String']['input']>
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>
  to_not_contains?: InputMaybe<Scalars['String']['input']>
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  to_starts_with?: InputMaybe<Scalars['String']['input']>
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  to_ends_with?: InputMaybe<Scalars['String']['input']>
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  to_?: InputMaybe<User_filter>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  value?: InputMaybe<Scalars['BigInt']['input']>
  value_not?: InputMaybe<Scalars['BigInt']['input']>
  value_gt?: InputMaybe<Scalars['BigInt']['input']>
  value_lt?: InputMaybe<Scalars['BigInt']['input']>
  value_gte?: InputMaybe<Scalars['BigInt']['input']>
  value_lte?: InputMaybe<Scalars['BigInt']['input']>
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>
}

export type Transfer_orderBy =
  | 'id'
  | 'operator'
  | 'from'
  | 'from__id'
  | 'from__address'
  | 'from__tokenCount'
  | 'to'
  | 'to__id'
  | 'to__address'
  | 'to__tokenCount'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'value'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type User = {
  id: Scalars['Bytes']['output']
  address: Scalars['Bytes']['output']
  tokenCount: Scalars['BigInt']['output']
  tokens?: Maybe<Array<Balance>>
  created?: Maybe<Array<Token>>
  obligationReceipts?: Maybe<Array<ObligationReceipt>>
  promissoryNotes?: Maybe<Array<PromissoryNote>>
  lending?: Maybe<Array<Loan>>
  borrowing?: Maybe<Array<Loan>>
}

export type UsertokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Balance_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Balance_filter>
}

export type UsercreatedArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
}

export type UserobligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<ObligationReceipt_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ObligationReceipt_filter>
}

export type UserpromissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<PromissoryNote_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PromissoryNote_filter>
}

export type UserlendingArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
}

export type UserborrowingArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<Loan_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Loan_filter>
}

export type User_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  address?: InputMaybe<Scalars['Bytes']['input']>
  address_not?: InputMaybe<Scalars['Bytes']['input']>
  address_gt?: InputMaybe<Scalars['Bytes']['input']>
  address_lt?: InputMaybe<Scalars['Bytes']['input']>
  address_gte?: InputMaybe<Scalars['Bytes']['input']>
  address_lte?: InputMaybe<Scalars['Bytes']['input']>
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  address_contains?: InputMaybe<Scalars['Bytes']['input']>
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  tokens_?: InputMaybe<Balance_filter>
  created_?: InputMaybe<Token_filter>
  obligationReceipts_?: InputMaybe<ObligationReceipt_filter>
  promissoryNotes_?: InputMaybe<PromissoryNote_filter>
  lending_?: InputMaybe<Loan_filter>
  borrowing_?: InputMaybe<Loan_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<User_filter>>>
  or?: InputMaybe<Array<InputMaybe<User_filter>>>
}

export type User_orderBy =
  | 'id'
  | 'address'
  | 'tokenCount'
  | 'tokens'
  | 'created'
  | 'obligationReceipts'
  | 'promissoryNotes'
  | 'lending'
  | 'borrowing'

export type ValidateOnSale =
  | 'none'
  | 'requireEq'
  | 'requireUintGte'
  | 'requireUintLte'

export type ValidatorUpdate = {
  id: Scalars['Bytes']['output']
  token: Token
  newValue: Scalars['Bytes']['output']
  blockNumber: Scalars['BigInt']['output']
  blockTimestamp: Scalars['BigInt']['output']
  transactionHash: Scalars['Bytes']['output']
}

export type ValidatorUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>
  id_not?: InputMaybe<Scalars['Bytes']['input']>
  id_gt?: InputMaybe<Scalars['Bytes']['input']>
  id_lt?: InputMaybe<Scalars['Bytes']['input']>
  id_gte?: InputMaybe<Scalars['Bytes']['input']>
  id_lte?: InputMaybe<Scalars['Bytes']['input']>
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  id_contains?: InputMaybe<Scalars['Bytes']['input']>
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  token?: InputMaybe<Scalars['String']['input']>
  token_not?: InputMaybe<Scalars['String']['input']>
  token_gt?: InputMaybe<Scalars['String']['input']>
  token_lt?: InputMaybe<Scalars['String']['input']>
  token_gte?: InputMaybe<Scalars['String']['input']>
  token_lte?: InputMaybe<Scalars['String']['input']>
  token_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>
  token_contains?: InputMaybe<Scalars['String']['input']>
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_contains?: InputMaybe<Scalars['String']['input']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>
  token_starts_with?: InputMaybe<Scalars['String']['input']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_ends_with?: InputMaybe<Scalars['String']['input']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>
  token_?: InputMaybe<Token_filter>
  newValue?: InputMaybe<Scalars['Bytes']['input']>
  newValue_not?: InputMaybe<Scalars['Bytes']['input']>
  newValue_gt?: InputMaybe<Scalars['Bytes']['input']>
  newValue_lt?: InputMaybe<Scalars['Bytes']['input']>
  newValue_gte?: InputMaybe<Scalars['Bytes']['input']>
  newValue_lte?: InputMaybe<Scalars['Bytes']['input']>
  newValue_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  newValue_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  newValue_contains?: InputMaybe<Scalars['Bytes']['input']>
  newValue_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
  and?: InputMaybe<Array<InputMaybe<ValidatorUpdate_filter>>>
  or?: InputMaybe<Array<InputMaybe<ValidatorUpdate_filter>>>
}

export type ValidatorUpdate_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__mintTimestamp'
  | 'token__configuration'
  | 'token__supply'
  | 'token__definition'
  | 'token__operatingAgreement'
  | 'token__tokenId'
  | 'token__uri'
  | 'token__validator'
  | 'newValue'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash'

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>
  /** The block number */
  number: Scalars['Int']['output']
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']['output']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output']
}

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny'

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>
  Subscription: ResolverTypeWrapper<{}>
  Aggregation_interval: Aggregation_interval
  Balance: ResolverTypeWrapper<Balance>
  Balance_filter: Balance_filter
  Balance_orderBy: Balance_orderBy
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>
  ConfigurationUpdate: ResolverTypeWrapper<ConfigurationUpdate>
  ConfigurationUpdate_filter: ConfigurationUpdate_filter
  ConfigurationUpdate_orderBy: ConfigurationUpdate_orderBy
  Float: ResolverTypeWrapper<Scalars['Float']['output']>
  ID: ResolverTypeWrapper<Scalars['ID']['output']>
  Int: ResolverTypeWrapper<Scalars['Int']['output']>
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>
  Loan: ResolverTypeWrapper<Loan>
  LoanLiquidatedEvent: ResolverTypeWrapper<LoanLiquidatedEvent>
  LoanLiquidatedEvent_filter: LoanLiquidatedEvent_filter
  LoanLiquidatedEvent_orderBy: LoanLiquidatedEvent_orderBy
  LoanRenegotiatedEvent: ResolverTypeWrapper<LoanRenegotiatedEvent>
  LoanRenegotiatedEvent_filter: LoanRenegotiatedEvent_filter
  LoanRenegotiatedEvent_orderBy: LoanRenegotiatedEvent_orderBy
  LoanRepaidEvent: ResolverTypeWrapper<LoanRepaidEvent>
  LoanRepaidEvent_filter: LoanRepaidEvent_filter
  LoanRepaidEvent_orderBy: LoanRepaidEvent_orderBy
  LoanStartedEvent: ResolverTypeWrapper<LoanStartedEvent>
  LoanStartedEvent_filter: LoanStartedEvent_filter
  LoanStartedEvent_orderBy: LoanStartedEvent_orderBy
  LoanStatus: LoanStatus
  Loan_filter: Loan_filter
  Loan_orderBy: Loan_orderBy
  ObligationReceipt: ResolverTypeWrapper<ObligationReceipt>
  ObligationReceipt_filter: ObligationReceipt_filter
  ObligationReceipt_orderBy: ObligationReceipt_orderBy
  OperatingAgreementUpdate: ResolverTypeWrapper<OperatingAgreementUpdate>
  OperatingAgreementUpdate_filter: OperatingAgreementUpdate_filter
  OperatingAgreementUpdate_orderBy: OperatingAgreementUpdate_orderBy
  OrderDirection: OrderDirection
  PromissoryNote: ResolverTypeWrapper<PromissoryNote>
  PromissoryNote_filter: PromissoryNote_filter
  PromissoryNote_orderBy: PromissoryNote_orderBy
  String: ResolverTypeWrapper<Scalars['String']['output']>
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>
  Token: ResolverTypeWrapper<Token>
  Token_filter: Token_filter
  Token_orderBy: Token_orderBy
  TraitBoolean: ResolverTypeWrapper<TraitBoolean>
  TraitBooleanUpdate: ResolverTypeWrapper<TraitBooleanUpdate>
  TraitBooleanUpdate_filter: TraitBooleanUpdate_filter
  TraitBooleanUpdate_orderBy: TraitBooleanUpdate_orderBy
  TraitBoolean_filter: TraitBoolean_filter
  TraitBoolean_orderBy: TraitBoolean_orderBy
  TraitDecimal: ResolverTypeWrapper<TraitDecimal>
  TraitDecimalUpdate: ResolverTypeWrapper<TraitDecimalUpdate>
  TraitDecimalUpdate_filter: TraitDecimalUpdate_filter
  TraitDecimalUpdate_orderBy: TraitDecimalUpdate_orderBy
  TraitDecimal_filter: TraitDecimal_filter
  TraitDecimal_orderBy: TraitDecimal_orderBy
  TraitDefinition: ResolverTypeWrapper<TraitDefinition>
  TraitDefinition_filter: TraitDefinition_filter
  TraitDefinition_orderBy: TraitDefinition_orderBy
  TraitMetadata: ResolverTypeWrapper<TraitMetadata>
  TraitMetadataUriUpdate: ResolverTypeWrapper<TraitMetadataUriUpdate>
  TraitMetadataUriUpdate_filter: TraitMetadataUriUpdate_filter
  TraitMetadataUriUpdate_orderBy: TraitMetadataUriUpdate_orderBy
  TraitMetadata_filter: TraitMetadata_filter
  TraitMetadata_orderBy: TraitMetadata_orderBy
  TraitString: ResolverTypeWrapper<TraitString>
  TraitStringUpdate: ResolverTypeWrapper<TraitStringUpdate>
  TraitStringUpdate_filter: TraitStringUpdate_filter
  TraitStringUpdate_orderBy: TraitStringUpdate_orderBy
  TraitString_filter: TraitString_filter
  TraitString_orderBy: TraitString_orderBy
  TraitType: TraitType
  Transfer: ResolverTypeWrapper<Transfer>
  Transfer_filter: Transfer_filter
  Transfer_orderBy: Transfer_orderBy
  User: ResolverTypeWrapper<User>
  User_filter: User_filter
  User_orderBy: User_orderBy
  ValidateOnSale: ValidateOnSale
  ValidatorUpdate: ResolverTypeWrapper<ValidatorUpdate>
  ValidatorUpdate_filter: ValidatorUpdate_filter
  ValidatorUpdate_orderBy: ValidatorUpdate_orderBy
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  Subscription: {}
  Balance: Balance
  Balance_filter: Balance_filter
  BigDecimal: Scalars['BigDecimal']['output']
  BigInt: Scalars['BigInt']['output']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: Scalars['Boolean']['output']
  Bytes: Scalars['Bytes']['output']
  ConfigurationUpdate: ConfigurationUpdate
  ConfigurationUpdate_filter: ConfigurationUpdate_filter
  Float: Scalars['Float']['output']
  ID: Scalars['ID']['output']
  Int: Scalars['Int']['output']
  Int8: Scalars['Int8']['output']
  Loan: Loan
  LoanLiquidatedEvent: LoanLiquidatedEvent
  LoanLiquidatedEvent_filter: LoanLiquidatedEvent_filter
  LoanRenegotiatedEvent: LoanRenegotiatedEvent
  LoanRenegotiatedEvent_filter: LoanRenegotiatedEvent_filter
  LoanRepaidEvent: LoanRepaidEvent
  LoanRepaidEvent_filter: LoanRepaidEvent_filter
  LoanStartedEvent: LoanStartedEvent
  LoanStartedEvent_filter: LoanStartedEvent_filter
  Loan_filter: Loan_filter
  ObligationReceipt: ObligationReceipt
  ObligationReceipt_filter: ObligationReceipt_filter
  OperatingAgreementUpdate: OperatingAgreementUpdate
  OperatingAgreementUpdate_filter: OperatingAgreementUpdate_filter
  PromissoryNote: PromissoryNote
  PromissoryNote_filter: PromissoryNote_filter
  String: Scalars['String']['output']
  Timestamp: Scalars['Timestamp']['output']
  Token: Token
  Token_filter: Token_filter
  TraitBoolean: TraitBoolean
  TraitBooleanUpdate: TraitBooleanUpdate
  TraitBooleanUpdate_filter: TraitBooleanUpdate_filter
  TraitBoolean_filter: TraitBoolean_filter
  TraitDecimal: TraitDecimal
  TraitDecimalUpdate: TraitDecimalUpdate
  TraitDecimalUpdate_filter: TraitDecimalUpdate_filter
  TraitDecimal_filter: TraitDecimal_filter
  TraitDefinition: TraitDefinition
  TraitDefinition_filter: TraitDefinition_filter
  TraitMetadata: TraitMetadata
  TraitMetadataUriUpdate: TraitMetadataUriUpdate
  TraitMetadataUriUpdate_filter: TraitMetadataUriUpdate_filter
  TraitMetadata_filter: TraitMetadata_filter
  TraitString: TraitString
  TraitStringUpdate: TraitStringUpdate
  TraitStringUpdate_filter: TraitStringUpdate_filter
  TraitString_filter: TraitString_filter
  Transfer: Transfer
  Transfer_filter: Transfer_filter
  User: User
  User_filter: User_filter
  ValidatorUpdate: ValidatorUpdate
  ValidatorUpdate_filter: ValidatorUpdate_filter
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = entityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input']
}

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = subgraphIdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input']
}

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext,
  Args = derivedFromDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  ethereum_token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_tokenArgs, 'id' | 'subgraphError'>
  >
  ethereum_tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ethereum_balance?: Resolver<
    Maybe<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_balanceArgs, 'id' | 'subgraphError'>
  >
  ethereum_balances?: Resolver<
    Array<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_balancesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_userArgs, 'id' | 'subgraphError'>
  >
  ethereum_users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ethereum_transfer?: Resolver<
    Maybe<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_transferArgs, 'id' | 'subgraphError'>
  >
  ethereum_transfers?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_transfersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_configurationUpdate?: Resolver<
    Maybe<ResolversTypes['ConfigurationUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_configurationUpdateArgs, 'id' | 'subgraphError'>
  >
  ethereum_configurationUpdates?: Resolver<
    Array<ResolversTypes['ConfigurationUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_configurationUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_operatingAgreementUpdate?: Resolver<
    Maybe<ResolversTypes['OperatingAgreementUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_operatingAgreementUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_operatingAgreementUpdates?: Resolver<
    Array<ResolversTypes['OperatingAgreementUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_operatingAgreementUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_validatorUpdate?: Resolver<
    Maybe<ResolversTypes['ValidatorUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_validatorUpdateArgs, 'id' | 'subgraphError'>
  >
  ethereum_validatorUpdates?: Resolver<
    Array<ResolversTypes['ValidatorUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_validatorUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitMetadata?: Resolver<
    Maybe<ResolversTypes['TraitMetadata']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitMetadataArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitMetadata_collection?: Resolver<
    Array<ResolversTypes['TraitMetadata']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitMetadata_collectionArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitMetadataUriUpdate?: Resolver<
    Maybe<ResolversTypes['TraitMetadataUriUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitMetadataUriUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitMetadataUriUpdates?: Resolver<
    Array<ResolversTypes['TraitMetadataUriUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitMetadataUriUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDefinition?: Resolver<
    Maybe<ResolversTypes['TraitDefinition']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitDefinitionArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitDefinitions?: Resolver<
    Array<ResolversTypes['TraitDefinition']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitDefinitionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitStringUpdate?: Resolver<
    Maybe<ResolversTypes['TraitStringUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitStringUpdateArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitStringUpdates?: Resolver<
    Array<ResolversTypes['TraitStringUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitStringUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDecimalUpdate?: Resolver<
    Maybe<ResolversTypes['TraitDecimalUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitDecimalUpdateArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitDecimalUpdates?: Resolver<
    Array<ResolversTypes['TraitDecimalUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitDecimalUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitBooleanUpdate?: Resolver<
    Maybe<ResolversTypes['TraitBooleanUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitBooleanUpdateArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitBooleanUpdates?: Resolver<
    Array<ResolversTypes['TraitBooleanUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitBooleanUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitString?: Resolver<
    Maybe<ResolversTypes['TraitString']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitStringArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitStrings?: Resolver<
    Array<ResolversTypes['TraitString']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitStringsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDecimal?: Resolver<
    Maybe<ResolversTypes['TraitDecimal']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitDecimalArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitDecimals?: Resolver<
    Array<ResolversTypes['TraitDecimal']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitDecimalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitBoolean?: Resolver<
    Maybe<ResolversTypes['TraitBoolean']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_traitBooleanArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitBooleans?: Resolver<
    Array<ResolversTypes['TraitBoolean']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_traitBooleansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loan?: Resolver<
    Maybe<ResolversTypes['Loan']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_loanArgs, 'id' | 'subgraphError'>
  >
  ethereum_loans?: Resolver<
    Array<ResolversTypes['Loan']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_loansArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ethereum_loanLiquidatedEvent?: Resolver<
    Maybe<ResolversTypes['LoanLiquidatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_loanLiquidatedEventArgs, 'id' | 'subgraphError'>
  >
  ethereum_loanLiquidatedEvents?: Resolver<
    Array<ResolversTypes['LoanLiquidatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_loanLiquidatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanRenegotiatedEvent?: Resolver<
    Maybe<ResolversTypes['LoanRenegotiatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_loanRenegotiatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_loanRenegotiatedEvents?: Resolver<
    Array<ResolversTypes['LoanRenegotiatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_loanRenegotiatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanRepaidEvent?: Resolver<
    Maybe<ResolversTypes['LoanRepaidEvent']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_loanRepaidEventArgs, 'id' | 'subgraphError'>
  >
  ethereum_loanRepaidEvents?: Resolver<
    Array<ResolversTypes['LoanRepaidEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_loanRepaidEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanStartedEvent?: Resolver<
    Maybe<ResolversTypes['LoanStartedEvent']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_loanStartedEventArgs, 'id' | 'subgraphError'>
  >
  ethereum_loanStartedEvents?: Resolver<
    Array<ResolversTypes['LoanStartedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_loanStartedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_obligationReceipt?: Resolver<
    Maybe<ResolversTypes['ObligationReceipt']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_obligationReceiptArgs, 'id' | 'subgraphError'>
  >
  ethereum_obligationReceipts?: Resolver<
    Array<ResolversTypes['ObligationReceipt']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_obligationReceiptsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_promissoryNote?: Resolver<
    Maybe<ResolversTypes['PromissoryNote']>,
    ParentType,
    ContextType,
    RequireFields<Queryethereum_promissoryNoteArgs, 'id' | 'subgraphError'>
  >
  ethereum_promissoryNotes?: Resolver<
    Array<ResolversTypes['PromissoryNote']>,
    ParentType,
    ContextType,
    RequireFields<
      Queryethereum_promissoryNotesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum__meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Queryethereum__metaArgs>
  >
  sepolia_token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_tokenArgs, 'id' | 'subgraphError'>
  >
  sepolia_tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  sepolia_balance?: Resolver<
    Maybe<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_balanceArgs, 'id' | 'subgraphError'>
  >
  sepolia_balances?: Resolver<
    Array<ResolversTypes['Balance']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_balancesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  sepolia_user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_userArgs, 'id' | 'subgraphError'>
  >
  sepolia_users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  sepolia_transfer?: Resolver<
    Maybe<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_transferArgs, 'id' | 'subgraphError'>
  >
  sepolia_transfers?: Resolver<
    Array<ResolversTypes['Transfer']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_transfersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_configurationUpdate?: Resolver<
    Maybe<ResolversTypes['ConfigurationUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_configurationUpdateArgs, 'id' | 'subgraphError'>
  >
  sepolia_configurationUpdates?: Resolver<
    Array<ResolversTypes['ConfigurationUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_configurationUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_operatingAgreementUpdate?: Resolver<
    Maybe<ResolversTypes['OperatingAgreementUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_operatingAgreementUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_operatingAgreementUpdates?: Resolver<
    Array<ResolversTypes['OperatingAgreementUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_operatingAgreementUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_validatorUpdate?: Resolver<
    Maybe<ResolversTypes['ValidatorUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_validatorUpdateArgs, 'id' | 'subgraphError'>
  >
  sepolia_validatorUpdates?: Resolver<
    Array<ResolversTypes['ValidatorUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_validatorUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitMetadata?: Resolver<
    Maybe<ResolversTypes['TraitMetadata']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitMetadataArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitMetadata_collection?: Resolver<
    Array<ResolversTypes['TraitMetadata']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitMetadata_collectionArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitMetadataUriUpdate?: Resolver<
    Maybe<ResolversTypes['TraitMetadataUriUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitMetadataUriUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitMetadataUriUpdates?: Resolver<
    Array<ResolversTypes['TraitMetadataUriUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitMetadataUriUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDefinition?: Resolver<
    Maybe<ResolversTypes['TraitDefinition']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitDefinitionArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitDefinitions?: Resolver<
    Array<ResolversTypes['TraitDefinition']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitDefinitionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitStringUpdate?: Resolver<
    Maybe<ResolversTypes['TraitStringUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitStringUpdateArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitStringUpdates?: Resolver<
    Array<ResolversTypes['TraitStringUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitStringUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDecimalUpdate?: Resolver<
    Maybe<ResolversTypes['TraitDecimalUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitDecimalUpdateArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitDecimalUpdates?: Resolver<
    Array<ResolversTypes['TraitDecimalUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitDecimalUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitBooleanUpdate?: Resolver<
    Maybe<ResolversTypes['TraitBooleanUpdate']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitBooleanUpdateArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitBooleanUpdates?: Resolver<
    Array<ResolversTypes['TraitBooleanUpdate']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitBooleanUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitString?: Resolver<
    Maybe<ResolversTypes['TraitString']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitStringArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitStrings?: Resolver<
    Array<ResolversTypes['TraitString']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitStringsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDecimal?: Resolver<
    Maybe<ResolversTypes['TraitDecimal']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitDecimalArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitDecimals?: Resolver<
    Array<ResolversTypes['TraitDecimal']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitDecimalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitBoolean?: Resolver<
    Maybe<ResolversTypes['TraitBoolean']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_traitBooleanArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitBooleans?: Resolver<
    Array<ResolversTypes['TraitBoolean']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_traitBooleansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loan?: Resolver<
    Maybe<ResolversTypes['Loan']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_loanArgs, 'id' | 'subgraphError'>
  >
  sepolia_loans?: Resolver<
    Array<ResolversTypes['Loan']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>
  >
  sepolia_loanLiquidatedEvent?: Resolver<
    Maybe<ResolversTypes['LoanLiquidatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_loanLiquidatedEventArgs, 'id' | 'subgraphError'>
  >
  sepolia_loanLiquidatedEvents?: Resolver<
    Array<ResolversTypes['LoanLiquidatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_loanLiquidatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanRenegotiatedEvent?: Resolver<
    Maybe<ResolversTypes['LoanRenegotiatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_loanRenegotiatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_loanRenegotiatedEvents?: Resolver<
    Array<ResolversTypes['LoanRenegotiatedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_loanRenegotiatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanRepaidEvent?: Resolver<
    Maybe<ResolversTypes['LoanRepaidEvent']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_loanRepaidEventArgs, 'id' | 'subgraphError'>
  >
  sepolia_loanRepaidEvents?: Resolver<
    Array<ResolversTypes['LoanRepaidEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_loanRepaidEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanStartedEvent?: Resolver<
    Maybe<ResolversTypes['LoanStartedEvent']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_loanStartedEventArgs, 'id' | 'subgraphError'>
  >
  sepolia_loanStartedEvents?: Resolver<
    Array<ResolversTypes['LoanStartedEvent']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_loanStartedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_obligationReceipt?: Resolver<
    Maybe<ResolversTypes['ObligationReceipt']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_obligationReceiptArgs, 'id' | 'subgraphError'>
  >
  sepolia_obligationReceipts?: Resolver<
    Array<ResolversTypes['ObligationReceipt']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_obligationReceiptsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_promissoryNote?: Resolver<
    Maybe<ResolversTypes['PromissoryNote']>,
    ParentType,
    ContextType,
    RequireFields<Querysepolia_promissoryNoteArgs, 'id' | 'subgraphError'>
  >
  sepolia_promissoryNotes?: Resolver<
    Array<ResolversTypes['PromissoryNote']>,
    ParentType,
    ContextType,
    RequireFields<
      Querysepolia_promissoryNotesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia__meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Querysepolia__metaArgs>
  >
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  ethereum_token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'ethereum_token',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_tokenArgs, 'id' | 'subgraphError'>
  >
  ethereum_tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'ethereum_tokens',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_tokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_balance?: SubscriptionResolver<
    Maybe<ResolversTypes['Balance']>,
    'ethereum_balance',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_balanceArgs, 'id' | 'subgraphError'>
  >
  ethereum_balances?: SubscriptionResolver<
    Array<ResolversTypes['Balance']>,
    'ethereum_balances',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_balancesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'ethereum_user',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_userArgs, 'id' | 'subgraphError'>
  >
  ethereum_users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'ethereum_users',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_usersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_transfer?: SubscriptionResolver<
    Maybe<ResolversTypes['Transfer']>,
    'ethereum_transfer',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_transferArgs, 'id' | 'subgraphError'>
  >
  ethereum_transfers?: SubscriptionResolver<
    Array<ResolversTypes['Transfer']>,
    'ethereum_transfers',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_transfersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_configurationUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['ConfigurationUpdate']>,
    'ethereum_configurationUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_configurationUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_configurationUpdates?: SubscriptionResolver<
    Array<ResolversTypes['ConfigurationUpdate']>,
    'ethereum_configurationUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_configurationUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_operatingAgreementUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['OperatingAgreementUpdate']>,
    'ethereum_operatingAgreementUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_operatingAgreementUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_operatingAgreementUpdates?: SubscriptionResolver<
    Array<ResolversTypes['OperatingAgreementUpdate']>,
    'ethereum_operatingAgreementUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_operatingAgreementUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_validatorUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['ValidatorUpdate']>,
    'ethereum_validatorUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_validatorUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_validatorUpdates?: SubscriptionResolver<
    Array<ResolversTypes['ValidatorUpdate']>,
    'ethereum_validatorUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_validatorUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitMetadata?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitMetadata']>,
    'ethereum_traitMetadata',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitMetadataArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitMetadata_collection?: SubscriptionResolver<
    Array<ResolversTypes['TraitMetadata']>,
    'ethereum_traitMetadata_collection',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitMetadata_collectionArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitMetadataUriUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitMetadataUriUpdate']>,
    'ethereum_traitMetadataUriUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitMetadataUriUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitMetadataUriUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitMetadataUriUpdate']>,
    'ethereum_traitMetadataUriUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitMetadataUriUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDefinition?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDefinition']>,
    'ethereum_traitDefinition',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitDefinitionArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitDefinitions?: SubscriptionResolver<
    Array<ResolversTypes['TraitDefinition']>,
    'ethereum_traitDefinitions',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitDefinitionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitStringUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitStringUpdate']>,
    'ethereum_traitStringUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitStringUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitStringUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitStringUpdate']>,
    'ethereum_traitStringUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitStringUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDecimalUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDecimalUpdate']>,
    'ethereum_traitDecimalUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitDecimalUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitDecimalUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitDecimalUpdate']>,
    'ethereum_traitDecimalUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitDecimalUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitBooleanUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitBooleanUpdate']>,
    'ethereum_traitBooleanUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitBooleanUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_traitBooleanUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitBooleanUpdate']>,
    'ethereum_traitBooleanUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitBooleanUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitString?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitString']>,
    'ethereum_traitString',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_traitStringArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitStrings?: SubscriptionResolver<
    Array<ResolversTypes['TraitString']>,
    'ethereum_traitStrings',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitStringsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitDecimal?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDecimal']>,
    'ethereum_traitDecimal',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_traitDecimalArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitDecimals?: SubscriptionResolver<
    Array<ResolversTypes['TraitDecimal']>,
    'ethereum_traitDecimals',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitDecimalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_traitBoolean?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitBoolean']>,
    'ethereum_traitBoolean',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_traitBooleanArgs, 'id' | 'subgraphError'>
  >
  ethereum_traitBooleans?: SubscriptionResolver<
    Array<ResolversTypes['TraitBoolean']>,
    'ethereum_traitBooleans',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_traitBooleansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loan?: SubscriptionResolver<
    Maybe<ResolversTypes['Loan']>,
    'ethereum_loan',
    ParentType,
    ContextType,
    RequireFields<Subscriptionethereum_loanArgs, 'id' | 'subgraphError'>
  >
  ethereum_loans?: SubscriptionResolver<
    Array<ResolversTypes['Loan']>,
    'ethereum_loans',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanLiquidatedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanLiquidatedEvent']>,
    'ethereum_loanLiquidatedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanLiquidatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_loanLiquidatedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanLiquidatedEvent']>,
    'ethereum_loanLiquidatedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanLiquidatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanRenegotiatedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanRenegotiatedEvent']>,
    'ethereum_loanRenegotiatedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanRenegotiatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_loanRenegotiatedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanRenegotiatedEvent']>,
    'ethereum_loanRenegotiatedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanRenegotiatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanRepaidEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanRepaidEvent']>,
    'ethereum_loanRepaidEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanRepaidEventArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_loanRepaidEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanRepaidEvent']>,
    'ethereum_loanRepaidEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanRepaidEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_loanStartedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanStartedEvent']>,
    'ethereum_loanStartedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanStartedEventArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_loanStartedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanStartedEvent']>,
    'ethereum_loanStartedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_loanStartedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_obligationReceipt?: SubscriptionResolver<
    Maybe<ResolversTypes['ObligationReceipt']>,
    'ethereum_obligationReceipt',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_obligationReceiptArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_obligationReceipts?: SubscriptionResolver<
    Array<ResolversTypes['ObligationReceipt']>,
    'ethereum_obligationReceipts',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_obligationReceiptsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum_promissoryNote?: SubscriptionResolver<
    Maybe<ResolversTypes['PromissoryNote']>,
    'ethereum_promissoryNote',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_promissoryNoteArgs,
      'id' | 'subgraphError'
    >
  >
  ethereum_promissoryNotes?: SubscriptionResolver<
    Array<ResolversTypes['PromissoryNote']>,
    'ethereum_promissoryNotes',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionethereum_promissoryNotesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  ethereum__meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    'ethereum__meta',
    ParentType,
    ContextType,
    Partial<Subscriptionethereum__metaArgs>
  >
  sepolia_token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'sepolia_token',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_tokenArgs, 'id' | 'subgraphError'>
  >
  sepolia_tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'sepolia_tokens',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_tokensArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_balance?: SubscriptionResolver<
    Maybe<ResolversTypes['Balance']>,
    'sepolia_balance',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_balanceArgs, 'id' | 'subgraphError'>
  >
  sepolia_balances?: SubscriptionResolver<
    Array<ResolversTypes['Balance']>,
    'sepolia_balances',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_balancesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'sepolia_user',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_userArgs, 'id' | 'subgraphError'>
  >
  sepolia_users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'sepolia_users',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_usersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_transfer?: SubscriptionResolver<
    Maybe<ResolversTypes['Transfer']>,
    'sepolia_transfer',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_transferArgs, 'id' | 'subgraphError'>
  >
  sepolia_transfers?: SubscriptionResolver<
    Array<ResolversTypes['Transfer']>,
    'sepolia_transfers',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_transfersArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_configurationUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['ConfigurationUpdate']>,
    'sepolia_configurationUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_configurationUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_configurationUpdates?: SubscriptionResolver<
    Array<ResolversTypes['ConfigurationUpdate']>,
    'sepolia_configurationUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_configurationUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_operatingAgreementUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['OperatingAgreementUpdate']>,
    'sepolia_operatingAgreementUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_operatingAgreementUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_operatingAgreementUpdates?: SubscriptionResolver<
    Array<ResolversTypes['OperatingAgreementUpdate']>,
    'sepolia_operatingAgreementUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_operatingAgreementUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_validatorUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['ValidatorUpdate']>,
    'sepolia_validatorUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_validatorUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_validatorUpdates?: SubscriptionResolver<
    Array<ResolversTypes['ValidatorUpdate']>,
    'sepolia_validatorUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_validatorUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitMetadata?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitMetadata']>,
    'sepolia_traitMetadata',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_traitMetadataArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitMetadata_collection?: SubscriptionResolver<
    Array<ResolversTypes['TraitMetadata']>,
    'sepolia_traitMetadata_collection',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitMetadata_collectionArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitMetadataUriUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitMetadataUriUpdate']>,
    'sepolia_traitMetadataUriUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitMetadataUriUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitMetadataUriUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitMetadataUriUpdate']>,
    'sepolia_traitMetadataUriUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitMetadataUriUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDefinition?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDefinition']>,
    'sepolia_traitDefinition',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitDefinitionArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitDefinitions?: SubscriptionResolver<
    Array<ResolversTypes['TraitDefinition']>,
    'sepolia_traitDefinitions',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitDefinitionsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitStringUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitStringUpdate']>,
    'sepolia_traitStringUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitStringUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitStringUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitStringUpdate']>,
    'sepolia_traitStringUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitStringUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDecimalUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDecimalUpdate']>,
    'sepolia_traitDecimalUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitDecimalUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitDecimalUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitDecimalUpdate']>,
    'sepolia_traitDecimalUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitDecimalUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitBooleanUpdate?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitBooleanUpdate']>,
    'sepolia_traitBooleanUpdate',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitBooleanUpdateArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_traitBooleanUpdates?: SubscriptionResolver<
    Array<ResolversTypes['TraitBooleanUpdate']>,
    'sepolia_traitBooleanUpdates',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitBooleanUpdatesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitString?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitString']>,
    'sepolia_traitString',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_traitStringArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitStrings?: SubscriptionResolver<
    Array<ResolversTypes['TraitString']>,
    'sepolia_traitStrings',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitStringsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitDecimal?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitDecimal']>,
    'sepolia_traitDecimal',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_traitDecimalArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitDecimals?: SubscriptionResolver<
    Array<ResolversTypes['TraitDecimal']>,
    'sepolia_traitDecimals',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitDecimalsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_traitBoolean?: SubscriptionResolver<
    Maybe<ResolversTypes['TraitBoolean']>,
    'sepolia_traitBoolean',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_traitBooleanArgs, 'id' | 'subgraphError'>
  >
  sepolia_traitBooleans?: SubscriptionResolver<
    Array<ResolversTypes['TraitBoolean']>,
    'sepolia_traitBooleans',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_traitBooleansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loan?: SubscriptionResolver<
    Maybe<ResolversTypes['Loan']>,
    'sepolia_loan',
    ParentType,
    ContextType,
    RequireFields<Subscriptionsepolia_loanArgs, 'id' | 'subgraphError'>
  >
  sepolia_loans?: SubscriptionResolver<
    Array<ResolversTypes['Loan']>,
    'sepolia_loans',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loansArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanLiquidatedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanLiquidatedEvent']>,
    'sepolia_loanLiquidatedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanLiquidatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_loanLiquidatedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanLiquidatedEvent']>,
    'sepolia_loanLiquidatedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanLiquidatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanRenegotiatedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanRenegotiatedEvent']>,
    'sepolia_loanRenegotiatedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanRenegotiatedEventArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_loanRenegotiatedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanRenegotiatedEvent']>,
    'sepolia_loanRenegotiatedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanRenegotiatedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanRepaidEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanRepaidEvent']>,
    'sepolia_loanRepaidEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanRepaidEventArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_loanRepaidEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanRepaidEvent']>,
    'sepolia_loanRepaidEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanRepaidEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_loanStartedEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LoanStartedEvent']>,
    'sepolia_loanStartedEvent',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanStartedEventArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_loanStartedEvents?: SubscriptionResolver<
    Array<ResolversTypes['LoanStartedEvent']>,
    'sepolia_loanStartedEvents',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_loanStartedEventsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_obligationReceipt?: SubscriptionResolver<
    Maybe<ResolversTypes['ObligationReceipt']>,
    'sepolia_obligationReceipt',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_obligationReceiptArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_obligationReceipts?: SubscriptionResolver<
    Array<ResolversTypes['ObligationReceipt']>,
    'sepolia_obligationReceipts',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_obligationReceiptsArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia_promissoryNote?: SubscriptionResolver<
    Maybe<ResolversTypes['PromissoryNote']>,
    'sepolia_promissoryNote',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_promissoryNoteArgs,
      'id' | 'subgraphError'
    >
  >
  sepolia_promissoryNotes?: SubscriptionResolver<
    Array<ResolversTypes['PromissoryNote']>,
    'sepolia_promissoryNotes',
    ParentType,
    ContextType,
    RequireFields<
      Subscriptionsepolia_promissoryNotesArgs,
      'skip' | 'first' | 'subgraphError'
    >
  >
  sepolia__meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    'sepolia__meta',
    ParentType,
    ContextType,
    Partial<Subscriptionsepolia__metaArgs>
  >
}>

export type BalanceResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Balance'] = ResolversParentTypes['Balance'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  holder?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type ConfigurationUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['ConfigurationUpdate'] = ResolversParentTypes['ConfigurationUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  newValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface Int8ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8'
}

export type LoanResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Loan'] = ResolversParentTypes['Loan'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loanContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanStatus?: Resolver<ResolversTypes['LoanStatus'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  loanPrincipalAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  maximumRepaymentAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanERC20Denomination?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  loanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanInterestRateForDurationInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  loanAdminFeeInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  nftCollateralWrapper?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  loanStartTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  nftCollateralContract?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  revenueSharePartner?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  revenueShareInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  referralFeeInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  loanMaturityDate?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  loanLiquidationDate?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  totalRenegotiationFeesPaid?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  totalRenegotiationAdminFeesPaid?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  amountPaidToLender?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  adminFeePaid?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  revenueSharePaid?: Resolver<
    Maybe<ResolversTypes['BigInt']>,
    ParentType,
    ContextType
  >
  obligationReceipt?: Resolver<
    Maybe<ResolversTypes['ObligationReceipt']>,
    ParentType,
    ContextType
  >
  promissoryNotes?: Resolver<
    Maybe<Array<ResolversTypes['PromissoryNote']>>,
    ParentType,
    ContextType,
    RequireFields<LoanpromissoryNotesArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LoanLiquidatedEventResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['LoanLiquidatedEvent'] = ResolversParentTypes['LoanLiquidatedEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lender?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  loanPrincipalAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanMaturityDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanLiquidationDate?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  nftCollateralContract?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LoanRenegotiatedEventResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['LoanRenegotiatedEvent'] = ResolversParentTypes['LoanRenegotiatedEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lender?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  newLoanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  newMaximumRepaymentAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  renegotiationFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  renegotiationAdminFee?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LoanRepaidEventResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['LoanRepaidEvent'] = ResolversParentTypes['LoanRepaidEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lender?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  loanPrincipalAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  amountPaidToLender?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  adminFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  revenueShare?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  revenueSharePartner?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  nftCollateralContract?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  loanERC20Denomination?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LoanStartedEventResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['LoanStartedEvent'] = ResolversParentTypes['LoanStartedEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  lender?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  loanPrincipalAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  maximumRepaymentAmount?: Resolver<
    ResolversTypes['BigInt'],
    ParentType,
    ContextType
  >
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanERC20Denomination?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  loanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loanInterestRateForDurationInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  loanAdminFeeInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  nftCollateralWrapper?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  loanStartTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  nftCollateralContract?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  revenueSharePartner?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  revenueShareInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  referralFeeInBasisPoints?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ObligationReceiptResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['ObligationReceipt'] = ResolversParentTypes['ObligationReceipt'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  receiptTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>
  nftCollateralContract?: Resolver<
    ResolversTypes['Bytes'],
    ParentType,
    ContextType
  >
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  holder?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type OperatingAgreementUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['OperatingAgreementUpdate'] = ResolversParentTypes['OperatingAgreementUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  newValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PromissoryNoteResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['PromissoryNote'] = ResolversParentTypes['PromissoryNote'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  noteTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType>
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  holder?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface TimestampScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp'
}

export type TokenResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Token'] = ResolversParentTypes['Token'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  mintTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  booleanTraits?: Resolver<
    Maybe<Array<ResolversTypes['TraitBoolean']>>,
    ParentType,
    ContextType,
    RequireFields<TokenbooleanTraitsArgs, 'skip' | 'first'>
  >
  configuration?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  supply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  balances?: Resolver<
    Maybe<Array<ResolversTypes['Balance']>>,
    ParentType,
    ContextType,
    RequireFields<TokenbalancesArgs, 'skip' | 'first'>
  >
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  decimalTraits?: Resolver<
    Maybe<Array<ResolversTypes['TraitDecimal']>>,
    ParentType,
    ContextType,
    RequireFields<TokendecimalTraitsArgs, 'skip' | 'first'>
  >
  definition?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  operatingAgreement?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >
  stringTraits?: Resolver<
    Maybe<Array<ResolversTypes['TraitString']>>,
    ParentType,
    ContextType,
    RequireFields<TokenstringTraitsArgs, 'skip' | 'first'>
  >
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transfers?: Resolver<
    Maybe<Array<ResolversTypes['Transfer']>>,
    ParentType,
    ContextType,
    RequireFields<TokentransfersArgs, 'skip' | 'first'>
  >
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  validator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitBooleanResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitBoolean'] = ResolversParentTypes['TraitBoolean'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitBooleanUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitBooleanUpdate'] = ResolversParentTypes['TraitBooleanUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  newValue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitDecimalResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitDecimal'] = ResolversParentTypes['TraitDecimal'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitDecimalUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitDecimalUpdate'] = ResolversParentTypes['TraitDecimalUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  newValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitDefinitionResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitDefinition'] = ResolversParentTypes['TraitDefinition'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['TraitType'], ParentType, ContextType>
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitMetadataResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitMetadata'] = ResolversParentTypes['TraitMetadata'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decoded?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitMetadataUriUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitMetadataUriUpdate'] = ResolversParentTypes['TraitMetadataUriUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decoded?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitStringResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitString'] = ResolversParentTypes['TraitString'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TraitStringUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['TraitStringUpdate'] = ResolversParentTypes['TraitStringUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  newValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TransferResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  tokens?: Resolver<
    Maybe<Array<ResolversTypes['Balance']>>,
    ParentType,
    ContextType,
    RequireFields<UsertokensArgs, 'skip' | 'first'>
  >
  created?: Resolver<
    Maybe<Array<ResolversTypes['Token']>>,
    ParentType,
    ContextType,
    RequireFields<UsercreatedArgs, 'skip' | 'first'>
  >
  obligationReceipts?: Resolver<
    Maybe<Array<ResolversTypes['ObligationReceipt']>>,
    ParentType,
    ContextType,
    RequireFields<UserobligationReceiptsArgs, 'skip' | 'first'>
  >
  promissoryNotes?: Resolver<
    Maybe<Array<ResolversTypes['PromissoryNote']>>,
    ParentType,
    ContextType,
    RequireFields<UserpromissoryNotesArgs, 'skip' | 'first'>
  >
  lending?: Resolver<
    Maybe<Array<ResolversTypes['Loan']>>,
    ParentType,
    ContextType,
    RequireFields<UserlendingArgs, 'skip' | 'first'>
  >
  borrowing?: Resolver<
    Maybe<Array<ResolversTypes['Loan']>>,
    ParentType,
    ContextType,
    RequireFields<UserborrowingArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ValidatorUpdateResolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['ValidatorUpdate'] = ResolversParentTypes['ValidatorUpdate'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  newValue?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_'],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends
    ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_'],
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Balance?: BalanceResolvers<ContextType>
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  ConfigurationUpdate?: ConfigurationUpdateResolvers<ContextType>
  Int8?: GraphQLScalarType
  Loan?: LoanResolvers<ContextType>
  LoanLiquidatedEvent?: LoanLiquidatedEventResolvers<ContextType>
  LoanRenegotiatedEvent?: LoanRenegotiatedEventResolvers<ContextType>
  LoanRepaidEvent?: LoanRepaidEventResolvers<ContextType>
  LoanStartedEvent?: LoanStartedEventResolvers<ContextType>
  ObligationReceipt?: ObligationReceiptResolvers<ContextType>
  OperatingAgreementUpdate?: OperatingAgreementUpdateResolvers<ContextType>
  PromissoryNote?: PromissoryNoteResolvers<ContextType>
  Timestamp?: GraphQLScalarType
  Token?: TokenResolvers<ContextType>
  TraitBoolean?: TraitBooleanResolvers<ContextType>
  TraitBooleanUpdate?: TraitBooleanUpdateResolvers<ContextType>
  TraitDecimal?: TraitDecimalResolvers<ContextType>
  TraitDecimalUpdate?: TraitDecimalUpdateResolvers<ContextType>
  TraitDefinition?: TraitDefinitionResolvers<ContextType>
  TraitMetadata?: TraitMetadataResolvers<ContextType>
  TraitMetadataUriUpdate?: TraitMetadataUriUpdateResolvers<ContextType>
  TraitString?: TraitStringResolvers<ContextType>
  TraitStringUpdate?: TraitStringUpdateResolvers<ContextType>
  Transfer?: TransferResolvers<ContextType>
  User?: UserResolvers<ContextType>
  ValidatorUpdate?: ValidatorUpdateResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

export type MeshContext = FabricaEthereumTypes.Context &
  FabricaSepoliaTypes.Context &
  BaseMeshContext

const baseDir = pathModule.join(
  typeof __dirname === 'string' ? __dirname : '/',
  '..',
)

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (
    pathModule.isAbsolute(moduleId)
      ? pathModule.relative(baseDir, moduleId)
      : moduleId
  )
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '')
  switch (relativeModuleId) {
    case '.graphclient/sources/fabrica-sepolia/introspectionSchema':
      return Promise.resolve(importedModule$0) as T

    case '.graphclient/sources/fabrica-ethereum/introspectionSchema':
      return Promise.resolve(importedModule$1) as T

    default:
      return Promise.reject(
        new Error(`Cannot find module '${relativeModuleId}'.`),
      )
  }
}

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'ts',
  }),
  {
    readonly: true,
    validate: false,
  },
)

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub()
  const sourcesStore = rootStore.child('sources')
  const logger = new DefaultLogger('GraphClient')
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
    logger,
  } as any)

  const sources: MeshResolvedSource[] = []
  const transforms: MeshTransform[] = []
  const additionalEnvelopPlugins: MeshPlugin<any>[] = []
  const fabricaEthereumTransforms = []
  const fabricaSepoliaTransforms = []
  const additionalTypeDefs = [] as any[]
  const fabricaEthereumHandler = new GraphqlHandler({
    name: 'fabrica-ethereum',
    config: {
      endpoint:
        'https://subgraph.satsuma-prod.com/0f3e6e7bbd04/fabrica/fabrica-noipfs-ethereum/version/v0.0.9/api',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('fabrica-ethereum'),
    logger: logger.child('fabrica-ethereum'),
    importFn,
  })
  const fabricaSepoliaHandler = new GraphqlHandler({
    name: 'fabrica-sepolia',
    config: {
      endpoint:
        'https://subgraph.satsuma-prod.com/0f3e6e7bbd04/fabrica/fabrica-noipfs-sepolia/version/v0.0.20/api',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('fabrica-sepolia'),
    logger: logger.child('fabrica-sepolia'),
    importFn,
  })
  fabricaEthereumTransforms[1] = new PrefixTransform({
    apiName: 'fabrica-ethereum',
    config: {
      includeRootOperations: true,
      includeTypes: false,
      mode: 'bare | wrap',
      value: 'ethereum_',
    },
    baseDir,
    cache,
    pubsub,
    importFn,
    logger,
  })
  fabricaSepoliaTransforms[1] = new PrefixTransform({
    apiName: 'fabrica-sepolia',
    config: {
      includeRootOperations: true,
      includeTypes: false,
      mode: 'bare | wrap',
      value: 'sepolia_',
    },
    baseDir,
    cache,
    pubsub,
    importFn,
    logger,
  })
  fabricaEthereumTransforms[0] = new AutoPaginationTransform({
    apiName: 'fabrica-ethereum',
    config: { validateSchema: true, limitOfRecords: 1000 },
    baseDir,
    cache,
    pubsub,
    importFn,
    logger,
  })
  fabricaSepoliaTransforms[0] = new AutoPaginationTransform({
    apiName: 'fabrica-sepolia',
    config: { validateSchema: true, limitOfRecords: 1000 },
    baseDir,
    cache,
    pubsub,
    importFn,
    logger,
  })
  sources[0] = {
    name: 'fabrica-ethereum',
    handler: fabricaEthereumHandler,
    transforms: fabricaEthereumTransforms,
  }
  sources[1] = {
    name: 'fabrica-sepolia',
    handler: fabricaSepoliaHandler,
    transforms: fabricaSepoliaTransforms,
  }
  const additionalResolvers = [] as any[]
  const merger = new (StitchingMerger as any)({
    cache,
    pubsub,
    logger: logger.child('stitchingMerger'),
    store: rootStore.child('stitchingMerger'),
  })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return []
    },
    fetchFn,
  }
}

export function createBuiltMeshHTTPHandler<
  TServerContext = {},
>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined

export const pollingInterval = null

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
          .then((meshOptions) => getMesh(meshOptions))
          .then((newMesh) =>
            meshInstance$.then((oldMesh) => {
              oldMesh.destroy()
              meshInstance$ = Promise.resolve(newMesh)
            }),
          )
          .catch((err) => {
            console.error(
              'Mesh polling failed so the existing version will be used:',
              err,
            )
          })
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh(meshOptions))
      .then((mesh) => {
        const id = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined
          mesh.pubsub.unsubscribe(id)
        })
        return mesh
      })
  }
  return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) =>
  getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) =>
  getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
