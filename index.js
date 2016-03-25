"use strict";
var escapeCharacter = require("terminal-escape-char");

const controlSequenceIntroducer = escapeCharacter + "[";

module.exports = controlSequenceIntroducer
