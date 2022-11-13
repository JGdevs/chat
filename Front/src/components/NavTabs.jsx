import {NavLink} from 'react-router-dom';

const NavTabs = () => {

	return (

		<nav className="tabs-menu">
	 
			<NavLink id="conversations" to="Conversations">Conversations</NavLink>

			<NavLink id="contacts" to="Contacts">Contacts</NavLink>

			<div className="tab-bg-hover"></div>

		</nav>

	)

}

export default NavTabs;