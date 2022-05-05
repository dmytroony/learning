(function () {
   const blockchain = Blockchain.create(2);
   blockchain.addBlock("Alice", "Bob", 5);
   blockchain.addBlock("John", "Melody", 100);
   console.log(blockchain);
   console.log(blockchain.isValid());
   blockchain.chain[1].data.amount = 200;
   console.log(blockchain.isValid());
})();
