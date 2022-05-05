class Blockchain {
    constructor(genesisBlock, chain, difficulty) {
        this.genesisBlock = genesisBlock;
        this.chain = chain;
        this.difficulty = difficulty;
    }
    static create(difficulty) {
        const genesisBlock = new Block(null);
        return new Blockchain(genesisBlock, [genesisBlock], difficulty);
    }
}
