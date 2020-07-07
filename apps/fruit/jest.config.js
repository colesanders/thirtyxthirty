module.exports = {
  name: 'fruit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/fruit',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
