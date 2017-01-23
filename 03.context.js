/**
 *  Context
 */


/**
 *  "Simple" Functions
 */

//var foo = function foo () {
//	'use strict';
//	console.log(this);
//	//return undefined
//}
//foo();

//declarations / expression


/**
 *  Constructors
 */
//
//function User(){
//	this.name = 'Andrei';
//	console.log(this);
//	//return this;
//}
//var user = new User();
//console.log(user);

/**
 *  Methods
 */
// this tine de unde este chemata metoda, in acest caz scopul e props.
//var user = {
//	props: {
//		getName(){
//			console.log(this);
//		}
//	}
//};
//user.props.getName();


/**
 *  Arrows
 */
//implicit contextul parinte
//var user = {
//	props: {
//		getName: () => {
//			console.log(this);
//		}
//	}
//};
//user.props.getName();

/**
 *  ES6 specific syntax
 */
//function 		- functie (doar pentru function declaration)
//callback 		- use arrow functions
/*methode 		- def methods pe obiect, syntaxa simplificata
,in loc de getName: function()...  se poate folose getName{}
*/
//constructor 	- class
//IIFE 			-module


/**
 *  Context change
 */

 var user1 = {
	name: 'Andrei',
	getName(greet) {
		console.log(greet, this.name);
	}
 };
 
var user2 = {
	name: 'Gigel'
};

//user1.getName.call(user2);
//user1.getName.apply(user2, ['Salut']);
//
//var getUserName2 = user1.getName.bind(user2, 'Salut');
//getUserName2();

var getName = user1.getName.bind(user1);
getName();