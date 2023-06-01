import { useLayerStore } from '../../store/LayerStore';
import { MainPicture } from '../MainPicture/MainPicture';
import { MaterialCard } from '../MaterialCard/MaterialCard';
import { shallow } from 'zustand/shallow';

export const Layout = () => {
	const { materialsToSelect, selectedPoint } = useLayerStore(
		state => ({
			materialsToSelect: state.materialsToSelect,
			selectedPoint: state.selectedPoint,
		}),
		shallow
	);

	return (
		<main className='grid grid-cols-1 max-w-screen-2xl grid-flow-row w-full p-2 gap-4 md:grid-cols-[auto_auto] justify-center'>
			<section className='w-full'>
				<MainPicture />
			</section>
			<aside
				className={`flex flex-col gap-4 justify-center items-center w-full`}
			>
				<h2 className='text-center text-xl font-bold'>
					{selectedPoint?.name || ''}
				</h2>
				{materialsToSelect?.map(material => (
					<MaterialCard
						key={material.id}
						name={material.name}
						image={material.materialPreview}
						material={material}
					/>
				))}
			</aside>
		</main>
	);
};
