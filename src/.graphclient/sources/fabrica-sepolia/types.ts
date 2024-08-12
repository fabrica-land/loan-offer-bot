// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FabricaSepoliaTypes {
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
  obligationReceipt?: Maybe<ObligationReceipt>;
  promissoryNotes?: Maybe<Array<PromissoryNote>>;
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
  lender: User;
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
  | 'transactionHash';

export type LoanRenegotiatedEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender: User;
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
  | 'transactionHash';

export type LoanRepaidEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender: User;
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
  | 'transactionHash';

export type LoanStartedEvent = {
  id: Scalars['Bytes']['output'];
  loan: Loan;
  borrower: User;
  lender: User;
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
  | 'transactionHash';

export type LoanStatus =
  | 'ActiveOrDefault'
  | 'Liquidated'
  | 'Repaid';

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
  obligationReceipt_?: InputMaybe<ObligationReceipt_filter>;
  promissoryNotes_?: InputMaybe<PromissoryNote_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Loan_filter>>>;
};

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
  | 'promissoryNotes';

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
  | 'holder__tokenCount';

export type Query = {
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

export type Subscription = {
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

  export type QuerySdk = {
      /** null **/
  sepolia_token: InContextSdkMethod<Query['sepolia_token'], Querysepolia_tokenArgs, MeshContext>,
  /** null **/
  sepolia_tokens: InContextSdkMethod<Query['sepolia_tokens'], Querysepolia_tokensArgs, MeshContext>,
  /** null **/
  sepolia_balance: InContextSdkMethod<Query['sepolia_balance'], Querysepolia_balanceArgs, MeshContext>,
  /** null **/
  sepolia_balances: InContextSdkMethod<Query['sepolia_balances'], Querysepolia_balancesArgs, MeshContext>,
  /** null **/
  sepolia_user: InContextSdkMethod<Query['sepolia_user'], Querysepolia_userArgs, MeshContext>,
  /** null **/
  sepolia_users: InContextSdkMethod<Query['sepolia_users'], Querysepolia_usersArgs, MeshContext>,
  /** null **/
  sepolia_transfer: InContextSdkMethod<Query['sepolia_transfer'], Querysepolia_transferArgs, MeshContext>,
  /** null **/
  sepolia_transfers: InContextSdkMethod<Query['sepolia_transfers'], Querysepolia_transfersArgs, MeshContext>,
  /** null **/
  sepolia_configurationUpdate: InContextSdkMethod<Query['sepolia_configurationUpdate'], Querysepolia_configurationUpdateArgs, MeshContext>,
  /** null **/
  sepolia_configurationUpdates: InContextSdkMethod<Query['sepolia_configurationUpdates'], Querysepolia_configurationUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_operatingAgreementUpdate: InContextSdkMethod<Query['sepolia_operatingAgreementUpdate'], Querysepolia_operatingAgreementUpdateArgs, MeshContext>,
  /** null **/
  sepolia_operatingAgreementUpdates: InContextSdkMethod<Query['sepolia_operatingAgreementUpdates'], Querysepolia_operatingAgreementUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_validatorUpdate: InContextSdkMethod<Query['sepolia_validatorUpdate'], Querysepolia_validatorUpdateArgs, MeshContext>,
  /** null **/
  sepolia_validatorUpdates: InContextSdkMethod<Query['sepolia_validatorUpdates'], Querysepolia_validatorUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadata: InContextSdkMethod<Query['sepolia_traitMetadata'], Querysepolia_traitMetadataArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadata_collection: InContextSdkMethod<Query['sepolia_traitMetadata_collection'], Querysepolia_traitMetadata_collectionArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadataUriUpdate: InContextSdkMethod<Query['sepolia_traitMetadataUriUpdate'], Querysepolia_traitMetadataUriUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadataUriUpdates: InContextSdkMethod<Query['sepolia_traitMetadataUriUpdates'], Querysepolia_traitMetadataUriUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitDefinition: InContextSdkMethod<Query['sepolia_traitDefinition'], Querysepolia_traitDefinitionArgs, MeshContext>,
  /** null **/
  sepolia_traitDefinitions: InContextSdkMethod<Query['sepolia_traitDefinitions'], Querysepolia_traitDefinitionsArgs, MeshContext>,
  /** null **/
  sepolia_traitStringUpdate: InContextSdkMethod<Query['sepolia_traitStringUpdate'], Querysepolia_traitStringUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitStringUpdates: InContextSdkMethod<Query['sepolia_traitStringUpdates'], Querysepolia_traitStringUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimalUpdate: InContextSdkMethod<Query['sepolia_traitDecimalUpdate'], Querysepolia_traitDecimalUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimalUpdates: InContextSdkMethod<Query['sepolia_traitDecimalUpdates'], Querysepolia_traitDecimalUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleanUpdate: InContextSdkMethod<Query['sepolia_traitBooleanUpdate'], Querysepolia_traitBooleanUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleanUpdates: InContextSdkMethod<Query['sepolia_traitBooleanUpdates'], Querysepolia_traitBooleanUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitString: InContextSdkMethod<Query['sepolia_traitString'], Querysepolia_traitStringArgs, MeshContext>,
  /** null **/
  sepolia_traitStrings: InContextSdkMethod<Query['sepolia_traitStrings'], Querysepolia_traitStringsArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimal: InContextSdkMethod<Query['sepolia_traitDecimal'], Querysepolia_traitDecimalArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimals: InContextSdkMethod<Query['sepolia_traitDecimals'], Querysepolia_traitDecimalsArgs, MeshContext>,
  /** null **/
  sepolia_traitBoolean: InContextSdkMethod<Query['sepolia_traitBoolean'], Querysepolia_traitBooleanArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleans: InContextSdkMethod<Query['sepolia_traitBooleans'], Querysepolia_traitBooleansArgs, MeshContext>,
  /** null **/
  sepolia_loan: InContextSdkMethod<Query['sepolia_loan'], Querysepolia_loanArgs, MeshContext>,
  /** null **/
  sepolia_loans: InContextSdkMethod<Query['sepolia_loans'], Querysepolia_loansArgs, MeshContext>,
  /** null **/
  sepolia_loanLiquidatedEvent: InContextSdkMethod<Query['sepolia_loanLiquidatedEvent'], Querysepolia_loanLiquidatedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanLiquidatedEvents: InContextSdkMethod<Query['sepolia_loanLiquidatedEvents'], Querysepolia_loanLiquidatedEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanRenegotiatedEvent: InContextSdkMethod<Query['sepolia_loanRenegotiatedEvent'], Querysepolia_loanRenegotiatedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanRenegotiatedEvents: InContextSdkMethod<Query['sepolia_loanRenegotiatedEvents'], Querysepolia_loanRenegotiatedEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanRepaidEvent: InContextSdkMethod<Query['sepolia_loanRepaidEvent'], Querysepolia_loanRepaidEventArgs, MeshContext>,
  /** null **/
  sepolia_loanRepaidEvents: InContextSdkMethod<Query['sepolia_loanRepaidEvents'], Querysepolia_loanRepaidEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanStartedEvent: InContextSdkMethod<Query['sepolia_loanStartedEvent'], Querysepolia_loanStartedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanStartedEvents: InContextSdkMethod<Query['sepolia_loanStartedEvents'], Querysepolia_loanStartedEventsArgs, MeshContext>,
  /** null **/
  sepolia_obligationReceipt: InContextSdkMethod<Query['sepolia_obligationReceipt'], Querysepolia_obligationReceiptArgs, MeshContext>,
  /** null **/
  sepolia_obligationReceipts: InContextSdkMethod<Query['sepolia_obligationReceipts'], Querysepolia_obligationReceiptsArgs, MeshContext>,
  /** null **/
  sepolia_promissoryNote: InContextSdkMethod<Query['sepolia_promissoryNote'], Querysepolia_promissoryNoteArgs, MeshContext>,
  /** null **/
  sepolia_promissoryNotes: InContextSdkMethod<Query['sepolia_promissoryNotes'], Querysepolia_promissoryNotesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  sepolia__meta: InContextSdkMethod<Query['sepolia__meta'], Querysepolia__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  sepolia_token: InContextSdkMethod<Subscription['sepolia_token'], Subscriptionsepolia_tokenArgs, MeshContext>,
  /** null **/
  sepolia_tokens: InContextSdkMethod<Subscription['sepolia_tokens'], Subscriptionsepolia_tokensArgs, MeshContext>,
  /** null **/
  sepolia_balance: InContextSdkMethod<Subscription['sepolia_balance'], Subscriptionsepolia_balanceArgs, MeshContext>,
  /** null **/
  sepolia_balances: InContextSdkMethod<Subscription['sepolia_balances'], Subscriptionsepolia_balancesArgs, MeshContext>,
  /** null **/
  sepolia_user: InContextSdkMethod<Subscription['sepolia_user'], Subscriptionsepolia_userArgs, MeshContext>,
  /** null **/
  sepolia_users: InContextSdkMethod<Subscription['sepolia_users'], Subscriptionsepolia_usersArgs, MeshContext>,
  /** null **/
  sepolia_transfer: InContextSdkMethod<Subscription['sepolia_transfer'], Subscriptionsepolia_transferArgs, MeshContext>,
  /** null **/
  sepolia_transfers: InContextSdkMethod<Subscription['sepolia_transfers'], Subscriptionsepolia_transfersArgs, MeshContext>,
  /** null **/
  sepolia_configurationUpdate: InContextSdkMethod<Subscription['sepolia_configurationUpdate'], Subscriptionsepolia_configurationUpdateArgs, MeshContext>,
  /** null **/
  sepolia_configurationUpdates: InContextSdkMethod<Subscription['sepolia_configurationUpdates'], Subscriptionsepolia_configurationUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_operatingAgreementUpdate: InContextSdkMethod<Subscription['sepolia_operatingAgreementUpdate'], Subscriptionsepolia_operatingAgreementUpdateArgs, MeshContext>,
  /** null **/
  sepolia_operatingAgreementUpdates: InContextSdkMethod<Subscription['sepolia_operatingAgreementUpdates'], Subscriptionsepolia_operatingAgreementUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_validatorUpdate: InContextSdkMethod<Subscription['sepolia_validatorUpdate'], Subscriptionsepolia_validatorUpdateArgs, MeshContext>,
  /** null **/
  sepolia_validatorUpdates: InContextSdkMethod<Subscription['sepolia_validatorUpdates'], Subscriptionsepolia_validatorUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadata: InContextSdkMethod<Subscription['sepolia_traitMetadata'], Subscriptionsepolia_traitMetadataArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadata_collection: InContextSdkMethod<Subscription['sepolia_traitMetadata_collection'], Subscriptionsepolia_traitMetadata_collectionArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadataUriUpdate: InContextSdkMethod<Subscription['sepolia_traitMetadataUriUpdate'], Subscriptionsepolia_traitMetadataUriUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitMetadataUriUpdates: InContextSdkMethod<Subscription['sepolia_traitMetadataUriUpdates'], Subscriptionsepolia_traitMetadataUriUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitDefinition: InContextSdkMethod<Subscription['sepolia_traitDefinition'], Subscriptionsepolia_traitDefinitionArgs, MeshContext>,
  /** null **/
  sepolia_traitDefinitions: InContextSdkMethod<Subscription['sepolia_traitDefinitions'], Subscriptionsepolia_traitDefinitionsArgs, MeshContext>,
  /** null **/
  sepolia_traitStringUpdate: InContextSdkMethod<Subscription['sepolia_traitStringUpdate'], Subscriptionsepolia_traitStringUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitStringUpdates: InContextSdkMethod<Subscription['sepolia_traitStringUpdates'], Subscriptionsepolia_traitStringUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimalUpdate: InContextSdkMethod<Subscription['sepolia_traitDecimalUpdate'], Subscriptionsepolia_traitDecimalUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimalUpdates: InContextSdkMethod<Subscription['sepolia_traitDecimalUpdates'], Subscriptionsepolia_traitDecimalUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleanUpdate: InContextSdkMethod<Subscription['sepolia_traitBooleanUpdate'], Subscriptionsepolia_traitBooleanUpdateArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleanUpdates: InContextSdkMethod<Subscription['sepolia_traitBooleanUpdates'], Subscriptionsepolia_traitBooleanUpdatesArgs, MeshContext>,
  /** null **/
  sepolia_traitString: InContextSdkMethod<Subscription['sepolia_traitString'], Subscriptionsepolia_traitStringArgs, MeshContext>,
  /** null **/
  sepolia_traitStrings: InContextSdkMethod<Subscription['sepolia_traitStrings'], Subscriptionsepolia_traitStringsArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimal: InContextSdkMethod<Subscription['sepolia_traitDecimal'], Subscriptionsepolia_traitDecimalArgs, MeshContext>,
  /** null **/
  sepolia_traitDecimals: InContextSdkMethod<Subscription['sepolia_traitDecimals'], Subscriptionsepolia_traitDecimalsArgs, MeshContext>,
  /** null **/
  sepolia_traitBoolean: InContextSdkMethod<Subscription['sepolia_traitBoolean'], Subscriptionsepolia_traitBooleanArgs, MeshContext>,
  /** null **/
  sepolia_traitBooleans: InContextSdkMethod<Subscription['sepolia_traitBooleans'], Subscriptionsepolia_traitBooleansArgs, MeshContext>,
  /** null **/
  sepolia_loan: InContextSdkMethod<Subscription['sepolia_loan'], Subscriptionsepolia_loanArgs, MeshContext>,
  /** null **/
  sepolia_loans: InContextSdkMethod<Subscription['sepolia_loans'], Subscriptionsepolia_loansArgs, MeshContext>,
  /** null **/
  sepolia_loanLiquidatedEvent: InContextSdkMethod<Subscription['sepolia_loanLiquidatedEvent'], Subscriptionsepolia_loanLiquidatedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanLiquidatedEvents: InContextSdkMethod<Subscription['sepolia_loanLiquidatedEvents'], Subscriptionsepolia_loanLiquidatedEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanRenegotiatedEvent: InContextSdkMethod<Subscription['sepolia_loanRenegotiatedEvent'], Subscriptionsepolia_loanRenegotiatedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanRenegotiatedEvents: InContextSdkMethod<Subscription['sepolia_loanRenegotiatedEvents'], Subscriptionsepolia_loanRenegotiatedEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanRepaidEvent: InContextSdkMethod<Subscription['sepolia_loanRepaidEvent'], Subscriptionsepolia_loanRepaidEventArgs, MeshContext>,
  /** null **/
  sepolia_loanRepaidEvents: InContextSdkMethod<Subscription['sepolia_loanRepaidEvents'], Subscriptionsepolia_loanRepaidEventsArgs, MeshContext>,
  /** null **/
  sepolia_loanStartedEvent: InContextSdkMethod<Subscription['sepolia_loanStartedEvent'], Subscriptionsepolia_loanStartedEventArgs, MeshContext>,
  /** null **/
  sepolia_loanStartedEvents: InContextSdkMethod<Subscription['sepolia_loanStartedEvents'], Subscriptionsepolia_loanStartedEventsArgs, MeshContext>,
  /** null **/
  sepolia_obligationReceipt: InContextSdkMethod<Subscription['sepolia_obligationReceipt'], Subscriptionsepolia_obligationReceiptArgs, MeshContext>,
  /** null **/
  sepolia_obligationReceipts: InContextSdkMethod<Subscription['sepolia_obligationReceipts'], Subscriptionsepolia_obligationReceiptsArgs, MeshContext>,
  /** null **/
  sepolia_promissoryNote: InContextSdkMethod<Subscription['sepolia_promissoryNote'], Subscriptionsepolia_promissoryNoteArgs, MeshContext>,
  /** null **/
  sepolia_promissoryNotes: InContextSdkMethod<Subscription['sepolia_promissoryNotes'], Subscriptionsepolia_promissoryNotesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  sepolia__meta: InContextSdkMethod<Subscription['sepolia__meta'], Subscriptionsepolia__metaArgs, MeshContext>
  };

  export type Context = {
      ["fabrica-sepolia"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
