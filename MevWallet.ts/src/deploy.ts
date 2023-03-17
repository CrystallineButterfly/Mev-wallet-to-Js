const { ethers } = require('ethers');
const { MevWalletFactoryV1, MEV_WALLET_FACTORY_ADDRESS } = require('.');
const { MevWalletFactoryV1Abi__factory } = require('./bindings');

export default function getFactory(providerOrSigner) {
  return MevWalletFactoryV1Abi__factory.connect(
    MEV_WALLET_FACTORY_ADDRESS,
    providerOrSigner
  );
}