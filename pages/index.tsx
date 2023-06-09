import { Layout } from '../components/Layout/Layout';
import { useFirebase } from '../hooks/useFirebase';
import { useEffect } from 'react';
import { useLayerStore } from '../store/LayerStore';
import { PointsData } from '../models/pointsData';
import { MaterialData } from '../models/materialData';
import { Loader } from '../components/Loader/Loader';

export default function Home() {
	const { data: points, loading: loadingPoints } =
		useFirebase<PointsData>('points');
	const { data: materials, loading: loadingMaterials } =
		useFirebase<MaterialData>('materials');

	const { setMaterials, setPoints } = useLayerStore();

	useEffect(() => {
		if (points) {
			setPoints(points);
		}
	}, [points]);

	useEffect(() => {
		if (materials) {
			setMaterials(materials);
		}
	}, [materials]);

	return (
		<div className='flex flex-col gap-4 items-center justify-center min-h-screen py-2 bg-[#CDC3BD]'>
			{loadingPoints || loadingMaterials ? (
				<Loader />
			) : (
				<>
					<h1 className='text-lg md:text-2xl font-bold'>
						ESTUDIO CACTUS VISUALIZER TEST
					</h1>
					<Layout />
				</>
			)}
		</div>
	);
}
