exports.handler = function (context, event, callback) {
  const gallery = [
    {
      src: "https://placekitten.com/200/300",
      description: "Look at this kitteh",
      alt: "A kitteh",
      thumbnailWidth: "200px",
    },
    {
      src: "https://placekitten.com/300/300",
      description: "Another Kitteh",
      alt: "Cutie",
      thumbnailWidth: "200px",
    },
  ];
  return callback(null, gallery);
};
