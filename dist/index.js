/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first falsy element in a one-dimensional single-precision floating-point ndarray.
*
* @module @stdlib/blas-ext-base-ndarray-sindex-of-falsy
*
* @example
* var Float32Vector = require( '@stdlib/ndarray-vector-float32' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var sindexOfFalsy = require( '@stdlib/blas-ext-base-ndarray-sindex-of-falsy' );
*
* var x = new Float32Vector( [ 1.0, 0.0, 3.0, 2.0 ] );
*
* var fromIndex = scalar2ndarray( 0, {
*     'dtype': 'generic'
* });
*
* var v = sindexOfFalsy( [ x, fromIndex ] );
* // returns 1
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
