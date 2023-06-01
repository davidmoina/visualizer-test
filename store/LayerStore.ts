import { create } from 'zustand';
import { PointsData } from '../models/pointsData';
import { Layers, MaterialData } from '../models/materialData';
import { Actions, State } from '../models/LayerStateModel';

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
