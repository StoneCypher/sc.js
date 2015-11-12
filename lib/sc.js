/* jshint node: true */

'use strict';





function es5protoToString(Of) {
    return Object.prototype.toString.call(Of);
}

function getClass(Of) {
    var base = es5protoToString(Of);
    return base.substring(8, (base.length) - 1);
}

function seq(lo, hi, step) {

  var res   = [lo],
      ustep = step || 1;

  if (lo < hi) { while ((lo += ustep) <= hi) { res.push(lo); } }
  else         { while ((lo -= ustep) >= hi) { res.push(lo); } }

  return res;

}



module.exports = {

    es5protoToString : es5protoToString,
    getClass         : getClass,
    seq              : seq

};