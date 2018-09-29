# simple_private_blockchain
Creating Simple Private BlockChain

## Final project is at: https://github.com/KushalGH/private_blockchain_leveldb

## Create the Private BlockChain based on Bitcoin

Steps: 

@dev notes: - Please refer project_2 first for steps 1 to step 5
			- final project is the project in which we validate the blocks

1. create a folder
2. navigate to folder
3. $ npm init

STEP 1: Create Block Model

4. $ touch notes.txt [ We will just make a simple blockmodel. I have added the bitcoin model in file: testnet_block_1325438.json. ] 
5. Added a default model in notes.txt

STEP 2: Create New Blocks

6. $ touch simpleChain.js
 	[Note: I have added a backup file of simpleChain.js, so that u can easily follow, filename: simpleChain-primary.js]
7. Add a class named Block to represent to create our new Block
8. To test, just type node and try pasting the code in console. If it throws error,check your simplechain.js


STEP 3: Store Blocks

9. Create a new class named Blockchain in simpleChain.js
10. Add contructor and method: addBlock.
11. test in node, if it's working

STEP 4: Link Blocks

12. Install crypto-js to secure our blocks using SHA256
	>> $ npm install crypto-js -- save

13. Validate the dependency field in package.json 
14. Update the simpleChain.js for cryto-js changes 


STEP 4: Block Height and Timestamp

15. Updated simpleChain.js



STEP 5: LevelDB to Persist Data

16. $ npm install level --save
17. Created the file to manage lvelDb
	>> $ touch levelSanbox.js



## How to test in Node

- $ node
> [copy paste the complete simplechain.js] you will get some undefined, defining that these things are defined
> let blockchain = new Blockchain();
> blockchain.addBlock(new Block("hi"));
> blockchain.chain
> .exit // to exit, whenever u want to.



 npm install --prefix ./ node


touch 