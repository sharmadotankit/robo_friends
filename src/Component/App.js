import {Component} from 'react';
import CardArray from './CardArray';
import SearchField from './SearchField';
import Scroll from './Scroll'
import './App.css';

class App extends Component{
	constructor(){
		super();
		this.state={
			robots:[],
			searchField:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=> this.setState({robots:users}));
	}

	onSearchFieldChange=(event)=>{
		// console.log(event.target.value);
		this.setState({searchField:event.target.value})
	}


	render(){
		const filteredRobots = this.state.robots.filter(robot=>{
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if(this.state.robots.length===0){
			return <h1 className="tc pt7 f-subheadline lh-title">Loading....</h1>;
		}
		else{
			return(
			<div className="tc">
				<h1>Robofriends</h1>
				<SearchField searchChange={this.onSearchFieldChange}/>
				<br/>
				<Scroll>
				<CardArray robots={filteredRobots}/>
				</Scroll>
			</div>
		);
		}
		
	}

	
}

export default App;