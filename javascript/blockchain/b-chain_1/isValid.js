Blockchain.prototype.isValid = () => {
    if (this.chain.length === 1) return true;
    for (let index = 1; index < this.chain.length; index++) {
        const currentBlock = this.chain[index];
        const previousBlock = this.chain[index - 1];
        if (
            currentBlock.hash !== calculateHash(currentBlock) ||
            previousBlock.hash !== currentBlock.previousHash
        )
            return false;
    }
    return true;
};
