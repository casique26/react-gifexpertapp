import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
 
const GifExpertApp = () =>{
	

	const [categories, setCategories] = useState( ['Dragon Ball'] );

	// const handleAdd = () => {
	// 	// hunterXHunter
	// 	// setCategories( cats => [ ...cats, 'hunterXHunter'] );
	// 	setCategories( ['hunterXHunter', ...categories] );
	// }



	return (
		<>
			<h2>GifExpertApp</h2>
				<AddCategory setCategories={ setCategories } />	
			<hr />

			<ol>
				{
					categories.map( category => (
						/*<li key={ category }>{ category }</li>*/
						<GifGrid 
							key={ category }
							category={ category } 
						/>
					))
				}
			</ol>
		</>
	);
}

export default GifExpertApp


