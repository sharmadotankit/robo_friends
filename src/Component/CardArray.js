import Card from './Card';

const CardArray = ({robots})=>{
	return(
		<div className="tc">
			{
				robots.map((robot,i)=>{
					return (
								<Card 
									key={i} 
									id={robots[i].id} 
									name={robots[i].name} 
									email={robots[i].email}
								/>
				);
				})
			}
		</div>
		);
}

export default CardArray;