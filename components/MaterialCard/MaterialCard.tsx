import { MaterialData } from '../../models/materialData';
import { useLayerStore } from '../../store/LayerStore';

interface Props {
	name: string;
	image: string;
	material: MaterialData;
}

export const MaterialCard = ({ name, image, material }: Props) => {
	const { displayMaterials, setDisplayMaterials } = useLayerStore();

	console.log(displayMaterials);

	const onSelectMaterial = () => {
		setDisplayMaterials(material.layers);
	};

	return (
		<figure
			onClick={onSelectMaterial}
			className='flex justify-center outline outline-4 outline-neutral-50/[.6] bg-neutral-50/[.6] rounded-md'
		>
			<img
				className='w-28 h-20 sm:h-24 md:h-28 rounded-md border-solid border-2 border-black/[.4]'
				src={image}
				alt={`material ${name}`}
			/>
			<figcaption className='text-xs w-36 h-20 sm:h-24 md:h-28 flex items-center justify-center rounded-r-md '>
				<span>{name}</span>
			</figcaption>
		</figure>
	);
};
