import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName, switchLoading } from '../../Redux/action';

export default function Search({ setSearch }) {
	const [nameRecipe, setNameRecipe] = useState('');
	const dispatch = useDispatch();

	function handleChange(e) {
		setNameRecipe(e.target.value);
	}

	function handleSubmit(e) {
		if (nameRecipe) {
			e.preventDefault();
			dispatch(switchLoading(true));
			dispatch(getRecipesByName(nameRecipe));
			setSearch(true);
			setNameRecipe('');
		}else{
			e.preventDefault();
			setSearch(false);
		}
	}

	return (
		<React.Fragment>
			<form onSubmit={handleSubmit}>
				<input
					className='input-search'
					type='text'
					placeholder='Search...'
					value={nameRecipe}
					onChange={handleChange}
				/>
				<button className='btn-search' type='submit'>Search</button>
			</form>
		</React.Fragment>
	);
}
