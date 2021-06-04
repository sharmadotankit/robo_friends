import {Component} from 'react';
import CardArray from '../Component/CardArray';
import SearchField from '../Component/SearchField';
import Scroll from '../Component/Scroll'
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
		const {robots,searchField} = this.state;
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (!robots.length)?
		<h1 className="tc pt7 f-subheadline lh-title">Loading....</h1>:
		(
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

export default App;