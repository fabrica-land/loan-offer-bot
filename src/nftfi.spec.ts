import { before, describe, it } from 'node:test'
import { Nftfi } from './nftfi'
import { getConfig, NetworkName } from './types/config'
import { Blockchain } from './blockchain'
import * as assert from 'node:assert'
import { BigNumber } from 'ethers'

void describe('NFTfi', async () => {
  const config = getConfig()
  let blockchain: Blockchain
  let nftfi: Nftfi

  before(async () => {
    console.log('asdf')
    blockchain = new Blockchain(config)
    nftfi = new Nftfi(blockchain, config)
  })

  void it('nftfiClient.balanceOf', async () => {
    console.log('qwerty')
    const nftfiClient = await nftfi.getNftfiClient(
      NetworkName.Sepolia,
      config.networks.sepolia.lending.lendingWalletPrivateKey,
    )
    const balance = await nftfiClient.erc20.balanceOf({
      account: { address: nftfiClient.account.getAddress() },
      token: { address: nftfiClient.config.erc20.usdc.address },
    })
    const balanceBigNum = BigNumber.from(balance)
    const balanceString = balanceBigNum.toString()
    console.log({ balance, balanceBigNum })
    assert.ok(BigNumber.from(balance).gt(0))
  })
})
