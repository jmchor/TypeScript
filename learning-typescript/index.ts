// Union Types
// "Either-Or-Type" for variables that can belong to more than one type

// const mathematician: string | undefined = Math.random() > 0.5 ? undefined : 'Mark Wahlberg';

const physicist: string | number = Math.random() > 0.5 ? 'Marie Curie' : 84;

// Properties on Union Types

physicist.toString(); // is valid since it exists both on string and number

// physicist.toUpperCase(); //is not valid since it only exists on string

//Narrowing
let admiral: number | string;
admiral = 'Grace Hopper';
admiral.toUpperCase();
//admiral.toFixed() won't work anymore cause the variable was narrowed to be of type string

//Conditional checks

let scientist = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;

if (scientist === 'Rosalind Franklin') {
	//Type of scientist in this condition is string
	scientist.toUpperCase();
}

// scientist.toUpperCase() string method toUpperCase doesn't exist on string | number

let researcher = Math.random() > 0.5 ? 'Rosalind Franklin' : 51;

if (typeof researcher === 'string') {
	researcher.toUpperCase(); // Ok: string
}

if (!(typeof researcher === 'string')) {
	researcher.toFixed();
} else {
	researcher.toUpperCase();
} //explore both cases between string | number type

// Literal Types

const philosopher = 'Hypatia';

// initializing a variable using const will assign the initial value as the literal type of this variable; meaning it can be typed without the ":type" annotation

let lifespan: number | boolean | string | 'hangover';
//all Union type annotations can mix between all literal and primitive types

let specificallyAda: 'Ada'; //literally typed Ada

specificallyAda = 'Ada'; // Ok

specificallyAda = 'Byron'; //an initialized literal type can't be assigned another type

let someString = ' '; // type string

let smile: ':)';
smile = ':)';

someString = smile;

//literal types are allowed to be assigned to their primitive types. ":)" as a literal type still is of type string

//Strict null checking

let nameMaybe = Math.random() > 0.5 ? 'Tony Hoare' : undefined;

nameMaybe.toLowerCase();

//Truthiness narrowing - narrowing according to a variable evaluating to truthy in a Boolean context

let geneticist = Math.random() > 0.5 ? 'Barbara McClintock' : undefined;

if (geneticist) {
	geneticist.toUpperCase(); // Ok: string
}

geneticist.toUpperCase();

let mathematician: string;

mathematician?.length;

//Type aliases

type TypeAlias = boolean | string | object; //basically works like a Partial in hbs

const someData: TypeAlias = { job: geneticist };
