import { Log } from '@ethersproject/abstract-provider'
import { BigNumber, ethers, ContractInterface } from 'ethers'
import keccak256 from 'keccak256'

import { asyncEachParallel } from './async'
import { Blockchain } from './blockchain'
import rawFabricaTokenAbi from './data/fabrica-1155.abi.json'
import { Config, getConfig, NetworkName } from './types/config'
import { ContractIdentity } from './types/contract-identity'
import { EthereumAddress } from './types/ethereum-address'
import { PrefixedHexString } from './types/hex-string'
import { PositiveInteger } from './types/positive-integer'
import { TokenIdentity } from './types/token-identity'

const fabricaTokenAbi: ContractInterface = rawFabricaTokenAbi

class FabricaLoanBot {
  private config: Config

  public readonly start = async () => {
    this.config = await getConfig()
    const blockchain = new Blockchain(this.config)
    Object.entries(this.config.networks).forEach(([network, config]) => {
      blockchain.addListener(
        {
          network: network as NetworkName,
          contractAddress: config.fabrica.tokenContractAddress,
        },
        [
          'TransferSingle(address,address,address,uint256,uint256)',
          'TransferBatch(address,address,address,uint256[],uint256[])',
        ],
        this.processMintEvent,
      )
    })
    // const nftfi = new Nftfi(config)
  }

  private readonly processMintEvent = async (
    contractIdentity: ContractIdentity,
    log: Log,
  ): Promise<void> => {
    const network = this.config.networks[contractIdentity.network]
    const contract = new ethers.Contract(
      network.fabrica.tokenContractAddress,
      fabricaTokenAbi,
    )
    const blockNumber = log.blockNumber
    const transactionHash = log.transactionHash
    const logDescription = contract.interface.parseLog(log)
    const tokenIds: Array<{ _hex: PrefixedHexString }> =
      logDescription.name === 'TransferSingle'
        ? [logDescription.args[3]]
        : logDescription.args[3]
    const concurrency = 5
    await asyncEachParallel(tokenIds, concurrency, async (tokenIdObject) => {
      const tokenId = BigNumber.from(tokenIdObject._hex).toString()
      return await this.processMint(
        {
          ...contractIdentity,
          tokenId,
        },
        logDescription.args[0],
        logDescription.args[1],
        logDescription.args[2],
        logDescription.args[4],
        blockNumber,
        transactionHash,
      )
    })
  }

  private readonly processMint = async (
    tokenIdentity: TokenIdentity,
    operator: EthereumAddress,
    from: EthereumAddress,
    to: EthereumAddress,
    amount: PositiveInteger,
    blockNumber: PositiveInteger,
    transactionHash: PrefixedHexString,
  ): Promise<void> => {
    console.log('Detected a mint!', {
      tokenIdentity,
      operator,
      from,
      to,
      amount,
      blockNumber,
      transactionHash,
    })
  }
}

const bot = new FabricaLoanBot()
void bot.start()
