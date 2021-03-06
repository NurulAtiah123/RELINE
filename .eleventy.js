const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("./src/css");

  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
      'dd LLL yyyy'
    );
  });

    return {
      dir: {
        input: "src",
        output: "public",
        data: "_data",
      },
    };
  };