// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import PrefixTransform from "@graphql-mesh/transform-prefix";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { FabricaEthereumTypes } from './sources/fabrica-ethereum/types';
import type { FabricaSepoliaTypes } from './sources/fabrica-sepolia/types';
import type { FabricaBaseSepoliaTypes } from './sources/fabrica-base-sepolia/types';
import type { MetaStreetSepoliaTypes } from './sources/meta-street-sepolia/types';
import type { MetaStreetEthereumTypes } from './sources/meta-street-ethereum/types';
import * as importedModule$0 from "./sources/fabrica-ethereum/introspectionSchema";
import * as importedModule$1 from "./sources/fabrica-base-sepolia/introspectionSchema";
import * as importedModule$2 from "./sources/meta-street-ethereum/introspectionSchema";
import * as importedModule$3 from "./sources/meta-street-sepolia/introspectionSchema";
import * as importedModule$4 from "./sources/fabrica-sepolia/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Query = {
  ethereum_token?: Maybe<Token>;
  ethereum_tokens: Array<Token>;
  ethereum_balance?: Maybe<Balance>;
  ethereum_balances: Array<Balance>;
  ethereum_user?: Maybe<User>;
  ethereum_users: Array<User>;
  ethereum_transfer?: Maybe<Transfer>;
  ethereum_transfers: Array<Transfer>;
  ethereum_configurationUpdate?: Maybe<ConfigurationUpdate>;
  ethereum_configurationUpdates: Array<ConfigurationUpdate>;
  ethereum_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  ethereum_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  ethereum_validatorUpdate?: Maybe<ValidatorUpdate>;
  ethereum_validatorUpdates: Array<ValidatorUpdate>;
  ethereum_traitMetadata?: Maybe<TraitMetadata>;
  ethereum_traitMetadata_collection: Array<TraitMetadata>;
  ethereum_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  ethereum_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  ethereum_traitDefinition?: Maybe<TraitDefinition>;
  ethereum_traitDefinitions: Array<TraitDefinition>;
  ethereum_traitStringUpdate?: Maybe<TraitStringUpdate>;
  ethereum_traitStringUpdates: Array<TraitStringUpdate>;
  ethereum_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  ethereum_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  ethereum_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  ethereum_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  ethereum_traitString?: Maybe<TraitString>;
  ethereum_traitStrings: Array<TraitString>;
  ethereum_traitDecimal?: Maybe<TraitDecimal>;
  ethereum_traitDecimals: Array<TraitDecimal>;
  ethereum_traitBoolean?: Maybe<TraitBoolean>;
  ethereum_traitBooleans: Array<TraitBoolean>;
  ethereum_loan?: Maybe<Loan>;
  ethereum_loans: Array<Loan>;
  ethereum_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  ethereum_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  ethereum_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  ethereum_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  ethereum_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  ethereum_loanRepaidEvents: Array<LoanRepaidEvent>;
  ethereum_loanStartedEvent?: Maybe<LoanStartedEvent>;
  ethereum_loanStartedEvents: Array<LoanStartedEvent>;
  ethereum_obligationReceipt?: Maybe<ObligationReceipt>;
  ethereum_obligationReceipts: Array<ObligationReceipt>;
  ethereum_promissoryNote?: Maybe<PromissoryNote>;
  ethereum_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  ethereum__meta?: Maybe<_Meta_>;
  meta_street_ethereum_pool?: Maybe<Pool>;
  meta_street_ethereum_pools: Array<Pool>;
  meta_street_ethereum_poolDayData?: Maybe<PoolDayData>;
  meta_street_ethereum_poolDayDatas: Array<PoolDayData>;
  meta_street_ethereum_collateralToken?: Maybe<CollateralToken>;
  meta_street_ethereum_collateralTokens: Array<CollateralToken>;
  meta_street_ethereum_currencyToken?: Maybe<CurrencyToken>;
  meta_street_ethereum_currencyTokens: Array<CurrencyToken>;
  meta_street_ethereum_tick?: Maybe<Tick>;
  meta_street_ethereum_ticks: Array<Tick>;
  meta_street_ethereum_deposit?: Maybe<Deposit>;
  meta_street_ethereum_deposits: Array<Deposit>;
  meta_street_ethereum_redemption?: Maybe<Redemption>;
  meta_street_ethereum_redemptions: Array<Redemption>;
  meta_street_ethereum_bundle?: Maybe<Bundle>;
  meta_street_ethereum_bundles: Array<Bundle>;
  meta_street_ethereum_batch?: Maybe<Batch>;
  meta_street_ethereum_batches: Array<Batch>;
  meta_street_ethereum_loan?: Maybe<Loan>;
  meta_street_ethereum_loans: Array<Loan>;
  meta_street_ethereum_poolEvent?: Maybe<PoolEvent>;
  meta_street_ethereum_poolEvents: Array<PoolEvent>;
  meta_street_ethereum_loanOriginated?: Maybe<LoanOriginated>;
  meta_street_ethereum_loanOriginateds: Array<LoanOriginated>;
  meta_street_ethereum_loanRepaid?: Maybe<LoanRepaid>;
  meta_street_ethereum_loanRepaids: Array<LoanRepaid>;
  meta_street_ethereum_loanLiquidated?: Maybe<LoanLiquidated>;
  meta_street_ethereum_loanLiquidateds: Array<LoanLiquidated>;
  meta_street_ethereum_collateralLiquidated?: Maybe<CollateralLiquidated>;
  meta_street_ethereum_collateralLiquidateds: Array<CollateralLiquidated>;
  meta_street_ethereum_deposited?: Maybe<Deposited>;
  meta_street_ethereum_depositeds: Array<Deposited>;
  meta_street_ethereum_redeemed?: Maybe<Redeemed>;
  meta_street_ethereum_redeemeds: Array<Redeemed>;
  meta_street_ethereum_withdrawn?: Maybe<Withdrawn>;
  meta_street_ethereum_withdrawns: Array<Withdrawn>;
  meta_street_ethereum_tokenCreated?: Maybe<TokenCreated>;
  meta_street_ethereum_tokenCreateds: Array<TokenCreated>;
  meta_street_ethereum_transferred?: Maybe<Transferred>;
  meta_street_ethereum_transferreds: Array<Transferred>;
  meta_street_ethereum_liquidation?: Maybe<Liquidation>;
  meta_street_ethereum_liquidations: Array<Liquidation>;
  meta_street_ethereum_auction?: Maybe<Auction>;
  meta_street_ethereum_auctions: Array<Auction>;
  meta_street_ethereum_bid?: Maybe<Bid>;
  meta_street_ethereum_bids: Array<Bid>;
  /** Access to subgraph metadata */
  meta_street_ethereum__meta?: Maybe<_Meta_>;
  sepolia_token?: Maybe<Token>;
  sepolia_tokens: Array<Token>;
  sepolia_balance?: Maybe<Balance>;
  sepolia_balances: Array<Balance>;
  sepolia_user?: Maybe<User>;
  sepolia_users: Array<User>;
  sepolia_transfer?: Maybe<Transfer>;
  sepolia_transfers: Array<Transfer>;
  sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>;
  sepolia_configurationUpdates: Array<ConfigurationUpdate>;
  sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  sepolia_validatorUpdate?: Maybe<ValidatorUpdate>;
  sepolia_validatorUpdates: Array<ValidatorUpdate>;
  sepolia_traitMetadata?: Maybe<TraitMetadata>;
  sepolia_traitMetadata_collection: Array<TraitMetadata>;
  sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  sepolia_traitDefinition?: Maybe<TraitDefinition>;
  sepolia_traitDefinitions: Array<TraitDefinition>;
  sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>;
  sepolia_traitStringUpdates: Array<TraitStringUpdate>;
  sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  sepolia_traitString?: Maybe<TraitString>;
  sepolia_traitStrings: Array<TraitString>;
  sepolia_traitDecimal?: Maybe<TraitDecimal>;
  sepolia_traitDecimals: Array<TraitDecimal>;
  sepolia_traitBoolean?: Maybe<TraitBoolean>;
  sepolia_traitBooleans: Array<TraitBoolean>;
  sepolia_loan?: Maybe<Loan>;
  sepolia_loans: Array<Loan>;
  sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  sepolia_loanRepaidEvents: Array<LoanRepaidEvent>;
  sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>;
  sepolia_loanStartedEvents: Array<LoanStartedEvent>;
  sepolia_obligationReceipt?: Maybe<ObligationReceipt>;
  sepolia_obligationReceipts: Array<ObligationReceipt>;
  sepolia_promissoryNote?: Maybe<PromissoryNote>;
  sepolia_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  sepolia__meta?: Maybe<_Meta_>;
  meta_street_sepolia_pool?: Maybe<Pool>;
  meta_street_sepolia_pools: Array<Pool>;
  meta_street_sepolia_poolDayData?: Maybe<PoolDayData>;
  meta_street_sepolia_poolDayDatas: Array<PoolDayData>;
  meta_street_sepolia_collateralToken?: Maybe<CollateralToken>;
  meta_street_sepolia_collateralTokens: Array<CollateralToken>;
  meta_street_sepolia_currencyToken?: Maybe<CurrencyToken>;
  meta_street_sepolia_currencyTokens: Array<CurrencyToken>;
  meta_street_sepolia_tick?: Maybe<Tick>;
  meta_street_sepolia_ticks: Array<Tick>;
  meta_street_sepolia_deposit?: Maybe<Deposit>;
  meta_street_sepolia_deposits: Array<Deposit>;
  meta_street_sepolia_redemption?: Maybe<Redemption>;
  meta_street_sepolia_redemptions: Array<Redemption>;
  meta_street_sepolia_bundle?: Maybe<Bundle>;
  meta_street_sepolia_bundles: Array<Bundle>;
  meta_street_sepolia_batch?: Maybe<Batch>;
  meta_street_sepolia_batches: Array<Batch>;
  meta_street_sepolia_loan?: Maybe<Loan>;
  meta_street_sepolia_loans: Array<Loan>;
  meta_street_sepolia_poolEvent?: Maybe<PoolEvent>;
  meta_street_sepolia_poolEvents: Array<PoolEvent>;
  meta_street_sepolia_loanOriginated?: Maybe<LoanOriginated>;
  meta_street_sepolia_loanOriginateds: Array<LoanOriginated>;
  meta_street_sepolia_loanRepaid?: Maybe<LoanRepaid>;
  meta_street_sepolia_loanRepaids: Array<LoanRepaid>;
  meta_street_sepolia_loanLiquidated?: Maybe<LoanLiquidated>;
  meta_street_sepolia_loanLiquidateds: Array<LoanLiquidated>;
  meta_street_sepolia_collateralLiquidated?: Maybe<CollateralLiquidated>;
  meta_street_sepolia_collateralLiquidateds: Array<CollateralLiquidated>;
  meta_street_sepolia_deposited?: Maybe<Deposited>;
  meta_street_sepolia_depositeds: Array<Deposited>;
  meta_street_sepolia_redeemed?: Maybe<Redeemed>;
  meta_street_sepolia_redeemeds: Array<Redeemed>;
  meta_street_sepolia_withdrawn?: Maybe<Withdrawn>;
  meta_street_sepolia_withdrawns: Array<Withdrawn>;
  meta_street_sepolia_tokenCreated?: Maybe<TokenCreated>;
  meta_street_sepolia_tokenCreateds: Array<TokenCreated>;
  meta_street_sepolia_transferred?: Maybe<Transferred>;
  meta_street_sepolia_transferreds: Array<Transferred>;
  meta_street_sepolia_liquidation?: Maybe<Liquidation>;
  meta_street_sepolia_liquidations: Array<Liquidation>;
  meta_street_sepolia_auction?: Maybe<Auction>;
  meta_street_sepolia_auctions: Array<Auction>;
  meta_street_sepolia_bid?: Maybe<Bid>;
  meta_street_sepolia_bids: Array<Bid>;
  /** Access to subgraph metadata */
  meta_street_sepolia__meta?: Maybe<_Meta_>;
  base_sepolia_token?: Maybe<Token>;
  base_sepolia_tokens: Array<Token>;
  base_sepolia_balance?: Maybe<Balance>;
  base_sepolia_balances: Array<Balance>;
  base_sepolia_user?: Maybe<User>;
  base_sepolia_users: Array<User>;
  base_sepolia_transfer?: Maybe<Transfer>;
  base_sepolia_transfers: Array<Transfer>;
  base_sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>;
  base_sepolia_configurationUpdates: Array<ConfigurationUpdate>;
  base_sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  base_sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  base_sepolia_validatorUpdate?: Maybe<ValidatorUpdate>;
  base_sepolia_validatorUpdates: Array<ValidatorUpdate>;
  base_sepolia_traitMetadata?: Maybe<TraitMetadata>;
  base_sepolia_traitMetadata_collection: Array<TraitMetadata>;
  base_sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  base_sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  base_sepolia_traitDefinition?: Maybe<TraitDefinition>;
  base_sepolia_traitDefinitions: Array<TraitDefinition>;
  base_sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>;
  base_sepolia_traitStringUpdates: Array<TraitStringUpdate>;
  base_sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  base_sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  base_sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  base_sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  base_sepolia_traitString?: Maybe<TraitString>;
  base_sepolia_traitStrings: Array<TraitString>;
  base_sepolia_traitDecimal?: Maybe<TraitDecimal>;
  base_sepolia_traitDecimals: Array<TraitDecimal>;
  base_sepolia_traitBoolean?: Maybe<TraitBoolean>;
  base_sepolia_traitBooleans: Array<TraitBoolean>;
  base_sepolia_loan?: Maybe<Loan>;
  base_sepolia_loans: Array<Loan>;
  base_sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  base_sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  base_sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  base_sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  base_sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  base_sepolia_loanRepaidEvents: Array<LoanRepaidEvent>;
  base_sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>;
  base_sepolia_loanStartedEvents: Array<LoanStartedEvent>;
  base_sepolia_obligationReceipt?: Maybe<ObligationReceipt>;
  base_sepolia_obligationReceipts: Array<ObligationReceipt>;
  base_sepolia_promissoryNote?: Maybe<PromissoryNote>;
  base_sepolia_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  base_sepolia__meta?: Maybe<_Meta_>;
};


export type Queryethereum_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryethereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Querymeta_street_ethereum_poolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_poolDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_collateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_collateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_currencyTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_currencyTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_redemptionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_redemptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_bundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_batchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_batchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_poolEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_poolEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanOriginatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanOriginatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanRepaidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanRepaidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_loanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_collateralLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_collateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_depositedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_depositedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_redeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_redeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_withdrawnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_withdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_tokenCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_tokenCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_transferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_transferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_liquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_liquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_auctionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_auctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_bidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum_bidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_ethereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Querysepolia_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querysepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Querymeta_street_sepolia_poolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_poolDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_collateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_collateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_currencyTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_currencyTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_redemptionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_redemptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_bundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_batchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_batchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_poolEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_poolEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanOriginatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanOriginatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanRepaidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanRepaidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_loanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_collateralLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_collateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_depositedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_depositedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_redeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_redeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_withdrawnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_withdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_tokenCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_tokenCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_transferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_transferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_liquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_liquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_auctionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_auctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_bidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia_bidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymeta_street_sepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Querybase_sepolia_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querybase_sepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  ethereum_token?: Maybe<Token>;
  ethereum_tokens: Array<Token>;
  ethereum_balance?: Maybe<Balance>;
  ethereum_balances: Array<Balance>;
  ethereum_user?: Maybe<User>;
  ethereum_users: Array<User>;
  ethereum_transfer?: Maybe<Transfer>;
  ethereum_transfers: Array<Transfer>;
  ethereum_configurationUpdate?: Maybe<ConfigurationUpdate>;
  ethereum_configurationUpdates: Array<ConfigurationUpdate>;
  ethereum_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  ethereum_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  ethereum_validatorUpdate?: Maybe<ValidatorUpdate>;
  ethereum_validatorUpdates: Array<ValidatorUpdate>;
  ethereum_traitMetadata?: Maybe<TraitMetadata>;
  ethereum_traitMetadata_collection: Array<TraitMetadata>;
  ethereum_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  ethereum_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  ethereum_traitDefinition?: Maybe<TraitDefinition>;
  ethereum_traitDefinitions: Array<TraitDefinition>;
  ethereum_traitStringUpdate?: Maybe<TraitStringUpdate>;
  ethereum_traitStringUpdates: Array<TraitStringUpdate>;
  ethereum_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  ethereum_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  ethereum_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  ethereum_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  ethereum_traitString?: Maybe<TraitString>;
  ethereum_traitStrings: Array<TraitString>;
  ethereum_traitDecimal?: Maybe<TraitDecimal>;
  ethereum_traitDecimals: Array<TraitDecimal>;
  ethereum_traitBoolean?: Maybe<TraitBoolean>;
  ethereum_traitBooleans: Array<TraitBoolean>;
  ethereum_loan?: Maybe<Loan>;
  ethereum_loans: Array<Loan>;
  ethereum_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  ethereum_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  ethereum_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  ethereum_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  ethereum_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  ethereum_loanRepaidEvents: Array<LoanRepaidEvent>;
  ethereum_loanStartedEvent?: Maybe<LoanStartedEvent>;
  ethereum_loanStartedEvents: Array<LoanStartedEvent>;
  ethereum_obligationReceipt?: Maybe<ObligationReceipt>;
  ethereum_obligationReceipts: Array<ObligationReceipt>;
  ethereum_promissoryNote?: Maybe<PromissoryNote>;
  ethereum_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  ethereum__meta?: Maybe<_Meta_>;
  meta_street_ethereum_pool?: Maybe<Pool>;
  meta_street_ethereum_pools: Array<Pool>;
  meta_street_ethereum_poolDayData?: Maybe<PoolDayData>;
  meta_street_ethereum_poolDayDatas: Array<PoolDayData>;
  meta_street_ethereum_collateralToken?: Maybe<CollateralToken>;
  meta_street_ethereum_collateralTokens: Array<CollateralToken>;
  meta_street_ethereum_currencyToken?: Maybe<CurrencyToken>;
  meta_street_ethereum_currencyTokens: Array<CurrencyToken>;
  meta_street_ethereum_tick?: Maybe<Tick>;
  meta_street_ethereum_ticks: Array<Tick>;
  meta_street_ethereum_deposit?: Maybe<Deposit>;
  meta_street_ethereum_deposits: Array<Deposit>;
  meta_street_ethereum_redemption?: Maybe<Redemption>;
  meta_street_ethereum_redemptions: Array<Redemption>;
  meta_street_ethereum_bundle?: Maybe<Bundle>;
  meta_street_ethereum_bundles: Array<Bundle>;
  meta_street_ethereum_batch?: Maybe<Batch>;
  meta_street_ethereum_batches: Array<Batch>;
  meta_street_ethereum_loan?: Maybe<Loan>;
  meta_street_ethereum_loans: Array<Loan>;
  meta_street_ethereum_poolEvent?: Maybe<PoolEvent>;
  meta_street_ethereum_poolEvents: Array<PoolEvent>;
  meta_street_ethereum_loanOriginated?: Maybe<LoanOriginated>;
  meta_street_ethereum_loanOriginateds: Array<LoanOriginated>;
  meta_street_ethereum_loanRepaid?: Maybe<LoanRepaid>;
  meta_street_ethereum_loanRepaids: Array<LoanRepaid>;
  meta_street_ethereum_loanLiquidated?: Maybe<LoanLiquidated>;
  meta_street_ethereum_loanLiquidateds: Array<LoanLiquidated>;
  meta_street_ethereum_collateralLiquidated?: Maybe<CollateralLiquidated>;
  meta_street_ethereum_collateralLiquidateds: Array<CollateralLiquidated>;
  meta_street_ethereum_deposited?: Maybe<Deposited>;
  meta_street_ethereum_depositeds: Array<Deposited>;
  meta_street_ethereum_redeemed?: Maybe<Redeemed>;
  meta_street_ethereum_redeemeds: Array<Redeemed>;
  meta_street_ethereum_withdrawn?: Maybe<Withdrawn>;
  meta_street_ethereum_withdrawns: Array<Withdrawn>;
  meta_street_ethereum_tokenCreated?: Maybe<TokenCreated>;
  meta_street_ethereum_tokenCreateds: Array<TokenCreated>;
  meta_street_ethereum_transferred?: Maybe<Transferred>;
  meta_street_ethereum_transferreds: Array<Transferred>;
  meta_street_ethereum_liquidation?: Maybe<Liquidation>;
  meta_street_ethereum_liquidations: Array<Liquidation>;
  meta_street_ethereum_auction?: Maybe<Auction>;
  meta_street_ethereum_auctions: Array<Auction>;
  meta_street_ethereum_bid?: Maybe<Bid>;
  meta_street_ethereum_bids: Array<Bid>;
  /** Access to subgraph metadata */
  meta_street_ethereum__meta?: Maybe<_Meta_>;
  sepolia_token?: Maybe<Token>;
  sepolia_tokens: Array<Token>;
  sepolia_balance?: Maybe<Balance>;
  sepolia_balances: Array<Balance>;
  sepolia_user?: Maybe<User>;
  sepolia_users: Array<User>;
  sepolia_transfer?: Maybe<Transfer>;
  sepolia_transfers: Array<Transfer>;
  sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>;
  sepolia_configurationUpdates: Array<ConfigurationUpdate>;
  sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  sepolia_validatorUpdate?: Maybe<ValidatorUpdate>;
  sepolia_validatorUpdates: Array<ValidatorUpdate>;
  sepolia_traitMetadata?: Maybe<TraitMetadata>;
  sepolia_traitMetadata_collection: Array<TraitMetadata>;
  sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  sepolia_traitDefinition?: Maybe<TraitDefinition>;
  sepolia_traitDefinitions: Array<TraitDefinition>;
  sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>;
  sepolia_traitStringUpdates: Array<TraitStringUpdate>;
  sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  sepolia_traitString?: Maybe<TraitString>;
  sepolia_traitStrings: Array<TraitString>;
  sepolia_traitDecimal?: Maybe<TraitDecimal>;
  sepolia_traitDecimals: Array<TraitDecimal>;
  sepolia_traitBoolean?: Maybe<TraitBoolean>;
  sepolia_traitBooleans: Array<TraitBoolean>;
  sepolia_loan?: Maybe<Loan>;
  sepolia_loans: Array<Loan>;
  sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  sepolia_loanRepaidEvents: Array<LoanRepaidEvent>;
  sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>;
  sepolia_loanStartedEvents: Array<LoanStartedEvent>;
  sepolia_obligationReceipt?: Maybe<ObligationReceipt>;
  sepolia_obligationReceipts: Array<ObligationReceipt>;
  sepolia_promissoryNote?: Maybe<PromissoryNote>;
  sepolia_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  sepolia__meta?: Maybe<_Meta_>;
  meta_street_sepolia_pool?: Maybe<Pool>;
  meta_street_sepolia_pools: Array<Pool>;
  meta_street_sepolia_poolDayData?: Maybe<PoolDayData>;
  meta_street_sepolia_poolDayDatas: Array<PoolDayData>;
  meta_street_sepolia_collateralToken?: Maybe<CollateralToken>;
  meta_street_sepolia_collateralTokens: Array<CollateralToken>;
  meta_street_sepolia_currencyToken?: Maybe<CurrencyToken>;
  meta_street_sepolia_currencyTokens: Array<CurrencyToken>;
  meta_street_sepolia_tick?: Maybe<Tick>;
  meta_street_sepolia_ticks: Array<Tick>;
  meta_street_sepolia_deposit?: Maybe<Deposit>;
  meta_street_sepolia_deposits: Array<Deposit>;
  meta_street_sepolia_redemption?: Maybe<Redemption>;
  meta_street_sepolia_redemptions: Array<Redemption>;
  meta_street_sepolia_bundle?: Maybe<Bundle>;
  meta_street_sepolia_bundles: Array<Bundle>;
  meta_street_sepolia_batch?: Maybe<Batch>;
  meta_street_sepolia_batches: Array<Batch>;
  meta_street_sepolia_loan?: Maybe<Loan>;
  meta_street_sepolia_loans: Array<Loan>;
  meta_street_sepolia_poolEvent?: Maybe<PoolEvent>;
  meta_street_sepolia_poolEvents: Array<PoolEvent>;
  meta_street_sepolia_loanOriginated?: Maybe<LoanOriginated>;
  meta_street_sepolia_loanOriginateds: Array<LoanOriginated>;
  meta_street_sepolia_loanRepaid?: Maybe<LoanRepaid>;
  meta_street_sepolia_loanRepaids: Array<LoanRepaid>;
  meta_street_sepolia_loanLiquidated?: Maybe<LoanLiquidated>;
  meta_street_sepolia_loanLiquidateds: Array<LoanLiquidated>;
  meta_street_sepolia_collateralLiquidated?: Maybe<CollateralLiquidated>;
  meta_street_sepolia_collateralLiquidateds: Array<CollateralLiquidated>;
  meta_street_sepolia_deposited?: Maybe<Deposited>;
  meta_street_sepolia_depositeds: Array<Deposited>;
  meta_street_sepolia_redeemed?: Maybe<Redeemed>;
  meta_street_sepolia_redeemeds: Array<Redeemed>;
  meta_street_sepolia_withdrawn?: Maybe<Withdrawn>;
  meta_street_sepolia_withdrawns: Array<Withdrawn>;
  meta_street_sepolia_tokenCreated?: Maybe<TokenCreated>;
  meta_street_sepolia_tokenCreateds: Array<TokenCreated>;
  meta_street_sepolia_transferred?: Maybe<Transferred>;
  meta_street_sepolia_transferreds: Array<Transferred>;
  meta_street_sepolia_liquidation?: Maybe<Liquidation>;
  meta_street_sepolia_liquidations: Array<Liquidation>;
  meta_street_sepolia_auction?: Maybe<Auction>;
  meta_street_sepolia_auctions: Array<Auction>;
  meta_street_sepolia_bid?: Maybe<Bid>;
  meta_street_sepolia_bids: Array<Bid>;
  /** Access to subgraph metadata */
  meta_street_sepolia__meta?: Maybe<_Meta_>;
  base_sepolia_token?: Maybe<Token>;
  base_sepolia_tokens: Array<Token>;
  base_sepolia_balance?: Maybe<Balance>;
  base_sepolia_balances: Array<Balance>;
  base_sepolia_user?: Maybe<User>;
  base_sepolia_users: Array<User>;
  base_sepolia_transfer?: Maybe<Transfer>;
  base_sepolia_transfers: Array<Transfer>;
  base_sepolia_configurationUpdate?: Maybe<ConfigurationUpdate>;
  base_sepolia_configurationUpdates: Array<ConfigurationUpdate>;
  base_sepolia_operatingAgreementUpdate?: Maybe<OperatingAgreementUpdate>;
  base_sepolia_operatingAgreementUpdates: Array<OperatingAgreementUpdate>;
  base_sepolia_validatorUpdate?: Maybe<ValidatorUpdate>;
  base_sepolia_validatorUpdates: Array<ValidatorUpdate>;
  base_sepolia_traitMetadata?: Maybe<TraitMetadata>;
  base_sepolia_traitMetadata_collection: Array<TraitMetadata>;
  base_sepolia_traitMetadataUriUpdate?: Maybe<TraitMetadataUriUpdate>;
  base_sepolia_traitMetadataUriUpdates: Array<TraitMetadataUriUpdate>;
  base_sepolia_traitDefinition?: Maybe<TraitDefinition>;
  base_sepolia_traitDefinitions: Array<TraitDefinition>;
  base_sepolia_traitStringUpdate?: Maybe<TraitStringUpdate>;
  base_sepolia_traitStringUpdates: Array<TraitStringUpdate>;
  base_sepolia_traitDecimalUpdate?: Maybe<TraitDecimalUpdate>;
  base_sepolia_traitDecimalUpdates: Array<TraitDecimalUpdate>;
  base_sepolia_traitBooleanUpdate?: Maybe<TraitBooleanUpdate>;
  base_sepolia_traitBooleanUpdates: Array<TraitBooleanUpdate>;
  base_sepolia_traitString?: Maybe<TraitString>;
  base_sepolia_traitStrings: Array<TraitString>;
  base_sepolia_traitDecimal?: Maybe<TraitDecimal>;
  base_sepolia_traitDecimals: Array<TraitDecimal>;
  base_sepolia_traitBoolean?: Maybe<TraitBoolean>;
  base_sepolia_traitBooleans: Array<TraitBoolean>;
  base_sepolia_loan?: Maybe<Loan>;
  base_sepolia_loans: Array<Loan>;
  base_sepolia_loanLiquidatedEvent?: Maybe<LoanLiquidatedEvent>;
  base_sepolia_loanLiquidatedEvents: Array<LoanLiquidatedEvent>;
  base_sepolia_loanRenegotiatedEvent?: Maybe<LoanRenegotiatedEvent>;
  base_sepolia_loanRenegotiatedEvents: Array<LoanRenegotiatedEvent>;
  base_sepolia_loanRepaidEvent?: Maybe<LoanRepaidEvent>;
  base_sepolia_loanRepaidEvents: Array<LoanRepaidEvent>;
  base_sepolia_loanStartedEvent?: Maybe<LoanStartedEvent>;
  base_sepolia_loanStartedEvents: Array<LoanStartedEvent>;
  base_sepolia_obligationReceipt?: Maybe<ObligationReceipt>;
  base_sepolia_obligationReceipts: Array<ObligationReceipt>;
  base_sepolia_promissoryNote?: Maybe<PromissoryNote>;
  base_sepolia_promissoryNotes: Array<PromissoryNote>;
  /** Access to subgraph metadata */
  base_sepolia__meta?: Maybe<_Meta_>;
};


