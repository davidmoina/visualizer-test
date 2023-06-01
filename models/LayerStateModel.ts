import { Layers, MaterialData } from './materialData';
import { PointsData } from './pointsData';

export interface State {
	roomPicture: string;
	selectedPoint: PointsData | null;
	points: PointsData[] | null;
	materials: MaterialData[] | null;
	materialsToSelect: MaterialData[] | null;
	selectedMaterial: MaterialData | null;
	displayMaterials: Layers | null;
	currentMaterials: Layers | null;
}

export interface Actions {
	setSelectedPoint: (point: PointsData | null) => void;
	setPoints: (points: PointsData[]) => void;
	setMaterials: (materials: MaterialData[]) => void;
	setMaterialsToSelect: (materials: MaterialData[] | null) => void;
	setSelectedMaterial: (material: MaterialData) => void;
	setDisplayMaterials: (layer: Layers) => void;
	setCurrentMaterials: (material: Layers) => void;
}
