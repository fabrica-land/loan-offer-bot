// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FabricaEthereumTypes {
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
  ethereum_token: InContextSdkMethod<Query['ethereum_token'], Queryethereum_tokenArgs, MeshContext>,
  /** null **/
  ethereum_tokens: InContextSdkMethod<Query['ethereum_tokens'], Queryethereum_tokensArgs, MeshContext>,
  /** null **/
  ethereum_balance: InContextSdkMethod<Query['ethereum_balance'], Queryethereum_balanceArgs, MeshContext>,
  /** null **/
  ethereum_balances: InContextSdkMethod<Query['ethereum_balances'], Queryethereum_balancesArgs, MeshContext>,
  /** null **/
  ethereum_user: InContextSdkMethod<Query['ethereum_user'], Queryethereum_userArgs, MeshContext>,
  /** null **/
  ethereum_users: InContextSdkMethod<Query['ethereum_users'], Queryethereum_usersArgs, MeshContext>,
  /** null **/
  ethereum_transfer: InContextSdkMethod<Query['ethereum_transfer'], Queryethereum_transferArgs, MeshContext>,
  /** null **/
  ethereum_transfers: InContextSdkMethod<Query['ethereum_transfers'], Queryethereum_transfersArgs, MeshContext>,
  /** null **/
  ethereum_configurationUpdate: InContextSdkMethod<Query['ethereum_configurationUpdate'], Queryethereum_configurationUpdateArgs, MeshContext>,
  /** null **/
  ethereum_configurationUpdates: InContextSdkMethod<Query['ethereum_configurationUpdates'], Queryethereum_configurationUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_operatingAgreementUpdate: InContextSdkMethod<Query['ethereum_operatingAgreementUpdate'], Queryethereum_operatingAgreementUpdateArgs, MeshContext>,
  /** null **/
  ethereum_operatingAgreementUpdates: InContextSdkMethod<Query['ethereum_operatingAgreementUpdates'], Queryethereum_operatingAgreementUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_validatorUpdate: InContextSdkMethod<Query['ethereum_validatorUpdate'], Queryethereum_validatorUpdateArgs, MeshContext>,
  /** null **/
  ethereum_validatorUpdates: InContextSdkMethod<Query['ethereum_validatorUpdates'], Queryethereum_validatorUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadata: InContextSdkMethod<Query['ethereum_traitMetadata'], Queryethereum_traitMetadataArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadata_collection: InContextSdkMethod<Query['ethereum_traitMetadata_collection'], Queryethereum_traitMetadata_collectionArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadataUriUpdate: InContextSdkMethod<Query['ethereum_traitMetadataUriUpdate'], Queryethereum_traitMetadataUriUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadataUriUpdates: InContextSdkMethod<Query['ethereum_traitMetadataUriUpdates'], Queryethereum_traitMetadataUriUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitDefinition: InContextSdkMethod<Query['ethereum_traitDefinition'], Queryethereum_traitDefinitionArgs, MeshContext>,
  /** null **/
  ethereum_traitDefinitions: InContextSdkMethod<Query['ethereum_traitDefinitions'], Queryethereum_traitDefinitionsArgs, MeshContext>,
  /** null **/
  ethereum_traitStringUpdate: InContextSdkMethod<Query['ethereum_traitStringUpdate'], Queryethereum_traitStringUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitStringUpdates: InContextSdkMethod<Query['ethereum_traitStringUpdates'], Queryethereum_traitStringUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimalUpdate: InContextSdkMethod<Query['ethereum_traitDecimalUpdate'], Queryethereum_traitDecimalUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimalUpdates: InContextSdkMethod<Query['ethereum_traitDecimalUpdates'], Queryethereum_traitDecimalUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleanUpdate: InContextSdkMethod<Query['ethereum_traitBooleanUpdate'], Queryethereum_traitBooleanUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleanUpdates: InContextSdkMethod<Query['ethereum_traitBooleanUpdates'], Queryethereum_traitBooleanUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitString: InContextSdkMethod<Query['ethereum_traitString'], Queryethereum_traitStringArgs, MeshContext>,
  /** null **/
  ethereum_traitStrings: InContextSdkMethod<Query['ethereum_traitStrings'], Queryethereum_traitStringsArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimal: InContextSdkMethod<Query['ethereum_traitDecimal'], Queryethereum_traitDecimalArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimals: InContextSdkMethod<Query['ethereum_traitDecimals'], Queryethereum_traitDecimalsArgs, MeshContext>,
  /** null **/
  ethereum_traitBoolean: InContextSdkMethod<Query['ethereum_traitBoolean'], Queryethereum_traitBooleanArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleans: InContextSdkMethod<Query['ethereum_traitBooleans'], Queryethereum_traitBooleansArgs, MeshContext>,
  /** null **/
  ethereum_loan: InContextSdkMethod<Query['ethereum_loan'], Queryethereum_loanArgs, MeshContext>,
  /** null **/
  ethereum_loans: InContextSdkMethod<Query['ethereum_loans'], Queryethereum_loansArgs, MeshContext>,
  /** null **/
  ethereum_loanLiquidatedEvent: InContextSdkMethod<Query['ethereum_loanLiquidatedEvent'], Queryethereum_loanLiquidatedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanLiquidatedEvents: InContextSdkMethod<Query['ethereum_loanLiquidatedEvents'], Queryethereum_loanLiquidatedEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanRenegotiatedEvent: InContextSdkMethod<Query['ethereum_loanRenegotiatedEvent'], Queryethereum_loanRenegotiatedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanRenegotiatedEvents: InContextSdkMethod<Query['ethereum_loanRenegotiatedEvents'], Queryethereum_loanRenegotiatedEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanRepaidEvent: InContextSdkMethod<Query['ethereum_loanRepaidEvent'], Queryethereum_loanRepaidEventArgs, MeshContext>,
  /** null **/
  ethereum_loanRepaidEvents: InContextSdkMethod<Query['ethereum_loanRepaidEvents'], Queryethereum_loanRepaidEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanStartedEvent: InContextSdkMethod<Query['ethereum_loanStartedEvent'], Queryethereum_loanStartedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanStartedEvents: InContextSdkMethod<Query['ethereum_loanStartedEvents'], Queryethereum_loanStartedEventsArgs, MeshContext>,
  /** null **/
  ethereum_obligationReceipt: InContextSdkMethod<Query['ethereum_obligationReceipt'], Queryethereum_obligationReceiptArgs, MeshContext>,
  /** null **/
  ethereum_obligationReceipts: InContextSdkMethod<Query['ethereum_obligationReceipts'], Queryethereum_obligationReceiptsArgs, MeshContext>,
  /** null **/
  ethereum_promissoryNote: InContextSdkMethod<Query['ethereum_promissoryNote'], Queryethereum_promissoryNoteArgs, MeshContext>,
  /** null **/
  ethereum_promissoryNotes: InContextSdkMethod<Query['ethereum_promissoryNotes'], Queryethereum_promissoryNotesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ethereum__meta: InContextSdkMethod<Query['ethereum__meta'], Queryethereum__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  ethereum_token: InContextSdkMethod<Subscription['ethereum_token'], Subscriptionethereum_tokenArgs, MeshContext>,
  /** null **/
  ethereum_tokens: InContextSdkMethod<Subscription['ethereum_tokens'], Subscriptionethereum_tokensArgs, MeshContext>,
  /** null **/
  ethereum_balance: InContextSdkMethod<Subscription['ethereum_balance'], Subscriptionethereum_balanceArgs, MeshContext>,
  /** null **/
  ethereum_balances: InContextSdkMethod<Subscription['ethereum_balances'], Subscriptionethereum_balancesArgs, MeshContext>,
  /** null **/
  ethereum_user: InContextSdkMethod<Subscription['ethereum_user'], Subscriptionethereum_userArgs, MeshContext>,
  /** null **/
  ethereum_users: InContextSdkMethod<Subscription['ethereum_users'], Subscriptionethereum_usersArgs, MeshContext>,
  /** null **/
  ethereum_transfer: InContextSdkMethod<Subscription['ethereum_transfer'], Subscriptionethereum_transferArgs, MeshContext>,
  /** null **/
  ethereum_transfers: InContextSdkMethod<Subscription['ethereum_transfers'], Subscriptionethereum_transfersArgs, MeshContext>,
  /** null **/
  ethereum_configurationUpdate: InContextSdkMethod<Subscription['ethereum_configurationUpdate'], Subscriptionethereum_configurationUpdateArgs, MeshContext>,
  /** null **/
  ethereum_configurationUpdates: InContextSdkMethod<Subscription['ethereum_configurationUpdates'], Subscriptionethereum_configurationUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_operatingAgreementUpdate: InContextSdkMethod<Subscription['ethereum_operatingAgreementUpdate'], Subscriptionethereum_operatingAgreementUpdateArgs, MeshContext>,
  /** null **/
  ethereum_operatingAgreementUpdates: InContextSdkMethod<Subscription['ethereum_operatingAgreementUpdates'], Subscriptionethereum_operatingAgreementUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_validatorUpdate: InContextSdkMethod<Subscription['ethereum_validatorUpdate'], Subscriptionethereum_validatorUpdateArgs, MeshContext>,
  /** null **/
  ethereum_validatorUpdates: InContextSdkMethod<Subscription['ethereum_validatorUpdates'], Subscriptionethereum_validatorUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadata: InContextSdkMethod<Subscription['ethereum_traitMetadata'], Subscriptionethereum_traitMetadataArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadata_collection: InContextSdkMethod<Subscription['ethereum_traitMetadata_collection'], Subscriptionethereum_traitMetadata_collectionArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadataUriUpdate: InContextSdkMethod<Subscription['ethereum_traitMetadataUriUpdate'], Subscriptionethereum_traitMetadataUriUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitMetadataUriUpdates: InContextSdkMethod<Subscription['ethereum_traitMetadataUriUpdates'], Subscriptionethereum_traitMetadataUriUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitDefinition: InContextSdkMethod<Subscription['ethereum_traitDefinition'], Subscriptionethereum_traitDefinitionArgs, MeshContext>,
  /** null **/
  ethereum_traitDefinitions: InContextSdkMethod<Subscription['ethereum_traitDefinitions'], Subscriptionethereum_traitDefinitionsArgs, MeshContext>,
  /** null **/
  ethereum_traitStringUpdate: InContextSdkMethod<Subscription['ethereum_traitStringUpdate'], Subscriptionethereum_traitStringUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitStringUpdates: InContextSdkMethod<Subscription['ethereum_traitStringUpdates'], Subscriptionethereum_traitStringUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimalUpdate: InContextSdkMethod<Subscription['ethereum_traitDecimalUpdate'], Subscriptionethereum_traitDecimalUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimalUpdates: InContextSdkMethod<Subscription['ethereum_traitDecimalUpdates'], Subscriptionethereum_traitDecimalUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleanUpdate: InContextSdkMethod<Subscription['ethereum_traitBooleanUpdate'], Subscriptionethereum_traitBooleanUpdateArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleanUpdates: InContextSdkMethod<Subscription['ethereum_traitBooleanUpdates'], Subscriptionethereum_traitBooleanUpdatesArgs, MeshContext>,
  /** null **/
  ethereum_traitString: InContextSdkMethod<Subscription['ethereum_traitString'], Subscriptionethereum_traitStringArgs, MeshContext>,
  /** null **/
  ethereum_traitStrings: InContextSdkMethod<Subscription['ethereum_traitStrings'], Subscriptionethereum_traitStringsArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimal: InContextSdkMethod<Subscription['ethereum_traitDecimal'], Subscriptionethereum_traitDecimalArgs, MeshContext>,
  /** null **/
  ethereum_traitDecimals: InContextSdkMethod<Subscription['ethereum_traitDecimals'], Subscriptionethereum_traitDecimalsArgs, MeshContext>,
  /** null **/
  ethereum_traitBoolean: InContextSdkMethod<Subscription['ethereum_traitBoolean'], Subscriptionethereum_traitBooleanArgs, MeshContext>,
  /** null **/
  ethereum_traitBooleans: InContextSdkMethod<Subscription['ethereum_traitBooleans'], Subscriptionethereum_traitBooleansArgs, MeshContext>,
  /** null **/
  ethereum_loan: InContextSdkMethod<Subscription['ethereum_loan'], Subscriptionethereum_loanArgs, MeshContext>,
  /** null **/
  ethereum_loans: InContextSdkMethod<Subscription['ethereum_loans'], Subscriptionethereum_loansArgs, MeshContext>,
  /** null **/
  ethereum_loanLiquidatedEvent: InContextSdkMethod<Subscription['ethereum_loanLiquidatedEvent'], Subscriptionethereum_loanLiquidatedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanLiquidatedEvents: InContextSdkMethod<Subscription['ethereum_loanLiquidatedEvents'], Subscriptionethereum_loanLiquidatedEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanRenegotiatedEvent: InContextSdkMethod<Subscription['ethereum_loanRenegotiatedEvent'], Subscriptionethereum_loanRenegotiatedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanRenegotiatedEvents: InContextSdkMethod<Subscription['ethereum_loanRenegotiatedEvents'], Subscriptionethereum_loanRenegotiatedEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanRepaidEvent: InContextSdkMethod<Subscription['ethereum_loanRepaidEvent'], Subscriptionethereum_loanRepaidEventArgs, MeshContext>,
  /** null **/
  ethereum_loanRepaidEvents: InContextSdkMethod<Subscription['ethereum_loanRepaidEvents'], Subscriptionethereum_loanRepaidEventsArgs, MeshContext>,
  /** null **/
  ethereum_loanStartedEvent: InContextSdkMethod<Subscription['ethereum_loanStartedEvent'], Subscriptionethereum_loanStartedEventArgs, MeshContext>,
  /** null **/
  ethereum_loanStartedEvents: InContextSdkMethod<Subscription['ethereum_loanStartedEvents'], Subscriptionethereum_loanStartedEventsArgs, MeshContext>,
  /** null **/
  ethereum_obligationReceipt: InContextSdkMethod<Subscription['ethereum_obligationReceipt'], Subscriptionethereum_obligationReceiptArgs, MeshContext>,
  /** null **/
  ethereum_obligationReceipts: InContextSdkMethod<Subscription['ethereum_obligationReceipts'], Subscriptionethereum_obligationReceiptsArgs, MeshContext>,
  /** null **/
  ethereum_promissoryNote: InContextSdkMethod<Subscription['ethereum_promissoryNote'], Subscriptionethereum_promissoryNoteArgs, MeshContext>,
  /** null **/
  ethereum_promissoryNotes: InContextSdkMethod<Subscription['ethereum_promissoryNotes'], Subscriptionethereum_promissoryNotesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  ethereum__meta: InContextSdkMethod<Subscription['ethereum__meta'], Subscriptionethereum__metaArgs, MeshContext>
  };

  export type Context = {
      ["fabrica-ethereum"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
