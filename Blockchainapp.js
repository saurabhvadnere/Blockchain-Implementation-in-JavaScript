const Blockchain = require('./Blockchain.js');

const Block = require('./block.js')

const blockchain = new Blockchain();

for(let i=1; i<10; i++)
{
    const newData = 'Block Number :'+' '+i;
    blockchain.addBlock({data: newData});
}

console.log(blockchain);