const SHA256 = require("crypto-js/sha256");


/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block { 
	constructor(data) {
   		this.hash = "",
   		this.height = 0,
   		this.body = data,
   		this.time = 0,
   		this.previousblockhash = ""
    }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/


class Blockchain {
	constructor() {
      this.chain = [];
    }
  
  	addBlock(newBlock) {
    	this.chain.push(newBlock);    
    } 
}

