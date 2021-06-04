const Scroll=(props)=>{
	return (
		<div style={{ marginLeft:'10%',width:'80%',overflow:'scroll',overflowX:'hidden',height:'700px',border:'2px solid white'}}>
			{props.children}
		</div>
	);
}

export default Scroll;