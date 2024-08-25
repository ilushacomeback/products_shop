module.exports = {
  accessToken: {
    salt: process.env.KEY_TOKEN,
    expired: '30min',
    type: 'access',
  },
  refreshToken: {
    salt: process.env.KEY_TOKEN,
    expired: '14days',
    type: 'refresh',
  },
};
