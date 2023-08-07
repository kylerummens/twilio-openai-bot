exports.handler = function(context, event, callback) {

  // TODO: Checkout Twilio's IVR (Interactive Voice Response) example
  // https://www.twilio.com/docs/voice/tutorials/build-interactive-voice-response-ivr-phone-tree/node

  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.say('Hello World!');
  callback(null, twiml);
};
