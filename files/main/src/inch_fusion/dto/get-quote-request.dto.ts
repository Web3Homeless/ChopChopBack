export class GetQuoteRequestDto {
  srcChainId: number;
  dstChainId: number;
  srcTokenAddress: string;
  dstTokenAddress: string;
  amount: string;
}
