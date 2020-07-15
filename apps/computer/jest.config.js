module.exports = {
  name: 'computer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/computer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
