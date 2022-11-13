const DeleteCounter = ({box,handlerClick}) => {

	return (

		<div className="select-all">

			<span className="text-white text-center">has seleccionado {box}</span>

			<button className="select-all-btn text-white" data-state="none" onClick={handlerClick}>Seleccionar Todos</button>

		</div>	

	)

}

export default DeleteCounter;