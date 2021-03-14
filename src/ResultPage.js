import React from "react";
import axios from "axios";

class ResultPage extends React.Component {
	state = {
		pokemonName: null,
		pokemonImage: null,
		pokemonDescription: null,
	};

	componentDidMount() {
		console.log("testing");
		this.setState({
			pokemonName: this.props.location.state.pokemon,
		});

		axios
			.get(
				`https://pokeapi.co/api/v2/pokemon/${this.props.location.state.pokemon}`
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					pokemonImage: res.data["sprites"]["front_default"],
				});
			})
			.catch((error) => {
				this.setState({
					pokemonImage: "NOTFOUND",
				});
				console.log(error);
			});

		axios
			.get(
				`https://pokeapi.co/api/v2/pokemon-species/${this.props.location.state.pokemon}`
			)
			.then((res) => {
				console.log(res.data);
				this.setState({
					pokemonDescription: res.data["flavor_text_entries"][0]["flavor_text"],
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<h1>This is the results page</h1>
				{this.state.pokemonImage !== null && (
					<img src={this.state.pokemonImage} className="App-logo" alt="logo" />
				)}
				{this.state.pokemonDescription !== null && (
					<p>{this.state.pokemonDescription}</p>
				)}
			</div>
		);
	}
}

export default ResultPage;
