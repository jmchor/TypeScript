// Union Types
// "Either-Or-Type" for variables that can belong to more than one type

const mathematician: string | undefined = Math.random() > 0.5 ? undefined : 'Mark Wahlberg';

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
