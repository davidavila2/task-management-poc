module.exports = {
  name: 'ui-signup',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-signup',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
