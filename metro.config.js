const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add path mapping support
config.resolver.alias = {
  '@': './src',
  '@/features': './src/features',
  '@/shared': './src/shared',
  '@/navigation': './src/navigation',
  '@/styles': './src/styles',
};

module.exports = config; 