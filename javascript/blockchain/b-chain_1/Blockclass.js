class Block {
    mine(difficulty) {
        const regex = new RegExp(`^(0){${difficulty}}.*`);
        while (!this.hash.match(regex)) {
            this.pow++;
            this.hash = calculateHash(this);
        }
    }
}

// // Alternative
// Block.prototype.mine = (difficulty) => {
//     const regex = new RegExp(`^(0){${difficulty}}.*`);
//     while (!this.has.match(regex)) {
//         this.pow++;
//         this.hash = calculateHash(this);
//     }
// };
