import './SearchField.css';


const SearchField=({searchChange})=>{
	return(
		<div>
			<input 
			className="bg-lightest-blue pa3"
			type="search" 
			placeholder="Enter robot name"
			onChange={searchChange}
			/>
		</div>
		);
}

export default SearchField;