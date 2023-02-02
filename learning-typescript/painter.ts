/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
interface Painter {
	finish(): boolean;
	// ownMaterials: Material[];
	// paint(painting: string, materials: Material[]): boolean;
}

function paintPainting(painter: Painter, painting: string): boolean {
	return true;
}

const artist = 'Augusta Savage';
console.log({ artist });

// Inferred type: string
const bestSong = Math.random() > 0.5 ? 'Chain of Fools' : 'Respect';

// const firstName = 'Whitney';
// firstName.length();
//        ~~~~~~
//  This expression is not callable.
//    Type 'Number' has no call signatures
