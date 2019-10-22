module.exports = {
  name: "task-management-poc",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/task-management-poc/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