export type Subscriptionethereum_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionethereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Subscriptionmeta_street_ethereum_poolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_poolDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_collateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_collateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_currencyTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_currencyTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_redemptionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_redemptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_bundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_batchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_batchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_poolEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_poolEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanOriginatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanOriginatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanRepaidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanRepaidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_loanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_collateralLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_collateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_depositedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_depositedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_redeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_redeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_withdrawnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_withdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_tokenCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_tokenCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_transferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_transferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_liquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_liquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_auctionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_auctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_bidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum_bidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_ethereum__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Subscriptionsepolia_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionsepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Subscriptionmeta_street_sepolia_poolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_poolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_poolDayDataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_poolDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_collateralTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_collateralTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_currencyTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_currencyTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CurrencyToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CurrencyToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_redemptionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_redemptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_bundleArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bundle_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_batchArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_batchesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Batch_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Batch_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_poolEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_poolEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanOriginatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanOriginatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanOriginated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanOriginated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanRepaidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanRepaidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_loanLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_collateralLiquidatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_collateralLiquidatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CollateralLiquidated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<CollateralLiquidated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_depositedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_depositedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposited_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposited_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_redeemedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_redeemedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redeemed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redeemed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_withdrawnArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_withdrawnsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Withdrawn_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Withdrawn_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_tokenCreatedArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_tokenCreatedsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TokenCreated_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_transferredArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_transferredsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_liquidationArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_liquidationsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Liquidation_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Liquidation_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_auctionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_auctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_bidArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia_bidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmeta_street_sepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};


export type Subscriptionbase_sepolia_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_balanceArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_balancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_userArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_usersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_transferArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_transfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_configurationUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_configurationUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ConfigurationUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ConfigurationUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_operatingAgreementUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_operatingAgreementUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OperatingAgreementUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OperatingAgreementUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_validatorUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_validatorUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ValidatorUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ValidatorUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitMetadataArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitMetadata_collectionArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadata_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadata_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitMetadataUriUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitMetadataUriUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitMetadataUriUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitMetadataUriUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDefinitionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDefinitionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDefinition_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDefinition_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitStringUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitStringUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitStringUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitStringUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDecimalUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDecimalUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimalUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimalUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitBooleanUpdateArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitBooleanUpdatesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBooleanUpdate_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBooleanUpdate_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitStringArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitStringsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDecimalArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitDecimalsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitBooleanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_traitBooleansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanLiquidatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanLiquidatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanLiquidatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanLiquidatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanRenegotiatedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanRenegotiatedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRenegotiatedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRenegotiatedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanRepaidEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanRepaidEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanRepaidEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanRepaidEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanStartedEventArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_loanStartedEventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LoanStartedEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<LoanStartedEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_obligationReceiptArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_obligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_promissoryNoteArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia_promissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionbase_sepolia__metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type Balance = {
  id: Scalars['Bytes']['output'];
  token: Token;
  owner: User;
  holder: User;
  balance: Scalars['BigInt']['output'];
};

export type Balance_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_filter>;
  holder?: InputMaybe<Scalars['String']['input']>;
  holder_not?: InputMaybe<Scalars['String']['input']>;
  holder_gt?: InputMaybe<Scalars['String']['input']>;
  holder_lt?: InputMaybe<Scalars['String']['input']>;
  holder_gte?: InputMaybe<Scalars['String']['input']>;
  holder_lte?: InputMaybe<Scalars['String']['input']>;
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_contains?: InputMaybe<Scalars['String']['input']>;
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_?: InputMaybe<User_filter>;
  balance?: InputMaybe<Scalars['BigInt']['input']>;
  balance_not?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  balance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Balance_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Balance_filter>>>;
};

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
  | 'balance';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type ConfigurationUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  newValue: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ConfigurationUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  newValue?: InputMaybe<Scalars['String']['input']>;
  newValue_not?: InputMaybe<Scalars['String']['input']>;
  newValue_gt?: InputMaybe<Scalars['String']['input']>;
  newValue_lt?: InputMaybe<Scalars['String']['input']>;
  newValue_gte?: InputMaybe<Scalars['String']['input']>;
  newValue_lte?: InputMaybe<Scalars['String']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ConfigurationUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ConfigurationUpdate_filter>>>;
};

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
  | 'transactionHash';

export type Loan = {
  id: Scalars['Bytes']['output'];
  loanProvider: Scalars['String']['output'];
  loanContract: Scalars['Bytes']['output'];
  loanId: Scalars['BigInt']['output'];
  loanStatus: LoanStatus;
  borrower: User;
  lender?: Maybe<User>;
  loanPrincipalAmount: Scalars['BigInt']['output'];
  maximumRepaymentAmount: Scalars['BigInt']['output'];
  nftCollateralId: Scalars['BigInt']['output'];
  loanERC20Denomination: Scalars['Bytes']['output'];
  loanDuration: Scalars['BigInt']['output'];
  loanInterestRateForDurationInBasisPoints: Scalars['Int']['output'];
  loanAdminFeeInBasisPoints: Scalars['Int']['output'];
  nftCollateralWrapper: Scalars['Bytes']['output'];
  loanStartTime: Scalars['BigInt']['output'];
  nftCollateralContract: Scalars['Bytes']['output'];
  revenueSharePartner: Scalars['Bytes']['output'];
  revenueShareInBasisPoints: Scalars['Int']['output'];
  referralFeeInBasisPoints: Scalars['Int']['output'];
  loanMaturityDate?: Maybe<Scalars['BigInt']['output']>;
  loanLiquidationDate?: Maybe<Scalars['BigInt']['output']>;
  totalRenegotiationFeesPaid: Scalars['BigInt']['output'];
  totalRenegotiationAdminFeesPaid: Scalars['BigInt']['output'];
  amountPaidToLender?: Maybe<Scalars['BigInt']['output']>;
  adminFeePaid?: Maybe<Scalars['BigInt']['output']>;
  revenueSharePaid?: Maybe<Scalars['BigInt']['output']>;
  encodedLoanReceipt?: Maybe<Scalars['Bytes']['output']>;
  obligationReceipt?: Maybe<ObligationReceipt>;
  promissoryNotes?: Maybe<Array<PromissoryNote>>;
  pool: Pool;
  status: LoanStatus;
  transactionHash: Scalars['Bytes']['output'];
  completionTransactionHash?: Maybe<Scalars['Bytes']['output']>;
  timestamp: Scalars['BigInt']['output'];
  completion?: Maybe<Scalars['BigInt']['output']>;
  bundle?: Maybe<Bundle>;
  batch?: Maybe<Batch>;
  delegate?: Maybe<Scalars['Bytes']['output']>;
  delegateV2?: Maybe<Scalars['Bytes']['output']>;
  maturity: Scalars['BigInt']['output'];
  duration: Scalars['BigInt']['output'];
  collateralToken: CollateralToken;
  collateralTokenIds: Array<Scalars['BigInt']['output']>;
  collateralWrapperToken?: Maybe<Scalars['Bytes']['output']>;
  collateralWrapperTokenId?: Maybe<Scalars['BigInt']['output']>;
  ticks: Array<Scalars['BigInt']['output']>;
  useds: Array<Scalars['BigInt']['output']>;
  interests: Array<Scalars['BigInt']['output']>;
  principal: Scalars['BigInt']['output'];
  repayment: Scalars['BigInt']['output'];
  adminFee: Scalars['BigInt']['output'];
  proceeds?: Maybe<Scalars['BigInt']['output']>;
  collateralWrapperContext: Scalars['Bytes']['output'];
  loanReceipt: Scalars['Bytes']['output'];
};


export type LoanpromissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
};

export type LoanLiquidatedEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender?: Maybe<User>;
  loanPrincipalAmount: Scalars['BigInt']['output'];
  nftCollateralId: Scalars['BigInt']['output'];
  loanMaturityDate: Scalars['BigInt']['output'];
  loanLiquidationDate: Scalars['BigInt']['output'];
  nftCollateralContract: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LoanLiquidatedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  borrower?: InputMaybe<Scalars['String']['input']>;
  borrower_not?: InputMaybe<Scalars['String']['input']>;
  borrower_gt?: InputMaybe<Scalars['String']['input']>;
  borrower_lt?: InputMaybe<Scalars['String']['input']>;
  borrower_gte?: InputMaybe<Scalars['String']['input']>;
  borrower_lte?: InputMaybe<Scalars['String']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_?: InputMaybe<User_filter>;
  lender?: InputMaybe<Scalars['String']['input']>;
  lender_not?: InputMaybe<Scalars['String']['input']>;
  lender_gt?: InputMaybe<Scalars['String']['input']>;
  lender_lt?: InputMaybe<Scalars['String']['input']>;
  lender_gte?: InputMaybe<Scalars['String']['input']>;
  lender_lte?: InputMaybe<Scalars['String']['input']>;
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_contains?: InputMaybe<Scalars['String']['input']>;
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_?: InputMaybe<User_filter>;
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanMaturityDate?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanMaturityDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanLiquidationDate?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanLiquidationDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanLiquidatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanLiquidatedEvent_filter>>>;
};

export type LoanLiquidatedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
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
  | 'transactionHash';

export type LoanRenegotiatedEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender?: Maybe<User>;
  newLoanDuration: Scalars['BigInt']['output'];
  newMaximumRepaymentAmount: Scalars['BigInt']['output'];
  renegotiationFee: Scalars['BigInt']['output'];
  renegotiationAdminFee: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LoanRenegotiatedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  borrower?: InputMaybe<Scalars['String']['input']>;
  borrower_not?: InputMaybe<Scalars['String']['input']>;
  borrower_gt?: InputMaybe<Scalars['String']['input']>;
  borrower_lt?: InputMaybe<Scalars['String']['input']>;
  borrower_gte?: InputMaybe<Scalars['String']['input']>;
  borrower_lte?: InputMaybe<Scalars['String']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_?: InputMaybe<User_filter>;
  lender?: InputMaybe<Scalars['String']['input']>;
  lender_not?: InputMaybe<Scalars['String']['input']>;
  lender_gt?: InputMaybe<Scalars['String']['input']>;
  lender_lt?: InputMaybe<Scalars['String']['input']>;
  lender_gte?: InputMaybe<Scalars['String']['input']>;
  lender_lte?: InputMaybe<Scalars['String']['input']>;
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_contains?: InputMaybe<Scalars['String']['input']>;
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_?: InputMaybe<User_filter>;
  newLoanDuration?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newLoanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newLoanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  newMaximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  newMaximumRepaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  renegotiationFee?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  renegotiationFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  renegotiationAdminFee?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  renegotiationAdminFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  renegotiationAdminFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanRenegotiatedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanRenegotiatedEvent_filter>>>;
};

export type LoanRenegotiatedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
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
  | 'transactionHash';

export type LoanRepaidEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender?: Maybe<User>;
  loanPrincipalAmount: Scalars['BigInt']['output'];
  nftCollateralId: Scalars['BigInt']['output'];
  amountPaidToLender: Scalars['BigInt']['output'];
  adminFee: Scalars['BigInt']['output'];
  revenueShare: Scalars['BigInt']['output'];
  revenueSharePartner: Scalars['Bytes']['output'];
  nftCollateralContract: Scalars['Bytes']['output'];
  loanERC20Denomination: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LoanRepaidEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  borrower?: InputMaybe<Scalars['String']['input']>;
  borrower_not?: InputMaybe<Scalars['String']['input']>;
  borrower_gt?: InputMaybe<Scalars['String']['input']>;
  borrower_lt?: InputMaybe<Scalars['String']['input']>;
  borrower_gte?: InputMaybe<Scalars['String']['input']>;
  borrower_lte?: InputMaybe<Scalars['String']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_?: InputMaybe<User_filter>;
  lender?: InputMaybe<Scalars['String']['input']>;
  lender_not?: InputMaybe<Scalars['String']['input']>;
  lender_gt?: InputMaybe<Scalars['String']['input']>;
  lender_lt?: InputMaybe<Scalars['String']['input']>;
  lender_gte?: InputMaybe<Scalars['String']['input']>;
  lender_lte?: InputMaybe<Scalars['String']['input']>;
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_contains?: InputMaybe<Scalars['String']['input']>;
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_?: InputMaybe<User_filter>;
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidToLender?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidToLender_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFee?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revenueShare?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_not?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revenueShare_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revenueShare_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanRepaidEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanRepaidEvent_filter>>>;
};

export type LoanRepaidEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
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
  | 'transactionHash';

export type LoanStartedEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender?: Maybe<User>;
  loanPrincipalAmount: Scalars['BigInt']['output'];
  maximumRepaymentAmount: Scalars['BigInt']['output'];
  nftCollateralId: Scalars['BigInt']['output'];
  loanERC20Denomination: Scalars['Bytes']['output'];
  loanDuration: Scalars['BigInt']['output'];
  loanInterestRateForDurationInBasisPoints: Scalars['Int']['output'];
  loanAdminFeeInBasisPoints: Scalars['Int']['output'];
  nftCollateralWrapper: Scalars['Bytes']['output'];
  loanStartTime: Scalars['BigInt']['output'];
  nftCollateralContract: Scalars['Bytes']['output'];
  revenueSharePartner: Scalars['Bytes']['output'];
  revenueShareInBasisPoints: Scalars['Int']['output'];
  referralFeeInBasisPoints: Scalars['Int']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type LoanStartedEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  borrower?: InputMaybe<Scalars['String']['input']>;
  borrower_not?: InputMaybe<Scalars['String']['input']>;
  borrower_gt?: InputMaybe<Scalars['String']['input']>;
  borrower_lt?: InputMaybe<Scalars['String']['input']>;
  borrower_gte?: InputMaybe<Scalars['String']['input']>;
  borrower_lte?: InputMaybe<Scalars['String']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_?: InputMaybe<User_filter>;
  lender?: InputMaybe<Scalars['String']['input']>;
  lender_not?: InputMaybe<Scalars['String']['input']>;
  lender_gt?: InputMaybe<Scalars['String']['input']>;
  lender_lt?: InputMaybe<Scalars['String']['input']>;
  lender_gte?: InputMaybe<Scalars['String']['input']>;
  lender_lte?: InputMaybe<Scalars['String']['input']>;
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_contains?: InputMaybe<Scalars['String']['input']>;
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_?: InputMaybe<User_filter>;
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maximumRepaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanDuration?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanInterestRateForDurationInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanInterestRateForDurationInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanAdminFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanAdminFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftCollateralWrapper?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralWrapper_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralWrapper_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanStartTime?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueShareInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  revenueShareInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  referralFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  referralFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanStartedEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanStartedEvent_filter>>>;
};

export type LoanStartedEvent_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
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
  | 'transactionHash';

export type LoanStatus =
  | 'ActiveOrDefault'
  | 'Liquidated'
  | 'Repaid'
  | 'Active'
  | 'CollateralLiquidated';

export type Loan_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanProvider?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not?: InputMaybe<Scalars['String']['input']>;
  loanProvider_gt?: InputMaybe<Scalars['String']['input']>;
  loanProvider_lt?: InputMaybe<Scalars['String']['input']>;
  loanProvider_gte?: InputMaybe<Scalars['String']['input']>;
  loanProvider_lte?: InputMaybe<Scalars['String']['input']>;
  loanProvider_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanProvider_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanProvider_contains?: InputMaybe<Scalars['String']['input']>;
  loanProvider_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_contains?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanProvider_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanProvider_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanProvider_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanProvider_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanProvider_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanContract?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanId?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanStatus?: InputMaybe<LoanStatus>;
  loanStatus_not?: InputMaybe<LoanStatus>;
  loanStatus_in?: InputMaybe<Array<LoanStatus>>;
  loanStatus_not_in?: InputMaybe<Array<LoanStatus>>;
  borrower?: InputMaybe<Scalars['String']['input']>;
  borrower_not?: InputMaybe<Scalars['String']['input']>;
  borrower_gt?: InputMaybe<Scalars['String']['input']>;
  borrower_lt?: InputMaybe<Scalars['String']['input']>;
  borrower_gte?: InputMaybe<Scalars['String']['input']>;
  borrower_lte?: InputMaybe<Scalars['String']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  borrower_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['String']['input']>;
  borrower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  borrower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  borrower_?: InputMaybe<User_filter>;
  lender?: InputMaybe<Scalars['String']['input']>;
  lender_not?: InputMaybe<Scalars['String']['input']>;
  lender_gt?: InputMaybe<Scalars['String']['input']>;
  lender_lt?: InputMaybe<Scalars['String']['input']>;
  lender_gte?: InputMaybe<Scalars['String']['input']>;
  lender_lte?: InputMaybe<Scalars['String']['input']>;
  lender_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lender_contains?: InputMaybe<Scalars['String']['input']>;
  lender_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains?: InputMaybe<Scalars['String']['input']>;
  lender_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lender_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lender_?: InputMaybe<User_filter>;
  loanPrincipalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanPrincipalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanPrincipalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maximumRepaymentAmount?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maximumRepaymentAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maximumRepaymentAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanERC20Denomination?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lt?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_gte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_lte?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanERC20Denomination_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanERC20Denomination_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanDuration?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanInterestRateForDurationInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  loanInterestRateForDurationInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanInterestRateForDurationInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanAdminFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  loanAdminFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanAdminFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nftCollateralWrapper?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralWrapper_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralWrapper_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralWrapper_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanStartTime?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanStartTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanStartTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  revenueSharePartner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueSharePartner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  revenueShareInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  revenueShareInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  revenueShareInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  referralFeeInBasisPoints?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_not?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_gt?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_lt?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_gte?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_lte?: InputMaybe<Scalars['Int']['input']>;
  referralFeeInBasisPoints_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  referralFeeInBasisPoints_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  loanMaturityDate?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanMaturityDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanMaturityDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanLiquidationDate?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_not?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loanLiquidationDate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loanLiquidationDate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRenegotiationFeesPaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationFeesPaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRenegotiationFeesPaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRenegotiationAdminFeesPaid?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalRenegotiationAdminFeesPaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalRenegotiationAdminFeesPaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidToLender?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountPaidToLender_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountPaidToLender_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeePaid?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeePaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeePaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revenueSharePaid?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  revenueSharePaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  revenueSharePaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  encodedLoanReceipt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_not?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_gt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_lt?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_gte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_lte?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encodedLoanReceipt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  encodedLoanReceipt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  encodedLoanReceipt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  obligationReceipt_?: InputMaybe<ObligationReceipt_filter>;
  promissoryNotes_?: InputMaybe<PromissoryNote_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  status?: InputMaybe<LoanStatus>;
  status_not?: InputMaybe<LoanStatus>;
  status_in?: InputMaybe<Array<LoanStatus>>;
  status_not_in?: InputMaybe<Array<LoanStatus>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  completionTransactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  completionTransactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  completionTransactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completion?: InputMaybe<Scalars['BigInt']['input']>;
  completion_not?: InputMaybe<Scalars['BigInt']['input']>;
  completion_gt?: InputMaybe<Scalars['BigInt']['input']>;
  completion_lt?: InputMaybe<Scalars['BigInt']['input']>;
  completion_gte?: InputMaybe<Scalars['BigInt']['input']>;
  completion_lte?: InputMaybe<Scalars['BigInt']['input']>;
  completion_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  completion_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bundle?: InputMaybe<Scalars['String']['input']>;
  bundle_not?: InputMaybe<Scalars['String']['input']>;
  bundle_gt?: InputMaybe<Scalars['String']['input']>;
  bundle_lt?: InputMaybe<Scalars['String']['input']>;
  bundle_gte?: InputMaybe<Scalars['String']['input']>;
  bundle_lte?: InputMaybe<Scalars['String']['input']>;
  bundle_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bundle_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  bundle_contains?: InputMaybe<Scalars['String']['input']>;
  bundle_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_not_contains?: InputMaybe<Scalars['String']['input']>;
  bundle_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_starts_with?: InputMaybe<Scalars['String']['input']>;
  bundle_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  bundle_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_ends_with?: InputMaybe<Scalars['String']['input']>;
  bundle_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  bundle_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bundle_?: InputMaybe<Bundle_filter>;
  batch?: InputMaybe<Scalars['String']['input']>;
  batch_not?: InputMaybe<Scalars['String']['input']>;
  batch_gt?: InputMaybe<Scalars['String']['input']>;
  batch_lt?: InputMaybe<Scalars['String']['input']>;
  batch_gte?: InputMaybe<Scalars['String']['input']>;
  batch_lte?: InputMaybe<Scalars['String']['input']>;
  batch_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batch_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  batch_contains?: InputMaybe<Scalars['String']['input']>;
  batch_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_not_contains?: InputMaybe<Scalars['String']['input']>;
  batch_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_starts_with?: InputMaybe<Scalars['String']['input']>;
  batch_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  batch_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_ends_with?: InputMaybe<Scalars['String']['input']>;
  batch_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  batch_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  batch_?: InputMaybe<Batch_filter>;
  delegate?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegate_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegate_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegateV2_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegateV2_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegateV2_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  maturity?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_not?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maturity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralToken?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  collateralTokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralWrapperToken?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperToken_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperToken_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperToken_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralWrapperTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralWrapperTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  useds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interests_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  principal?: InputMaybe<Scalars['BigInt']['input']>;
  principal_not?: InputMaybe<Scalars['BigInt']['input']>;
  principal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  principal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  principal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  principal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  principal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  principal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repayment?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_not?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_gt?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_lt?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_gte?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_lte?: InputMaybe<Scalars['BigInt']['input']>;
  repayment_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  repayment_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFee?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proceeds?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_not?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proceeds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralWrapperContext?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_not?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_gt?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_lt?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_gte?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_lte?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanReceipt_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  loanReceipt_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loanReceipt_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
};

