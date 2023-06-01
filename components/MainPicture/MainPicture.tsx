import React from 'react';
import { PointsData } from '../../models/pointsData';
import { useLayerStore } from '../../store/LayerStore';
import { PointToSelect } from '../PointToSelect/PointToSelect';
import { useState } from 'react';
import { shallow } from 'zustand/shallow';

export const MainPicture = () => {
	const [isSelected, setIsSelected] = useState(false);

	const {
		points,
		materials,
		roomPicture,
		displayMaterials,
		materialsToSelect,
	} = useLayerStore(
		state => ({
			points: state.points,
			materials: state.materials,
			roomPicture: state.roomPicture,
			displayMaterials: state.displayMaterials,
			materialsToSelect: state.materialsToSelect,
		}),
		shallow
	);

	const { setSelectedPoint, setMaterialsToSelect } = useLayerStore();

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
		<div className='relative rounded-md' onClick={unselectPoint}>
			<img
				className='rounded-md w-full max-w-5xl'
				src={roomPicture}
				alt='room picture'
			/>
			{materialsToSelect && (
				<p className='absolute -bottom-4 left-6 text-xs text-slate-700'>
					Click on the image to choose another section
				</p>
			)}
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
			{displayMaterials &&
				Object.entries(displayMaterials).map(([key, value]) => (
					<img
						key={key}
						className='absolute w-full max-w-5xl top-0 rounded-md'
						src={value}
						alt=''
					/>
				))}
		</div>
	);
};
