module.exports = {
  extends: "airbnb",
  env: {
    node: true,
    jest: true,
    es6: true
  },
  parser: "babel-eslint",
  plugins: ["import"],
  globals: {
    promisify: "readonly"
  },
  rules: {
    "no-console": "off"
  }
};
