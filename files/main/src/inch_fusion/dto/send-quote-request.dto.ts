export class SendQuoteRequestDto {
  makerAddress: string;
  srcChainId: number;
  dstChainId: number;
  srcTokenAddress: string;
  dstTokenAddress: string;
  amount: string;
}
