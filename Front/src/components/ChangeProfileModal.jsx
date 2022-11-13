import {useRef} from 'react';
import {HelpHttp} from '../helpers/HelpHttp';

const ChangeProfileModal = ({origin,currentValue,close}) => {

	const inputRef = useRef(),

	user = JSON.parse(sessionStorage.getItem('user')),

	api = HelpHttp(),

	handlerSubmit = () => {

		if(origin === 'nombre') changeName();

		else changeInfo();

	},

	changeName = () => {

		let url = `http://localhost:4000/modifyName/${user.id}/${inputRef.current.value}`

		api.post(url).then(res => {

			if(!res.err) {

				user.username = inputRef.current.value;

				sessionStorage.setItem('user',JSON.stringify(user));

				close(false);
				
			} 

			else console.log(res.err);

		})

	},

	changeInfo = () => {

		let url = `http://localhost:4000/modifyInfo/${user.id}/${inputRef.current.value}`;

		api.post(url).then(res => {

			if(!res.err) {

				user.info = inputRef.current.value;

				sessionStorage.setItem('user',JSON.stringify(user));

				close(false);

			}

		})
		
	}

	return (

		<div className="modal">
			
			<form className="" onSubmit={handlerSubmit}>

				<div className="title-form">
					
					<p className="text-white mr-lf">{`Escribe tu ${origin}`}</p>

					<i className="bi-x text-white" onClick={() => close(false)}></i>

				</div>
				
				<div className="">
					
					<input className="form-input" type="text" ref={inputRef} maxLength="30" defaultValue={currentValue} required/>
					<label className="text-white">{origin}</label>

				</div>

				<input className="submit mr-center" type="submit" value="Create"/>

			</form>

		</div>

	)

}

export default ChangeProfileModal;