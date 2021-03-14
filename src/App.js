import "./App.css";
import axios from "axios";
import React from "react";
import MainPage from "./MainPage";
import NewMainPage from "./NewMainPage";
import ResultPage from "./ResultPage";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	withRouter,
} from "react-router-dom";

class App extends React.Component {
	state = {
		pokemonName: "Search for a pokemon below!",
		pokemonImage: null,
	};
	componentDidMount() {
		console.log("hiiii");
		axios.get("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
			console.log(res.data);
		});
	}

	render() {
		return (
			//* anything wrapped in Router now has routing abilities
			<Router>
				<div className="App">
					{/* Switch just makes it so only one component gets rendered out */}
					<Switch>
						<Route path="/" exact component={NewMainPage} />
						{/* use exact when you want the exact route name*/}
						<Route path="/result" component={ResultPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
