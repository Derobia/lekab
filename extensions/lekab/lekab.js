const axios = require('axios');

class LekabSMS {
  constructor(apiKey, apiUrl) {
    this.apiKey = apiKey;
    this.apiUrl = apiUrl;
  }

  async sendSMS(from, to, body) {
    const url = `${this.apiUrl}/send`;
    const data = {
      from,
      to,
      body
    };
    const headers = {
      'X-API-Key': `${this.apiKey}`
    };

    try {
      const response = await axios.post(url, data, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send SMS.');
    }
  }
}

module.exports = LekabSMS;