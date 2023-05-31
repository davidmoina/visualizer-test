import { Layout } from '../components/Layout/Layout';

export default function Home() {
	return (
		<div className='flex flex-col gap-4 items-center justify-center min-h-screen py-2 '>
			<h1 className='text-lg md:text-2xl font-bold'>
				ESTUDIO CACTUS VISUALIZER TEST
			</h1>
			<Layout />
		</div>
	);
}
