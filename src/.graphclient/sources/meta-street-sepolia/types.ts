// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MetaStreetSepoliaTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

export type Aggregation_interval =
  | 'hour'
  | 'day';

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

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

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

export type Loan = {
  id: Scalars['Bytes']['output'];
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
  borrower: Scalars['Bytes']['output'];
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

export type LoanStatus =
  | 'Active'
  | 'Liquidated'
  | 'Repaid'
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
  borrower?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lt?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_gte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_lte?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  borrower_contains?: InputMaybe<Scalars['Bytes']['input']>;
  borrower_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
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
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
};

export type Loan_orderBy =
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
  | 'borrower'
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

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

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

export type Query = {
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

export type Subscription = {
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

  export type QuerySdk = {
      /** null **/
  meta_street_sepolia_pool: InContextSdkMethod<Query['meta_street_sepolia_pool'], Querymeta_street_sepolia_poolArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_pools: InContextSdkMethod<Query['meta_street_sepolia_pools'], Querymeta_street_sepolia_poolsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolDayData: InContextSdkMethod<Query['meta_street_sepolia_poolDayData'], Querymeta_street_sepolia_poolDayDataArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolDayDatas: InContextSdkMethod<Query['meta_street_sepolia_poolDayDatas'], Querymeta_street_sepolia_poolDayDatasArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralToken: InContextSdkMethod<Query['meta_street_sepolia_collateralToken'], Querymeta_street_sepolia_collateralTokenArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralTokens: InContextSdkMethod<Query['meta_street_sepolia_collateralTokens'], Querymeta_street_sepolia_collateralTokensArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_currencyToken: InContextSdkMethod<Query['meta_street_sepolia_currencyToken'], Querymeta_street_sepolia_currencyTokenArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_currencyTokens: InContextSdkMethod<Query['meta_street_sepolia_currencyTokens'], Querymeta_street_sepolia_currencyTokensArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tick: InContextSdkMethod<Query['meta_street_sepolia_tick'], Querymeta_street_sepolia_tickArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_ticks: InContextSdkMethod<Query['meta_street_sepolia_ticks'], Querymeta_street_sepolia_ticksArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposit: InContextSdkMethod<Query['meta_street_sepolia_deposit'], Querymeta_street_sepolia_depositArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposits: InContextSdkMethod<Query['meta_street_sepolia_deposits'], Querymeta_street_sepolia_depositsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redemption: InContextSdkMethod<Query['meta_street_sepolia_redemption'], Querymeta_street_sepolia_redemptionArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redemptions: InContextSdkMethod<Query['meta_street_sepolia_redemptions'], Querymeta_street_sepolia_redemptionsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bundle: InContextSdkMethod<Query['meta_street_sepolia_bundle'], Querymeta_street_sepolia_bundleArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bundles: InContextSdkMethod<Query['meta_street_sepolia_bundles'], Querymeta_street_sepolia_bundlesArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_batch: InContextSdkMethod<Query['meta_street_sepolia_batch'], Querymeta_street_sepolia_batchArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_batches: InContextSdkMethod<Query['meta_street_sepolia_batches'], Querymeta_street_sepolia_batchesArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loan: InContextSdkMethod<Query['meta_street_sepolia_loan'], Querymeta_street_sepolia_loanArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loans: InContextSdkMethod<Query['meta_street_sepolia_loans'], Querymeta_street_sepolia_loansArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolEvent: InContextSdkMethod<Query['meta_street_sepolia_poolEvent'], Querymeta_street_sepolia_poolEventArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolEvents: InContextSdkMethod<Query['meta_street_sepolia_poolEvents'], Querymeta_street_sepolia_poolEventsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanOriginated: InContextSdkMethod<Query['meta_street_sepolia_loanOriginated'], Querymeta_street_sepolia_loanOriginatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanOriginateds: InContextSdkMethod<Query['meta_street_sepolia_loanOriginateds'], Querymeta_street_sepolia_loanOriginatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanRepaid: InContextSdkMethod<Query['meta_street_sepolia_loanRepaid'], Querymeta_street_sepolia_loanRepaidArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanRepaids: InContextSdkMethod<Query['meta_street_sepolia_loanRepaids'], Querymeta_street_sepolia_loanRepaidsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanLiquidated: InContextSdkMethod<Query['meta_street_sepolia_loanLiquidated'], Querymeta_street_sepolia_loanLiquidatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanLiquidateds: InContextSdkMethod<Query['meta_street_sepolia_loanLiquidateds'], Querymeta_street_sepolia_loanLiquidatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralLiquidated: InContextSdkMethod<Query['meta_street_sepolia_collateralLiquidated'], Querymeta_street_sepolia_collateralLiquidatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralLiquidateds: InContextSdkMethod<Query['meta_street_sepolia_collateralLiquidateds'], Querymeta_street_sepolia_collateralLiquidatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposited: InContextSdkMethod<Query['meta_street_sepolia_deposited'], Querymeta_street_sepolia_depositedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_depositeds: InContextSdkMethod<Query['meta_street_sepolia_depositeds'], Querymeta_street_sepolia_depositedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redeemed: InContextSdkMethod<Query['meta_street_sepolia_redeemed'], Querymeta_street_sepolia_redeemedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redeemeds: InContextSdkMethod<Query['meta_street_sepolia_redeemeds'], Querymeta_street_sepolia_redeemedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_withdrawn: InContextSdkMethod<Query['meta_street_sepolia_withdrawn'], Querymeta_street_sepolia_withdrawnArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_withdrawns: InContextSdkMethod<Query['meta_street_sepolia_withdrawns'], Querymeta_street_sepolia_withdrawnsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tokenCreated: InContextSdkMethod<Query['meta_street_sepolia_tokenCreated'], Querymeta_street_sepolia_tokenCreatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tokenCreateds: InContextSdkMethod<Query['meta_street_sepolia_tokenCreateds'], Querymeta_street_sepolia_tokenCreatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_transferred: InContextSdkMethod<Query['meta_street_sepolia_transferred'], Querymeta_street_sepolia_transferredArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_transferreds: InContextSdkMethod<Query['meta_street_sepolia_transferreds'], Querymeta_street_sepolia_transferredsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_liquidation: InContextSdkMethod<Query['meta_street_sepolia_liquidation'], Querymeta_street_sepolia_liquidationArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_liquidations: InContextSdkMethod<Query['meta_street_sepolia_liquidations'], Querymeta_street_sepolia_liquidationsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_auction: InContextSdkMethod<Query['meta_street_sepolia_auction'], Querymeta_street_sepolia_auctionArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_auctions: InContextSdkMethod<Query['meta_street_sepolia_auctions'], Querymeta_street_sepolia_auctionsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bid: InContextSdkMethod<Query['meta_street_sepolia_bid'], Querymeta_street_sepolia_bidArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bids: InContextSdkMethod<Query['meta_street_sepolia_bids'], Querymeta_street_sepolia_bidsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  meta_street_sepolia__meta: InContextSdkMethod<Query['meta_street_sepolia__meta'], Querymeta_street_sepolia__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  meta_street_sepolia_pool: InContextSdkMethod<Subscription['meta_street_sepolia_pool'], Subscriptionmeta_street_sepolia_poolArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_pools: InContextSdkMethod<Subscription['meta_street_sepolia_pools'], Subscriptionmeta_street_sepolia_poolsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolDayData: InContextSdkMethod<Subscription['meta_street_sepolia_poolDayData'], Subscriptionmeta_street_sepolia_poolDayDataArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolDayDatas: InContextSdkMethod<Subscription['meta_street_sepolia_poolDayDatas'], Subscriptionmeta_street_sepolia_poolDayDatasArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralToken: InContextSdkMethod<Subscription['meta_street_sepolia_collateralToken'], Subscriptionmeta_street_sepolia_collateralTokenArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralTokens: InContextSdkMethod<Subscription['meta_street_sepolia_collateralTokens'], Subscriptionmeta_street_sepolia_collateralTokensArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_currencyToken: InContextSdkMethod<Subscription['meta_street_sepolia_currencyToken'], Subscriptionmeta_street_sepolia_currencyTokenArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_currencyTokens: InContextSdkMethod<Subscription['meta_street_sepolia_currencyTokens'], Subscriptionmeta_street_sepolia_currencyTokensArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tick: InContextSdkMethod<Subscription['meta_street_sepolia_tick'], Subscriptionmeta_street_sepolia_tickArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_ticks: InContextSdkMethod<Subscription['meta_street_sepolia_ticks'], Subscriptionmeta_street_sepolia_ticksArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposit: InContextSdkMethod<Subscription['meta_street_sepolia_deposit'], Subscriptionmeta_street_sepolia_depositArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposits: InContextSdkMethod<Subscription['meta_street_sepolia_deposits'], Subscriptionmeta_street_sepolia_depositsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redemption: InContextSdkMethod<Subscription['meta_street_sepolia_redemption'], Subscriptionmeta_street_sepolia_redemptionArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redemptions: InContextSdkMethod<Subscription['meta_street_sepolia_redemptions'], Subscriptionmeta_street_sepolia_redemptionsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bundle: InContextSdkMethod<Subscription['meta_street_sepolia_bundle'], Subscriptionmeta_street_sepolia_bundleArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bundles: InContextSdkMethod<Subscription['meta_street_sepolia_bundles'], Subscriptionmeta_street_sepolia_bundlesArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_batch: InContextSdkMethod<Subscription['meta_street_sepolia_batch'], Subscriptionmeta_street_sepolia_batchArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_batches: InContextSdkMethod<Subscription['meta_street_sepolia_batches'], Subscriptionmeta_street_sepolia_batchesArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loan: InContextSdkMethod<Subscription['meta_street_sepolia_loan'], Subscriptionmeta_street_sepolia_loanArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loans: InContextSdkMethod<Subscription['meta_street_sepolia_loans'], Subscriptionmeta_street_sepolia_loansArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolEvent: InContextSdkMethod<Subscription['meta_street_sepolia_poolEvent'], Subscriptionmeta_street_sepolia_poolEventArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_poolEvents: InContextSdkMethod<Subscription['meta_street_sepolia_poolEvents'], Subscriptionmeta_street_sepolia_poolEventsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanOriginated: InContextSdkMethod<Subscription['meta_street_sepolia_loanOriginated'], Subscriptionmeta_street_sepolia_loanOriginatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanOriginateds: InContextSdkMethod<Subscription['meta_street_sepolia_loanOriginateds'], Subscriptionmeta_street_sepolia_loanOriginatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanRepaid: InContextSdkMethod<Subscription['meta_street_sepolia_loanRepaid'], Subscriptionmeta_street_sepolia_loanRepaidArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanRepaids: InContextSdkMethod<Subscription['meta_street_sepolia_loanRepaids'], Subscriptionmeta_street_sepolia_loanRepaidsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanLiquidated: InContextSdkMethod<Subscription['meta_street_sepolia_loanLiquidated'], Subscriptionmeta_street_sepolia_loanLiquidatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_loanLiquidateds: InContextSdkMethod<Subscription['meta_street_sepolia_loanLiquidateds'], Subscriptionmeta_street_sepolia_loanLiquidatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralLiquidated: InContextSdkMethod<Subscription['meta_street_sepolia_collateralLiquidated'], Subscriptionmeta_street_sepolia_collateralLiquidatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_collateralLiquidateds: InContextSdkMethod<Subscription['meta_street_sepolia_collateralLiquidateds'], Subscriptionmeta_street_sepolia_collateralLiquidatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_deposited: InContextSdkMethod<Subscription['meta_street_sepolia_deposited'], Subscriptionmeta_street_sepolia_depositedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_depositeds: InContextSdkMethod<Subscription['meta_street_sepolia_depositeds'], Subscriptionmeta_street_sepolia_depositedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redeemed: InContextSdkMethod<Subscription['meta_street_sepolia_redeemed'], Subscriptionmeta_street_sepolia_redeemedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_redeemeds: InContextSdkMethod<Subscription['meta_street_sepolia_redeemeds'], Subscriptionmeta_street_sepolia_redeemedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_withdrawn: InContextSdkMethod<Subscription['meta_street_sepolia_withdrawn'], Subscriptionmeta_street_sepolia_withdrawnArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_withdrawns: InContextSdkMethod<Subscription['meta_street_sepolia_withdrawns'], Subscriptionmeta_street_sepolia_withdrawnsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tokenCreated: InContextSdkMethod<Subscription['meta_street_sepolia_tokenCreated'], Subscriptionmeta_street_sepolia_tokenCreatedArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_tokenCreateds: InContextSdkMethod<Subscription['meta_street_sepolia_tokenCreateds'], Subscriptionmeta_street_sepolia_tokenCreatedsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_transferred: InContextSdkMethod<Subscription['meta_street_sepolia_transferred'], Subscriptionmeta_street_sepolia_transferredArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_transferreds: InContextSdkMethod<Subscription['meta_street_sepolia_transferreds'], Subscriptionmeta_street_sepolia_transferredsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_liquidation: InContextSdkMethod<Subscription['meta_street_sepolia_liquidation'], Subscriptionmeta_street_sepolia_liquidationArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_liquidations: InContextSdkMethod<Subscription['meta_street_sepolia_liquidations'], Subscriptionmeta_street_sepolia_liquidationsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_auction: InContextSdkMethod<Subscription['meta_street_sepolia_auction'], Subscriptionmeta_street_sepolia_auctionArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_auctions: InContextSdkMethod<Subscription['meta_street_sepolia_auctions'], Subscriptionmeta_street_sepolia_auctionsArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bid: InContextSdkMethod<Subscription['meta_street_sepolia_bid'], Subscriptionmeta_street_sepolia_bidArgs, MeshContext>,
  /** null **/
  meta_street_sepolia_bids: InContextSdkMethod<Subscription['meta_street_sepolia_bids'], Subscriptionmeta_street_sepolia_bidsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  meta_street_sepolia__meta: InContextSdkMethod<Subscription['meta_street_sepolia__meta'], Subscriptionmeta_street_sepolia__metaArgs, MeshContext>
  };

  export type Context = {
      ["meta-street-sepolia"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
