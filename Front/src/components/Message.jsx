const Message = ({msg}) => {

	let {id} = JSON.parse(sessionStorage.getItem('user')),

	style = (msg.emisor === id) ? 'from-me' : 'to-me';

	return (

		<div className={`msg ${style}`}>

			<p>{msg.message}</p>

			<small>{msg.sendDate}</small>

		</div>

	);

}

export default Message;