export type Loan_orderBy =
  | 'id'
  | 'loanProvider'
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
  | 'encodedLoanReceipt'
  | 'obligationReceipt'
  | 'obligationReceipt__id'
  | 'obligationReceipt__receiptTokenId'
  | 'obligationReceipt__nftCollateralContract'
  | 'obligationReceipt__nftCollateralId'
  | 'promissoryNotes'
  | 'pool'
  | 'pool__id'
  | 'pool__implementationVersionMajor'
  | 'pool__implementation'
  | 'pool__adminFeeRate'
  | 'pool__adminFeeShareRecipient'
  | 'pool__adminFeeShareSplit'
  | 'pool__collateralLiquidator'
  | 'pool__delegationRegistry'
  | 'pool__externalPriceOracle'
  | 'pool__tokenIdMerkleRoot'
  | 'pool__tokenIdMerkleMetadataURI'
  | 'pool__adminFeeBalance'
  | 'pool__totalValueLocked'
  | 'pool__totalValueAvailable'
  | 'pool__totalValueUsed'
  | 'pool__loansOriginated'
  | 'pool__loansActive'
  | 'pool__loansRepaid'
  | 'pool__loansLiquidated'
  | 'pool__loansCollateralLiquidated'
  | 'status'
  | 'transactionHash'
  | 'completionTransactionHash'
  | 'timestamp'
  | 'completion'
  | 'bundle'
  | 'bundle__id'
  | 'bundle__owner'
  | 'bundle__collateralWrapperContext'
  | 'bundle__underlyingCollateralTokenAddress'
  | 'batch'
  | 'batch__id'
  | 'batch__owner'
  | 'batch__collateralWrapperContext'
  | 'batch__underlyingCollateralTokenAddress'
  | 'delegate'
  | 'delegateV2'
  | 'maturity'
  | 'duration'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'collateralToken__name'
  | 'collateralTokenIds'
  | 'collateralWrapperToken'
  | 'collateralWrapperTokenId'
  | 'ticks'
  | 'useds'
  | 'interests'
  | 'principal'
  | 'repayment'
  | 'adminFee'
  | 'proceeds'
  | 'collateralWrapperContext'
  | 'loanReceipt';

export type ObligationReceipt = {
  id: Scalars['Bytes']['output'];
  receiptTokenId: Scalars['BigInt']['output'];
  loan: Loan;
  nftCollateralContract: Scalars['Bytes']['output'];
  nftCollateralId: Scalars['BigInt']['output'];
  creator: User;
  holder?: Maybe<User>;
};

export type ObligationReceipt_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  receiptTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  receiptTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  receiptTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  nftCollateralContract?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lt?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_gte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_lte?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  nftCollateralContract_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralContract_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  nftCollateralId?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_not?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nftCollateralId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftCollateralId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_filter>;
  holder?: InputMaybe<Scalars['String']['input']>;
  holder_not?: InputMaybe<Scalars['String']['input']>;
  holder_gt?: InputMaybe<Scalars['String']['input']>;
  holder_lt?: InputMaybe<Scalars['String']['input']>;
  holder_gte?: InputMaybe<Scalars['String']['input']>;
  holder_lte?: InputMaybe<Scalars['String']['input']>;
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_contains?: InputMaybe<Scalars['String']['input']>;
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ObligationReceipt_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ObligationReceipt_filter>>>;
};

export type ObligationReceipt_orderBy =
  | 'id'
  | 'receiptTokenId'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
  | 'nftCollateralContract'
  | 'nftCollateralId'
  | 'creator'
  | 'creator__id'
  | 'creator__address'
  | 'creator__tokenCount'
  | 'holder'
  | 'holder__id'
  | 'holder__address'
  | 'holder__tokenCount';

export type OperatingAgreementUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  newValue: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type OperatingAgreementUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  newValue?: InputMaybe<Scalars['String']['input']>;
  newValue_not?: InputMaybe<Scalars['String']['input']>;
  newValue_gt?: InputMaybe<Scalars['String']['input']>;
  newValue_lt?: InputMaybe<Scalars['String']['input']>;
  newValue_gte?: InputMaybe<Scalars['String']['input']>;
  newValue_lte?: InputMaybe<Scalars['String']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OperatingAgreementUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<OperatingAgreementUpdate_filter>>>;
};

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
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PromissoryNote = {
  id: Scalars['Bytes']['output'];
  noteTokenId: Scalars['BigInt']['output'];
  loan?: Maybe<Loan>;
  creator: User;
  holder?: Maybe<User>;
};

export type PromissoryNote_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  noteTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  noteTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  noteTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_filter>;
  holder?: InputMaybe<Scalars['String']['input']>;
  holder_not?: InputMaybe<Scalars['String']['input']>;
  holder_gt?: InputMaybe<Scalars['String']['input']>;
  holder_lt?: InputMaybe<Scalars['String']['input']>;
  holder_gte?: InputMaybe<Scalars['String']['input']>;
  holder_lte?: InputMaybe<Scalars['String']['input']>;
  holder_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  holder_contains?: InputMaybe<Scalars['String']['input']>;
  holder_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains?: InputMaybe<Scalars['String']['input']>;
  holder_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  holder_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  holder_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PromissoryNote_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PromissoryNote_filter>>>;
};

export type PromissoryNote_orderBy =
  | 'id'
  | 'noteTokenId'
  | 'loan'
  | 'loan__id'
  | 'loan__loanProvider'
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
  | 'loan__encodedLoanReceipt'
  | 'creator'
  | 'creator__id'
  | 'creator__address'
  | 'creator__tokenCount'
  | 'holder'
  | 'holder__id'
  | 'holder__address'
  | 'holder__tokenCount';

export type Token = {
  id: Scalars['Bytes']['output'];
  mintTimestamp: Scalars['BigInt']['output'];
  booleanTraits?: Maybe<Array<TraitBoolean>>;
  configuration: Scalars['String']['output'];
  supply: Scalars['BigInt']['output'];
  balances?: Maybe<Array<Balance>>;
  creator: User;
  decimalTraits?: Maybe<Array<TraitDecimal>>;
  definition: Scalars['String']['output'];
  operatingAgreement: Scalars['String']['output'];
  stringTraits?: Maybe<Array<TraitString>>;
  tokenId: Scalars['BigInt']['output'];
  transfers?: Maybe<Array<Transfer>>;
  uri: Scalars['String']['output'];
  validator: Scalars['Bytes']['output'];
};


export type TokenbooleanTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitBoolean_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitBoolean_filter>;
};


export type TokenbalancesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
};


export type TokendecimalTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitDecimal_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitDecimal_filter>;
};


export type TokenstringTraitsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TraitString_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TraitString_filter>;
};


export type TokentransfersArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
};

export type Token_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  mintTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  mintTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mintTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  booleanTraits_?: InputMaybe<TraitBoolean_filter>;
  configuration?: InputMaybe<Scalars['String']['input']>;
  configuration_not?: InputMaybe<Scalars['String']['input']>;
  configuration_gt?: InputMaybe<Scalars['String']['input']>;
  configuration_lt?: InputMaybe<Scalars['String']['input']>;
  configuration_gte?: InputMaybe<Scalars['String']['input']>;
  configuration_lte?: InputMaybe<Scalars['String']['input']>;
  configuration_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  configuration_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains?: InputMaybe<Scalars['String']['input']>;
  configuration_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  configuration_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  supply?: InputMaybe<Scalars['BigInt']['input']>;
  supply_not?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  supply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  supply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  supply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  balances_?: InputMaybe<Balance_filter>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<User_filter>;
  decimalTraits_?: InputMaybe<TraitDecimal_filter>;
  definition?: InputMaybe<Scalars['String']['input']>;
  definition_not?: InputMaybe<Scalars['String']['input']>;
  definition_gt?: InputMaybe<Scalars['String']['input']>;
  definition_lt?: InputMaybe<Scalars['String']['input']>;
  definition_gte?: InputMaybe<Scalars['String']['input']>;
  definition_lte?: InputMaybe<Scalars['String']['input']>;
  definition_in?: InputMaybe<Array<Scalars['String']['input']>>;
  definition_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  definition_contains?: InputMaybe<Scalars['String']['input']>;
  definition_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  definition_not_contains?: InputMaybe<Scalars['String']['input']>;
  definition_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  definition_starts_with?: InputMaybe<Scalars['String']['input']>;
  definition_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  definition_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  definition_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  definition_ends_with?: InputMaybe<Scalars['String']['input']>;
  definition_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  definition_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  definition_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_gt?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_lt?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_gte?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_lte?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operatingAgreement_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  operatingAgreement_contains?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_contains?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_starts_with?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_ends_with?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  operatingAgreement_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  stringTraits_?: InputMaybe<TraitString_filter>;
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<Transfer_filter>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator?: InputMaybe<Scalars['Bytes']['input']>;
  validator_not?: InputMaybe<Scalars['Bytes']['input']>;
  validator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  validator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  validator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  validator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  validator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  validator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  validator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  validator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

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
  | 'validator';

export type TraitBoolean = {
  id: Scalars['Bytes']['output'];
  token: Token;
  key: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type TraitBooleanUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  traitKey: Scalars['String']['output'];
  newValue?: Maybe<Scalars['Boolean']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TraitBooleanUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  traitKey?: InputMaybe<Scalars['String']['input']>;
  traitKey_not?: InputMaybe<Scalars['String']['input']>;
  traitKey_gt?: InputMaybe<Scalars['String']['input']>;
  traitKey_lt?: InputMaybe<Scalars['String']['input']>;
  traitKey_gte?: InputMaybe<Scalars['String']['input']>;
  traitKey_lte?: InputMaybe<Scalars['String']['input']>;
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue?: InputMaybe<Scalars['Boolean']['input']>;
  newValue_not?: InputMaybe<Scalars['Boolean']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitBooleanUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitBooleanUpdate_filter>>>;
};

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
  | 'transactionHash';

export type TraitBoolean_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Boolean']['input']>;
  value_not?: InputMaybe<Scalars['Boolean']['input']>;
  value_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitBoolean_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitBoolean_filter>>>;
};

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
  | 'value';

export type TraitDecimal = {
  id: Scalars['Bytes']['output'];
  token: Token;
  key: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  value?: Maybe<Scalars['Int']['output']>;
};

export type TraitDecimalUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  traitKey: Scalars['String']['output'];
  newValue?: Maybe<Scalars['Int']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TraitDecimalUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  traitKey?: InputMaybe<Scalars['String']['input']>;
  traitKey_not?: InputMaybe<Scalars['String']['input']>;
  traitKey_gt?: InputMaybe<Scalars['String']['input']>;
  traitKey_lt?: InputMaybe<Scalars['String']['input']>;
  traitKey_gte?: InputMaybe<Scalars['String']['input']>;
  traitKey_lte?: InputMaybe<Scalars['String']['input']>;
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue?: InputMaybe<Scalars['Int']['input']>;
  newValue_not?: InputMaybe<Scalars['Int']['input']>;
  newValue_gt?: InputMaybe<Scalars['Int']['input']>;
  newValue_lt?: InputMaybe<Scalars['Int']['input']>;
  newValue_gte?: InputMaybe<Scalars['Int']['input']>;
  newValue_lte?: InputMaybe<Scalars['Int']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitDecimalUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitDecimalUpdate_filter>>>;
};

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
  | 'transactionHash';

export type TraitDecimal_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  value_not?: InputMaybe<Scalars['Int']['input']>;
  value_gt?: InputMaybe<Scalars['Int']['input']>;
  value_lt?: InputMaybe<Scalars['Int']['input']>;
  value_gte?: InputMaybe<Scalars['Int']['input']>;
  value_lte?: InputMaybe<Scalars['Int']['input']>;
  value_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitDecimal_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitDecimal_filter>>>;
};

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
  | 'value';

export type TraitDefinition = {
  id: Scalars['Bytes']['output'];
  type: TraitType;
  key: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
};

export type TraitDefinition_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  type?: InputMaybe<TraitType>;
  type_not?: InputMaybe<TraitType>;
  type_in?: InputMaybe<Array<TraitType>>;
  type_not_in?: InputMaybe<Array<TraitType>>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitDefinition_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitDefinition_filter>>>;
};

export type TraitDefinition_orderBy =
  | 'id'
  | 'type'
  | 'key'
  | 'displayName';

export type TraitMetadata = {
  id: Scalars['Bytes']['output'];
  uri: Scalars['String']['output'];
  decoded: Scalars['String']['output'];
};

export type TraitMetadataUriUpdate = {
  id: Scalars['Bytes']['output'];
  uri: Scalars['String']['output'];
  decoded: Scalars['String']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TraitMetadataUriUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded?: InputMaybe<Scalars['String']['input']>;
  decoded_not?: InputMaybe<Scalars['String']['input']>;
  decoded_gt?: InputMaybe<Scalars['String']['input']>;
  decoded_lt?: InputMaybe<Scalars['String']['input']>;
  decoded_gte?: InputMaybe<Scalars['String']['input']>;
  decoded_lte?: InputMaybe<Scalars['String']['input']>;
  decoded_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoded_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoded_contains?: InputMaybe<Scalars['String']['input']>;
  decoded_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_contains?: InputMaybe<Scalars['String']['input']>;
  decoded_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoded_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoded_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoded_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoded_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitMetadataUriUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitMetadataUriUpdate_filter>>>;
};

export type TraitMetadataUriUpdate_orderBy =
  | 'id'
  | 'uri'
  | 'decoded'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'transactionHash';

export type TraitMetadata_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded?: InputMaybe<Scalars['String']['input']>;
  decoded_not?: InputMaybe<Scalars['String']['input']>;
  decoded_gt?: InputMaybe<Scalars['String']['input']>;
  decoded_lt?: InputMaybe<Scalars['String']['input']>;
  decoded_gte?: InputMaybe<Scalars['String']['input']>;
  decoded_lte?: InputMaybe<Scalars['String']['input']>;
  decoded_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoded_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  decoded_contains?: InputMaybe<Scalars['String']['input']>;
  decoded_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_contains?: InputMaybe<Scalars['String']['input']>;
  decoded_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoded_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  decoded_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoded_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decoded_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  decoded_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitMetadata_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitMetadata_filter>>>;
};

export type TraitMetadata_orderBy =
  | 'id'
  | 'uri'
  | 'decoded';

export type TraitString = {
  id: Scalars['Bytes']['output'];
  key: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  token: Token;
  value?: Maybe<Scalars['String']['output']>;
};

export type TraitStringUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  traitKey: Scalars['String']['output'];
  newValue?: Maybe<Scalars['String']['output']>;
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TraitStringUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  traitKey?: InputMaybe<Scalars['String']['input']>;
  traitKey_not?: InputMaybe<Scalars['String']['input']>;
  traitKey_gt?: InputMaybe<Scalars['String']['input']>;
  traitKey_lt?: InputMaybe<Scalars['String']['input']>;
  traitKey_gte?: InputMaybe<Scalars['String']['input']>;
  traitKey_lte?: InputMaybe<Scalars['String']['input']>;
  traitKey_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  traitKey_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  traitKey_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue?: InputMaybe<Scalars['String']['input']>;
  newValue_not?: InputMaybe<Scalars['String']['input']>;
  newValue_gt?: InputMaybe<Scalars['String']['input']>;
  newValue_lt?: InputMaybe<Scalars['String']['input']>;
  newValue_gte?: InputMaybe<Scalars['String']['input']>;
  newValue_lte?: InputMaybe<Scalars['String']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  newValue_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains?: InputMaybe<Scalars['String']['input']>;
  newValue_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  newValue_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitStringUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitStringUpdate_filter>>>;
};

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
  | 'transactionHash';

export type TraitString_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  key_not?: InputMaybe<Scalars['String']['input']>;
  key_gt?: InputMaybe<Scalars['String']['input']>;
  key_lt?: InputMaybe<Scalars['String']['input']>;
  key_gte?: InputMaybe<Scalars['String']['input']>;
  key_lte?: InputMaybe<Scalars['String']['input']>;
  key_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  key_contains?: InputMaybe<Scalars['String']['input']>;
  key_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_contains?: InputMaybe<Scalars['String']['input']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  key_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  displayName_not?: InputMaybe<Scalars['String']['input']>;
  displayName_gt?: InputMaybe<Scalars['String']['input']>;
  displayName_lt?: InputMaybe<Scalars['String']['input']>;
  displayName_gte?: InputMaybe<Scalars['String']['input']>;
  displayName_lte?: InputMaybe<Scalars['String']['input']>;
  displayName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  displayName_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains?: InputMaybe<Scalars['String']['input']>;
  displayName_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  displayName_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  value?: InputMaybe<Scalars['String']['input']>;
  value_not?: InputMaybe<Scalars['String']['input']>;
  value_gt?: InputMaybe<Scalars['String']['input']>;
  value_lt?: InputMaybe<Scalars['String']['input']>;
  value_gte?: InputMaybe<Scalars['String']['input']>;
  value_lte?: InputMaybe<Scalars['String']['input']>;
  value_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  value_contains?: InputMaybe<Scalars['String']['input']>;
  value_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_contains?: InputMaybe<Scalars['String']['input']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  value_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TraitString_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TraitString_filter>>>;
};

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
  | 'value';

export type TraitType =
  | 'string'
  | 'decimal'
  | 'boolean'
  | 'epochSeconds';

export type Transfer = {
  id: Scalars['Bytes']['output'];
  operator: Scalars['Bytes']['output'];
  from?: Maybe<User>;
  to?: Maybe<User>;
  token: Token;
  value: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  operator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  operator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  operator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  operator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<User_filter>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<User_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

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
  | 'transactionHash';

export type User = {
  id: Scalars['Bytes']['output'];
  address: Scalars['Bytes']['output'];
  tokenCount: Scalars['BigInt']['output'];
  tokens?: Maybe<Array<Balance>>;
  created?: Maybe<Array<Token>>;
  obligationReceipts?: Maybe<Array<ObligationReceipt>>;
  promissoryNotes?: Maybe<Array<PromissoryNote>>;
  lending?: Maybe<Array<Loan>>;
  borrowing?: Maybe<Array<Loan>>;
};


export type UsertokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Balance_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Balance_filter>;
};


export type UsercreatedArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
};


export type UserobligationReceiptsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ObligationReceipt_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ObligationReceipt_filter>;
};


export type UserpromissoryNotesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PromissoryNote_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PromissoryNote_filter>;
};


export type UserlendingArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
};


export type UserborrowingArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenCount?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokens_?: InputMaybe<Balance_filter>;
  created_?: InputMaybe<Token_filter>;
  obligationReceipts_?: InputMaybe<ObligationReceipt_filter>;
  promissoryNotes_?: InputMaybe<PromissoryNote_filter>;
  lending_?: InputMaybe<Loan_filter>;
  borrowing_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'address'
  | 'tokenCount'
  | 'tokens'
  | 'created'
  | 'obligationReceipts'
  | 'promissoryNotes'
  | 'lending'
  | 'borrowing';

export type ValidateOnSale =
  | 'none'
  | 'requireEq'
  | 'requireUintGte'
  | 'requireUintLte';

export type ValidatorUpdate = {
  id: Scalars['Bytes']['output'];
  token: Token;
  newValue: Scalars['Bytes']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ValidatorUpdate_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_filter>;
  newValue?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_not?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_gt?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_lt?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_gte?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_lte?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newValue_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  newValue_contains?: InputMaybe<Scalars['Bytes']['input']>;
  newValue_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ValidatorUpdate_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ValidatorUpdate_filter>>>;
};

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
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type Auction = {
  id: Scalars['Bytes']['output'];
  liquidation: Liquidation;
  collateralToken?: Maybe<CollateralToken>;
  currencyToken: CurrencyToken;
  collateralTokenId: Scalars['BigInt']['output'];
  quantity: Scalars['BigInt']['output'];
  highestBid?: Maybe<Bid>;
  bidsCount: Scalars['Int']['output'];
  endTime: Scalars['BigInt']['output'];
  bids: Array<Bid>;
  status?: Maybe<AuctionStatus>;
};


export type AuctionbidsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bid_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bid_filter>;
};

export type AuctionStatus =
  | 'Created'
  | 'Started'
  | 'Ended';

