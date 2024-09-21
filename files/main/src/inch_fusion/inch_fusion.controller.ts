import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NetworkEnum, SDK } from 'lib/inch';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

@Controller('inch_fusion')
export class InchFusionController {
  constructor() {}

  @Get()
  async getQuote() {
    const sdk = new SDK({
      url: 'https://api.1inch.dev/fusion-plus',
      authKey: process.env.INCH_API_KEY!,
    });

    const params = {
      srcChainId: NetworkEnum.ETHEREUM as any,
      dstChainId: NetworkEnum.GNOSIS as any,
      srcTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
      dstTokenAddress: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      amount: '1000000000000000000000',
    };

    const quote = await sdk.getQuote(params);
    
    console.log('Quote', quote);

    return quote;
  }
}
