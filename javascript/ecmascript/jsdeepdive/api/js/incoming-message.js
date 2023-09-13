exports.handler = function(context, event, callback) {
  console.log(`Incoming message: ${event.Body}`);
  let twiml = new Twilio.twiml.MessagingResponse();
  twiml.message('Thanks for your submission!');
  console.log(`TwiML was ${twiml}`);
  return callback(null, twiml);
};