export type Auction_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  liquidation?: InputMaybe<Scalars['String']['input']>;
  liquidation_not?: InputMaybe<Scalars['String']['input']>;
  liquidation_gt?: InputMaybe<Scalars['String']['input']>;
  liquidation_lt?: InputMaybe<Scalars['String']['input']>;
  liquidation_gte?: InputMaybe<Scalars['String']['input']>;
  liquidation_lte?: InputMaybe<Scalars['String']['input']>;
  liquidation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidation_contains?: InputMaybe<Scalars['String']['input']>;
  liquidation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidation_?: InputMaybe<Liquidation_filter>;
  collateralToken?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  collateralTokenId?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  collateralTokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collateralTokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  highestBid?: InputMaybe<Scalars['String']['input']>;
  highestBid_not?: InputMaybe<Scalars['String']['input']>;
  highestBid_gt?: InputMaybe<Scalars['String']['input']>;
  highestBid_lt?: InputMaybe<Scalars['String']['input']>;
  highestBid_gte?: InputMaybe<Scalars['String']['input']>;
  highestBid_lte?: InputMaybe<Scalars['String']['input']>;
  highestBid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  highestBid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  highestBid_contains?: InputMaybe<Scalars['String']['input']>;
  highestBid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_contains?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_starts_with?: InputMaybe<Scalars['String']['input']>;
  highestBid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_ends_with?: InputMaybe<Scalars['String']['input']>;
  highestBid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  highestBid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  highestBid_?: InputMaybe<Bid_filter>;
  bidsCount?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_not?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_gt?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_lt?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_gte?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_lte?: InputMaybe<Scalars['Int']['input']>;
  bidsCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  bidsCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bids_?: InputMaybe<Bid_filter>;
  status?: InputMaybe<AuctionStatus>;
  status_not?: InputMaybe<AuctionStatus>;
  status_in?: InputMaybe<Array<AuctionStatus>>;
  status_not_in?: InputMaybe<Array<AuctionStatus>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Auction_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Auction_filter>>>;
};

export type Auction_orderBy =
  | 'id'
  | 'liquidation'
  | 'liquidation__id'
  | 'liquidation__source'
  | 'liquidation__sourceImplementation'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'collateralToken__name'
  | 'currencyToken'
  | 'currencyToken__id'
  | 'currencyToken__name'
  | 'currencyToken__symbol'
  | 'currencyToken__decimals'
  | 'collateralTokenId'
  | 'quantity'
  | 'highestBid'
  | 'highestBid__id'
  | 'highestBid__bidder'
  | 'highestBid__amount'
  | 'highestBid__isHighest'
  | 'highestBid__timestamp'
  | 'highestBid__transactionHash'
  | 'bidsCount'
  | 'endTime'
  | 'bids'
  | 'status';

export type Batch = {
  id: Scalars['ID']['output'];
  owner: Scalars['Bytes']['output'];
  collateralWrapperContext: Scalars['Bytes']['output'];
  underlyingCollateralTokenAddress: Scalars['Bytes']['output'];
  underlyingCollateralTokenIds: Array<Scalars['BigInt']['output']>;
};

export type Batch_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Batch_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Batch_filter>>>;
};

export type Batch_orderBy =
  | 'id'
  | 'owner'
  | 'collateralWrapperContext'
  | 'underlyingCollateralTokenAddress'
  | 'underlyingCollateralTokenIds';

export type Bid = {
  id: Scalars['Bytes']['output'];
  auction: Auction;
  bidder: Scalars['Bytes']['output'];
  amount: Scalars['BigInt']['output'];
  isHighest: Scalars['Boolean']['output'];
  timestamp: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type Bid_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  auction?: InputMaybe<Scalars['String']['input']>;
  auction_not?: InputMaybe<Scalars['String']['input']>;
  auction_gt?: InputMaybe<Scalars['String']['input']>;
  auction_lt?: InputMaybe<Scalars['String']['input']>;
  auction_gte?: InputMaybe<Scalars['String']['input']>;
  auction_lte?: InputMaybe<Scalars['String']['input']>;
  auction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  auction_contains?: InputMaybe<Scalars['String']['input']>;
  auction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains?: InputMaybe<Scalars['String']['input']>;
  auction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  auction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  auction_?: InputMaybe<Auction_filter>;
  bidder?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_not?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_gt?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_lt?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_gte?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_lte?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bidder_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  bidder_contains?: InputMaybe<Scalars['Bytes']['input']>;
  bidder_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  isHighest?: InputMaybe<Scalars['Boolean']['input']>;
  isHighest_not?: InputMaybe<Scalars['Boolean']['input']>;
  isHighest_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isHighest_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bid_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bid_filter>>>;
};

export type Bid_orderBy =
  | 'id'
  | 'auction'
  | 'auction__id'
  | 'auction__collateralTokenId'
  | 'auction__quantity'
  | 'auction__bidsCount'
  | 'auction__endTime'
  | 'auction__status'
  | 'bidder'
  | 'amount'
  | 'isHighest'
  | 'timestamp'
  | 'transactionHash';

export type Bundle = {
  id: Scalars['ID']['output'];
  owner: Scalars['Bytes']['output'];
  collateralWrapperContext: Scalars['Bytes']['output'];
  underlyingCollateralTokenAddress: Scalars['Bytes']['output'];
  underlyingCollateralTokenIds: Array<Scalars['BigInt']['output']>;
};

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrapperContext_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralWrapperContext_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingCollateralTokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  underlyingCollateralTokenAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  underlyingCollateralTokenIds?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  underlyingCollateralTokenIds_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_filter>>>;
};

export type Bundle_orderBy =
  | 'id'
  | 'owner'
  | 'collateralWrapperContext'
  | 'underlyingCollateralTokenAddress'
  | 'underlyingCollateralTokenIds';

export type CollateralLiquidated = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  proceeds: Scalars['BigInt']['output'];
};

export type CollateralLiquidated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  proceeds?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_not?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_gt?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_lt?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_gte?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_lte?: InputMaybe<Scalars['BigInt']['input']>;
  proceeds_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  proceeds_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralLiquidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralLiquidated_filter>>>;
};

export type CollateralLiquidated_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__status'
  | 'loan__transactionHash'
  | 'loan__completionTransactionHash'
  | 'loan__timestamp'
  | 'loan__completion'
  | 'loan__delegate'
  | 'loan__delegateV2'
  | 'loan__borrower'
  | 'loan__maturity'
  | 'loan__duration'
  | 'loan__collateralWrapperToken'
  | 'loan__collateralWrapperTokenId'
  | 'loan__principal'
  | 'loan__repayment'
  | 'loan__adminFee'
  | 'loan__proceeds'
  | 'loan__collateralWrapperContext'
  | 'loan__loanReceipt'
  | 'proceeds';

export type CollateralToken = {
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  pools: Array<Pool>;
};


export type CollateralTokenpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};

export type CollateralToken_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pools_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CollateralToken_filter>>>;
};

export type CollateralToken_orderBy =
  | 'id'
  | 'name'
  | 'pools';

export type CurrencyToken = {
  id: Scalars['Bytes']['output'];
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  decimals: Scalars['Int']['output'];
  pools: Array<Pool>;
};


export type CurrencyTokenpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
};

export type CurrencyToken_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pools_?: InputMaybe<Pool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CurrencyToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<CurrencyToken_filter>>>;
};

export type CurrencyToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'pools';

export type Deposit = {
  id: Scalars['Bytes']['output'];
  pool: Pool;
  tick: Tick;
  account: Scalars['Bytes']['output'];
  shares: Scalars['BigInt']['output'];
  depositedAmount: Scalars['BigInt']['output'];
  updatedAt: Scalars['BigInt']['output'];
  createdAt: Scalars['BigInt']['output'];
  redemptions: Array<Redemption>;
};


export type DepositredemptionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Redemption_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Redemption_filter>;
};

export type Deposit_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  depositedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redemptions_?: InputMaybe<Redemption_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposit_filter>>>;
};

export type Deposit_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__implementationVersionMajor'
  | 'pool__implementation'
  | 'pool__adminFeeRate'
  | 'pool__adminFeeShareRecipient'
  | 'pool__adminFeeShareSplit'
  | 'pool__collateralLiquidator'
  | 'pool__delegationRegistry'
  | 'pool__externalPriceOracle'
  | 'pool__tokenIdMerkleRoot'
  | 'pool__tokenIdMerkleMetadataURI'
  | 'pool__adminFeeBalance'
  | 'pool__totalValueLocked'
  | 'pool__totalValueAvailable'
  | 'pool__totalValueUsed'
  | 'pool__loansOriginated'
  | 'pool__loansActive'
  | 'pool__loansRepaid'
  | 'pool__loansLiquidated'
  | 'pool__loansCollateralLiquidated'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'account'
  | 'shares'
  | 'depositedAmount'
  | 'updatedAt'
  | 'createdAt'
  | 'redemptions';

export type Deposited = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  tick: Tick;
  amount: Scalars['BigInt']['output'];
  shares: Scalars['BigInt']['output'];
};

export type Deposited_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Deposited_filter>>>;
};

export type Deposited_orderBy =
  | 'id'
  | 'account'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'amount'
  | 'shares';

export type Liquidation = {
  id: Scalars['Bytes']['output'];
  source: Scalars['Bytes']['output'];
  sourceImplementation: Scalars['Bytes']['output'];
  collateralToken: CollateralToken;
  currencyToken: CurrencyToken;
  loan: Loan;
  auctions: Array<Auction>;
};


export type LiquidationauctionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Auction_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Auction_filter>;
};

export type Liquidation_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  source?: InputMaybe<Scalars['Bytes']['input']>;
  source_not?: InputMaybe<Scalars['Bytes']['input']>;
  source_gt?: InputMaybe<Scalars['Bytes']['input']>;
  source_lt?: InputMaybe<Scalars['Bytes']['input']>;
  source_gte?: InputMaybe<Scalars['Bytes']['input']>;
  source_lte?: InputMaybe<Scalars['Bytes']['input']>;
  source_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  source_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  source_contains?: InputMaybe<Scalars['Bytes']['input']>;
  source_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_not?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sourceImplementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sourceImplementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sourceImplementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  auctions_?: InputMaybe<Auction_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Liquidation_filter>>>;
};

export type Liquidation_orderBy =
  | 'id'
  | 'source'
  | 'sourceImplementation'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'collateralToken__name'
  | 'currencyToken'
  | 'currencyToken__id'
  | 'currencyToken__name'
  | 'currencyToken__symbol'
  | 'currencyToken__decimals'
  | 'loan'
  | 'loan__id'
  | 'loan__status'
  | 'loan__transactionHash'
  | 'loan__completionTransactionHash'
  | 'loan__timestamp'
  | 'loan__completion'
  | 'loan__delegate'
  | 'loan__delegateV2'
  | 'loan__borrower'
  | 'loan__maturity'
  | 'loan__duration'
  | 'loan__collateralWrapperToken'
  | 'loan__collateralWrapperTokenId'
  | 'loan__principal'
  | 'loan__repayment'
  | 'loan__adminFee'
  | 'loan__proceeds'
  | 'loan__collateralWrapperContext'
  | 'loan__loanReceipt'
  | 'auctions';

export type LoanLiquidated = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
};

export type LoanLiquidated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanLiquidated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanLiquidated_filter>>>;
};

export type LoanLiquidated_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__status'
  | 'loan__transactionHash'
  | 'loan__completionTransactionHash'
  | 'loan__timestamp'
  | 'loan__completion'
  | 'loan__delegate'
  | 'loan__delegateV2'
  | 'loan__borrower'
  | 'loan__maturity'
  | 'loan__duration'
  | 'loan__collateralWrapperToken'
  | 'loan__collateralWrapperTokenId'
  | 'loan__principal'
  | 'loan__repayment'
  | 'loan__adminFee'
  | 'loan__proceeds'
  | 'loan__collateralWrapperContext'
  | 'loan__loanReceipt';

export type LoanOriginated = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
};

export type LoanOriginated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanOriginated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanOriginated_filter>>>;
};

export type LoanOriginated_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__status'
  | 'loan__transactionHash'
  | 'loan__completionTransactionHash'
  | 'loan__timestamp'
  | 'loan__completion'
  | 'loan__delegate'
  | 'loan__delegateV2'
  | 'loan__borrower'
  | 'loan__maturity'
  | 'loan__duration'
  | 'loan__collateralWrapperToken'
  | 'loan__collateralWrapperTokenId'
  | 'loan__principal'
  | 'loan__repayment'
  | 'loan__adminFee'
  | 'loan__proceeds'
  | 'loan__collateralWrapperContext'
  | 'loan__loanReceipt';

export type LoanRepaid = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
};

export type LoanRepaid_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  loan?: InputMaybe<Scalars['String']['input']>;
  loan_not?: InputMaybe<Scalars['String']['input']>;
  loan_gt?: InputMaybe<Scalars['String']['input']>;
  loan_lt?: InputMaybe<Scalars['String']['input']>;
  loan_gte?: InputMaybe<Scalars['String']['input']>;
  loan_lte?: InputMaybe<Scalars['String']['input']>;
  loan_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loan_contains?: InputMaybe<Scalars['String']['input']>;
  loan_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains?: InputMaybe<Scalars['String']['input']>;
  loan_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loan_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loan_?: InputMaybe<Loan_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LoanRepaid_filter>>>;
  or?: InputMaybe<Array<InputMaybe<LoanRepaid_filter>>>;
};

export type LoanRepaid_orderBy =
  | 'id'
  | 'loan'
  | 'loan__id'
  | 'loan__status'
  | 'loan__transactionHash'
  | 'loan__completionTransactionHash'
  | 'loan__timestamp'
  | 'loan__completion'
  | 'loan__delegate'
  | 'loan__delegateV2'
  | 'loan__borrower'
  | 'loan__maturity'
  | 'loan__duration'
  | 'loan__collateralWrapperToken'
  | 'loan__collateralWrapperTokenId'
  | 'loan__principal'
  | 'loan__repayment'
  | 'loan__adminFee'
  | 'loan__proceeds'
  | 'loan__collateralWrapperContext'
  | 'loan__loanReceipt';

export type Pool = {
  id: Scalars['Bytes']['output'];
  implementationVersionMajor: Scalars['String']['output'];
  implementation: Scalars['Bytes']['output'];
  collateralToken: CollateralToken;
  currencyToken: CurrencyToken;
  collateralWrappers: Array<Scalars['Bytes']['output']>;
  durations: Array<Scalars['BigInt']['output']>;
  rates: Array<Scalars['BigInt']['output']>;
  adminFeeRate: Scalars['BigInt']['output'];
  adminFeeShareRecipient: Scalars['Bytes']['output'];
  adminFeeShareSplit: Scalars['Int']['output'];
  collateralLiquidator: Scalars['Bytes']['output'];
  delegationRegistry: Scalars['Bytes']['output'];
  externalPriceOracle?: Maybe<Scalars['Bytes']['output']>;
  tokenIdRange?: Maybe<Array<Scalars['BigInt']['output']>>;
  tokenIdSet?: Maybe<Array<Scalars['BigInt']['output']>>;
  tokenIdMerkleRoot?: Maybe<Scalars['Bytes']['output']>;
  tokenIdMerkleMetadataURI?: Maybe<Scalars['String']['output']>;
  maxBorrows: Array<Scalars['BigInt']['output']>;
  adminFeeBalance: Scalars['BigInt']['output'];
  ticks: Array<Tick>;
  deposits: Array<Deposit>;
  loans: Array<Loan>;
  events: Array<PoolEvent>;
  totalValueLocked: Scalars['BigInt']['output'];
  totalValueAvailable: Scalars['BigInt']['output'];
  totalValueUsed: Scalars['BigInt']['output'];
  loansOriginated: Scalars['BigInt']['output'];
  loansActive: Scalars['BigInt']['output'];
  loansRepaid: Scalars['BigInt']['output'];
  loansLiquidated: Scalars['BigInt']['output'];
  loansCollateralLiquidated: Scalars['BigInt']['output'];
  dayData: Array<PoolDayData>;
};


export type PoolticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Tick_filter>;
};


export type PooldepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Deposit_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Deposit_filter>;
};


export type PoolloansArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Loan_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Loan_filter>;
};


export type PooleventsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolEvent_filter>;
};


export type PooldayDataArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PoolDayData_filter>;
};

export type PoolDayData = {
  id: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  pool: Pool;
  totalValueLocked: Scalars['BigInt']['output'];
  totalValueAvailable: Scalars['BigInt']['output'];
  totalValueUsed: Scalars['BigInt']['output'];
};

export type PoolDayData_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueAvailable?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueUsed?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayData_filter>>>;
};

export type PoolDayData_orderBy =
  | 'id'
  | 'timestamp'
  | 'pool'
  | 'pool__id'
  | 'pool__implementationVersionMajor'
  | 'pool__implementation'
  | 'pool__adminFeeRate'
  | 'pool__adminFeeShareRecipient'
  | 'pool__adminFeeShareSplit'
  | 'pool__collateralLiquidator'
  | 'pool__delegationRegistry'
  | 'pool__externalPriceOracle'
  | 'pool__tokenIdMerkleRoot'
  | 'pool__tokenIdMerkleMetadataURI'
  | 'pool__adminFeeBalance'
  | 'pool__totalValueLocked'
  | 'pool__totalValueAvailable'
  | 'pool__totalValueUsed'
  | 'pool__loansOriginated'
  | 'pool__loansActive'
  | 'pool__loansRepaid'
  | 'pool__loansLiquidated'
  | 'pool__loansCollateralLiquidated'
  | 'totalValueLocked'
  | 'totalValueAvailable'
  | 'totalValueUsed';

export type PoolEvent = {
  id: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  type: PoolEventType;
  pool: Pool;
  deposit?: Maybe<Deposit>;
  loanOriginated?: Maybe<LoanOriginated>;
  loanRepaid?: Maybe<LoanRepaid>;
  loanLiquidated?: Maybe<LoanLiquidated>;
  collateralLiquidated?: Maybe<CollateralLiquidated>;
  deposited?: Maybe<Deposited>;
  redeemed?: Maybe<Redeemed>;
  withdrawn?: Maybe<Withdrawn>;
  tokenCreated?: Maybe<TokenCreated>;
  transferred?: Maybe<Transferred>;
};

export type PoolEventType =
  | 'LoanOriginated'
  | 'LoanRepaid'
  | 'LoanLiquidated'
  | 'CollateralLiquidated'
  | 'Deposited'
  | 'Redeemed'
  | 'Withdrawn'
  | 'TokenCreated'
  | 'Transferred';

export type PoolEvent_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  type?: InputMaybe<PoolEventType>;
  type_not?: InputMaybe<PoolEventType>;
  type_in?: InputMaybe<Array<PoolEventType>>;
  type_not_in?: InputMaybe<Array<PoolEventType>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  deposit?: InputMaybe<Scalars['String']['input']>;
  deposit_not?: InputMaybe<Scalars['String']['input']>;
  deposit_gt?: InputMaybe<Scalars['String']['input']>;
  deposit_lt?: InputMaybe<Scalars['String']['input']>;
  deposit_gte?: InputMaybe<Scalars['String']['input']>;
  deposit_lte?: InputMaybe<Scalars['String']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposit_contains?: InputMaybe<Scalars['String']['input']>;
  deposit_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_contains?: InputMaybe<Scalars['String']['input']>;
  deposit_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposit_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposit_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_?: InputMaybe<Deposit_filter>;
  loanOriginated?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_gt?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_lt?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_gte?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_lte?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanOriginated_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanOriginated_contains?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_contains?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanOriginated_?: InputMaybe<LoanOriginated_filter>;
  loanRepaid?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_gt?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_lt?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_gte?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_lte?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanRepaid_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanRepaid_contains?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_contains?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanRepaid_?: InputMaybe<LoanRepaid_filter>;
  loanLiquidated?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_gt?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_lt?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_gte?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_lte?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanLiquidated_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  loanLiquidated_contains?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_contains?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  loanLiquidated_?: InputMaybe<LoanLiquidated_filter>;
  collateralLiquidated?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_gt?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_lt?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_gte?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_lte?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralLiquidated_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralLiquidated_contains?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralLiquidated_?: InputMaybe<CollateralLiquidated_filter>;
  deposited?: InputMaybe<Scalars['String']['input']>;
  deposited_not?: InputMaybe<Scalars['String']['input']>;
  deposited_gt?: InputMaybe<Scalars['String']['input']>;
  deposited_lt?: InputMaybe<Scalars['String']['input']>;
  deposited_gte?: InputMaybe<Scalars['String']['input']>;
  deposited_lte?: InputMaybe<Scalars['String']['input']>;
  deposited_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposited_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposited_contains?: InputMaybe<Scalars['String']['input']>;
  deposited_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_not_contains?: InputMaybe<Scalars['String']['input']>;
  deposited_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposited_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposited_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposited_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposited_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposited_?: InputMaybe<Deposited_filter>;
  redeemed?: InputMaybe<Scalars['String']['input']>;
  redeemed_not?: InputMaybe<Scalars['String']['input']>;
  redeemed_gt?: InputMaybe<Scalars['String']['input']>;
  redeemed_lt?: InputMaybe<Scalars['String']['input']>;
  redeemed_gte?: InputMaybe<Scalars['String']['input']>;
  redeemed_lte?: InputMaybe<Scalars['String']['input']>;
  redeemed_in?: InputMaybe<Array<Scalars['String']['input']>>;
  redeemed_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  redeemed_contains?: InputMaybe<Scalars['String']['input']>;
  redeemed_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_contains?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_starts_with?: InputMaybe<Scalars['String']['input']>;
  redeemed_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_ends_with?: InputMaybe<Scalars['String']['input']>;
  redeemed_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  redeemed_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  redeemed_?: InputMaybe<Redeemed_filter>;
  withdrawn?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not?: InputMaybe<Scalars['String']['input']>;
  withdrawn_gt?: InputMaybe<Scalars['String']['input']>;
  withdrawn_lt?: InputMaybe<Scalars['String']['input']>;
  withdrawn_gte?: InputMaybe<Scalars['String']['input']>;
  withdrawn_lte?: InputMaybe<Scalars['String']['input']>;
  withdrawn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  withdrawn_contains?: InputMaybe<Scalars['String']['input']>;
  withdrawn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_contains?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_starts_with?: InputMaybe<Scalars['String']['input']>;
  withdrawn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_ends_with?: InputMaybe<Scalars['String']['input']>;
  withdrawn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  withdrawn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawn_?: InputMaybe<Withdrawn_filter>;
  tokenCreated?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_gt?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_lt?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_gte?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_lte?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenCreated_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenCreated_contains?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenCreated_?: InputMaybe<TokenCreated_filter>;
  transferred?: InputMaybe<Scalars['String']['input']>;
  transferred_not?: InputMaybe<Scalars['String']['input']>;
  transferred_gt?: InputMaybe<Scalars['String']['input']>;
  transferred_lt?: InputMaybe<Scalars['String']['input']>;
  transferred_gte?: InputMaybe<Scalars['String']['input']>;
  transferred_lte?: InputMaybe<Scalars['String']['input']>;
  transferred_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferred_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transferred_contains?: InputMaybe<Scalars['String']['input']>;
  transferred_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_not_contains?: InputMaybe<Scalars['String']['input']>;
  transferred_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferred_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transferred_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferred_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transferred_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferred_?: InputMaybe<Transferred_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PoolEvent_filter>>>;
};

export type PoolEvent_orderBy =
  | 'id'
  | 'transactionHash'
  | 'timestamp'
  | 'from'
  | 'account'
  | 'type'
  | 'pool'
  | 'pool__id'
  | 'pool__implementationVersionMajor'
  | 'pool__implementation'
  | 'pool__adminFeeRate'
  | 'pool__adminFeeShareRecipient'
  | 'pool__adminFeeShareSplit'
  | 'pool__collateralLiquidator'
  | 'pool__delegationRegistry'
  | 'pool__externalPriceOracle'
  | 'pool__tokenIdMerkleRoot'
  | 'pool__tokenIdMerkleMetadataURI'
  | 'pool__adminFeeBalance'
  | 'pool__totalValueLocked'
  | 'pool__totalValueAvailable'
  | 'pool__totalValueUsed'
  | 'pool__loansOriginated'
  | 'pool__loansActive'
  | 'pool__loansRepaid'
  | 'pool__loansLiquidated'
  | 'pool__loansCollateralLiquidated'
  | 'deposit'
  | 'deposit__id'
  | 'deposit__account'
  | 'deposit__shares'
  | 'deposit__depositedAmount'
  | 'deposit__updatedAt'
  | 'deposit__createdAt'
  | 'loanOriginated'
  | 'loanOriginated__id'
  | 'loanRepaid'
  | 'loanRepaid__id'
  | 'loanLiquidated'
  | 'loanLiquidated__id'
  | 'collateralLiquidated'
  | 'collateralLiquidated__id'
  | 'collateralLiquidated__proceeds'
  | 'deposited'
  | 'deposited__id'
  | 'deposited__account'
  | 'deposited__amount'
  | 'deposited__shares'
  | 'redeemed'
  | 'redeemed__id'
  | 'redeemed__account'
  | 'redeemed__shares'
  | 'redeemed__estimatedAmount'
  | 'withdrawn'
  | 'withdrawn__id'
  | 'withdrawn__account'
  | 'withdrawn__shares'
  | 'withdrawn__amount'
  | 'tokenCreated'
  | 'tokenCreated__id'
  | 'transferred'
  | 'transferred__id'
  | 'transferred__shares'
  | 'transferred__estimatedAmount'
  | 'transferred__from'
  | 'transferred__to';

