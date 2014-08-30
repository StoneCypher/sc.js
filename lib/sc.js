/* jshint node: true */

'use strict';





function es5ToString(Of) { 
    return Object.prototype.toString.call(Of);
}

function getClass(Of) {
    var base = es5ToString(Of); 
    return base.substring(8, (base.length) - 1);
}





module.exports = {

    es5ToString : es5ToString,
    getClass    : getClass

};