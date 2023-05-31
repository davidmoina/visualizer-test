import { ImageComponent } from '../Image/ImageComponent';

export const Layout = () => {
	return (
		<main className='grid grid-cols-1 w-full p-2 gap-4'>
			<section className='w-full bg-slate-600'>
				<ImageComponent />
			</section>
			<aside className='h-20 bg-zinc-900'></aside>
		</main>
	);
};
