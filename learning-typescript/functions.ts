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