export type Pool_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementationVersionMajor?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_gt?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_lt?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_gte?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_lte?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  implementationVersionMajor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  implementationVersionMajor_contains?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_contains?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_starts_with?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_ends_with?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  implementationVersionMajor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  implementation?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_lt?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_gte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_lte?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  implementation_contains?: InputMaybe<Scalars['Bytes']['input']>;
  implementation_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralToken?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lt?: InputMaybe<Scalars['String']['input']>;
  collateralToken_gte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_lte?: InputMaybe<Scalars['String']['input']>;
  collateralToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collateralToken_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collateralToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collateralToken_?: InputMaybe<CollateralToken_filter>;
  currencyToken?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lt?: InputMaybe<Scalars['String']['input']>;
  currencyToken_gte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_lte?: InputMaybe<Scalars['String']['input']>;
  currencyToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  currencyToken_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  currencyToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  currencyToken_?: InputMaybe<CurrencyToken_filter>;
  collateralWrappers?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrappers_not?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrappers_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrappers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrappers_not_contains?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralWrappers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  durations?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durations_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durations_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durations_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durations_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durations_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rates_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeeRate?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeeRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeeShareRecipient?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  adminFeeShareRecipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  adminFeeShareRecipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareRecipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  adminFeeShareSplit?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_not?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_gt?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_lt?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_gte?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_lte?: InputMaybe<Scalars['Int']['input']>;
  adminFeeShareSplit_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  adminFeeShareSplit_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  collateralLiquidator?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_not?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralLiquidator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  collateralLiquidator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  collateralLiquidator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegationRegistry_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegationRegistry_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegationRegistry_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_not?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_gt?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_lt?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_gte?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_lte?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  externalPriceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  externalPriceOracle_contains?: InputMaybe<Scalars['Bytes']['input']>;
  externalPriceOracle_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdRange?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdRange_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdRange_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdRange_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdRange_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdRange_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdSet_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIdMerkleRoot?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenIdMerkleRoot_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenIdMerkleRoot_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleRoot_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenIdMerkleMetadataURI?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_gt?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_lt?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_gte?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_lte?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenIdMerkleMetadataURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenIdMerkleMetadataURI_contains?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenIdMerkleMetadataURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maxBorrows?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBorrows_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBorrows_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBorrows_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBorrows_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maxBorrows_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeeBalance?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_not?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_gt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_lt?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_gte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_lte?: InputMaybe<Scalars['BigInt']['input']>;
  adminFeeBalance_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  adminFeeBalance_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_?: InputMaybe<Tick_filter>;
  deposits_?: InputMaybe<Deposit_filter>;
  loans_?: InputMaybe<Loan_filter>;
  events_?: InputMaybe<PoolEvent_filter>;
  totalValueLocked?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueAvailable?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueAvailable_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueAvailable_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueUsed?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValueUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansOriginated?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_not?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loansOriginated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansOriginated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansActive?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_not?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loansActive_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansActive_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansRepaid?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_not?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loansRepaid_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansRepaid_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansLiquidated?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_not?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loansLiquidated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansCollateralLiquidated?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_not?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  loansCollateralLiquidated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  loansCollateralLiquidated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dayData_?: InputMaybe<PoolDayData_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'implementationVersionMajor'
  | 'implementation'
  | 'collateralToken'
  | 'collateralToken__id'
  | 'collateralToken__name'
  | 'currencyToken'
  | 'currencyToken__id'
  | 'currencyToken__name'
  | 'currencyToken__symbol'
  | 'currencyToken__decimals'
  | 'collateralWrappers'
  | 'durations'
  | 'rates'
  | 'adminFeeRate'
  | 'adminFeeShareRecipient'
  | 'adminFeeShareSplit'
  | 'collateralLiquidator'
  | 'delegationRegistry'
  | 'externalPriceOracle'
  | 'tokenIdRange'
  | 'tokenIdSet'
  | 'tokenIdMerkleRoot'
  | 'tokenIdMerkleMetadataURI'
  | 'maxBorrows'
  | 'adminFeeBalance'
  | 'ticks'
  | 'deposits'
  | 'loans'
  | 'events'
  | 'totalValueLocked'
  | 'totalValueAvailable'
  | 'totalValueUsed'
  | 'loansOriginated'
  | 'loansActive'
  | 'loansRepaid'
  | 'loansLiquidated'
  | 'loansCollateralLiquidated'
  | 'dayData';

export type Redeemed = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  tick: Tick;
  shares: Scalars['BigInt']['output'];
  estimatedAmount: Scalars['BigInt']['output'];
};

export type Redeemed_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  estimatedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  estimatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Redeemed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Redeemed_filter>>>;
};

export type Redeemed_orderBy =
  | 'id'
  | 'account'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'shares'
  | 'estimatedAmount';

export type Redemption = {
  id: Scalars['Bytes']['output'];
  redemptionId: Scalars['BigInt']['output'];
  deposit: Deposit;
  shares: Scalars['BigInt']['output'];
};

export type Redemption_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  redemptionId?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_not?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redemptionId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  deposit?: InputMaybe<Scalars['String']['input']>;
  deposit_not?: InputMaybe<Scalars['String']['input']>;
  deposit_gt?: InputMaybe<Scalars['String']['input']>;
  deposit_lt?: InputMaybe<Scalars['String']['input']>;
  deposit_gte?: InputMaybe<Scalars['String']['input']>;
  deposit_lte?: InputMaybe<Scalars['String']['input']>;
  deposit_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposit_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  deposit_contains?: InputMaybe<Scalars['String']['input']>;
  deposit_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_contains?: InputMaybe<Scalars['String']['input']>;
  deposit_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposit_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  deposit_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposit_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  deposit_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  deposit_?: InputMaybe<Deposit_filter>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Redemption_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Redemption_filter>>>;
};

export type Redemption_orderBy =
  | 'id'
  | 'redemptionId'
  | 'deposit'
  | 'deposit__id'
  | 'deposit__account'
  | 'deposit__shares'
  | 'deposit__depositedAmount'
  | 'deposit__updatedAt'
  | 'deposit__createdAt'
  | 'shares';

export type Tick = {
  id: Scalars['Bytes']['output'];
  pool: Pool;
  raw: Scalars['BigInt']['output'];
  limit: Scalars['BigInt']['output'];
  duration: Scalars['BigInt']['output'];
  rate: Scalars['BigInt']['output'];
  durationIndex: Scalars['Int']['output'];
  rateIndex: Scalars['Int']['output'];
  limitType: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  value: Scalars['BigInt']['output'];
  shares: Scalars['BigInt']['output'];
  available: Scalars['BigInt']['output'];
  pending: Scalars['BigInt']['output'];
  redemptionPending: Scalars['BigInt']['output'];
  prev: Scalars['BigInt']['output'];
  next: Scalars['BigInt']['output'];
  accrued?: Maybe<Scalars['BigInt']['output']>;
  accrualRate?: Maybe<Scalars['BigInt']['output']>;
  accrualTimestamp?: Maybe<Scalars['BigInt']['output']>;
  principalWeightedDuration: Scalars['BigInt']['output'];
  interestWeightedMaturity: Scalars['BigInt']['output'];
  token?: Maybe<CurrencyToken>;
};

export type Tick_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_filter>;
  raw?: InputMaybe<Scalars['BigInt']['input']>;
  raw_not?: InputMaybe<Scalars['BigInt']['input']>;
  raw_gt?: InputMaybe<Scalars['BigInt']['input']>;
  raw_lt?: InputMaybe<Scalars['BigInt']['input']>;
  raw_gte?: InputMaybe<Scalars['BigInt']['input']>;
  raw_lte?: InputMaybe<Scalars['BigInt']['input']>;
  raw_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  raw_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  limit?: InputMaybe<Scalars['BigInt']['input']>;
  limit_not?: InputMaybe<Scalars['BigInt']['input']>;
  limit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  limit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  limit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  limit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  limit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  limit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rate?: InputMaybe<Scalars['BigInt']['input']>;
  rate_not?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  rate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  rate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  durationIndex?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_not?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  durationIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  durationIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rateIndex?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_not?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  rateIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  rateIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  limitType?: InputMaybe<Scalars['Int']['input']>;
  limitType_not?: InputMaybe<Scalars['Int']['input']>;
  limitType_gt?: InputMaybe<Scalars['Int']['input']>;
  limitType_lt?: InputMaybe<Scalars['Int']['input']>;
  limitType_gte?: InputMaybe<Scalars['Int']['input']>;
  limitType_lte?: InputMaybe<Scalars['Int']['input']>;
  limitType_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  limitType_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  active_not?: InputMaybe<Scalars['Boolean']['input']>;
  active_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  active_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  value?: InputMaybe<Scalars['BigInt']['input']>;
  value_not?: InputMaybe<Scalars['BigInt']['input']>;
  value_gt?: InputMaybe<Scalars['BigInt']['input']>;
  value_lt?: InputMaybe<Scalars['BigInt']['input']>;
  value_gte?: InputMaybe<Scalars['BigInt']['input']>;
  value_lte?: InputMaybe<Scalars['BigInt']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  available?: InputMaybe<Scalars['BigInt']['input']>;
  available_not?: InputMaybe<Scalars['BigInt']['input']>;
  available_gt?: InputMaybe<Scalars['BigInt']['input']>;
  available_lt?: InputMaybe<Scalars['BigInt']['input']>;
  available_gte?: InputMaybe<Scalars['BigInt']['input']>;
  available_lte?: InputMaybe<Scalars['BigInt']['input']>;
  available_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  available_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pending?: InputMaybe<Scalars['BigInt']['input']>;
  pending_not?: InputMaybe<Scalars['BigInt']['input']>;
  pending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  pending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  pending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  pending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  pending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redemptionPending?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_not?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_gt?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_lt?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_gte?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_lte?: InputMaybe<Scalars['BigInt']['input']>;
  redemptionPending_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  redemptionPending_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  prev?: InputMaybe<Scalars['BigInt']['input']>;
  prev_not?: InputMaybe<Scalars['BigInt']['input']>;
  prev_gt?: InputMaybe<Scalars['BigInt']['input']>;
  prev_lt?: InputMaybe<Scalars['BigInt']['input']>;
  prev_gte?: InputMaybe<Scalars['BigInt']['input']>;
  prev_lte?: InputMaybe<Scalars['BigInt']['input']>;
  prev_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  prev_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  next?: InputMaybe<Scalars['BigInt']['input']>;
  next_not?: InputMaybe<Scalars['BigInt']['input']>;
  next_gt?: InputMaybe<Scalars['BigInt']['input']>;
  next_lt?: InputMaybe<Scalars['BigInt']['input']>;
  next_gte?: InputMaybe<Scalars['BigInt']['input']>;
  next_lte?: InputMaybe<Scalars['BigInt']['input']>;
  next_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  next_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrued?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrued_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrued_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualRate?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualRate_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualRate_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  accrualTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  accrualTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  principalWeightedDuration?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  principalWeightedDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  principalWeightedDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestWeightedMaturity?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_not?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  interestWeightedMaturity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  interestWeightedMaturity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<CurrencyToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Tick_filter>>>;
};

export type Tick_orderBy =
  | 'id'
  | 'pool'
  | 'pool__id'
  | 'pool__implementationVersionMajor'
  | 'pool__implementation'
  | 'pool__adminFeeRate'
  | 'pool__adminFeeShareRecipient'
  | 'pool__adminFeeShareSplit'
  | 'pool__collateralLiquidator'
  | 'pool__delegationRegistry'
  | 'pool__externalPriceOracle'
  | 'pool__tokenIdMerkleRoot'
  | 'pool__tokenIdMerkleMetadataURI'
  | 'pool__adminFeeBalance'
  | 'pool__totalValueLocked'
  | 'pool__totalValueAvailable'
  | 'pool__totalValueUsed'
  | 'pool__loansOriginated'
  | 'pool__loansActive'
  | 'pool__loansRepaid'
  | 'pool__loansLiquidated'
  | 'pool__loansCollateralLiquidated'
  | 'raw'
  | 'limit'
  | 'duration'
  | 'rate'
  | 'durationIndex'
  | 'rateIndex'
  | 'limitType'
  | 'active'
  | 'value'
  | 'shares'
  | 'available'
  | 'pending'
  | 'redemptionPending'
  | 'prev'
  | 'next'
  | 'accrued'
  | 'accrualRate'
  | 'accrualTimestamp'
  | 'principalWeightedDuration'
  | 'interestWeightedMaturity'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals';

export type TokenCreated = {
  id: Scalars['Bytes']['output'];
  tick: Tick;
  token: CurrencyToken;
};

export type TokenCreated_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<CurrencyToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenCreated_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TokenCreated_filter>>>;
};

export type TokenCreated_orderBy =
  | 'id'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals';

export type Transferred = {
  id: Scalars['Bytes']['output'];
  tick: Tick;
  token: CurrencyToken;
  shares: Scalars['BigInt']['output'];
  estimatedAmount: Scalars['BigInt']['output'];
  from: Scalars['Bytes']['output'];
  to: Scalars['Bytes']['output'];
};

export type Transferred_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<CurrencyToken_filter>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  estimatedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  estimatedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  estimatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transferred_filter>>>;
};

export type Transferred_orderBy =
  | 'id'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'shares'
  | 'estimatedAmount'
  | 'from'
  | 'to';

export type Withdrawn = {
  id: Scalars['Bytes']['output'];
  account: Scalars['Bytes']['output'];
  tick: Tick;
  shares: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
};

