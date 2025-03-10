const calculateHash = (block) => {
    const data = JSON.stringify(block.data);
    const blockData =
        data +
        block.previousHash +
        block.timestamp.toISOString() +
        block.pow.toString();
    // console.log(blockData);
    return createHash("sha256").update(blockData).digest("hex");
};
