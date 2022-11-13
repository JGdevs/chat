import {useLayoutEffect,useRef,useId} from 'react';
import {HelpHttp} from '../helpers/HelpHttp';

const Contact = ({del,contact,setSelectContact,setBox}) => {

	const api = HelpHttp(),

	id = useId(),

	infoRef = useRef(),

	bio = JSON.parse(sessionStorage.getItem(contact.id)),

	handlerChange = ({target}) => {

		if(target.checked) setBox(prevBox => [...prevBox,contact.id]);

		else setBox(prevBox => prevBox.filter(box => box !== contact.id));

	}

	useLayoutEffect(() => {

		if (bio) infoRef.current.textContent = bio.info;

		else {

			api.get(contact.info).then(res => {

				if(!res.err) {

					infoRef.current.textContent = res.info;

					sessionStorage.setItem(res._id,JSON.stringify(res));

				}

				else console.log(res.err);

			});

		}


	},[bio]);

	return (

		<article className="contact-container side-padding" onClick={() => setSelectContact(contact)}>				

		 <div className="contact-img">

		 	<img src={contact.profileImage}/>

			 <label className="checkbox-container" htmlFor={id}>
						
					<input className="checkbox-input" id={id} type="checkbox" onChange={handlerChange}/>

					{del && 

						<div className="checkbox-checkbox">
					
							<i className="bi-check-lg"></i>

						</div>

					}

			</label>

		 </div>

		 <div className="conversation-info mr-lf">
		 
		 		<h3 className="text-white">{contact.name}</h3>

				<p className="text-white fs--3" ref={infoRef}></p>
	
		 </div>
		
		</article>

	);

}

export default Contact;