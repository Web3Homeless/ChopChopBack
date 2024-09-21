import { LimitOrderV4Struct } from "@1inch/fusion-sdk";

export class FinalizeOrderDTO {
  srcChainId: number;
  orderStruct: LimitOrderV4Struct;
  quoteId: string;
  secretHashes: string[];
  signature: string;
  extension: string;
  orderHash: string;
}
