const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure compatibility with Expo SDK 52
config.resolver.alias = {
  ...config.resolver.alias,
  '@': __dirname,
};

module.exports = config;