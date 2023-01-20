/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MevWalletFactoryV0Abi,
  MevWalletFactoryV0AbiInterface,
} from "../MevWalletFactoryV0Abi";

const _abi = [
  {
    inputs: [],
    name: "CreationFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "InitFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "createWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "createWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MevWalletFactoryV0Abi__factory {
  static readonly abi = _abi;
  static createInterface(): MevWalletFactoryV0AbiInterface {
    return new utils.Interface(_abi) as MevWalletFactoryV0AbiInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MevWalletFactoryV0Abi {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MevWalletFactoryV0Abi;
  }
}
