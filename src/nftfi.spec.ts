import { BigNumber } from 'ethers'
import * as assert from 'node:assert'
import { before, describe, it } from 'node:test'

import { Blockchain } from './blockchain'
import { getConfig } from './config'
import { Nftfi } from './nftfi'
import { NetworkName } from './types/config'

void describe('NFTfi', async () => {
  const config = getConfig()
  let blockchain: Blockchain
  let nftfi: Nftfi

  before(async () => {
    blockchain = new Blockchain(config)
    nftfi = new Nftfi(blockchain, config)
  })

  void it('nftfiClient.balanceOf', async () => {
    const nftfiClient = await nftfi.getNftfiClient(
      NetworkName.Sepolia,
      config.networks.sepolia.lending.lendingWalletPrivateKey,
    )
    const balance = await nftfiClient.erc20.balanceOf({
      account: { address: nftfiClient.account.getAddress() },
      token: { address: nftfiClient.config.erc20.usdc.address },
    })
    const balanceBigNum = BigNumber.from(balance)
    console.log({ balance, balanceBigNum })
    assert.ok(BigNumber.from(balance).gt(0))
  })
})
