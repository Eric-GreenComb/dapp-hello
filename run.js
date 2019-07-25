//设置web3连接
var Web3 = require('web3');
//http://localhost:7545 为Ganache提供的节点链接
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8540'));
//读取合约
var fs = require('fs');
var contractCode = fs.readFileSync('Hello.sol').toString();
//编译合约代码
// var solc = require('solc');
// var compileCode = solc.compile(contractCode);
//获取合约abi和字节码
// var abi = JSON.parse(compileCode.contracts[':Hello'].interface);
// var byteCode = compileCode.contracts[':Hello'].bytecode;

var abi = [{"constant":false,"inputs":[{"name":"name","type":"string"}],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

//创建合约对象
var VotingContract = web3.eth.contract(abi);
// 0x6185d9feab7ec389c3ad6483c41d9f3c5e19c786 为 deploy 返回的 hash 合约部署地址
var contractInstance = VotingContract.at("0x6185d9feab7ec389c3ad6483c41d9f3c5e19c786");

var result = contractInstance.say.call('Hello world');
console.log(result);