import { GrRadialSelected } from 'react-icons/gr';
import { PointsData } from '../../models/pointsData';
// import { PointsData } from '../../models/pointsData';

interface Props {
	id: string;
	coordX: number;
	coordY: number;
	handleSelectedPoint: (point: PointsData) => void;
	point: PointsData;
}

export const PointToSelect = ({
	id,
	coordX,
	coordY,
	handleSelectedPoint,
	point,
}: Props) => {
	return (
		<span
			className='text-3xl lg:text-4xl hover:cursor-pointer'
			onClick={() => handleSelectedPoint(point)}
			key={id}
			style={{
				position: 'absolute',
				left: `${coordX}%`,
				top: `${coordY}%`,
			}}
		>
			<GrRadialSelected
				className='rounded-full p-1
                  cursor-pointer hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-90'
			/>
		</span>
	);
};