export type Withdrawn_filter = {
  id?: InputMaybe<Scalars['Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account?: InputMaybe<Scalars['Bytes']['input']>;
  account_not?: InputMaybe<Scalars['Bytes']['input']>;
  account_gt?: InputMaybe<Scalars['Bytes']['input']>;
  account_lt?: InputMaybe<Scalars['Bytes']['input']>;
  account_gte?: InputMaybe<Scalars['Bytes']['input']>;
  account_lte?: InputMaybe<Scalars['Bytes']['input']>;
  account_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  account_contains?: InputMaybe<Scalars['Bytes']['input']>;
  account_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_filter>;
  shares?: InputMaybe<Scalars['BigInt']['input']>;
  shares_not?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lt?: InputMaybe<Scalars['BigInt']['input']>;
  shares_gte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_lte?: InputMaybe<Scalars['BigInt']['input']>;
  shares_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  shares_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Withdrawn_filter>>>;
};

export type Withdrawn_orderBy =
  | 'id'
  | 'account'
  | 'tick'
  | 'tick__id'
  | 'tick__raw'
  | 'tick__limit'
  | 'tick__duration'
  | 'tick__rate'
  | 'tick__durationIndex'
  | 'tick__rateIndex'
  | 'tick__limitType'
  | 'tick__active'
  | 'tick__value'
  | 'tick__shares'
  | 'tick__available'
  | 'tick__pending'
  | 'tick__redemptionPending'
  | 'tick__prev'
  | 'tick__next'
  | 'tick__accrued'
  | 'tick__accrualRate'
  | 'tick__accrualTimestamp'
  | 'tick__principalWeightedDuration'
  | 'tick__interestWeightedMaturity'
  | 'shares'
  | 'amount';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  Aggregation_interval: Aggregation_interval;
  Balance: ResolverTypeWrapper<Balance>;
  Balance_filter: Balance_filter;
  Balance_orderBy: Balance_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  ConfigurationUpdate: ResolverTypeWrapper<ConfigurationUpdate>;
  ConfigurationUpdate_filter: ConfigurationUpdate_filter;
  ConfigurationUpdate_orderBy: ConfigurationUpdate_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Loan: ResolverTypeWrapper<Loan>;
  LoanLiquidatedEvent: ResolverTypeWrapper<LoanLiquidatedEvent>;
  LoanLiquidatedEvent_filter: LoanLiquidatedEvent_filter;
  LoanLiquidatedEvent_orderBy: LoanLiquidatedEvent_orderBy;
  LoanRenegotiatedEvent: ResolverTypeWrapper<LoanRenegotiatedEvent>;
  LoanRenegotiatedEvent_filter: LoanRenegotiatedEvent_filter;
  LoanRenegotiatedEvent_orderBy: LoanRenegotiatedEvent_orderBy;
  LoanRepaidEvent: ResolverTypeWrapper<LoanRepaidEvent>;
  LoanRepaidEvent_filter: LoanRepaidEvent_filter;
  LoanRepaidEvent_orderBy: LoanRepaidEvent_orderBy;
  LoanStartedEvent: ResolverTypeWrapper<LoanStartedEvent>;
  LoanStartedEvent_filter: LoanStartedEvent_filter;
  LoanStartedEvent_orderBy: LoanStartedEvent_orderBy;
  LoanStatus: LoanStatus;
  Loan_filter: Loan_filter;
  Loan_orderBy: Loan_orderBy;
  ObligationReceipt: ResolverTypeWrapper<ObligationReceipt>;
  ObligationReceipt_filter: ObligationReceipt_filter;
  ObligationReceipt_orderBy: ObligationReceipt_orderBy;
  OperatingAgreementUpdate: ResolverTypeWrapper<OperatingAgreementUpdate>;
  OperatingAgreementUpdate_filter: OperatingAgreementUpdate_filter;
  OperatingAgreementUpdate_orderBy: OperatingAgreementUpdate_orderBy;
  OrderDirection: OrderDirection;
  PromissoryNote: ResolverTypeWrapper<PromissoryNote>;
  PromissoryNote_filter: PromissoryNote_filter;
  PromissoryNote_orderBy: PromissoryNote_orderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']['output']>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  TraitBoolean: ResolverTypeWrapper<TraitBoolean>;
  TraitBooleanUpdate: ResolverTypeWrapper<TraitBooleanUpdate>;
  TraitBooleanUpdate_filter: TraitBooleanUpdate_filter;
  TraitBooleanUpdate_orderBy: TraitBooleanUpdate_orderBy;
  TraitBoolean_filter: TraitBoolean_filter;
  TraitBoolean_orderBy: TraitBoolean_orderBy;
  TraitDecimal: ResolverTypeWrapper<TraitDecimal>;
  TraitDecimalUpdate: ResolverTypeWrapper<TraitDecimalUpdate>;
  TraitDecimalUpdate_filter: TraitDecimalUpdate_filter;
  TraitDecimalUpdate_orderBy: TraitDecimalUpdate_orderBy;
  TraitDecimal_filter: TraitDecimal_filter;
  TraitDecimal_orderBy: TraitDecimal_orderBy;
  TraitDefinition: ResolverTypeWrapper<TraitDefinition>;
  TraitDefinition_filter: TraitDefinition_filter;
  TraitDefinition_orderBy: TraitDefinition_orderBy;
  TraitMetadata: ResolverTypeWrapper<TraitMetadata>;
  TraitMetadataUriUpdate: ResolverTypeWrapper<TraitMetadataUriUpdate>;
  TraitMetadataUriUpdate_filter: TraitMetadataUriUpdate_filter;
  TraitMetadataUriUpdate_orderBy: TraitMetadataUriUpdate_orderBy;
  TraitMetadata_filter: TraitMetadata_filter;
  TraitMetadata_orderBy: TraitMetadata_orderBy;
  TraitString: ResolverTypeWrapper<TraitString>;
  TraitStringUpdate: ResolverTypeWrapper<TraitStringUpdate>;
  TraitStringUpdate_filter: TraitStringUpdate_filter;
  TraitStringUpdate_orderBy: TraitStringUpdate_orderBy;
  TraitString_filter: TraitString_filter;
  TraitString_orderBy: TraitString_orderBy;
  TraitType: TraitType;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  ValidateOnSale: ValidateOnSale;
  ValidatorUpdate: ResolverTypeWrapper<ValidatorUpdate>;
  ValidatorUpdate_filter: ValidatorUpdate_filter;
  ValidatorUpdate_orderBy: ValidatorUpdate_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  Auction: ResolverTypeWrapper<Auction>;
  AuctionStatus: AuctionStatus;
  Auction_filter: Auction_filter;
  Auction_orderBy: Auction_orderBy;
  Batch: ResolverTypeWrapper<Batch>;
  Batch_filter: Batch_filter;
  Batch_orderBy: Batch_orderBy;
  Bid: ResolverTypeWrapper<Bid>;
  Bid_filter: Bid_filter;
  Bid_orderBy: Bid_orderBy;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_filter;
  Bundle_orderBy: Bundle_orderBy;
  CollateralLiquidated: ResolverTypeWrapper<CollateralLiquidated>;
  CollateralLiquidated_filter: CollateralLiquidated_filter;
  CollateralLiquidated_orderBy: CollateralLiquidated_orderBy;
  CollateralToken: ResolverTypeWrapper<CollateralToken>;
  CollateralToken_filter: CollateralToken_filter;
  CollateralToken_orderBy: CollateralToken_orderBy;
  CurrencyToken: ResolverTypeWrapper<CurrencyToken>;
  CurrencyToken_filter: CurrencyToken_filter;
  CurrencyToken_orderBy: CurrencyToken_orderBy;
  Deposit: ResolverTypeWrapper<Deposit>;
  Deposit_filter: Deposit_filter;
  Deposit_orderBy: Deposit_orderBy;
  Deposited: ResolverTypeWrapper<Deposited>;
  Deposited_filter: Deposited_filter;
  Deposited_orderBy: Deposited_orderBy;
  Liquidation: ResolverTypeWrapper<Liquidation>;
  Liquidation_filter: Liquidation_filter;
  Liquidation_orderBy: Liquidation_orderBy;
  LoanLiquidated: ResolverTypeWrapper<LoanLiquidated>;
  LoanLiquidated_filter: LoanLiquidated_filter;
  LoanLiquidated_orderBy: LoanLiquidated_orderBy;
  LoanOriginated: ResolverTypeWrapper<LoanOriginated>;
  LoanOriginated_filter: LoanOriginated_filter;
  LoanOriginated_orderBy: LoanOriginated_orderBy;
  LoanRepaid: ResolverTypeWrapper<LoanRepaid>;
  LoanRepaid_filter: LoanRepaid_filter;
  LoanRepaid_orderBy: LoanRepaid_orderBy;
  Pool: ResolverTypeWrapper<Pool>;
  PoolDayData: ResolverTypeWrapper<PoolDayData>;
  PoolDayData_filter: PoolDayData_filter;
  PoolDayData_orderBy: PoolDayData_orderBy;
  PoolEvent: ResolverTypeWrapper<PoolEvent>;
  PoolEventType: PoolEventType;
  PoolEvent_filter: PoolEvent_filter;
  PoolEvent_orderBy: PoolEvent_orderBy;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  Redeemed: ResolverTypeWrapper<Redeemed>;
  Redeemed_filter: Redeemed_filter;
  Redeemed_orderBy: Redeemed_orderBy;
  Redemption: ResolverTypeWrapper<Redemption>;
  Redemption_filter: Redemption_filter;
  Redemption_orderBy: Redemption_orderBy;
  Tick: ResolverTypeWrapper<Tick>;
  Tick_filter: Tick_filter;
  Tick_orderBy: Tick_orderBy;
  TokenCreated: ResolverTypeWrapper<TokenCreated>;
  TokenCreated_filter: TokenCreated_filter;
  TokenCreated_orderBy: TokenCreated_orderBy;
  Transferred: ResolverTypeWrapper<Transferred>;
  Transferred_filter: Transferred_filter;
  Transferred_orderBy: Transferred_orderBy;
  Withdrawn: ResolverTypeWrapper<Withdrawn>;
  Withdrawn_filter: Withdrawn_filter;
  Withdrawn_orderBy: Withdrawn_orderBy;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  Balance: Balance;
  Balance_filter: Balance_filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  ConfigurationUpdate: ConfigurationUpdate;
  ConfigurationUpdate_filter: ConfigurationUpdate_filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Loan: Loan;
  LoanLiquidatedEvent: LoanLiquidatedEvent;
  LoanLiquidatedEvent_filter: LoanLiquidatedEvent_filter;
  LoanRenegotiatedEvent: LoanRenegotiatedEvent;
  LoanRenegotiatedEvent_filter: LoanRenegotiatedEvent_filter;
  LoanRepaidEvent: LoanRepaidEvent;
  LoanRepaidEvent_filter: LoanRepaidEvent_filter;
  LoanStartedEvent: LoanStartedEvent;
  LoanStartedEvent_filter: LoanStartedEvent_filter;
  Loan_filter: Loan_filter;
  ObligationReceipt: ObligationReceipt;
  ObligationReceipt_filter: ObligationReceipt_filter;
  OperatingAgreementUpdate: OperatingAgreementUpdate;
  OperatingAgreementUpdate_filter: OperatingAgreementUpdate_filter;
  PromissoryNote: PromissoryNote;
  PromissoryNote_filter: PromissoryNote_filter;
  String: Scalars['String']['output'];
  Timestamp: Scalars['Timestamp']['output'];
  Token: Token;
  Token_filter: Token_filter;
  TraitBoolean: TraitBoolean;
  TraitBooleanUpdate: TraitBooleanUpdate;
  TraitBooleanUpdate_filter: TraitBooleanUpdate_filter;
  TraitBoolean_filter: TraitBoolean_filter;
  TraitDecimal: TraitDecimal;
  TraitDecimalUpdate: TraitDecimalUpdate;
  TraitDecimalUpdate_filter: TraitDecimalUpdate_filter;
  TraitDecimal_filter: TraitDecimal_filter;
  TraitDefinition: TraitDefinition;
  TraitDefinition_filter: TraitDefinition_filter;
  TraitMetadata: TraitMetadata;
  TraitMetadataUriUpdate: TraitMetadataUriUpdate;
  TraitMetadataUriUpdate_filter: TraitMetadataUriUpdate_filter;
  TraitMetadata_filter: TraitMetadata_filter;
  TraitString: TraitString;
  TraitStringUpdate: TraitStringUpdate;
  TraitStringUpdate_filter: TraitStringUpdate_filter;
  TraitString_filter: TraitString_filter;
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  User: User;
  User_filter: User_filter;
  ValidatorUpdate: ValidatorUpdate;
  ValidatorUpdate_filter: ValidatorUpdate_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
  Auction: Auction;
  Auction_filter: Auction_filter;
  Batch: Batch;
  Batch_filter: Batch_filter;
  Bid: Bid;
  Bid_filter: Bid_filter;
  Bundle: Bundle;
  Bundle_filter: Bundle_filter;
  CollateralLiquidated: CollateralLiquidated;
  CollateralLiquidated_filter: CollateralLiquidated_filter;
  CollateralToken: CollateralToken;
  CollateralToken_filter: CollateralToken_filter;
  CurrencyToken: CurrencyToken;
  CurrencyToken_filter: CurrencyToken_filter;
  Deposit: Deposit;
  Deposit_filter: Deposit_filter;
  Deposited: Deposited;
  Deposited_filter: Deposited_filter;
  Liquidation: Liquidation;
  Liquidation_filter: Liquidation_filter;
  LoanLiquidated: LoanLiquidated;
  LoanLiquidated_filter: LoanLiquidated_filter;
  LoanOriginated: LoanOriginated;
  LoanOriginated_filter: LoanOriginated_filter;
  LoanRepaid: LoanRepaid;
  LoanRepaid_filter: LoanRepaid_filter;
  Pool: Pool;
  PoolDayData: PoolDayData;
  PoolDayData_filter: PoolDayData_filter;
  PoolEvent: PoolEvent;
  PoolEvent_filter: PoolEvent_filter;
  Pool_filter: Pool_filter;
  Redeemed: Redeemed;
  Redeemed_filter: Redeemed_filter;
  Redemption: Redemption;
  Redemption_filter: Redemption_filter;
  Tick: Tick;
  Tick_filter: Tick_filter;
  TokenCreated: TokenCreated;
  TokenCreated_filter: TokenCreated_filter;
  Transferred: Transferred;
  Transferred_filter: Transferred_filter;
  Withdrawn: Withdrawn;
  Withdrawn_filter: Withdrawn_filter;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  ethereum_token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Queryethereum_tokenArgs, 'id' | 'subgraphError'>>;
  ethereum_tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Queryethereum_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_balance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Queryethereum_balanceArgs, 'id' | 'subgraphError'>>;
  ethereum_balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Queryethereum_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Queryethereum_userArgs, 'id' | 'subgraphError'>>;
  ethereum_users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Queryethereum_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Queryethereum_transferArgs, 'id' | 'subgraphError'>>;
  ethereum_transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Queryethereum_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_configurationUpdate?: Resolver<Maybe<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_configurationUpdates?: Resolver<Array<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_operatingAgreementUpdate?: Resolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_operatingAgreementUpdates?: Resolver<Array<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_validatorUpdate?: Resolver<Maybe<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_validatorUpdates?: Resolver<Array<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitMetadata?: Resolver<Maybe<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Queryethereum_traitMetadataArgs, 'id' | 'subgraphError'>>;
  ethereum_traitMetadata_collection?: Resolver<Array<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Queryethereum_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitMetadataUriUpdate?: Resolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitMetadataUriUpdates?: Resolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDefinition?: Resolver<Maybe<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Queryethereum_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDefinitions?: Resolver<Array<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Queryethereum_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitStringUpdate?: Resolver<Maybe<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitStringUpdates?: Resolver<Array<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDecimalUpdate?: Resolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDecimalUpdates?: Resolver<Array<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitBooleanUpdate?: Resolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitBooleanUpdates?: Resolver<Array<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Queryethereum_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitString?: Resolver<Maybe<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Queryethereum_traitStringArgs, 'id' | 'subgraphError'>>;
  ethereum_traitStrings?: Resolver<Array<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Queryethereum_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDecimal?: Resolver<Maybe<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Queryethereum_traitDecimalArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDecimals?: Resolver<Array<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Queryethereum_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitBoolean?: Resolver<Maybe<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Queryethereum_traitBooleanArgs, 'id' | 'subgraphError'>>;
  ethereum_traitBooleans?: Resolver<Array<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Queryethereum_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Queryethereum_loanArgs, 'id' | 'subgraphError'>>;
  ethereum_loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Queryethereum_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanLiquidatedEvent?: Resolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanLiquidatedEvents?: Resolver<Array<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanRenegotiatedEvent?: Resolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanRenegotiatedEvents?: Resolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanRepaidEvent?: Resolver<Maybe<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanRepaidEvents?: Resolver<Array<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanStartedEvent?: Resolver<Maybe<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanStartedEvents?: Resolver<Array<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Queryethereum_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_obligationReceipt?: Resolver<Maybe<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Queryethereum_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  ethereum_obligationReceipts?: Resolver<Array<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Queryethereum_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_promissoryNote?: Resolver<Maybe<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Queryethereum_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  ethereum_promissoryNotes?: Resolver<Array<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Queryethereum_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Queryethereum__metaArgs>>;
  meta_street_ethereum_pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolDayDataArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_poolDayDatas?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_collateralToken?: Resolver<Maybe<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_collateralTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_collateralTokens?: Resolver<Array<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_collateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_currencyToken?: Resolver<Maybe<ResolversTypes['CurrencyToken']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_currencyTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_currencyTokens?: Resolver<Array<ResolversTypes['CurrencyToken']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_currencyTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_tickArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_depositArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_depositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_redemption?: Resolver<Maybe<ResolversTypes['Redemption']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_redemptionArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_redemptions?: Resolver<Array<ResolversTypes['Redemption']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_redemptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_bundleArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_batchArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_batches?: Resolver<Array<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_batchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_poolEvent?: Resolver<Maybe<ResolversTypes['PoolEvent']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolEventArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_poolEvents?: Resolver<Array<ResolversTypes['PoolEvent']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_poolEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanOriginated?: Resolver<Maybe<ResolversTypes['LoanOriginated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanOriginatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanOriginateds?: Resolver<Array<ResolversTypes['LoanOriginated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanOriginatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanRepaid?: Resolver<Maybe<ResolversTypes['LoanRepaid']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanRepaidArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanRepaids?: Resolver<Array<ResolversTypes['LoanRepaid']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanRepaidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanLiquidated?: Resolver<Maybe<ResolversTypes['LoanLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanLiquidateds?: Resolver<Array<ResolversTypes['LoanLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_loanLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_collateralLiquidated?: Resolver<Maybe<ResolversTypes['CollateralLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_collateralLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_collateralLiquidateds?: Resolver<Array<ResolversTypes['CollateralLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_collateralLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_deposited?: Resolver<Maybe<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_depositedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_depositeds?: Resolver<Array<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_depositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_redeemed?: Resolver<Maybe<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_redeemedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_redeemeds?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_redeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_withdrawn?: Resolver<Maybe<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_withdrawnArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_withdrawns?: Resolver<Array<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_withdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_tokenCreated?: Resolver<Maybe<ResolversTypes['TokenCreated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_tokenCreatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_tokenCreateds?: Resolver<Array<ResolversTypes['TokenCreated']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_tokenCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_transferred?: Resolver<Maybe<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_transferredArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_transferreds?: Resolver<Array<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_transferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_liquidation?: Resolver<Maybe<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_liquidationArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_liquidations?: Resolver<Array<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_liquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_auction?: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_auctionArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_auctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_bidArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<Querymeta_street_ethereum_bidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Querymeta_street_ethereum__metaArgs>>;
  sepolia_token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Querysepolia_tokenArgs, 'id' | 'subgraphError'>>;
  sepolia_tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Querysepolia_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_balance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Querysepolia_balanceArgs, 'id' | 'subgraphError'>>;
  sepolia_balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Querysepolia_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Querysepolia_userArgs, 'id' | 'subgraphError'>>;
  sepolia_users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Querysepolia_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Querysepolia_transferArgs, 'id' | 'subgraphError'>>;
  sepolia_transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Querysepolia_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_configurationUpdate?: Resolver<Maybe<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_configurationUpdates?: Resolver<Array<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_operatingAgreementUpdate?: Resolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_operatingAgreementUpdates?: Resolver<Array<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_validatorUpdate?: Resolver<Maybe<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_validatorUpdates?: Resolver<Array<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitMetadata?: Resolver<Maybe<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Querysepolia_traitMetadataArgs, 'id' | 'subgraphError'>>;
  sepolia_traitMetadata_collection?: Resolver<Array<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Querysepolia_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitMetadataUriUpdate?: Resolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitMetadataUriUpdates?: Resolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDefinition?: Resolver<Maybe<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Querysepolia_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDefinitions?: Resolver<Array<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Querysepolia_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitStringUpdate?: Resolver<Maybe<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitStringUpdates?: Resolver<Array<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDecimalUpdate?: Resolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDecimalUpdates?: Resolver<Array<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitBooleanUpdate?: Resolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitBooleanUpdates?: Resolver<Array<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Querysepolia_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitString?: Resolver<Maybe<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Querysepolia_traitStringArgs, 'id' | 'subgraphError'>>;
  sepolia_traitStrings?: Resolver<Array<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Querysepolia_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDecimal?: Resolver<Maybe<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Querysepolia_traitDecimalArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDecimals?: Resolver<Array<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Querysepolia_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitBoolean?: Resolver<Maybe<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Querysepolia_traitBooleanArgs, 'id' | 'subgraphError'>>;
  sepolia_traitBooleans?: Resolver<Array<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Querysepolia_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querysepolia_loanArgs, 'id' | 'subgraphError'>>;
  sepolia_loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querysepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanLiquidatedEvent?: Resolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanLiquidatedEvents?: Resolver<Array<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanRenegotiatedEvent?: Resolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanRenegotiatedEvents?: Resolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanRepaidEvent?: Resolver<Maybe<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanRepaidEvents?: Resolver<Array<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanStartedEvent?: Resolver<Maybe<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanStartedEvents?: Resolver<Array<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Querysepolia_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_obligationReceipt?: Resolver<Maybe<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Querysepolia_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  sepolia_obligationReceipts?: Resolver<Array<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Querysepolia_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_promissoryNote?: Resolver<Maybe<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Querysepolia_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  sepolia_promissoryNotes?: Resolver<Array<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Querysepolia_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Querysepolia__metaArgs>>;
  meta_street_sepolia_pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolDayDataArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_poolDayDatas?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_collateralToken?: Resolver<Maybe<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_collateralTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_collateralTokens?: Resolver<Array<ResolversTypes['CollateralToken']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_collateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_currencyToken?: Resolver<Maybe<ResolversTypes['CurrencyToken']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_currencyTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_currencyTokens?: Resolver<Array<ResolversTypes['CurrencyToken']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_currencyTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_tickArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_depositArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_depositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_redemption?: Resolver<Maybe<ResolversTypes['Redemption']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_redemptionArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_redemptions?: Resolver<Array<ResolversTypes['Redemption']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_redemptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_bundleArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_batchArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_batches?: Resolver<Array<ResolversTypes['Batch']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_batchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_poolEvent?: Resolver<Maybe<ResolversTypes['PoolEvent']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolEventArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_poolEvents?: Resolver<Array<ResolversTypes['PoolEvent']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_poolEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanOriginated?: Resolver<Maybe<ResolversTypes['LoanOriginated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanOriginatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanOriginateds?: Resolver<Array<ResolversTypes['LoanOriginated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanOriginatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanRepaid?: Resolver<Maybe<ResolversTypes['LoanRepaid']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanRepaidArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanRepaids?: Resolver<Array<ResolversTypes['LoanRepaid']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanRepaidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanLiquidated?: Resolver<Maybe<ResolversTypes['LoanLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanLiquidateds?: Resolver<Array<ResolversTypes['LoanLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_loanLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_collateralLiquidated?: Resolver<Maybe<ResolversTypes['CollateralLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_collateralLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_collateralLiquidateds?: Resolver<Array<ResolversTypes['CollateralLiquidated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_collateralLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_deposited?: Resolver<Maybe<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_depositedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_depositeds?: Resolver<Array<ResolversTypes['Deposited']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_depositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_redeemed?: Resolver<Maybe<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_redeemedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_redeemeds?: Resolver<Array<ResolversTypes['Redeemed']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_redeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_withdrawn?: Resolver<Maybe<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_withdrawnArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_withdrawns?: Resolver<Array<ResolversTypes['Withdrawn']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_withdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_tokenCreated?: Resolver<Maybe<ResolversTypes['TokenCreated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_tokenCreatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_tokenCreateds?: Resolver<Array<ResolversTypes['TokenCreated']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_tokenCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_transferred?: Resolver<Maybe<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_transferredArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_transferreds?: Resolver<Array<ResolversTypes['Transferred']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_transferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_liquidation?: Resolver<Maybe<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_liquidationArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_liquidations?: Resolver<Array<ResolversTypes['Liquidation']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_liquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_auction?: Resolver<Maybe<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_auctionArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_auctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_bid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_bidArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<Querymeta_street_sepolia_bidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Querymeta_street_sepolia__metaArgs>>;
  base_sepolia_token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Querybase_sepolia_tokenArgs, 'id' | 'subgraphError'>>;
  base_sepolia_tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<Querybase_sepolia_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_balance?: Resolver<Maybe<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Querybase_sepolia_balanceArgs, 'id' | 'subgraphError'>>;
  base_sepolia_balances?: Resolver<Array<ResolversTypes['Balance']>, ParentType, ContextType, RequireFields<Querybase_sepolia_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Querybase_sepolia_userArgs, 'id' | 'subgraphError'>>;
  base_sepolia_users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<Querybase_sepolia_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Querybase_sepolia_transferArgs, 'id' | 'subgraphError'>>;
  base_sepolia_transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<Querybase_sepolia_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_configurationUpdate?: Resolver<Maybe<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_configurationUpdates?: Resolver<Array<ResolversTypes['ConfigurationUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_operatingAgreementUpdate?: Resolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_operatingAgreementUpdates?: Resolver<Array<ResolversTypes['OperatingAgreementUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_validatorUpdate?: Resolver<Maybe<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_validatorUpdates?: Resolver<Array<ResolversTypes['ValidatorUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitMetadata?: Resolver<Maybe<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitMetadataArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitMetadata_collection?: Resolver<Array<ResolversTypes['TraitMetadata']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitMetadataUriUpdate?: Resolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitMetadataUriUpdates?: Resolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDefinition?: Resolver<Maybe<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDefinitions?: Resolver<Array<ResolversTypes['TraitDefinition']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitStringUpdate?: Resolver<Maybe<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitStringUpdates?: Resolver<Array<ResolversTypes['TraitStringUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDecimalUpdate?: Resolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDecimalUpdates?: Resolver<Array<ResolversTypes['TraitDecimalUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitBooleanUpdate?: Resolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitBooleanUpdates?: Resolver<Array<ResolversTypes['TraitBooleanUpdate']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitString?: Resolver<Maybe<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitStringArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitStrings?: Resolver<Array<ResolversTypes['TraitString']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDecimal?: Resolver<Maybe<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDecimalArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDecimals?: Resolver<Array<ResolversTypes['TraitDecimal']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitBoolean?: Resolver<Maybe<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitBooleanArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitBooleans?: Resolver<Array<ResolversTypes['TraitBoolean']>, ParentType, ContextType, RequireFields<Querybase_sepolia_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanLiquidatedEvent?: Resolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanLiquidatedEvents?: Resolver<Array<ResolversTypes['LoanLiquidatedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanRenegotiatedEvent?: Resolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanRenegotiatedEvents?: Resolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanRepaidEvent?: Resolver<Maybe<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanRepaidEvents?: Resolver<Array<ResolversTypes['LoanRepaidEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanStartedEvent?: Resolver<Maybe<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanStartedEvents?: Resolver<Array<ResolversTypes['LoanStartedEvent']>, ParentType, ContextType, RequireFields<Querybase_sepolia_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_obligationReceipt?: Resolver<Maybe<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Querybase_sepolia_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  base_sepolia_obligationReceipts?: Resolver<Array<ResolversTypes['ObligationReceipt']>, ParentType, ContextType, RequireFields<Querybase_sepolia_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_promissoryNote?: Resolver<Maybe<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Querybase_sepolia_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  base_sepolia_promissoryNotes?: Resolver<Array<ResolversTypes['PromissoryNote']>, ParentType, ContextType, RequireFields<Querybase_sepolia_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Querybase_sepolia__metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  ethereum_token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "ethereum_token", ParentType, ContextType, RequireFields<Subscriptionethereum_tokenArgs, 'id' | 'subgraphError'>>;
  ethereum_tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "ethereum_tokens", ParentType, ContextType, RequireFields<Subscriptionethereum_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_balance?: SubscriptionResolver<Maybe<ResolversTypes['Balance']>, "ethereum_balance", ParentType, ContextType, RequireFields<Subscriptionethereum_balanceArgs, 'id' | 'subgraphError'>>;
  ethereum_balances?: SubscriptionResolver<Array<ResolversTypes['Balance']>, "ethereum_balances", ParentType, ContextType, RequireFields<Subscriptionethereum_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "ethereum_user", ParentType, ContextType, RequireFields<Subscriptionethereum_userArgs, 'id' | 'subgraphError'>>;
  ethereum_users?: SubscriptionResolver<Array<ResolversTypes['User']>, "ethereum_users", ParentType, ContextType, RequireFields<Subscriptionethereum_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "ethereum_transfer", ParentType, ContextType, RequireFields<Subscriptionethereum_transferArgs, 'id' | 'subgraphError'>>;
  ethereum_transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "ethereum_transfers", ParentType, ContextType, RequireFields<Subscriptionethereum_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_configurationUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ConfigurationUpdate']>, "ethereum_configurationUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_configurationUpdates?: SubscriptionResolver<Array<ResolversTypes['ConfigurationUpdate']>, "ethereum_configurationUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_operatingAgreementUpdate?: SubscriptionResolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, "ethereum_operatingAgreementUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_operatingAgreementUpdates?: SubscriptionResolver<Array<ResolversTypes['OperatingAgreementUpdate']>, "ethereum_operatingAgreementUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_validatorUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ValidatorUpdate']>, "ethereum_validatorUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_validatorUpdates?: SubscriptionResolver<Array<ResolversTypes['ValidatorUpdate']>, "ethereum_validatorUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitMetadata?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadata']>, "ethereum_traitMetadata", ParentType, ContextType, RequireFields<Subscriptionethereum_traitMetadataArgs, 'id' | 'subgraphError'>>;
  ethereum_traitMetadata_collection?: SubscriptionResolver<Array<ResolversTypes['TraitMetadata']>, "ethereum_traitMetadata_collection", ParentType, ContextType, RequireFields<Subscriptionethereum_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitMetadataUriUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, "ethereum_traitMetadataUriUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitMetadataUriUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, "ethereum_traitMetadataUriUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDefinition?: SubscriptionResolver<Maybe<ResolversTypes['TraitDefinition']>, "ethereum_traitDefinition", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDefinitions?: SubscriptionResolver<Array<ResolversTypes['TraitDefinition']>, "ethereum_traitDefinitions", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitStringUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitStringUpdate']>, "ethereum_traitStringUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitStringUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitStringUpdate']>, "ethereum_traitStringUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDecimalUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, "ethereum_traitDecimalUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDecimalUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitDecimalUpdate']>, "ethereum_traitDecimalUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitBooleanUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, "ethereum_traitBooleanUpdate", ParentType, ContextType, RequireFields<Subscriptionethereum_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  ethereum_traitBooleanUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitBooleanUpdate']>, "ethereum_traitBooleanUpdates", ParentType, ContextType, RequireFields<Subscriptionethereum_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitString?: SubscriptionResolver<Maybe<ResolversTypes['TraitString']>, "ethereum_traitString", ParentType, ContextType, RequireFields<Subscriptionethereum_traitStringArgs, 'id' | 'subgraphError'>>;
  ethereum_traitStrings?: SubscriptionResolver<Array<ResolversTypes['TraitString']>, "ethereum_traitStrings", ParentType, ContextType, RequireFields<Subscriptionethereum_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitDecimal?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimal']>, "ethereum_traitDecimal", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDecimalArgs, 'id' | 'subgraphError'>>;
  ethereum_traitDecimals?: SubscriptionResolver<Array<ResolversTypes['TraitDecimal']>, "ethereum_traitDecimals", ParentType, ContextType, RequireFields<Subscriptionethereum_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_traitBoolean?: SubscriptionResolver<Maybe<ResolversTypes['TraitBoolean']>, "ethereum_traitBoolean", ParentType, ContextType, RequireFields<Subscriptionethereum_traitBooleanArgs, 'id' | 'subgraphError'>>;
  ethereum_traitBooleans?: SubscriptionResolver<Array<ResolversTypes['TraitBoolean']>, "ethereum_traitBooleans", ParentType, ContextType, RequireFields<Subscriptionethereum_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loan?: SubscriptionResolver<Maybe<ResolversTypes['Loan']>, "ethereum_loan", ParentType, ContextType, RequireFields<Subscriptionethereum_loanArgs, 'id' | 'subgraphError'>>;
  ethereum_loans?: SubscriptionResolver<Array<ResolversTypes['Loan']>, "ethereum_loans", ParentType, ContextType, RequireFields<Subscriptionethereum_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanLiquidatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, "ethereum_loanLiquidatedEvent", ParentType, ContextType, RequireFields<Subscriptionethereum_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanLiquidatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanLiquidatedEvent']>, "ethereum_loanLiquidatedEvents", ParentType, ContextType, RequireFields<Subscriptionethereum_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanRenegotiatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, "ethereum_loanRenegotiatedEvent", ParentType, ContextType, RequireFields<Subscriptionethereum_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanRenegotiatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, "ethereum_loanRenegotiatedEvents", ParentType, ContextType, RequireFields<Subscriptionethereum_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanRepaidEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRepaidEvent']>, "ethereum_loanRepaidEvent", ParentType, ContextType, RequireFields<Subscriptionethereum_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanRepaidEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRepaidEvent']>, "ethereum_loanRepaidEvents", ParentType, ContextType, RequireFields<Subscriptionethereum_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_loanStartedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanStartedEvent']>, "ethereum_loanStartedEvent", ParentType, ContextType, RequireFields<Subscriptionethereum_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  ethereum_loanStartedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanStartedEvent']>, "ethereum_loanStartedEvents", ParentType, ContextType, RequireFields<Subscriptionethereum_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_obligationReceipt?: SubscriptionResolver<Maybe<ResolversTypes['ObligationReceipt']>, "ethereum_obligationReceipt", ParentType, ContextType, RequireFields<Subscriptionethereum_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  ethereum_obligationReceipts?: SubscriptionResolver<Array<ResolversTypes['ObligationReceipt']>, "ethereum_obligationReceipts", ParentType, ContextType, RequireFields<Subscriptionethereum_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum_promissoryNote?: SubscriptionResolver<Maybe<ResolversTypes['PromissoryNote']>, "ethereum_promissoryNote", ParentType, ContextType, RequireFields<Subscriptionethereum_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  ethereum_promissoryNotes?: SubscriptionResolver<Array<ResolversTypes['PromissoryNote']>, "ethereum_promissoryNotes", ParentType, ContextType, RequireFields<Subscriptionethereum_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  ethereum__meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "ethereum__meta", ParentType, ContextType, Partial<Subscriptionethereum__metaArgs>>;
  meta_street_ethereum_pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "meta_street_ethereum_pool", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "meta_street_ethereum_pools", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayData']>, "meta_street_ethereum_poolDayData", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolDayDataArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayData']>, "meta_street_ethereum_poolDayDatas", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_collateralToken?: SubscriptionResolver<Maybe<ResolversTypes['CollateralToken']>, "meta_street_ethereum_collateralToken", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_collateralTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_collateralTokens?: SubscriptionResolver<Array<ResolversTypes['CollateralToken']>, "meta_street_ethereum_collateralTokens", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_collateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_currencyToken?: SubscriptionResolver<Maybe<ResolversTypes['CurrencyToken']>, "meta_street_ethereum_currencyToken", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_currencyTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_currencyTokens?: SubscriptionResolver<Array<ResolversTypes['CurrencyToken']>, "meta_street_ethereum_currencyTokens", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_currencyTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "meta_street_ethereum_tick", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_tickArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "meta_street_ethereum_ticks", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "meta_street_ethereum_deposit", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_depositArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "meta_street_ethereum_deposits", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_depositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_redemption?: SubscriptionResolver<Maybe<ResolversTypes['Redemption']>, "meta_street_ethereum_redemption", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_redemptionArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_redemptions?: SubscriptionResolver<Array<ResolversTypes['Redemption']>, "meta_street_ethereum_redemptions", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_redemptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "meta_street_ethereum_bundle", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_bundleArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "meta_street_ethereum_bundles", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_batch?: SubscriptionResolver<Maybe<ResolversTypes['Batch']>, "meta_street_ethereum_batch", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_batchArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_batches?: SubscriptionResolver<Array<ResolversTypes['Batch']>, "meta_street_ethereum_batches", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_batchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loan?: SubscriptionResolver<Maybe<ResolversTypes['Loan']>, "meta_street_ethereum_loan", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loans?: SubscriptionResolver<Array<ResolversTypes['Loan']>, "meta_street_ethereum_loans", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_poolEvent?: SubscriptionResolver<Maybe<ResolversTypes['PoolEvent']>, "meta_street_ethereum_poolEvent", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolEventArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_poolEvents?: SubscriptionResolver<Array<ResolversTypes['PoolEvent']>, "meta_street_ethereum_poolEvents", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_poolEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanOriginated?: SubscriptionResolver<Maybe<ResolversTypes['LoanOriginated']>, "meta_street_ethereum_loanOriginated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanOriginatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanOriginateds?: SubscriptionResolver<Array<ResolversTypes['LoanOriginated']>, "meta_street_ethereum_loanOriginateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanOriginatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanRepaid?: SubscriptionResolver<Maybe<ResolversTypes['LoanRepaid']>, "meta_street_ethereum_loanRepaid", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanRepaidArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanRepaids?: SubscriptionResolver<Array<ResolversTypes['LoanRepaid']>, "meta_street_ethereum_loanRepaids", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanRepaidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_loanLiquidated?: SubscriptionResolver<Maybe<ResolversTypes['LoanLiquidated']>, "meta_street_ethereum_loanLiquidated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_loanLiquidateds?: SubscriptionResolver<Array<ResolversTypes['LoanLiquidated']>, "meta_street_ethereum_loanLiquidateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_loanLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_collateralLiquidated?: SubscriptionResolver<Maybe<ResolversTypes['CollateralLiquidated']>, "meta_street_ethereum_collateralLiquidated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_collateralLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_collateralLiquidateds?: SubscriptionResolver<Array<ResolversTypes['CollateralLiquidated']>, "meta_street_ethereum_collateralLiquidateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_collateralLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_deposited?: SubscriptionResolver<Maybe<ResolversTypes['Deposited']>, "meta_street_ethereum_deposited", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_depositedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_depositeds?: SubscriptionResolver<Array<ResolversTypes['Deposited']>, "meta_street_ethereum_depositeds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_depositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_redeemed?: SubscriptionResolver<Maybe<ResolversTypes['Redeemed']>, "meta_street_ethereum_redeemed", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_redeemedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_redeemeds?: SubscriptionResolver<Array<ResolversTypes['Redeemed']>, "meta_street_ethereum_redeemeds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_redeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_withdrawn?: SubscriptionResolver<Maybe<ResolversTypes['Withdrawn']>, "meta_street_ethereum_withdrawn", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_withdrawnArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_withdrawns?: SubscriptionResolver<Array<ResolversTypes['Withdrawn']>, "meta_street_ethereum_withdrawns", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_withdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_tokenCreated?: SubscriptionResolver<Maybe<ResolversTypes['TokenCreated']>, "meta_street_ethereum_tokenCreated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_tokenCreatedArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_tokenCreateds?: SubscriptionResolver<Array<ResolversTypes['TokenCreated']>, "meta_street_ethereum_tokenCreateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_tokenCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_transferred?: SubscriptionResolver<Maybe<ResolversTypes['Transferred']>, "meta_street_ethereum_transferred", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_transferredArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_transferreds?: SubscriptionResolver<Array<ResolversTypes['Transferred']>, "meta_street_ethereum_transferreds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_transferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_liquidation?: SubscriptionResolver<Maybe<ResolversTypes['Liquidation']>, "meta_street_ethereum_liquidation", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_liquidationArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_liquidations?: SubscriptionResolver<Array<ResolversTypes['Liquidation']>, "meta_street_ethereum_liquidations", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_liquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_auction?: SubscriptionResolver<Maybe<ResolversTypes['Auction']>, "meta_street_ethereum_auction", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_auctionArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_auctions?: SubscriptionResolver<Array<ResolversTypes['Auction']>, "meta_street_ethereum_auctions", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_auctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum_bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "meta_street_ethereum_bid", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_bidArgs, 'id' | 'subgraphError'>>;
  meta_street_ethereum_bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "meta_street_ethereum_bids", ParentType, ContextType, RequireFields<Subscriptionmeta_street_ethereum_bidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_ethereum__meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "meta_street_ethereum__meta", ParentType, ContextType, Partial<Subscriptionmeta_street_ethereum__metaArgs>>;
  sepolia_token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "sepolia_token", ParentType, ContextType, RequireFields<Subscriptionsepolia_tokenArgs, 'id' | 'subgraphError'>>;
  sepolia_tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "sepolia_tokens", ParentType, ContextType, RequireFields<Subscriptionsepolia_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_balance?: SubscriptionResolver<Maybe<ResolversTypes['Balance']>, "sepolia_balance", ParentType, ContextType, RequireFields<Subscriptionsepolia_balanceArgs, 'id' | 'subgraphError'>>;
  sepolia_balances?: SubscriptionResolver<Array<ResolversTypes['Balance']>, "sepolia_balances", ParentType, ContextType, RequireFields<Subscriptionsepolia_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "sepolia_user", ParentType, ContextType, RequireFields<Subscriptionsepolia_userArgs, 'id' | 'subgraphError'>>;
  sepolia_users?: SubscriptionResolver<Array<ResolversTypes['User']>, "sepolia_users", ParentType, ContextType, RequireFields<Subscriptionsepolia_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "sepolia_transfer", ParentType, ContextType, RequireFields<Subscriptionsepolia_transferArgs, 'id' | 'subgraphError'>>;
  sepolia_transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "sepolia_transfers", ParentType, ContextType, RequireFields<Subscriptionsepolia_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_configurationUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ConfigurationUpdate']>, "sepolia_configurationUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_configurationUpdates?: SubscriptionResolver<Array<ResolversTypes['ConfigurationUpdate']>, "sepolia_configurationUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_operatingAgreementUpdate?: SubscriptionResolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, "sepolia_operatingAgreementUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_operatingAgreementUpdates?: SubscriptionResolver<Array<ResolversTypes['OperatingAgreementUpdate']>, "sepolia_operatingAgreementUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_validatorUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ValidatorUpdate']>, "sepolia_validatorUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_validatorUpdates?: SubscriptionResolver<Array<ResolversTypes['ValidatorUpdate']>, "sepolia_validatorUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitMetadata?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadata']>, "sepolia_traitMetadata", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitMetadataArgs, 'id' | 'subgraphError'>>;
  sepolia_traitMetadata_collection?: SubscriptionResolver<Array<ResolversTypes['TraitMetadata']>, "sepolia_traitMetadata_collection", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitMetadataUriUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, "sepolia_traitMetadataUriUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitMetadataUriUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, "sepolia_traitMetadataUriUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDefinition?: SubscriptionResolver<Maybe<ResolversTypes['TraitDefinition']>, "sepolia_traitDefinition", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDefinitions?: SubscriptionResolver<Array<ResolversTypes['TraitDefinition']>, "sepolia_traitDefinitions", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitStringUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitStringUpdate']>, "sepolia_traitStringUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitStringUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitStringUpdate']>, "sepolia_traitStringUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDecimalUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, "sepolia_traitDecimalUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDecimalUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitDecimalUpdate']>, "sepolia_traitDecimalUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitBooleanUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, "sepolia_traitBooleanUpdate", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  sepolia_traitBooleanUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitBooleanUpdate']>, "sepolia_traitBooleanUpdates", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitString?: SubscriptionResolver<Maybe<ResolversTypes['TraitString']>, "sepolia_traitString", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitStringArgs, 'id' | 'subgraphError'>>;
  sepolia_traitStrings?: SubscriptionResolver<Array<ResolversTypes['TraitString']>, "sepolia_traitStrings", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitDecimal?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimal']>, "sepolia_traitDecimal", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDecimalArgs, 'id' | 'subgraphError'>>;
  sepolia_traitDecimals?: SubscriptionResolver<Array<ResolversTypes['TraitDecimal']>, "sepolia_traitDecimals", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_traitBoolean?: SubscriptionResolver<Maybe<ResolversTypes['TraitBoolean']>, "sepolia_traitBoolean", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitBooleanArgs, 'id' | 'subgraphError'>>;
  sepolia_traitBooleans?: SubscriptionResolver<Array<ResolversTypes['TraitBoolean']>, "sepolia_traitBooleans", ParentType, ContextType, RequireFields<Subscriptionsepolia_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loan?: SubscriptionResolver<Maybe<ResolversTypes['Loan']>, "sepolia_loan", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanArgs, 'id' | 'subgraphError'>>;
  sepolia_loans?: SubscriptionResolver<Array<ResolversTypes['Loan']>, "sepolia_loans", ParentType, ContextType, RequireFields<Subscriptionsepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanLiquidatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, "sepolia_loanLiquidatedEvent", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanLiquidatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanLiquidatedEvent']>, "sepolia_loanLiquidatedEvents", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanRenegotiatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, "sepolia_loanRenegotiatedEvent", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanRenegotiatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, "sepolia_loanRenegotiatedEvents", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanRepaidEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRepaidEvent']>, "sepolia_loanRepaidEvent", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanRepaidEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRepaidEvent']>, "sepolia_loanRepaidEvents", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_loanStartedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanStartedEvent']>, "sepolia_loanStartedEvent", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  sepolia_loanStartedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanStartedEvent']>, "sepolia_loanStartedEvents", ParentType, ContextType, RequireFields<Subscriptionsepolia_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_obligationReceipt?: SubscriptionResolver<Maybe<ResolversTypes['ObligationReceipt']>, "sepolia_obligationReceipt", ParentType, ContextType, RequireFields<Subscriptionsepolia_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  sepolia_obligationReceipts?: SubscriptionResolver<Array<ResolversTypes['ObligationReceipt']>, "sepolia_obligationReceipts", ParentType, ContextType, RequireFields<Subscriptionsepolia_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia_promissoryNote?: SubscriptionResolver<Maybe<ResolversTypes['PromissoryNote']>, "sepolia_promissoryNote", ParentType, ContextType, RequireFields<Subscriptionsepolia_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  sepolia_promissoryNotes?: SubscriptionResolver<Array<ResolversTypes['PromissoryNote']>, "sepolia_promissoryNotes", ParentType, ContextType, RequireFields<Subscriptionsepolia_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  sepolia__meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "sepolia__meta", ParentType, ContextType, Partial<Subscriptionsepolia__metaArgs>>;
  meta_street_sepolia_pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "meta_street_sepolia_pool", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "meta_street_sepolia_pools", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayData']>, "meta_street_sepolia_poolDayData", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolDayDataArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayData']>, "meta_street_sepolia_poolDayDatas", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolDayDatasArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_collateralToken?: SubscriptionResolver<Maybe<ResolversTypes['CollateralToken']>, "meta_street_sepolia_collateralToken", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_collateralTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_collateralTokens?: SubscriptionResolver<Array<ResolversTypes['CollateralToken']>, "meta_street_sepolia_collateralTokens", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_collateralTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_currencyToken?: SubscriptionResolver<Maybe<ResolversTypes['CurrencyToken']>, "meta_street_sepolia_currencyToken", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_currencyTokenArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_currencyTokens?: SubscriptionResolver<Array<ResolversTypes['CurrencyToken']>, "meta_street_sepolia_currencyTokens", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_currencyTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "meta_street_sepolia_tick", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_tickArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "meta_street_sepolia_ticks", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_ticksArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_deposit?: SubscriptionResolver<Maybe<ResolversTypes['Deposit']>, "meta_street_sepolia_deposit", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_depositArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_deposits?: SubscriptionResolver<Array<ResolversTypes['Deposit']>, "meta_street_sepolia_deposits", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_depositsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_redemption?: SubscriptionResolver<Maybe<ResolversTypes['Redemption']>, "meta_street_sepolia_redemption", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_redemptionArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_redemptions?: SubscriptionResolver<Array<ResolversTypes['Redemption']>, "meta_street_sepolia_redemptions", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_redemptionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "meta_street_sepolia_bundle", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_bundleArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "meta_street_sepolia_bundles", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_bundlesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_batch?: SubscriptionResolver<Maybe<ResolversTypes['Batch']>, "meta_street_sepolia_batch", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_batchArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_batches?: SubscriptionResolver<Array<ResolversTypes['Batch']>, "meta_street_sepolia_batches", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_batchesArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loan?: SubscriptionResolver<Maybe<ResolversTypes['Loan']>, "meta_street_sepolia_loan", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loans?: SubscriptionResolver<Array<ResolversTypes['Loan']>, "meta_street_sepolia_loans", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_poolEvent?: SubscriptionResolver<Maybe<ResolversTypes['PoolEvent']>, "meta_street_sepolia_poolEvent", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolEventArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_poolEvents?: SubscriptionResolver<Array<ResolversTypes['PoolEvent']>, "meta_street_sepolia_poolEvents", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_poolEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanOriginated?: SubscriptionResolver<Maybe<ResolversTypes['LoanOriginated']>, "meta_street_sepolia_loanOriginated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanOriginatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanOriginateds?: SubscriptionResolver<Array<ResolversTypes['LoanOriginated']>, "meta_street_sepolia_loanOriginateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanOriginatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanRepaid?: SubscriptionResolver<Maybe<ResolversTypes['LoanRepaid']>, "meta_street_sepolia_loanRepaid", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanRepaidArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanRepaids?: SubscriptionResolver<Array<ResolversTypes['LoanRepaid']>, "meta_street_sepolia_loanRepaids", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanRepaidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_loanLiquidated?: SubscriptionResolver<Maybe<ResolversTypes['LoanLiquidated']>, "meta_street_sepolia_loanLiquidated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_loanLiquidateds?: SubscriptionResolver<Array<ResolversTypes['LoanLiquidated']>, "meta_street_sepolia_loanLiquidateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_loanLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_collateralLiquidated?: SubscriptionResolver<Maybe<ResolversTypes['CollateralLiquidated']>, "meta_street_sepolia_collateralLiquidated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_collateralLiquidatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_collateralLiquidateds?: SubscriptionResolver<Array<ResolversTypes['CollateralLiquidated']>, "meta_street_sepolia_collateralLiquidateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_collateralLiquidatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_deposited?: SubscriptionResolver<Maybe<ResolversTypes['Deposited']>, "meta_street_sepolia_deposited", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_depositedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_depositeds?: SubscriptionResolver<Array<ResolversTypes['Deposited']>, "meta_street_sepolia_depositeds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_depositedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_redeemed?: SubscriptionResolver<Maybe<ResolversTypes['Redeemed']>, "meta_street_sepolia_redeemed", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_redeemedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_redeemeds?: SubscriptionResolver<Array<ResolversTypes['Redeemed']>, "meta_street_sepolia_redeemeds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_redeemedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_withdrawn?: SubscriptionResolver<Maybe<ResolversTypes['Withdrawn']>, "meta_street_sepolia_withdrawn", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_withdrawnArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_withdrawns?: SubscriptionResolver<Array<ResolversTypes['Withdrawn']>, "meta_street_sepolia_withdrawns", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_withdrawnsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_tokenCreated?: SubscriptionResolver<Maybe<ResolversTypes['TokenCreated']>, "meta_street_sepolia_tokenCreated", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_tokenCreatedArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_tokenCreateds?: SubscriptionResolver<Array<ResolversTypes['TokenCreated']>, "meta_street_sepolia_tokenCreateds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_tokenCreatedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_transferred?: SubscriptionResolver<Maybe<ResolversTypes['Transferred']>, "meta_street_sepolia_transferred", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_transferredArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_transferreds?: SubscriptionResolver<Array<ResolversTypes['Transferred']>, "meta_street_sepolia_transferreds", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_transferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_liquidation?: SubscriptionResolver<Maybe<ResolversTypes['Liquidation']>, "meta_street_sepolia_liquidation", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_liquidationArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_liquidations?: SubscriptionResolver<Array<ResolversTypes['Liquidation']>, "meta_street_sepolia_liquidations", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_liquidationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_auction?: SubscriptionResolver<Maybe<ResolversTypes['Auction']>, "meta_street_sepolia_auction", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_auctionArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_auctions?: SubscriptionResolver<Array<ResolversTypes['Auction']>, "meta_street_sepolia_auctions", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_auctionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia_bid?: SubscriptionResolver<Maybe<ResolversTypes['Bid']>, "meta_street_sepolia_bid", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_bidArgs, 'id' | 'subgraphError'>>;
  meta_street_sepolia_bids?: SubscriptionResolver<Array<ResolversTypes['Bid']>, "meta_street_sepolia_bids", ParentType, ContextType, RequireFields<Subscriptionmeta_street_sepolia_bidsArgs, 'skip' | 'first' | 'subgraphError'>>;
  meta_street_sepolia__meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "meta_street_sepolia__meta", ParentType, ContextType, Partial<Subscriptionmeta_street_sepolia__metaArgs>>;
  base_sepolia_token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "base_sepolia_token", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_tokenArgs, 'id' | 'subgraphError'>>;
  base_sepolia_tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "base_sepolia_tokens", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_tokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_balance?: SubscriptionResolver<Maybe<ResolversTypes['Balance']>, "base_sepolia_balance", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_balanceArgs, 'id' | 'subgraphError'>>;
  base_sepolia_balances?: SubscriptionResolver<Array<ResolversTypes['Balance']>, "base_sepolia_balances", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_balancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "base_sepolia_user", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_userArgs, 'id' | 'subgraphError'>>;
  base_sepolia_users?: SubscriptionResolver<Array<ResolversTypes['User']>, "base_sepolia_users", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_usersArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "base_sepolia_transfer", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_transferArgs, 'id' | 'subgraphError'>>;
  base_sepolia_transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "base_sepolia_transfers", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_transfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_configurationUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ConfigurationUpdate']>, "base_sepolia_configurationUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_configurationUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_configurationUpdates?: SubscriptionResolver<Array<ResolversTypes['ConfigurationUpdate']>, "base_sepolia_configurationUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_configurationUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_operatingAgreementUpdate?: SubscriptionResolver<Maybe<ResolversTypes['OperatingAgreementUpdate']>, "base_sepolia_operatingAgreementUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_operatingAgreementUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_operatingAgreementUpdates?: SubscriptionResolver<Array<ResolversTypes['OperatingAgreementUpdate']>, "base_sepolia_operatingAgreementUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_operatingAgreementUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_validatorUpdate?: SubscriptionResolver<Maybe<ResolversTypes['ValidatorUpdate']>, "base_sepolia_validatorUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_validatorUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_validatorUpdates?: SubscriptionResolver<Array<ResolversTypes['ValidatorUpdate']>, "base_sepolia_validatorUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_validatorUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitMetadata?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadata']>, "base_sepolia_traitMetadata", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitMetadataArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitMetadata_collection?: SubscriptionResolver<Array<ResolversTypes['TraitMetadata']>, "base_sepolia_traitMetadata_collection", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitMetadata_collectionArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitMetadataUriUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitMetadataUriUpdate']>, "base_sepolia_traitMetadataUriUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitMetadataUriUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitMetadataUriUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitMetadataUriUpdate']>, "base_sepolia_traitMetadataUriUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitMetadataUriUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDefinition?: SubscriptionResolver<Maybe<ResolversTypes['TraitDefinition']>, "base_sepolia_traitDefinition", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDefinitionArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDefinitions?: SubscriptionResolver<Array<ResolversTypes['TraitDefinition']>, "base_sepolia_traitDefinitions", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDefinitionsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitStringUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitStringUpdate']>, "base_sepolia_traitStringUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitStringUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitStringUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitStringUpdate']>, "base_sepolia_traitStringUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitStringUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDecimalUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimalUpdate']>, "base_sepolia_traitDecimalUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDecimalUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDecimalUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitDecimalUpdate']>, "base_sepolia_traitDecimalUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDecimalUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitBooleanUpdate?: SubscriptionResolver<Maybe<ResolversTypes['TraitBooleanUpdate']>, "base_sepolia_traitBooleanUpdate", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitBooleanUpdateArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitBooleanUpdates?: SubscriptionResolver<Array<ResolversTypes['TraitBooleanUpdate']>, "base_sepolia_traitBooleanUpdates", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitBooleanUpdatesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitString?: SubscriptionResolver<Maybe<ResolversTypes['TraitString']>, "base_sepolia_traitString", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitStringArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitStrings?: SubscriptionResolver<Array<ResolversTypes['TraitString']>, "base_sepolia_traitStrings", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitStringsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitDecimal?: SubscriptionResolver<Maybe<ResolversTypes['TraitDecimal']>, "base_sepolia_traitDecimal", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDecimalArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitDecimals?: SubscriptionResolver<Array<ResolversTypes['TraitDecimal']>, "base_sepolia_traitDecimals", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitDecimalsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_traitBoolean?: SubscriptionResolver<Maybe<ResolversTypes['TraitBoolean']>, "base_sepolia_traitBoolean", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitBooleanArgs, 'id' | 'subgraphError'>>;
  base_sepolia_traitBooleans?: SubscriptionResolver<Array<ResolversTypes['TraitBoolean']>, "base_sepolia_traitBooleans", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_traitBooleansArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loan?: SubscriptionResolver<Maybe<ResolversTypes['Loan']>, "base_sepolia_loan", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loans?: SubscriptionResolver<Array<ResolversTypes['Loan']>, "base_sepolia_loans", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loansArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanLiquidatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanLiquidatedEvent']>, "base_sepolia_loanLiquidatedEvent", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanLiquidatedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanLiquidatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanLiquidatedEvent']>, "base_sepolia_loanLiquidatedEvents", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanLiquidatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanRenegotiatedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRenegotiatedEvent']>, "base_sepolia_loanRenegotiatedEvent", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanRenegotiatedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanRenegotiatedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRenegotiatedEvent']>, "base_sepolia_loanRenegotiatedEvents", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanRenegotiatedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanRepaidEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanRepaidEvent']>, "base_sepolia_loanRepaidEvent", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanRepaidEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanRepaidEvents?: SubscriptionResolver<Array<ResolversTypes['LoanRepaidEvent']>, "base_sepolia_loanRepaidEvents", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanRepaidEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_loanStartedEvent?: SubscriptionResolver<Maybe<ResolversTypes['LoanStartedEvent']>, "base_sepolia_loanStartedEvent", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanStartedEventArgs, 'id' | 'subgraphError'>>;
  base_sepolia_loanStartedEvents?: SubscriptionResolver<Array<ResolversTypes['LoanStartedEvent']>, "base_sepolia_loanStartedEvents", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_loanStartedEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_obligationReceipt?: SubscriptionResolver<Maybe<ResolversTypes['ObligationReceipt']>, "base_sepolia_obligationReceipt", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_obligationReceiptArgs, 'id' | 'subgraphError'>>;
  base_sepolia_obligationReceipts?: SubscriptionResolver<Array<ResolversTypes['ObligationReceipt']>, "base_sepolia_obligationReceipts", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_obligationReceiptsArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia_promissoryNote?: SubscriptionResolver<Maybe<ResolversTypes['PromissoryNote']>, "base_sepolia_promissoryNote", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_promissoryNoteArgs, 'id' | 'subgraphError'>>;
  base_sepolia_promissoryNotes?: SubscriptionResolver<Array<ResolversTypes['PromissoryNote']>, "base_sepolia_promissoryNotes", ParentType, ContextType, RequireFields<Subscriptionbase_sepolia_promissoryNotesArgs, 'skip' | 'first' | 'subgraphError'>>;
  base_sepolia__meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "base_sepolia__meta", ParentType, ContextType, Partial<Subscriptionbase_sepolia__metaArgs>>;
}>;

