const cert = artifacts.require("EcoFriendlyCertification")
module.exports = function (deployer) {
	deployer.deploy(cert)
}
