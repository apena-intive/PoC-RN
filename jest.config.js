module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-picker|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  coveragePathIgnorePatterns: [
    'src/components/Buttons/index.jsx',
    'src/components/DatePicker/index.jsx',
    'src/components/InputCurrency/index.jsx',
    'src/components/InputText/index.jsx',
    'src/components/OptionSelect/index.jsx',
    'src/components/ProfilePic/index.jsx',
    'src/components/Spinner/index.jsx',
    'src/constants/Colors.jsx',
    'src/context',
    'src/screens/HomeScreen/components/Balance/index.jsx',
    'src/screens/Withdraw/components/TransferFounds/index.jsx',
    'src/screens/Withdraw/hooks/index.jsx',
    'src/screens/HomeScreen/components/ListMovements/index.jsx',
    'src/screens/HomeScreen/components/CardBalance/index.jsx',
    'src/screens/shared/Loader/index.jsx',
    'src/utils',
  ],
  // setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleDirectories: [
    'node_modules',
    // add the directory with the test-utils.js file, for example:
    'utils', // a utility folder
    __dirname, // the root directory
  ],
};
