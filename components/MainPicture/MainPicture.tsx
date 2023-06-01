import React from 'react';
import { PointsData } from '../../models/pointsData';
import { useLayerStore } from '../../store/LayerStore';
import { PointToSelect } from '../PointToSelect/PointToSelect';
import { useState } from 'react';

export const MainPicture = () => {
	const [isSelected, setIsSelected] = useState(false);
	const {
		setSelectedPoint,
		points,
		materials,
		roomPicture,
		setMaterialsToSelect,
	} = useLayerStore();

	const handleSelectedPoint = (point: PointsData) => {
		setSelectedPoint(point);
		const filteredMaterials = materials?.filter(item =>
			item.points.includes(point.id)
		);

		if (filteredMaterials) {
			setMaterialsToSelect(filteredMaterials);
		}

		setIsSelected(true);
	};

	const unselectPoint = () => {
		if (isSelected) {
			setIsSelected(false);
			setSelectedPoint(null);
			setMaterialsToSelect(null);
		}
	};

	return (
		<div className='relative' onClick={unselectPoint}>
			<img
				className='rounded-md w-full max-w-5xl'
				src={roomPicture}
				alt='room picture'
			/>
			{points &&
				!isSelected &&
				points.map(point => (
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
