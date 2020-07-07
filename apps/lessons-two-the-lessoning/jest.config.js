module.exports = {
  name: 'lessons-two-the-lessoning',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lessons-two-the-lessoning',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
