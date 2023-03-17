import { TypedDataDomain } from '@ethersproject/abstract-signer';
import { BigNumber } from 'ethers';
import { MevTx, SerializedMevTx } from './index';

// Custom error class that extends the built-in Error class
export class MissingKeys extends Error {
  constructor(missing, additional) {
    // If additional info is provided, append it to the error message
    const add = additional ? `Additional Info: ${additional}` : '';
    super(`Missing keys: [${missing.join(', ')}]. ${add}`);
  }
}

// A function that returns the typed data domain for a given chain ID and verifying contract
export function domainFor(chainId, verifyingContract) {
  return {
    name: 'MevTx',
    version: '1',
    verifyingContract,
    chainId,
  };
}

// A function that serializes a MevTx object into a SerializedMevTx object
export function serialize(tx) {
  return {
    to: tx.to,
    data: tx.data,
    // Convert BigNumber values to hexadecimal strings
    value: tx.value?.toHexString(),
    delegate: tx.delegate,
    tip: tx.tip?.toHexString(),
    maxBaseFee: tx.maxBaseFee?.toHexString(),
    timing: tx.timing?.toHexString(),
    nonce: tx.nonce?.toHexString(),
  };
}

// A function that deserializes a partial MevTx object
export function deserializePartial(obj) {
  const tx = {};
  if (typeof obj.to === 'string') tx.to = obj.to;
  if (typeof obj.data === 'string') tx.data = obj.data;
  if (typeof obj.value === 'string') tx.value = BigNumber.from(obj.value);
  if (typeof obj.delegate === 'boolean') tx.delegate = obj.delegate;
  if (typeof obj.tip === 'string') tx.tip = BigNumber.from(obj.tip);
  if (typeof obj.maxBaseFee === 'string')
    tx.maxBaseFee = BigNumber.from(obj.maxBaseFee);
  if (typeof obj.timing === 'string') tx.timing = BigNumber.from(obj.timing);
  if (typeof obj.nonce === 'string') tx.nonce = BigNumber.from(obj.nonce);
  return tx;
}

// A function that returns an array of missing keys from a MevTx object
export function missingKeys(obj) {
  const keys = [];
  if (!('to' in obj) || obj.to === undefined) keys.push('to');
  if (!('data' in obj) || obj.data === undefined) keys.push('data');
  if (!('value' in obj) || obj.value === undefined) keys.push('value');
  if (!('delegate' in obj) || obj.delegate === undefined) keys.push('delegate');
  if (!('tip' in obj) || obj.tip === undefined) keys.push('tip');
  if (!('maxBaseFee' in obj) || obj.maxBaseFee === undefined)
    keys.push('maxBaseFee');
  if (!('timing' in obj) || obj.timing === undefined) keys.push('timing');
  if (!('nonce' in obj) || obj.nonce === undefined) keys.push('nonce');
  // Return an array of missing keys
  return keys;
}

export function deserialize(obj) {
  const preCond = missingKeys(obj);
  if (preCond.length !== 0) {
    throw new MissingKeys(
      preCond,
      "Before deserialization. This indicates that a value was missing."
    );
  }
  const tx = {};
  if (typeof obj.to === "string") tx.to = obj.to;
  if (typeof obj.data === "string") tx.data = obj.data;
  if (typeof obj.value === "string")
    tx.value = ethers.BigNumber.from(obj.value);
  if (typeof obj.delegate === "boolean") tx.delegate = obj.delegate;
  if (typeof obj.tip === "string")
    tx.tip = ethers.BigNumber.from(obj.tip);
  if (typeof obj.maxBaseFee === "string")
    tx.maxBaseFee = ethers.BigNumber.from(obj.maxBaseFee);
  if (typeof obj.timing === "string")
    tx.timing = ethers.BigNumber.from(obj.timing);
  if (typeof obj.nonce === "string")
    tx.nonce = ethers.BigNumber.from(obj.nonce);

  const postCond = missingKeys(obj);
  if (postCond.length !== 0) {
    throw new MissingKeys(
      postCond,
      "After deserialization. This indicates that a value was an unexpected type."
    );
  }
  return tx;
}

export function hasSig(obj) {
  if ("r" in obj && typeof obj.r === "string")
    try {
      ethers.BigNumber.from(obj.r);
    } catch {
      return false;
    }
  if ("s" in obj && typeof obj.s === "string")
    try {
      ethers.BigNumber.from(obj.s);
    } catch {
      return false;
    }
  if ("v" in obj && typeof obj.v === "number") return true;
  return false;
}


