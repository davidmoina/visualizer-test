import { create } from 'zustand';
import { PointsData } from '../models/pointsData';

interface State {
	roomPicture: string;
	selectedPoint: PointsData | null;
}

interface Actions {
	setSelectedPoint: (point: PointsData) => void;
}

export const useLayerStore = create<State & Actions>(set => ({
	roomPicture:
		'https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554',
	selectedPoint: null,
	setSelectedPoint: (point: PointsData) =>
		set(state => ({
			...state,
			selectedPoint: point,
		})),
}));
