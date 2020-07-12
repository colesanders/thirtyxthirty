module.exports = {
  name: 'water-fountain',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/water-fountain',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
