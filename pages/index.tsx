// import { useEffect } from 'react';
import { Layout } from '../components/Layout/Layout';
// import { collection, doc, getDocs, query } from 'firebase/firestore';
// import { db } from '../firebase/config';
import { useFirebase } from '../hooks/useFirebase';

export default function Home() {
	// useEffect(() => {
	// 	(async () => {
	// 		const docRef = query(collection(db, 'points'));
	// 		const querySnapshot = await getDocs(docRef);
	// 		querySnapshot.forEach(doc => {
	// 			// doc.data() is never undefined for query doc snapshots
	// 			console.log(doc.data());
	// 		});
	// 	})();

	// 	(async () => {
	// 		const docRef = query(collection(db, 'materials'));
	// 		const querySnapshot = await getDocs(docRef);
	// 		querySnapshot.forEach(doc => {
	// 			// doc.data() is never undefined for query doc snapshots
	// 			console.log(doc.data());
	// 		});
	// 	})();
	// }, []);

	const { data } = useFirebase('points');
	console.log(data);

	return (
		<div className='flex flex-col gap-4 items-center justify-center min-h-screen py-2 '>
			<h1 className='text-lg md:text-2xl font-bold'>
				ESTUDIO CACTUS VISUALIZER TEST
			</h1>
			<Layout />
		</div>
	);
}
