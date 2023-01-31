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
