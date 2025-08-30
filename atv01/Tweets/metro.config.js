const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@components": "./Tweets/components", // Alias configurado corretamente
};

module.exports = withNativeWind(config, { input: './global.css' });