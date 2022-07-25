module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@icons': './src/icons',
            '@pages': './src/pages',
            '@types': './src/types',
            '@helpers': './src/helpers',
          },
        },
      ],
    ],
  };
};
