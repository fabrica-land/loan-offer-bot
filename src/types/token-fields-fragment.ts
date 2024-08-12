export const TokenFieldsFragment = `#graphql
fragment tokenFields on Token {
  tokenId
  mintTimestamp
  configuration
  definition
  operatingAgreement
  stringTraits {
    key
    displayName
    value
  }
  supply
  uri
  validator
  balances(where: { balance_gt: 0 }, first: 1000, orderBy: balance, orderDirection: desc) {
    owner {
      address
    }
    holder {
      address
    }
    balance
  }
  transfers(orderBy: blockTimestamp) {
    operator
    from {
      address
    }
    to {
      address
    }
    value
    blockNumber
    blockTimestamp
    transactionHash
  }
}
`
