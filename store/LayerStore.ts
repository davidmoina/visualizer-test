import { create } from 'zustand';
import { PointsData } from '../models/pointsData';
import { Layers, MaterialData } from '../models/materialData';

interface State {
	roomPicture: string;
	selectedPoint: PointsData | null;
	points: PointsData[] | null;
	materials: MaterialData[] | null;
	materialsToSelect: MaterialData[] | null;
	selectedMaterial: MaterialData | null;
	displayMaterials: Layers | null;
	currentMaterials: Layers | null;
}

interface Actions {
	setSelectedPoint: (point: PointsData | null) => void;
	setPoints: (points: PointsData[]) => void;
	setMaterials: (materials: MaterialData[]) => void;
	setMaterialsToSelect: (materials: MaterialData[] | null) => void;
	setSelectedMaterial: (material: MaterialData) => void;
	setDisplayMaterials: (layer: Layers) => void;
	setCurrentMaterials: (material: Layers) => void;
}

export const useLayerStore = create<State & Actions>(set => ({
	roomPicture:
		'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554',
	selectedPoint: null,
	points: null,
	materials: null,
	materialsToSelect: null,
	selectedMaterial: null,
	displayMaterials: null,
	currentMaterials: null,
	setSelectedPoint: (point: PointsData | null) =>
		set(state => ({
			...state,
			selectedPoint: point,
		})),
	setPoints: (points: PointsData[]) =>
		set(state => ({
			...state,
			points,
		})),
	setMaterials: (materials: MaterialData[]) =>
		set(state => ({
			...state,
			materials,
		})),
	setMaterialsToSelect: (materials: MaterialData[] | null) =>
		set(state => ({
			...state,
			materialsToSelect: materials,
		})),
	setSelectedMaterial: (material: MaterialData | null) =>
		set(state => ({
			...state,
			selectedMaterial: material,
		})),
	setDisplayMaterials: (layer: Layers) =>
		set(state => ({
			...state,
			displayMaterials: state.displayMaterials
				? { ...state.displayMaterials, ...layer }
				: { ...layer },
		})),
	setCurrentMaterials: (material: Layers) =>
		set(state => ({
			...state,
			currentMaterials: state.currentMaterials
				? { ...state.currentMaterials, ...material }
				: { ...material },
		})),
}));
