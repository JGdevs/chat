import {useState,useRef} from 'react';
import {useNavigate} from 'react-router-dom';

const SearchForm = () => {

	const nav = useNavigate(),

	searchRef = useRef(),

	{username} = JSON.parse(sessionStorage.getItem('user')),

	handlerSubmit = (e) => {

		e.preventDefault();

		if (searchRef.current.value === '') return false;

		else nav(`/Profile/${username}/Search/${searchRef.current.value}`);
	}
	
	return (

		<form className="mr-center search-form" onClick={handlerSubmit}>
			
			<input type="text" ref={searchRef}/>
			<button><i className="bi-search text-white"></i></button>

		</form>

	)

}

export default SearchForm;