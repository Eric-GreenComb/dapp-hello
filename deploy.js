//设置web3连接
var Web3 = require('web3');
//http://localhost:7545 为Ganache提供的节点链接
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8540'));
//读取合约
var fs = require('fs');
var contractCode = fs.readFileSync('Hello.sol').toString();
//编译合约代码
var solc = require('solc');
var compileCode = solc.compile(contractCode);

console.log(compileCode);

//获取合约abi和字节码
var abi = JSON.parse(compileCode.contracts[':Hello'].interface);
var byteCode = compileCode.contracts[':Hello'].bytecode;
//创建合约对象
var VotingContract = web3.eth.contract(abi);
//部署合约，并返回部署对象
var deployedContract = VotingContract.new({
    data: "0x" + byteCode,
    from: web3.eth.accounts[0], //部署合约的外部账户地址
    gas: 750000 //部署合约的矿工费
});
console.log(deployedContract);