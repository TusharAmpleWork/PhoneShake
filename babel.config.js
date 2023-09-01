module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          test: './test',
          underscore: 'lodash',
          '@themes': './src/themes',
          '@button': './src/components/button',
          '@headerComp': './src/components/headerComp',
          '@text': './src/components/text',
          '@subText': './src/components/subText',
          '@textInput': './src/components/textInput',
          '@helper': './src/utils/helper',
          '@storage': './src/services/storage',
          '@modalPicker': './src/components/modalPicker',
          '@switchButton': './src/components/switch',
          '@actionSheet': './src/components/actionSheet',
        },
      },
    ],
  ],
};
