export interface MaterialData {
	id: string;
	materialPreview: string;
	layers: Layers;
	name: string;
	points: string[];
}

export interface Layers {
	[key: string]: string;
}
