import { BigNumber } from 'ethers'
import * as assert from 'node:assert'
import { before, describe, it } from 'node:test'

import { Blockchain } from './blockchain'
import { getConfig } from './config'
import { Nftfi } from './nftfi'

void describe('Nftfi', async () => {
  const config = getConfig()
  let blockchain: Blockchain
  let nftfi: Nftfi

  before(async () => {
    blockchain = new Blockchain(config)
    nftfi = new Nftfi(blockchain, config)
  })

  void it('nftfiClient.balanceOf', async () => {
    const network = config.networks.sepolia
    const balance = await nftfi.getUsdcBalance(
      network,
      network.lending.lendingWalletAddress,
    )
    const balanceBigNum = BigNumber.from(balance)
    console.log({ balance, balanceBigNum })
    assert.ok(BigNumber.from(balance).gt(0))
  })
})