export type BalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Balance'] = ResolversParentTypes['Balance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  holder?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  balance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ConfigurationUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConfigurationUpdate'] = ResolversParentTypes['ConfigurationUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  newValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LoanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Loan'] = ResolversParentTypes['Loan']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanProvider?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  loanContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanStatus?: Resolver<ResolversTypes['LoanStatus'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loanPrincipalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maximumRepaymentAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanERC20Denomination?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanInterestRateForDurationInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  loanAdminFeeInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nftCollateralWrapper?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanStartTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  revenueSharePartner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  revenueShareInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralFeeInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  loanMaturityDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  loanLiquidationDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalRenegotiationFeesPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalRenegotiationAdminFeesPaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidToLender?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  adminFeePaid?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  revenueSharePaid?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  encodedLoanReceipt?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  obligationReceipt?: Resolver<Maybe<ResolversTypes['ObligationReceipt']>, ParentType, ContextType>;
  promissoryNotes?: Resolver<Maybe<Array<ResolversTypes['PromissoryNote']>>, ParentType, ContextType, RequireFields<LoanpromissoryNotesArgs, 'skip' | 'first'>>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LoanStatus'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  completionTransactionHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  completion?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType>;
  batch?: Resolver<Maybe<ResolversTypes['Batch']>, ParentType, ContextType>;
  delegate?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  delegateV2?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['CollateralToken'], ParentType, ContextType>;
  collateralTokenIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collateralWrapperToken?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  collateralWrapperTokenId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ticks?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  useds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  interests?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  principal?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  repayment?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  adminFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  proceeds?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  collateralWrapperContext?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanReceipt?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanLiquidatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanLiquidatedEvent'] = ResolversParentTypes['LoanLiquidatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loanPrincipalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanMaturityDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanLiquidationDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanRenegotiatedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanRenegotiatedEvent'] = ResolversParentTypes['LoanRenegotiatedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  newLoanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  newMaximumRepaymentAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  renegotiationFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  renegotiationAdminFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanRepaidEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanRepaidEvent'] = ResolversParentTypes['LoanRepaidEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loanPrincipalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amountPaidToLender?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  adminFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  revenueShare?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  revenueSharePartner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nftCollateralContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanERC20Denomination?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanStartedEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanStartedEvent'] = ResolversParentTypes['LoanStartedEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  borrower?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  lender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  loanPrincipalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  maximumRepaymentAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanERC20Denomination?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loanInterestRateForDurationInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  loanAdminFeeInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nftCollateralWrapper?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loanStartTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  nftCollateralContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  revenueSharePartner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  revenueShareInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralFeeInBasisPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ObligationReceiptResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ObligationReceipt'] = ResolversParentTypes['ObligationReceipt']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  receiptTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  nftCollateralContract?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  nftCollateralId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  holder?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OperatingAgreementUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OperatingAgreementUpdate'] = ResolversParentTypes['OperatingAgreementUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  newValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PromissoryNoteResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PromissoryNote'] = ResolversParentTypes['PromissoryNote']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  noteTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loan?: Resolver<Maybe<ResolversTypes['Loan']>, ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  holder?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  mintTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  booleanTraits?: Resolver<Maybe<Array<ResolversTypes['TraitBoolean']>>, ParentType, ContextType, RequireFields<TokenbooleanTraitsArgs, 'skip' | 'first'>>;
  configuration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  balances?: Resolver<Maybe<Array<ResolversTypes['Balance']>>, ParentType, ContextType, RequireFields<TokenbalancesArgs, 'skip' | 'first'>>;
  creator?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  decimalTraits?: Resolver<Maybe<Array<ResolversTypes['TraitDecimal']>>, ParentType, ContextType, RequireFields<TokendecimalTraitsArgs, 'skip' | 'first'>>;
  definition?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  operatingAgreement?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stringTraits?: Resolver<Maybe<Array<ResolversTypes['TraitString']>>, ParentType, ContextType, RequireFields<TokenstringTraitsArgs, 'skip' | 'first'>>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transfers?: Resolver<Maybe<Array<ResolversTypes['Transfer']>>, ParentType, ContextType, RequireFields<TokentransfersArgs, 'skip' | 'first'>>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  validator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitBooleanResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitBoolean'] = ResolversParentTypes['TraitBoolean']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitBooleanUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitBooleanUpdate'] = ResolversParentTypes['TraitBooleanUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newValue?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitDecimalResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitDecimal'] = ResolversParentTypes['TraitDecimal']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitDecimalUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitDecimalUpdate'] = ResolversParentTypes['TraitDecimalUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitDefinitionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitDefinition'] = ResolversParentTypes['TraitDefinition']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['TraitType'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitMetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitMetadata'] = ResolversParentTypes['TraitMetadata']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decoded?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitMetadataUriUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitMetadataUriUpdate'] = ResolversParentTypes['TraitMetadataUriUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  uri?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decoded?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitStringResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitString'] = ResolversParentTypes['TraitString']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TraitStringUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TraitStringUpdate'] = ResolversParentTypes['TraitStringUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  traitKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  newValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  operator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tokenCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokens?: Resolver<Maybe<Array<ResolversTypes['Balance']>>, ParentType, ContextType, RequireFields<UsertokensArgs, 'skip' | 'first'>>;
  created?: Resolver<Maybe<Array<ResolversTypes['Token']>>, ParentType, ContextType, RequireFields<UsercreatedArgs, 'skip' | 'first'>>;
  obligationReceipts?: Resolver<Maybe<Array<ResolversTypes['ObligationReceipt']>>, ParentType, ContextType, RequireFields<UserobligationReceiptsArgs, 'skip' | 'first'>>;
  promissoryNotes?: Resolver<Maybe<Array<ResolversTypes['PromissoryNote']>>, ParentType, ContextType, RequireFields<UserpromissoryNotesArgs, 'skip' | 'first'>>;
  lending?: Resolver<Maybe<Array<ResolversTypes['Loan']>>, ParentType, ContextType, RequireFields<UserlendingArgs, 'skip' | 'first'>>;
  borrowing?: Resolver<Maybe<Array<ResolversTypes['Loan']>>, ParentType, ContextType, RequireFields<UserborrowingArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ValidatorUpdateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ValidatorUpdate'] = ResolversParentTypes['ValidatorUpdate']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  newValue?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuctionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Auction'] = ResolversParentTypes['Auction']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidation?: Resolver<ResolversTypes['Liquidation'], ParentType, ContextType>;
  collateralToken?: Resolver<Maybe<ResolversTypes['CollateralToken']>, ParentType, ContextType>;
  currencyToken?: Resolver<ResolversTypes['CurrencyToken'], ParentType, ContextType>;
  collateralTokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  highestBid?: Resolver<Maybe<ResolversTypes['Bid']>, ParentType, ContextType>;
  bidsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bids?: Resolver<Array<ResolversTypes['Bid']>, ParentType, ContextType, RequireFields<AuctionbidsArgs, 'skip' | 'first'>>;
  status?: Resolver<Maybe<ResolversTypes['AuctionStatus']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Batch'] = ResolversParentTypes['Batch']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralWrapperContext?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingCollateralTokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingCollateralTokenIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BidResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bid'] = ResolversParentTypes['Bid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  auction?: Resolver<ResolversTypes['Auction'], ParentType, ContextType>;
  bidder?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  isHighest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BundleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralWrapperContext?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingCollateralTokenAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  underlyingCollateralTokenIds?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollateralLiquidatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralLiquidated'] = ResolversParentTypes['CollateralLiquidated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  proceeds?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollateralTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CollateralToken'] = ResolversParentTypes['CollateralToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<CollateralTokenpoolsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CurrencyToken'] = ResolversParentTypes['CurrencyToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<CurrencyTokenpoolsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  depositedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redemptions?: Resolver<Array<ResolversTypes['Redemption']>, ParentType, ContextType, RequireFields<DepositredemptionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DepositedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Deposited'] = ResolversParentTypes['Deposited']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LiquidationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Liquidation'] = ResolversParentTypes['Liquidation']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  source?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sourceImplementation?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['CollateralToken'], ParentType, ContextType>;
  currencyToken?: Resolver<ResolversTypes['CurrencyToken'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  auctions?: Resolver<Array<ResolversTypes['Auction']>, ParentType, ContextType, RequireFields<LiquidationauctionsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanLiquidatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanLiquidated'] = ResolversParentTypes['LoanLiquidated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanOriginatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanOriginated'] = ResolversParentTypes['LoanOriginated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LoanRepaidResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LoanRepaid'] = ResolversParentTypes['LoanRepaid']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  loan?: Resolver<ResolversTypes['Loan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  implementationVersionMajor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  implementation?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collateralToken?: Resolver<ResolversTypes['CollateralToken'], ParentType, ContextType>;
  currencyToken?: Resolver<ResolversTypes['CurrencyToken'], ParentType, ContextType>;
  collateralWrappers?: Resolver<Array<ResolversTypes['Bytes']>, ParentType, ContextType>;
  durations?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  rates?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  adminFeeRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  adminFeeShareRecipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  adminFeeShareSplit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  collateralLiquidator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  delegationRegistry?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  externalPriceOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  tokenIdRange?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  tokenIdSet?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  tokenIdMerkleRoot?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  tokenIdMerkleMetadataURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBorrows?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>;
  adminFeeBalance?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<PoolticksArgs, 'skip' | 'first'>>;
  deposits?: Resolver<Array<ResolversTypes['Deposit']>, ParentType, ContextType, RequireFields<PooldepositsArgs, 'skip' | 'first'>>;
  loans?: Resolver<Array<ResolversTypes['Loan']>, ParentType, ContextType, RequireFields<PoolloansArgs, 'skip' | 'first'>>;
  events?: Resolver<Array<ResolversTypes['PoolEvent']>, ParentType, ContextType, RequireFields<PooleventsArgs, 'skip' | 'first'>>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueAvailable?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loansOriginated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loansActive?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loansRepaid?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loansLiquidated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  loansCollateralLiquidated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  dayData?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<PooldayDataArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolDayDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolDayData'] = ResolversParentTypes['PoolDayData']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueAvailable?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PoolEvent'] = ResolversParentTypes['PoolEvent']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PoolEventType'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  deposit?: Resolver<Maybe<ResolversTypes['Deposit']>, ParentType, ContextType>;
  loanOriginated?: Resolver<Maybe<ResolversTypes['LoanOriginated']>, ParentType, ContextType>;
  loanRepaid?: Resolver<Maybe<ResolversTypes['LoanRepaid']>, ParentType, ContextType>;
  loanLiquidated?: Resolver<Maybe<ResolversTypes['LoanLiquidated']>, ParentType, ContextType>;
  collateralLiquidated?: Resolver<Maybe<ResolversTypes['CollateralLiquidated']>, ParentType, ContextType>;
  deposited?: Resolver<Maybe<ResolversTypes['Deposited']>, ParentType, ContextType>;
  redeemed?: Resolver<Maybe<ResolversTypes['Redeemed']>, ParentType, ContextType>;
  withdrawn?: Resolver<Maybe<ResolversTypes['Withdrawn']>, ParentType, ContextType>;
  tokenCreated?: Resolver<Maybe<ResolversTypes['TokenCreated']>, ParentType, ContextType>;
  transferred?: Resolver<Maybe<ResolversTypes['Transferred']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedeemedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Redeemed'] = ResolversParentTypes['Redeemed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  estimatedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RedemptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Redemption'] = ResolversParentTypes['Redemption']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  redemptionId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deposit?: Resolver<ResolversTypes['Deposit'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TickResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tick'] = ResolversParentTypes['Tick']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  raw?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  limit?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  durationIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rateIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  limitType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  available?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pending?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  redemptionPending?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  prev?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  next?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  accrued?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  accrualRate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  accrualTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  principalWeightedDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  interestWeightedMaturity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['CurrencyToken']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenCreatedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TokenCreated'] = ResolversParentTypes['TokenCreated']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['CurrencyToken'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transferred'] = ResolversParentTypes['Transferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['CurrencyToken'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  estimatedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WithdrawnResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Withdrawn'] = ResolversParentTypes['Withdrawn']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  shares?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Balance?: BalanceResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  ConfigurationUpdate?: ConfigurationUpdateResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Loan?: LoanResolvers<ContextType>;
  LoanLiquidatedEvent?: LoanLiquidatedEventResolvers<ContextType>;
  LoanRenegotiatedEvent?: LoanRenegotiatedEventResolvers<ContextType>;
  LoanRepaidEvent?: LoanRepaidEventResolvers<ContextType>;
  LoanStartedEvent?: LoanStartedEventResolvers<ContextType>;
  ObligationReceipt?: ObligationReceiptResolvers<ContextType>;
  OperatingAgreementUpdate?: OperatingAgreementUpdateResolvers<ContextType>;
  PromissoryNote?: PromissoryNoteResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Token?: TokenResolvers<ContextType>;
  TraitBoolean?: TraitBooleanResolvers<ContextType>;
  TraitBooleanUpdate?: TraitBooleanUpdateResolvers<ContextType>;
  TraitDecimal?: TraitDecimalResolvers<ContextType>;
  TraitDecimalUpdate?: TraitDecimalUpdateResolvers<ContextType>;
  TraitDefinition?: TraitDefinitionResolvers<ContextType>;
  TraitMetadata?: TraitMetadataResolvers<ContextType>;
  TraitMetadataUriUpdate?: TraitMetadataUriUpdateResolvers<ContextType>;
  TraitString?: TraitStringResolvers<ContextType>;
  TraitStringUpdate?: TraitStringUpdateResolvers<ContextType>;
  Transfer?: TransferResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  ValidatorUpdate?: ValidatorUpdateResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
  Auction?: AuctionResolvers<ContextType>;
  Batch?: BatchResolvers<ContextType>;
  Bid?: BidResolvers<ContextType>;
  Bundle?: BundleResolvers<ContextType>;
  CollateralLiquidated?: CollateralLiquidatedResolvers<ContextType>;
  CollateralToken?: CollateralTokenResolvers<ContextType>;
  CurrencyToken?: CurrencyTokenResolvers<ContextType>;
  Deposit?: DepositResolvers<ContextType>;
  Deposited?: DepositedResolvers<ContextType>;
  Liquidation?: LiquidationResolvers<ContextType>;
  LoanLiquidated?: LoanLiquidatedResolvers<ContextType>;
  LoanOriginated?: LoanOriginatedResolvers<ContextType>;
  LoanRepaid?: LoanRepaidResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PoolDayData?: PoolDayDataResolvers<ContextType>;
  PoolEvent?: PoolEventResolvers<ContextType>;
  Redeemed?: RedeemedResolvers<ContextType>;
  Redemption?: RedemptionResolvers<ContextType>;
  Tick?: TickResolvers<ContextType>;
  TokenCreated?: TokenCreatedResolvers<ContextType>;
  Transferred?: TransferredResolvers<ContextType>;
  Withdrawn?: WithdrawnResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = FabricaEthereumTypes.Context & MetaStreetEthereumTypes.Context & FabricaSepoliaTypes.Context & MetaStreetSepoliaTypes.Context & FabricaBaseSepoliaTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/fabrica-ethereum/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    case ".graphclient/sources/fabrica-base-sepolia/introspectionSchema":
      return Promise.resolve(importedModule$1) as T;
    
    case ".graphclient/sources/meta-street-ethereum/introspectionSchema":
      return Promise.resolve(importedModule$2) as T;
    
    case ".graphclient/sources/meta-street-sepolia/introspectionSchema":
      return Promise.resolve(importedModule$3) as T;
    
    case ".graphclient/sources/fabrica-sepolia/introspectionSchema":
      return Promise.resolve(importedModule$4) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const fabricaEthereumTransforms = [];
