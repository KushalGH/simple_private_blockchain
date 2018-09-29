const SHA256 = require("crypto-js/sha256");

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block { 
	constructor(data) {
   		this.hash = "",
   		this.height = "",
   		this.body = data,
   		this.time = "",
   		this.previousBlockHash = "0x"
    }
}

class Blockchain {
	constructor() {
      this.chain = [];
      // creating genesis block
      this.addBlock(new Block("first block in the chain"));
    }
  
  	addBlock(newBlock) {
      newBlock.height = this.chain.length;
      newBlock.time = new Date().getTime().toString().slice(0, -3);
      if(this.chain.length > 0) {
      	newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
      }
      	newBlock.hash = SHA256(JSON.stringify(newBlock)).toString(); 
    	this.chain.push(newBlock);    
    } 
}

