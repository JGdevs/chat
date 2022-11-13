import {useState,useRef,useLayoutEffect} from 'react';
import ChangeImageModal from './ChangeImageModal';
import ChangeProfileModal from './ChangeProfileModal'

const MyProfile = () => {

	const user = JSON.parse(sessionStorage.getItem('user')),

	[editName,setEditName] = useState(false),

	[editInfo,setEditInfo] = useState(false),

	[image,setImage] = useState(null),

	imageRef = useRef(),

	changeImage = ({target}) => {

		const reader = new FileReader();

		reader.addEventListener('loadend',({target}) => setImage(target.result));

		reader.readAsDataURL(target.files[0]);

	}
 
	return (

		<>

			<section className="my-profile-container">

				<div className="profile-img-container mr-center w-fit">
					
					<div className="profile-img">

						<img ref={imageRef} src={(user.profileImage === '') ? require('../profile-img.png') : user.profileImage}/>

					</div>

					<label  htmlFor="img">
						
							<i className="bi-camera-fill change-img fs-2"></i>

					</label>

				</div> 

				<input className="none" id="img" type="file" onChange={changeImage}/>

			</section>

			<article className="my-profile-options">
				
				<div className="profile-field">

					<div className="first-field">
						
						<i className="bi-person-circle text-white fs-1 mr-lf"></i> 
					
						<p className=" mr-lf text-white fs--2">Nombre: {user.username}</p>

					</div>

					<i className="text-white bi-pen-fill mr-rg modify-icon" onClick={() => setEditName(true)}></i>
				
				</div>

				<div className="line-profile"></div>

				<div className="profile-field">

					<div className="first-field">
						
						<i className="text-white bi-exclamation-circle fs-1 mr-lf"></i> 
						
						<p className=" mr-lf text-white fs--2">Info: {user.info}</p>

					</div>

					<i className="text-white bi-pen-fill  mr-rg modify-icon" onClick={() => setEditInfo(true)}></i>
				
				</div>

				<div className="line-profile"></div>

				<div>

					<i className="text-white bi-telephone-fill fs-1 mr-lf"></i> 
						
					<h3 className="text-white w-fit mr-lf inline-b fs--2 mr-lf">Id: {user.id}</h3>	
				
				</div>

			</article>

			{image && <ChangeImageModal image={image} close={setImage} userImage={user.profileImage} imageRef={imageRef}/>}

			{editName && <ChangeProfileModal origin="nombre" currentValue={user.username} close={setEditName}/>}

			{editInfo && <ChangeProfileModal origin="info" currentValue={user.info} close={setEditInfo}/>}

		</>

	)

}

export default  MyProfile;