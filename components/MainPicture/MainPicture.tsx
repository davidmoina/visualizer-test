import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { PointsData } from '../../models/pointsData';
import { useLayerStore } from '../../store/LayerStore';
import { MaterialData } from '../../models/materialData';
import { PointToSelect } from '../PointToSelect/PointToSelect';
import { useState } from 'react';

export const MainPicture = () => {
	const [isSelected, setIsSelected] = useState(false);
	const { data } = useFirebase<PointsData>('points');
	const { data: materials } = useFirebase<MaterialData>('materials');
	console.log(data);
	console.log(materials);
	const { setSelectedPoint, selectedPoint } = useLayerStore();

	console.log(selectedPoint);

	const handleSelectedPoint = (point: PointsData) => {
		setSelectedPoint(point);
		setIsSelected(true);
	};

	const unselectPoint = () => {
		if (isSelected) {
			setIsSelected(false);
		}
	};

	const { roomPicture } = useLayerStore();

	return (
		<div className='relative' onClick={unselectPoint}>
			<img className='rounded-md' src={roomPicture} alt='room picture' />
			{data &&
				!isSelected &&
				data.map(point => (
					<PointToSelect
						handleSelectedPoint={handleSelectedPoint}
						key={point.id}
						id={point.id}
						coordX={point.coordX}
						coordY={point.coordY}
						point={point}
					/>
				))}
		</div>
	);
};
