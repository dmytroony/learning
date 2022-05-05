Blockchain.prototype.addBlock = (from, to, amount) => {
    const blockTime = 10000;
    const blockData = { from, to, amount };
    const lastBlock = this.chain[this.chain.length - 1];
    const newBlock = new Block(blockData, lastBlock.hash);
    newBlock.mine(this.difficulty);
    this.chain.push(newBlock);
    this.difficulty += (Date.now() - newBlock.timestamp.getTime()) > this.blockTime ? -1 : 1;
};
