import {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(props){
		super();
		this.state={
			'hasError':false
		}
	}

	componentDidCatch(){
		this.setState({'hasError':true})
	}

	render(){
		const {hasError}=this.state;
		if(hasError){
			return <h1>"Oops... Something went wrong!!"</h1>
		}
		else{
			return this.props.children;
		}
		
	}

}

export default ErrorBoundry;