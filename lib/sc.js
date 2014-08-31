/* jshint node: true */

'use strict';





function es5protoToString(Of) { 
    return Object.prototype.toString.call(Of);
}

function getClass(Of) {
    var base = es5protoToString(Of); 
    return base.substring(8, (base.length) - 1);
}





module.exports = {

    es5protoToString : es5protoToString,
    getClass         : getClass

};