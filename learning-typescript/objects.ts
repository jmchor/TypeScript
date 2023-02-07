//Object type syntax is very close to object literal syntax

// let poetLater: {
// 	born: number;
// 	name: string;
// };
let poetLater: Poet;

poetLater = {
	born: 1925,
	name: 'Mary Oliver',
}; //checks out fine!

poetLater = 'poet'; //the type string is not assignable to a very specific object type

// => creating a type alias to assign name to the type shape (= the exakt outfit, form or mould of a type)

type Poet = {
	born: number;
	name: string;
};
