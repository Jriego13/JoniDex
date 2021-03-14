import "./App.css";
import axios from "axios";
import React from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";

class MainPage extends React.Component {
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
			<div className="App">
				<header className="App-header">
					<h1>Welcome to the JoniDex!</h1>
					{this.state.pokemonImage !== null &&
						this.state.pokemonImage !== "NOTFOUND" && (
							// ! play around with dimensions to get sprites looking nice
							<img
								src={this.state.pokemonImage}
								className="App-logo"
								alt="logo"
							/>
						)}
					{this.state.pokemonImage === "NOTFOUND" && (
						// ! name shouldnt change as i type
						<p>
							Pokemon {this.state.pokemonName} cannot be found or doesn't exist
						</p>
					)}

					<p>{this.state.pokemonName}</p>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							// axios
							// 	.get(
							// 		`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`
							// 	)
							// 	.then((res) => {
							// 		this.setState({
							// 			pokemonImage: res.data["sprites"]["front_default"],
							// 		});
							// 	})
							// 	.catch((error) => {
							// 		this.setState({
							// 			pokemonImage: "NOTFOUND",
							// 		});
							// 		console.log(error);
							// 	});
							let location = useLocation();
							console.log("current path: ", location);
						}}
					>
						<label>
							Name of pokemon:
							<br />
							<input
								type="text"
								name="name"
								onChange={(text) => {
									// ! Pokemon names for the get request should be all lowercase, so go thru input and change if not all lowercase
									this.setState({
										pokemonName: text.target.value,
									});
								}}
							/>
						</label>
						<input type="submit" value="Submit" />
					</form>
				</header>
			</div>
		);
	}
}

export default MainPage;
