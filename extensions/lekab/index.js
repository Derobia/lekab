const LekabSMS = require('./lekab');

module.exports = async function (Cognigy, dependencies) {
  const { apiKey, apiUrl } = dependencies;

  const lekab = new LekabSMS(apiKey, apiUrl);

  Cognigy.plugins.set('lekab', {
    sendSMS: async function (from, to, body) {
      return await lekab.sendSMS(from, to, body);
    }
  });
};