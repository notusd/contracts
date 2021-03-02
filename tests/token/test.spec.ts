import checkToken from './checkToken';

import BN from 'bn.js';
import { toWei } from 'web3-utils';
import { NUSDContract } from '../../types/contracts';
import { TOKEN_CAP } from "../helpers/constants";

const NUSD: NUSDContract = artifacts.require('NUSD');

describe('Token', function () {
  before(async function () {
    const accounts = await web3.eth.getAccounts();

    this.owner = accounts[0];
    this.random = accounts[1];

    // Deploy contracts.
    this.nusdToken = await NUSD.new(TOKEN_CAP);

  });

  describe('When checking nusd erc20 token', checkToken.bind(this));
});
