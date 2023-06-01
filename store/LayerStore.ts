import { create } from 'zustand';
import { PointsData } from '../models/pointsData';
import { MaterialData } from '../models/materialData';

interface State {
	roomPicture: string;
	selectedPoint: PointsData | null;
	points: PointsData[] | null;
	materials: MaterialData[] | null;
	displayMaterials: MaterialData[] | null;
	selectedMaterial: MaterialData | null;
}

interface Actions {
	setSelectedPoint: (point: PointsData | null) => void;
	setPoints: (points: PointsData[]) => void;
	setMaterials: (materials: MaterialData[]) => void;
	setDisplayMaterials: (materials: MaterialData[] | null) => void;
	setSelectedMaterial: (material: MaterialData) => void;
}

export const useLayerStore = create<State & Actions>(set => ({
	roomPicture:
		'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554',
	selectedPoint: null,
	points: null,
	materials: null,
	displayMaterials: null,
	selectedMaterial: null,
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
	setDisplayMaterials: (materials: MaterialData[] | null) =>
		set(state => ({
			...state,
			displayMaterials: materials,
		})),
	setSelectedMaterial: (material: MaterialData | null) =>
		set(state => ({
			...state,
			selectedMaterial: material,
		})),
}));
