/**
 *  Scope
 */

//var x = 1;

//function a() {
//	var x = 2; // deevine o nou variabil
//	//first, the local scope is checked and then a superior scope, and lastly the global scope
//	console.log(x);
//}
//a();
//console.log(x);

/**
 *  Implicit globals
 */

//function a(){
//	x = 2;
//}
//a():
//console.log(x);

/**
 *  Strict mode
 */
//only code followed by 'use strict' is affected 
//'use strict';
//function a(){
//	x = 2;
//}
//a();
//console.log(x);

/**
 *  Not defined vs. Undefined
 */
//console.log(u);
//var u;
 

/**
 *  Hoisting
 */
//var u = undefined;
//console.log(u);
//u = 1;
//console.log(u);


/**
 *  Blocks
 */

//if (true){
//	var z = 1;
//}
//console.log(z);

/**
 *  Block-level scope (ES6)
 */
//(function () {
//	'use strict';
//	if (true){
//		let z = 1;
//		console.log(z);
//	}
//
//})();


/**
 *  Temporal Dead Zone (TDZ)
 */
//(function () {
//	'use strict';
//	
//	if (true){
//		console.log(z);
//		let z = 1;
//	}
//
//})();


/**
 *  Constants
 */

//try to us const as often as possible 
//'use strict';
//var MAX_AGE = 90;
//const maxAge = 90; //instroduced in ES6;
//maxAge = 65;

/**
 *  Function arguments
 */
//var param = 1;
// function p (param) {
//	console.log(param);
// }
// p(3);