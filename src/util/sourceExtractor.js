'use strict';

module.exports = function (bug) {

  // this is awful!
  // but it is necessary because there
  // is no guarantee that the bug source
  // line is at the root of the bug or that
  // it is the only one showing

  var sourceLine = {_sourcefile: 'unknown', _sourcepath: 'unknown'};

  if (bug.SourceLine) {
    if (bug.SourceLine.length) {
      sourceLine = bug.SourceLine[0];
    } else {
      sourceLine = bug.SourceLine;
    }
  } else {
    if (bug.Class) {
      if (bug.Class.SourceLine) {
        if (bug.Class.SourceLine.length) {
          sourceLine = bug.Class.SourceLine[0];
        } else {
          sourceLine = bug.Class.SourceLine;
        }
      }
    }
  }

  return sourceLine;

};