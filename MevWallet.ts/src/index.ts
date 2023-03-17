const ethers = require('ethers');

module.exports.MevTxBuilder = require('./builder').MevTxBuilder;

const {
  MevWalletV1Abi: MevWalletV1,
  MevWethAbi: MevWeth,
  MevWalletFactoryV1Abi: MevWalletFactoryV1,
} = require('./bindings');

const {
  MevWalletV1Abi__factory: MevWalletV1__factory,
  MevWethAbi__factory: MevWeth__factory,
  MevWalletFactoryV1Abi__factory: MevWalletFactory__factory,
} = require('./bindings');

module.exports.getFactory = require('./deploy').getFactory;

module.exports.utils = require('./utils');

module.exports.MEV_WETH_ADDRESS = '0x00000000008C43efC014746c230049e330039Cb3';
module.exports.MEV_WALLET_IMPL_ADDRESS = '0x00000000004096437C84E1B0927D5ED44F45F6b3';
module.exports.MEV_WALLET_FACTORY_ADDRESS = '0x49496DD21760ED9235aFE43871983869CC0eFC61';

module.exports.MEV_TX_TYPES = {
  MevTx: [
    { name: 'to', type: 'address' },
    { name: 'data', type: 'bytes' },
    { name: 'value', type: 'int256' },
    { name: 'delegate', type: 'bool' },
    { name: 'tip', type: 'int256' },
    { name: 'maxBaseFee', type: 'uint256' },
    { name: 'timing', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
  ],
};

module.exports.MevTx = {
  to: '',
  data: '',
  value: ethers.BigNumber.from(0),
  delegate: false,
  tip: ethers.BigNumber.from(0),
  maxBaseFee: ethers.BigNumber.from(0),
  timing: ethers.BigNumber.from(0),
  nonce: ethers.BigNumber.from(0),
};

module.exports.SerializedMevTx = {
  to: '',
  data: '',
  value: '',
  delegate: false,
  tip: '',
  maxBaseFee: '',
  timing: '',
  nonce: '',
};

module.exports.SignedMevTx = {
  to: '',
  data: '',
  value: '',
  delegate: false,
  tip: '',
  maxBaseFee: '',
  timing: '',
  nonce: '',
  v: 0,
  r: '',
  s: '',
};

