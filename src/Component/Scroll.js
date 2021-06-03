const Scroll=(props)=>{
	return (
		<div style={{ overflowx:'hidden',marginLeft:'10%',width:'80%',overflow:'scroll',height:'700px',border:'2px solid white'}}>
			{props.children}
		</div>
	);
}

export default Scroll;