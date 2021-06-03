const Card =({name,email,id})=>{
	return(
			<div className="dib-l bg-light-green tc shadow-1 w5 pa1 grow cyan system serif ma3">
				<img src={`https://robohash.org/${id}/200*200`} alt="robot" />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}


export default Card;