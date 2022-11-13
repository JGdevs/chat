import {useRef} from 'react';
import useContacts from '../context/ContactsContext';
import {HelpHttp} from '../helpers/HelpHttp'

const NewContactModal = ({close}) => {

	const {id} = JSON.parse(sessionStorage.getItem('user')),

	api = HelpHttp(),

	{createContact} = useContacts();

	let idRef = useRef(),

	nameRef = useRef();

	function handlerSubmit (e) {

		e.preventDefault();

		let url = `http://localhost:4000/newContact/${id}`,

		profileImage = `http://localhost:4000/profileImage/${idRef.current.value}`,

		info = `http://localhost:4000/info/${idRef.current.value}`,

		body = {

			id:idRef.current.value,
			name:nameRef.current.value,
			profileImage,
			info

		},

		options = {

			body,
			headers:{"content-type":"application/json"}

		}

		api.post(url,options).then(res => {

			if(!res.err) {

				createContact(idRef.current.value,nameRef.current.value,profileImage,info);

				close(false);

			}

			else console.log(res.err);

		});

	}

	return (

		<div className="modal">
			
			<form className="contact-form" onSubmit={handlerSubmit}>

				<div className="title-form">
					
					<p className="text-white mr-lf">Create a new contact</p>

					<i className="bi-x text-white" onClick={() => close(false)}></i>

				</div>
				
				<div className="form-field">
					
					<input className="form-input" type="text" placeholder="id del usuario" ref={idRef} minLength="24" maxLength="24" pattern="[a-z0-9]+" required/>
					<label className="text-white">ID</label>

				</div>

				<div className="form-field">
					
					<input className="form-input" type="text" placeholder="nombre de contacto" ref={nameRef} required/>
					<label className="text-white">Name</label>

				</div>

				<input className="submit mr-center" type="submit" value="Create"/>

			</form>

		</div>

	);

}

export default NewContactModal;