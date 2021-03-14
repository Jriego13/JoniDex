import "./App.css";
import { React, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function NewMainPage() {
	/*
    * When useEffect is used with [] in its callback , it functions the same as 
    * componentDidMount

    */
	useEffect(() => {
		console.log("yoyyo");
	}, []);

	const [pokemonName, setPokemonName] = useState("");
	const [pokemonImage, setPokemonImage] = useState(null);

	let location = useLocation();
	let history = useHistory();

	const redirectTo = () => {
		console.log("current path: ", location);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Welcome to the JoniDex!</h1>
				{pokemonImage !== null && pokemonImage !== "NOTFOUND" && (
					// ! play around with dimensions to get sprites looking nice
					<img src={this.state.pokemonImage} className="App-logo" alt="logo" />
				)}
				{pokemonImage === "NOTFOUND" && (
					// ! name shouldnt change as i type
					<p>Pokemon {pokemonName} cannot be found or doesn't exist</p>
				)}

				<p>{pokemonName}</p>
				<form
					onSubmit={(event) => {
						event.preventDefault();

						history.push({
							pathname: "/result",
							state: { pokemon: pokemonName },
						});
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
								setPokemonName(text.target.value);
							}}
						/>
					</label>
					<input type="submit" value="Submit" />
				</form>
			</header>
		</div>
	);
}

export default NewMainPage;
