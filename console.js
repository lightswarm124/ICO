const repl = require('repl');
const fs = require('fs');
var Web3 = require('web3'),
    arg = process.argv[2];

if (typeof(arg) === "undefined")
	provider = "http:\/\/localhost:8545";
else
	provider = arg;

session = repl.start({
	prompt: '> ',
	ignoreUndefined: true
});
connect(provider);
session.context.connect = connect;

function connect(provider) {
	if (typeof(provider) === "undefined")
		provider = "http:\/\/localhost:8545";
	session.context.web3 = new Web3(
		new Web3.providers.HttpProvider(provider));
}

function deploy(provider) {
  code = fs.readFileSync("").toString();

  contract = web3.eth.compile.solidity(code)
  SmartContract = web3.eth.compile(contract.info.abiDefinition);
  deployedContract = SmartContract.new(['fields'], {data: contract.code, from: web3.eth.accounts[0], gas: 5000000});
  contractInstance = SmartContract.at(deployedContract.address);
}
