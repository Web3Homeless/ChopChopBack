import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  HashLock,
  NetworkEnum,
  PrivateKeyProviderConnector,
  SDK,
} from 'lib/inch';
import { GetQuoteRequestDto } from './dto/get-quote-request.dto';
import { getRandomBytes32 } from 'lib/inch/test-utils/get-random-bytes-32';
import { ethers, keccak256, solidityPackedKeccak256 } from 'ethers';
import { PreparedOrderRequestDto } from './dto/prepare-order-request.dto';
import { Web3 } from 'web3';
import { FinalizeOrderDTO } from './dto/finalize-order.sto';
import { SendQuoteRequestDto } from './dto/send-quote-request.dto';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const makerPrivateKey =
  'c7d516eaab031f2799b955793d37781111008e831248e35a8cdfaa0e7ba38570';
const makerAddress = '0x997Cdca3e27c847C5F9ae6a2552645b6430289c6';

const blockchainProvider = new PrivateKeyProviderConnector(
  makerPrivateKey,
  new Web3('https://eth.drpc.org') as any,
);

const sdk = new SDK({
  url: 'https://api.1inch.dev/fusion-plus',
  authKey: process.env.INCH_API_KEY!,
  blockchainProvider,
});

@Controller('inch_fusion')
export class InchFusionController {
  constructor() {}

  @Post('get_quote')
  async getQuote(@Body() getQuoteDto: GetQuoteRequestDto) {
    const params = {
      srcChainId: getQuoteDto.srcChainId,
      dstChainId: getQuoteDto.dstChainId,
      srcTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      dstTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      amount: '10000000000000000000000',
    };

    const quote = await sdk.getQuote(params);

    console.log('Quote', quote);

    return quote;
  }

  @Post('prepare_order')
  async prepareOrder(@Body() sendQuoteDto: PreparedOrderRequestDto) {
    const quote = await sdk.getQuote({
      ...sendQuoteDto,
      walletAddress: sendQuoteDto.makerAddress,
      enableEstimate: true,
    });

    const secretsCount = quote.getPreset().secretsCount;

    const secrets = Array.from({ length: secretsCount }).map(() =>
      getRandomBytes32(),
    );

    const secretHashes = secrets.map((x) => keccak256(x));

    console.log(secretHashes);

    const hashLock =
      secretsCount === 1
        ? HashLock.forSingleFill(secrets[0])
        : HashLock.forMultipleFills(
            secretHashes.map((secretHash, i) =>
              solidityPackedKeccak256(
                ['uint64', 'bytes32'],
                [i, secretHash.toString()],
              ),
            ) as (string & {
              _tag: 'MerkleLeaf';
            })[],
          );

    console.log('Maker address', sendQuoteDto.makerAddress);

    const params = {
      walletAddress: sendQuoteDto.makerAddress,
      hashLock,
      secretHashes,
    };

    const { order, quoteId } = await sdk.createOrder(quote, params);

    const data = await sdk.prepareOrder(
      quote.srcChainId,
      order,
      quoteId,
      params.secretHashes,
    );

    console.log(data);
    return { ...data, secretHashes: params.secretHashes };
  }

  @Post('finalize_order')
  async finalizeOrder(@Body() finalizeOrderDto: FinalizeOrderDTO) {
    const data = await sdk.finalizeOrder(
      finalizeOrderDto.srcChainId,
      finalizeOrderDto.orderStruct,
      finalizeOrderDto.quoteId,
      finalizeOrderDto.secretHashes,
      finalizeOrderDto.signature,
      finalizeOrderDto.extension,
      finalizeOrderDto.orderHash,
    );

    console.log(data);
    return data;
  }

  @Post('send_quote')
  async sendQuote(@Body() sendQuoteDto: SendQuoteRequestDto) {
    const quote = await sdk.getQuote({
      ...sendQuoteDto,
      walletAddress: sendQuoteDto.makerAddress,
      enableEstimate: true,
    });

    const secretsCount = quote.getPreset().secretsCount;

    const secrets = Array.from({ length: secretsCount }).map(() =>
      getRandomBytes32(),
    );

    const secretHashes = secrets.map((x) => keccak256(x));

    console.log(secretHashes);

    const hashLock =
      secretsCount === 1
        ? HashLock.forSingleFill(secrets[0])
        : HashLock.forMultipleFills(
            secretHashes.map((secretHash, i) =>
              solidityPackedKeccak256(
                ['uint64', 'bytes32'],
                [i, secretHash.toString()],
              ),
            ) as (string & {
              _tag: 'MerkleLeaf';
            })[],
          );

    console.log('Maker address', sendQuoteDto.makerAddress);

    sdk
      .placeOrder(quote, {
        walletAddress: sendQuoteDto.makerAddress,
        hashLock,
        secretHashes,
        // fee is an optional field
        // fee: {
        //   takingFeeBps: 100, // 1% as we use bps format, 1% is equal to 100bps
        //   takingFeeReceiver: '0x0000000000000000000000000000000000000000', //  fee receiver address
        // },
      })
      .then(console.log);

    console.log(quote);
  }
}
