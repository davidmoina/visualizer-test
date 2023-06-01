import { useLayerStore } from '../../store/LayerStore';
import { MainPicture } from '../MainPicture/MainPicture';
import { MaterialCard } from '../MaterialCard/MaterialCard';

export const Layout = () => {
	const { displayMaterials, selectedPoint } = useLayerStore();
	console.log(displayMaterials);

	return (
		<main className='grid grid-cols-1 max-w-7xl grid-flow-row w-full p-2 gap-4 md:grid-cols-[auto_auto] justify-center'>
			<section className='w-ful'>
				<MainPicture />
			</section>
			<aside className='flex flex-col gap-4 justify-center'>
				<h2 className='text-center'>{selectedPoint?.name || ''}</h2>
				{displayMaterials?.map(material => (
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
