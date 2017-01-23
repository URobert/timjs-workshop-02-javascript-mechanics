var _ = require('lodash');
/**
 *  Values
 */
//var v1 = 'a';
//var v2 = v1;
//
//v2 = 'b';
// console.log(v1,v2, v1===v2);

/**
 *  References
 */
//var o1 = {a : 1};
//var o2 = o1;
//
//o2.a = 2;
//console.log(o1,o2, o1 === o2);
/**
 *  Passing by Value vs. Passing by Reference
 */
//when a function is called with an object as a parameter, the reference 
//function inc(nr){
//	nr += 1;
//	return nr;
//}
//var n = 2;
//console.log( inc(n), n );
//
//function incObj (obj) {
//	obj.nr += 1;
//	return obj;
//}
//var o = {nr: 2};
//console.log( incObj(o), o );
/**
 *  Equality vs. Deep Equality
 */
//console.log(1===1);
//console.log('a' === 'a');
//console.log( [] === [] );
//console.log (console.log([]) === console.log([]));

//QUIZ: implement deepEqual ()


function isDeepEqual(v1,v2){
		console.log(_.isEqual(v1,v2));
//console.log(v1);
//console.log(v2);
//
//	if (typeof v1 === typeof v2 && typeof v1 === 'object') {
//	console.log('ok object');
//		if ( Object.values(v1) === Object.values(v2) ) {
//			console.log(true);
//		}else{
//			console.log(false);
//		}
//	}else{
//	console.log('not object');
//		if (v1 === v2) {
//			console.log( true );
//		}else{
//			console.log( false);
//		}
//	}


}

//isDeepEqual(1,1); //true
//isDeepEqual(1,2); //false
//isDeepEqual({a:1}, {a:1}); //true
//isDeepEqual({a:1}, {a:1}); //false
/**
 *  Object Cloning
 */

 var obj = {
	a : 1,
	arr: [1,2,3]
	};
//CASE 1. only first element of the object is cloned

	 //var cin = clone(obj);
	 //var cin = Object.assign({}, obj);
	 //console.log (obj === cin);
	 
//CASE 2. deep cloning
var cln = _.cloneDeep(obj);
console.log(obj === cln);
console.log("This should be true");
isDeepEqual(obj, cln);



 //console.log (	Object.assign({a: 1}, {b: 2}) );