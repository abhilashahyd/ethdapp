var Payment = artifacts.require("./Payment.sol");

module.exports = function(deployer) {
  deployer.deploy(Payment);
};
