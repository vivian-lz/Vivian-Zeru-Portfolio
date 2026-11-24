// Chromium needs these flags inside the cloud container; source tests stay unchanged.
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    reporters: ["progress"],
    customLaunchers: {
      ChromeHeadlessCloud: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-dev-shm-usage"],
      },
    },
    browsers: ["ChromeHeadlessCloud"],
    singleRun: true,
  });
};
