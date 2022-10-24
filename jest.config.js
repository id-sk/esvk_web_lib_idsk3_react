const esModules = ['pretty-bytes'].join('|');

module.exports = {
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`]
};