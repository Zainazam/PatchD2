const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure compatibility with Expo SDK 53 and fix module resolution
config.resolver.alias = {
  ...config.resolver.alias,
  '@': __dirname,
};

// Add platform extensions for better module resolution
config.resolver.platforms = ['native', 'web', 'android', 'ios'];

// Ensure proper module resolution for expo modules
config.resolver.unstable_enableSymlinks = false;

module.exports = config;