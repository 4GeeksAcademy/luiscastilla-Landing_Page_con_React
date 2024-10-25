import React from "react";
import Navbar from "./Navbar";
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
	const personajes = [
		{
			imagen: "https://t4.ftcdn.net/jpg/10/35/94/47/240_F_1035944709_I3ci9JAEdMo8HMJmAjeU1ULxgU8KAaTB.jpg",
			titulo: "La Tentación Perfecta",
			texto: "Una explosión de sabor entre panes suaves, jugosa carne y toppings irresistibles.La combinación perfecta para un antojo.",
		},
		{
			imagen: "https://t4.ftcdn.net/jpg/02/83/95/81/240_F_283958197_FlIsWRSSfLD5lK8zFFxodWVgtAexfykl.jpg",
			titulo: "la Naturaleza Cobra Vida",
			texto: "Un rincón de serenidad donde la naturaleza despliega su belleza. Colores vibrantes y vistas que invitan a la calma.",
		},
		{
			imagen: "https://img.freepik.com/foto-gratis/lindo-gatito-jugando-bosque-otonal-mirando-camara-bigotes-generados-inteligencia-artificial_25030-63152.jpg?uid=R168429708&ga=GA1.1.78504040.1723196185",
			titulo: "El Rey de la Curiosidad",
			texto: "Este pequeño explorador es la mezcla perfecta de elegancia y travesura. Dueño de su espacio, siempre listo para una nueva aventura.",
		},
		{
			imagen: "https://img.freepik.com/fotos-premium/pantalla-computadora-palabra-codigo-ella_1086760-65752.jpg?uid=R168429708&ga=GA1.1.78504040.1723196185&semt=ais_hybrid",
			titulo: "Construyendo el Futuro",
			texto: "Líneas de código que cobran vida en soluciones innovadoras. Aquí, cada fragmento construye el mundo digital del mañana.",
		},
	];

	return (
		<div className="grandote">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{personajes.map((personaje, index) => (
						<Card
							key={index}
							imagen={personaje.imagen}
							titulo={personaje.titulo}
							texto={personaje.texto}
						/>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
