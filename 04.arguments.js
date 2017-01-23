/**
 *  Arguments
 */
//function a(x) {
//	console.log(x);	
//}
//a(1);
//a();
//a(1,2,3);

/**
 *  Default values
 */
//function double( arr = [] ) { //you need node.js 6+
//	//'use strict'; // you can't use strict mod here
//	//var input = arr || [ ];
//	//if (typeof arr === 'undefined'){
//	//	return [];	
//	//}
//	//if ( !Array.isArray(arr) ){
//	//	return [];
//	//}
//	//return input.map(item => item * 2);
//	return arr.map(item => item * 2);
//}
//
//console.log(double([1,2,3]));
//console.log( double() );

/**
 *  Arguments object 
// */
//function b(){
//	console.log(arguments, arguments.length);
//}
//b();
//b(1,2);


/**
 *  Dynamic arguments
 */
function sum (){
	//var mySum = 0;
	//	for (var i = 0; i < arguments.length; i++){
	//		mySum += arguments[i]; 
	//	}
	//	console.log(mySum);
	
	//var arr = Array.prototype.slice.call(arguments);
	//console.log(arr);
	
	//var arr = Array.from(arguments);
	//console.log(arr.reduce((a, b) => a + b, 0));
	
	//function sum(...arr) { console.log(arr)}  - using rest operator
	
}


sum(); // 0
sum(1,2); //3
sum (1,2,3,4,5); //15
sum (2,2,2);
