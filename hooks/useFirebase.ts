import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/config';

type CollectionType = 'points' | 'materials';

export const useFirebase = <T>(collectionName: CollectionType) => {
	const [data, setData] = useState<T[] | null>(null);

	useEffect(() => {
		(async () => {
			const docRef = query(collection(db, collectionName));
			const querySnapshot = await getDocs(docRef);
			const result = querySnapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),
				} as T;
			});

			setData(result);
		})();
	}, []);

	return { data };
};
