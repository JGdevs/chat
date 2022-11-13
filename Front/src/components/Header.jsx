import {useState,useRef} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import useContacts from '../context/ContactsContext';
import CloseSessionModal from './CloseSessionModal';

const Header = ({user = false,setUser = false}) => {

	const [modal,setModal] = useState(false),

	location = useLocation(),

	menuRef = useRef(),

	nav = useNavigate(),

	{contacts,setContacts} = useContacts(),

	toMyProfile = () => nav(`/Profile/${user.username}/MyProfile`);

	function handlerMenu () {

		menuRef.current.classList.toggle('hidden');
		menuRef.current.classList.toggle('visible');

	}

	function closeSession () {

		sessionStorage.removeItem('user');

		nav('/');

		setModal(false);

		setUser(null);

	}

	function updateContactsInfo () {

		contacts.forEach(contact => sessionStorage.removeItem(contact.id))

		setContacts(prevContacts => [...prevContacts]);

	}

	return (

		<>

			<header className="header body-bg-dark text-white">
				
				<h1>React chat</h1>

				<div className="menu-container">

					{user && <i className="bi-three-dots-vertical" onClick={handlerMenu}></i>}

					<ul className="menu-hidden hidden" ref={menuRef} onClick={handlerMenu}>
						
						<label htmlFor="search">Buscar</label>
						<span onClick={toMyProfile}>Mi perfil</span>
						<label htmlFor="admin">Administrar</label>
						{(location.pathname.includes('Contacts')) && <span onClick={updateContactsInfo}>Actualizar</span>}
						<span onClick={() => setModal(true)}>Cerrar sesion</span>


					</ul>

				</div>

			</header>

			{modal && <CloseSessionModal closeSession={closeSession} close={setModal}/>}

		</>

	);

}

export default Header;