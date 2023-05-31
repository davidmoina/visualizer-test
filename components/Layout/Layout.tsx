import { ImageComponent } from '../Image/ImageComponent';
import { MaterialCard } from '../MaterialCard/MaterialCard';

export const Layout = () => {
	return (
		<main className='grid grid-cols-1 max-w-7xl grid-flow-row w-full p-2 gap-4 md:grid-cols-[auto_1fr]'>
			<section className='w-ful'>
				<ImageComponent />
			</section>
			<aside className='flex flex-col gap-4 justify-center'>
				<h2 className='text-center'>Materials</h2>
				<MaterialCard />
				<MaterialCard />
				<MaterialCard />
			</aside>
		</main>
	);
};
