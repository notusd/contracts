const NotUsdToken = artifacts.require("NUSD");
module.exports = function (deployer, network, accounts) {
  deployer.deploy(NotUsdToken, "1000000000000000000000000");
};