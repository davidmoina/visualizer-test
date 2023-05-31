export const MaterialCard = () => {
	return (
		<figure className='flex justify-center'>
			{/* <img src='' alt='' /> */}
			<div className='w-28 h-20 sm:h-24 md:h-28 bg-black rounded-l-md'></div>
			<figcaption className='w-36 h-20 sm:h-24 md:h-28 bg-stone-700 flex items-center justify-center rounded-r-md'>
				<span>Material</span>
			</figcaption>
		</figure>
	);
};
