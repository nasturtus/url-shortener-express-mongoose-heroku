const btoa = require("btoa");

function encode(count) {
  let encodedUrl = btoa(count);
  return encodedUrl
}

module.exports = encode;
