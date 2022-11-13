const Profile = () => {

	const contact = JSON.parse(sessionStorage.getItem('contact')),

	bio = JSON.parse(sessionStorage.getItem(contact.id));

	return (

		<>

			<section className="profile-contact-container">
				
				<div className="profile-img-container mr-center w-fit">
					
					{

						(contact.profileImage === "") 

						? <i className="bi-person-circle text-white"></i> 

						: <div className="profile-img"><img src={contact.profileImage}/></div>

					}

				</div>

				<h3 className="text-white w-fit mr-center">{contact.name}</h3>

				<div className="w-fit mr-center">
					
					<p className="text-white text-center">id del contacto:</p>
					<p className="text-white text-center">{contact.id}</p>

				</div>

				<div className="options mr-center">

					<div className="option-icon">
							
						<i className="bi-chat-text text-white"></i>
						<span className="text-white">Mensaje</span>

					</div>

					<div className="option-icon">

						<i className="bi-camera-video-fill text-white"></i>
						<span className="text-white">Video</span>

					</div>

				</div>

			</section>

			<section className="profile-contact-bio">
				
				<p className="text-white fs--2">{bio.info}</p>

			</section>

			<section className="create-group-container">
				
				<div className="mr-lf-2 create-group-icon text-center">
					
					<i className="text-white bi-people-fill fs-1"></i>

				</div>

				<p className="text-white mr-lf fs--2">Crear grupo con {contact.name}</p>

			</section>

		</>	

	)

}

export default Profile;