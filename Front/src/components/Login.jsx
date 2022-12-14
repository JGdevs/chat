import {useState,useRef} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import {HelpHttp} from '../helpers/HelpHttp';
import Header from './Header';

const Login = ({onIdSubmit,origin,login}) => {

	const [error,setError] = useState(null),

	idRef = useRef(),

	passRef = useRef(),

	nav = useNavigate(),

	api = HelpHttp();

	function handlerSubmit (e) {

		e.preventDefault();

		if(origin === 'Login') {

			let url = `http://localhost:4000/login`,

			body = {

				username:idRef.current.value,
				password:passRef.current.value,

			},

			options = {

				body,
				headers:{"content-type":"application/json"}

			};

			api.post(url,options).then(res => {

				if(!res.err) {

					if(!res.user) {

						setError({msg:idRef.current.value});

						return false;

					}

					sessionStorage.setItem('user',JSON.stringify(res.user));

					onIdSubmit(res.user);

				}

				else console.log(res.err);

			});

		}

		else {

			let url = 'http://localhost:4000/register',

			body = {

				username:idRef.current.value,
				password:passRef.current.value,
				profileImage:''

			},

			options = {

				body,
				headers:{"content-type":"application/json"}

			};

			api.post(url,options).then(res => {

				if(!res.err) {

					window.alert('te has registrado exitosamente :D');

					nav('/');

				}

				else window.alert('lo sentimos ocurrio un error: ' + res.err);

			});
			
		}

	}

	return (

		<>

			<header className="text-white header">
				
				<h1>React Chat</h1>

			</header>

				<section className="container-form">
		
					<form className="form" onSubmit={handlerSubmit}>

						<div className="form-into-container">
							
							<div className="form-field">
								
								<input className="form-input"type="text" ref={idRef} placeholder="enter your username" required/>
								<label className="text-white">Username</label>

							</div>

							<div className="form-field">
								
								<input className="form-input"type="password" ref={passRef} placeholder="enter your password" required/>	
								<label className="text-white">Password</label>

							</div>

							<button className="submit" type="submit">{origin}</button>

							{

								origin === 'Login' && <p className="text-white text-center">No tienes cuenta? registrate<NavLink className="mr-lf text-main-color" to="/Register">Aqui</NavLink></p>

							}

							{error && <p className="text-white">el usuario <b className="text-red">{error.msg}</b> no existe</p>}

						</div>
						
					</form>	

				</section>

		</>

	)

}

export default Login;