const metaStreetEthereumTransforms = [];
const fabricaSepoliaTransforms = [];
const metaStreetSepoliaTransforms = [];
const fabricaBaseSepoliaTransforms = [];
const additionalTypeDefs = [] as any[];
const fabricaEthereumHandler = new GraphqlHandler({
              name: "fabrica-ethereum",
              config: {"endpoint":"https://subgraph.satsuma-prod.com/0f3e6e7bbd04/fabrica/fabrica-noipfs-ethereum/version/v0.0.13/api"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fabrica-ethereum"),
              logger: logger.child("fabrica-ethereum"),
              importFn,
            });
const metaStreetEthereumHandler = new GraphqlHandler({
              name: "meta-street-ethereum",
              config: {"endpoint":"https://subgraph.satsuma-prod.com/dba8dcfa831b/metastreet-labs--232864/v2-pools-mainnet/api"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("meta-street-ethereum"),
              logger: logger.child("meta-street-ethereum"),
              importFn,
            });
const fabricaSepoliaHandler = new GraphqlHandler({
              name: "fabrica-sepolia",
              config: {"endpoint":"https://subgraph.satsuma-prod.com/0f3e6e7bbd04/fabrica/fabrica-noipfs-sepolia/version/v0.0.23/api"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fabrica-sepolia"),
              logger: logger.child("fabrica-sepolia"),
              importFn,
            });
const metaStreetSepoliaHandler = new GraphqlHandler({
              name: "meta-street-sepolia",
              config: {"endpoint":"https://subgraph.satsuma-prod.com/dba8dcfa831b/metastreet-labs--232864/v2-pools-sepolia/api"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("meta-street-sepolia"),
              logger: logger.child("meta-street-sepolia"),
              importFn,
            });
const fabricaBaseSepoliaHandler = new GraphqlHandler({
              name: "fabrica-base-sepolia",
              config: {"endpoint":"https://subgraph.satsuma-prod.com/0f3e6e7bbd04/fabrica/fabrica-noipfs-base-sepolia/version/v0.0.4/api"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("fabrica-base-sepolia"),
              logger: logger.child("fabrica-base-sepolia"),
              importFn,
            });
fabricaEthereumTransforms[1] = new PrefixTransform({
                  apiName: "fabrica-ethereum",
                  config: {"includeRootOperations":true,"includeTypes":false,"mode":"bare | wrap","value":"ethereum_"},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
metaStreetEthereumTransforms[1] = new PrefixTransform({
                  apiName: "meta-street-ethereum",
                  config: {"includeRootOperations":true,"includeTypes":false,"mode":"bare | wrap","value":"meta_street_ethereum_"},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
fabricaSepoliaTransforms[1] = new PrefixTransform({
                  apiName: "fabrica-sepolia",
                  config: {"includeRootOperations":true,"includeTypes":false,"mode":"bare | wrap","value":"sepolia_"},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
metaStreetSepoliaTransforms[1] = new PrefixTransform({
                  apiName: "meta-street-sepolia",
                  config: {"includeRootOperations":true,"includeTypes":false,"mode":"bare | wrap","value":"meta_street_sepolia_"},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
fabricaBaseSepoliaTransforms[1] = new PrefixTransform({
                  apiName: "fabrica-base-sepolia",
                  config: {"includeRootOperations":true,"includeTypes":false,"mode":"bare | wrap","value":"base_sepolia_"},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
fabricaEthereumTransforms[0] = new AutoPaginationTransform({
                  apiName: "fabrica-ethereum",
                  config: {"validateSchema":true,"limitOfRecords":1000},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
metaStreetEthereumTransforms[0] = new AutoPaginationTransform({
                  apiName: "meta-street-ethereum",
                  config: {"validateSchema":true,"limitOfRecords":1000},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
fabricaSepoliaTransforms[0] = new AutoPaginationTransform({
                  apiName: "fabrica-sepolia",
                  config: {"validateSchema":true,"limitOfRecords":1000},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
metaStreetSepoliaTransforms[0] = new AutoPaginationTransform({
                  apiName: "meta-street-sepolia",
                  config: {"validateSchema":true,"limitOfRecords":1000},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
fabricaBaseSepoliaTransforms[0] = new AutoPaginationTransform({
                  apiName: "fabrica-base-sepolia",
                  config: {"validateSchema":true,"limitOfRecords":1000},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'fabrica-ethereum',
          handler: fabricaEthereumHandler,
          transforms: fabricaEthereumTransforms
        }
sources[1] = {
          name: 'meta-street-ethereum',
          handler: metaStreetEthereumHandler,
          transforms: metaStreetEthereumTransforms
        }
sources[2] = {
          name: 'fabrica-sepolia',
          handler: fabricaSepoliaHandler,
          transforms: fabricaSepoliaTransforms
        }
sources[3] = {
          name: 'meta-street-sepolia',
          handler: metaStreetSepoliaHandler,
          transforms: metaStreetSepoliaTransforms
        }
sources[4] = {
          name: 'fabrica-base-sepolia',
          handler: fabricaBaseSepoliaHandler,
          transforms: fabricaBaseSepoliaTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
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
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));