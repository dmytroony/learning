class Block {
    constructor(data, previousHash) {
        this.data = data;
        this.hash = "";
        this.previousHash = previousHash;
        this.timestamp = new Date();
        this.pow = 0;
    }
}

console.log(this);