import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx"


//include images into your bundle
import picachu from "../../img/picachu.jpg"
import bulbasaur from "../../img/bulbasaur.jpg"
import charmander from "../../img/charmander.jpg"
import squirtle from "../../img/squirtle.jpg"

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="row justify-content-center">
				<div className="col-md-3">
					<Card
						image={picachu}
						title="Pikachu"
						text="Pikachu, the tiny and sparky Pokémon, is as mischievous as it is adorable. With its twitching nose and cheeks crackling with electricity, it's always ready to dole out electric hugs and make friends along the way. Get ready to be zapped by its charm!"
					/>
				</div>
				<div className="col-md-3">
					<Card
						image={bulbasaur}
						title="Bulbasaur"
						text="Bulbasaur, the leafy Pokémon with a bulb on its back, is a gentle and loyal companion. With its serene demeanor and budding potential, it's the perfect partner for any adventure. Ready to unleash its vine whip or emit a soothing aroma, Bulbasaur is always there to lend a helping leaf!"
					/>
				</div>
				<div className="col-md-3">
					<Card
						image={charmander}
						title="Charmander"
						text="Pokémon with a burning tail, is as courageous as it is adorable. With its passionate spirit and unwavering determination, it lights up the path for its trainer and companions. Ready to unleash its fiery breath and warm hearts, Charmander is a flame of friendship in any journey."
					/>
				</div>
				<div className="col-md-3">
					<Card
						image={squirtle}
						title="Squirtle"
						text="Pokemon Squirtle is as cool and collected as the waves of the ocean. With its mischievous grin and playful demeanor, it's always making a splash wherever it goes. Powerful water attacks and dive into adventures, Squirtle is a loyal friend you'd want by your side on any aquatic escapade"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
