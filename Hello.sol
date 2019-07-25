pragma solidity ^0.4.24;

//contract关键字：合约申明
//和Java、PHP中的class类似
//此处是申明一个名为Hello的合约
contract Hello {

    //public: 函数访问属性(后续文章为详细阐述)
    //returns (string): 定义返回值类型为string
    function say(string name) public returns (string) {
        return name;
    }
}