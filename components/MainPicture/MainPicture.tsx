import React from 'react';
import { useFirebase } from '../../hooks/useFirebase';
import { PointsData } from '../../models/pointsData';
import { GrRadialSelected } from 'react-icons/gr';

export const MainPicture = () => {
	const { data } = useFirebase<PointsData>('points');

	console.log(data);

	return (
		<div className='relative'>
			<img
				className='rounded-md'
				src='https://firebasestorage.googleapis.com/v0/b/visualizer-new-devs-test.appspot.com/o/base.jpeg?alt=media&token=358ccdea-3cf9-4751-ae48-4631e4700554'
				alt=''
			/>
			{data &&
				data.map(item => (
					<span
						className='text-3xl lg:text-4xl hover:cursor-pointer'
						key={item.id}
						style={{
							position: 'absolute',
							top: `${item.coordX}%`,
							left: `${item.coordY}%`,
						}}
					>
						<GrRadialSelected
							className='rounded-full p-1
                  cursor-pointer hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-90'
						/>
					</span>
				))}
		</div>
	);
};
