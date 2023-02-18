//Passing any number of arguments to a function and typing them "regularly" makes them required arguments in TypeScript

function someFunction(param1: string, param2: number) {
	return param1 + param2;
}

someFunction('hello', 1); //works fine
someFunction('hello'); //throws type error

//Adding the ? before the type annotation makes a parameter optional

function anotherFunction(param1: string, param2?: string) {
	return param1 + param2;
}

anotherFunction('hello'); //works fine

//default parameters

function yetAnotherFunction(param1: number, param2 = 1) {
	return param1 + param2;
}

//param2 is optional and has a default value of 1, meaning it's assigned type is number | undefined

yetAnotherFunction(1, 2);

// rest parameters using the spread operator can be typed with the array syntax

function restParamFunction(param1: string, ...params: string[]) {
	return param1 + params[0] + params[1];
}

//TypeScript infers the return type of a function based on the return statements in the function body
//if a function returns multiple types, the return type is inferred as the union of those types

function returnTypesFunction(param1: string, param2: number) {
	if (param1 === 'hello') {
		return param1;
	} else {
		return param2;
	}
}
// here, the return type is a union of number and a literal type of 'hello', which is inferred as string


//Placement of parentheses either shows the type of a function as returning a union of types

let returnString: () => string | undefined

//typed as function which returns either string or undefined; or:

let returnFunctionThatReturnsString: (()=> string | undefined)

//typed as function that returns a function or undefined

//TypeScript infers parameter types, if the location to which the parameters are provided has a declared type

let example: (param1:string) => string

//any parameter in the location of param1 will be typed as string

//Function type aliases can be used to create a type for a function

type FunctionType = (param1: string) => string

let exampleFunction: FunctionType

// Function type aliases can be used for the parameters of a function as well

type FunctionType2 = (param1: FunctionType) => string

let exampleFunction2: FunctionType2
